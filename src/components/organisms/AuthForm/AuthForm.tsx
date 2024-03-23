import { ReactNode } from "react";
import style from "./style.module.css";

type AuthFormProps = {
  title: string
  children: ReactNode
}

export default function AuthForm({ title, children }: AuthFormProps) {
  return (
    <form className={style["form-container"]} action="">
      <h2 className={style["form-title"]}>{title}</h2>
      {children}
      <button className={style["form-button"]}>{title}</button>
    </form>
  )
}