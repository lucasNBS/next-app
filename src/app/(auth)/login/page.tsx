import style from "src/styles/login.module.css";
import AuthForm from "src/components/organisms/AuthForm/AuthForm";
import Input from "src/components/atoms/Input/Input";

export default function Login() {
  return (
    <main className={style["login-container"]}>
      <AuthForm title="Login">
        <Input type="email" placeholder="Email" styleType="auth" />
        <Input type="password" placeholder="Password" styleType="auth" />
      </AuthForm>
    </main>
  )
}