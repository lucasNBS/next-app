import Input from "src/components/atoms/Input/Input";
import AuthForm from "../AuthForm/AuthForm";
import Warning from "../AuthForm/Warning/Warning";
import { handleLogin } from "src/actions/auth";
import CloseButton from "./CloseButton/CloseButton";

type LoginFormProps = {
  canClose?: boolean
}

export default function LoginForm({ canClose }: LoginFormProps) {
  return (
    <AuthForm
      title="Login"
      action={handleLogin}
      redirectUrl="/"
      warning={<Warning text="Don't have an account?" link="register" />}
    >
      {canClose && <CloseButton />}
      <Input type="email" name="email" placeholder="Email" styleType="auth" />
      <Input type="password" name="password" placeholder="Password" styleType="auth" />
    </AuthForm>
  )
}