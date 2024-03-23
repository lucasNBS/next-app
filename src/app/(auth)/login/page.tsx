import style from "src/styles/login.module.css";
import AuthForm from "src/components/organisms/AuthForm/AuthForm";
import Input from "src/components/atoms/Input/Input";
import { signIn } from "src/lib/auth";
import { AuthFormState } from "src/types/user";
import Warning from "src/components/organisms/AuthForm/Warning/Warning";

async function handleLogin(state: AuthFormState, form: FormData): Promise<AuthFormState> {
  "use server"

  const { email, password } = Object.fromEntries(form)

  if (String(email).trim() === "" || String(password).trim() === "") {
    return { success: false, error: true, message: "Invalid values" }
  }

  try {
    await signIn("credentials", { email, password })
    return { success: true, error: false, message: "" }
  } catch (err: any) {
    if (err.message.includes("CredentialsSignin")) {
      return { success: false, error: true, message: "Email or password wrong" }
    }

    throw err
  }
}

export default function Login() {
  return (
    <main className={style["login-container"]}>
      <AuthForm
        title="Login"
        action={handleLogin}
        redirectUrl="/"
        warning={<Warning text="Don't have an account?" link="register" />}
      >
        <Input type="email" name="email" placeholder="Email" styleType="auth" />
        <Input type="password" name="password" placeholder="Password" styleType="auth" />
      </AuthForm>
    </main>
  )
}
