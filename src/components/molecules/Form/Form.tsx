"use client"

import { ReactNode } from "react"
import style from "./style.module.css"
import { useFormState } from "react-dom"
import { FormState } from "src/types/form"
import Button from "src/components/atoms/Button/Button"

type FormProps = {
  children: ReactNode
  action: (state: FormState, form: FormData) => Promise<FormState>
  text: string
  type?: "delete"
}

export default function Form({ children, action, text, type }: FormProps) {
  const [state, formAction] = useFormState(action, {
    success: false,
    error: false,
    message: ""
  })

  return (
    <form className={style["form-container"]} action={formAction}>
      {children}
      {state.error && <span className={style["form-error"]}>{state.message}</span>}
      <Button text={text} type={type} />
    </form>
  )
}