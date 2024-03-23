import style from "src/styles/register.module.css";
import Input from "src/components/atoms/Input/Input";
import AuthForm from "src/components/organisms/AuthForm/AuthForm";
import prisma from "src/lib/prisma";
import bcrypt from "bcrypt";
import { AuthFormState } from "src/types/user";
import Warning from "src/components/organisms/AuthForm/Warning/Warning";

async function handleRegister(state: AuthFormState, form: FormData): Promise<AuthFormState> {
  "use server"

  const { username, image, email, password } = Object.fromEntries(form)

  if (
    String(username).trim() === ""||
    String(email).trim() === "" ||
    String(password).trim() === ""
  ) {
    return { success: false, error: true, message: "Invalid values" }
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: String(email) } })

    if (user) return { success: false, error: true, message: "User already exists!" }
    
    const salt = await bcrypt.genSalt(5)
    const hashedPassword = await bcrypt.hash(String(password), salt)

    const userData = {
      username: String(username),
      img: String(image),
      email: String(email),
      password: hashedPassword
    }

    await prisma.user.create({ data: userData })
    return { success: true, error: false, message: "" }
  } catch (err) {
    console.log(err)
    return { success: false, error: true, message: "Something went wrong" }
  }
}

export default function Register() {
  return (
    <main className={style["register-container"]}>
      <AuthForm
        title="Register"
        action={handleRegister}
        redirectUrl="/login"
        warning={<Warning text="Already has an account?" link="login" />}
      >
        <Input type="text" name="username" placeholder="Username" styleType="auth" />
        <Input type="text" name="image" placeholder="Profile Picture URL" styleType="auth" />
        <Input type="email" name="email" placeholder="Email" styleType="auth" />
        <Input type="password" name="password" placeholder="Password" styleType="auth" />
      </AuthForm>
    </main>
  )
}
