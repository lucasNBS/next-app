import style from "src/styles/login.module.css";
import LoginForm from "src/components/organisms/LoginForm/LoginForm";
import Background from "src/components/atoms/Background/Background";

export default function Login() {
  return (
    <>
      <section className={style["modal"]}>
        <LoginForm canClose />
      </section>
      <Background />
    </>
  )
}