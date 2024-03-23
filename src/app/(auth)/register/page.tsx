import style from "src/styles/register.module.css";
import Input from "src/components/atoms/Input/Input";
import AuthForm from "src/components/organisms/AuthForm/AuthForm";
import prisma from "src/lib/prisma";
import bcrypt from "bcrypt";
import { AuthFormState } from "src/types/user";

async function handleRegister(state: AuthFormState, form: FormData): Promise<AuthFormState> {
  "use server"

  const { username, email, password } = Object.fromEntries(form)

  try {
    const user = await prisma.user.findUnique({ where: { email: String(email) } })

    if (user) return { success: false, error: true, message: "User already exists!" }
    
    const salt = await bcrypt.genSalt(5)
    const hashedPassword = await bcrypt.hash(String(password), salt)

    const userData = {
      username: String(username),
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
      <AuthForm title="Register" action={handleRegister} redirectUrl="/login">
        <Input type="text" name="username" placeholder="Username" styleType="auth" />
        <Input type="email" name="email" placeholder="Email" styleType="auth" />
        <Input type="password" name="password" placeholder="Password" styleType="auth" />
      </AuthForm>
    </main>
  )
}