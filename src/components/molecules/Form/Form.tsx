"use client"

import { ReactNode } from "react"
import style from "./style.module.css"
import { useFormState } from "react-dom"
import { FormState } from "src/types/form"

type FormProps = {
  children: ReactNode
  action: (state: FormState, form: FormData) => Promise<FormState>
  text: string
}

export default function Form({ children, action, text }: FormProps) {
  const [state, formAction] = useFormState(action, {
    success: false,
    error: false,
    message: ""
  })

  return (
    <form className={style["form-container"]} action={formAction}>
      {children}
      {state.error && <span className={style["form-error"]}>{state.message}</span>}
      <button className={style["form-button"]}>{text}</button>
    </form>
  )
}