"use client"

import { ReactNode, useEffect } from "react";
import style from "./style.module.css";
import { useFormState } from "react-dom";
import { AuthFormState } from "src/types/user";
import { useRouter } from "next/navigation";

type AuthFormProps = {
  title: string
  redirectUrl: string
  action: (state: AuthFormState, form: FormData) => Promise<AuthFormState>
  children: ReactNode
  warning: JSX.Element
}

export default function AuthForm({
  title,
  redirectUrl,
  action,
  children,
  warning
}: AuthFormProps) {
  const [state, formAction] = useFormState(action, {
    success: false,
    error: false,
    message: ""
  })
  const router = useRouter()

  useEffect(() => {
    if (!state.error && state.success) router.push(redirectUrl)
  }, [state.error, state.success, router, redirectUrl])
  
  return (
    <form className={style["form-container"]} action={formAction}>
      <h2 className={style["form-title"]}>{title}</h2>
      {children}
      {state.error && <span className={style["form-error"]}>{state.message}</span>}
      <button className={style["form-button"]}>{title}</button>
      {warning}
    </form>
  )
}