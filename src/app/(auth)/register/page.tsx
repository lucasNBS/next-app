import style from "src/styles/register.module.css";
import Input from "src/components/atoms/Input/Input";
import AuthForm from "src/components/organisms/AuthForm/AuthForm";
import Warning from "src/components/organisms/AuthForm/Warning/Warning";
import { handleRegister } from "src/actions/auth";

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
