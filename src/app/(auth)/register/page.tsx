import Input from "src/components/atoms/Input/Input";
import AuthForm from "src/components/organisms/AuthForm/AuthForm";
import style from "src/styles/register.module.css";

export default function Register() {
  return (
    <main className={style["register-container"]}>
      <AuthForm title="Register">
        <Input type="text" placeholder="Username" styleType="auth" />
        <Input type="email" placeholder="Email" styleType="auth" />
        <Input type="password" placeholder="Password" styleType="auth" />
      </AuthForm>
    </main>
  )
}