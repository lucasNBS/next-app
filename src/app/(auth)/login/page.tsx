import style from "src/styles/login.module.css";
import LoginForm from "src/components/organisms/LoginForm/LoginForm";

export default function Login() {
  return (
    <main className={style["login-container"]}>
      <LoginForm />
    </main>
  )
}
