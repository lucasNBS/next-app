"use client"

import { useFormStatus } from "react-dom"
import style from "./style.module.css"
import Loading from "../Loading/Loading"

type ButtonProps = {
  text: string
  click?: () => Promise<void>
  type?: "delete"
}

export default function Button({ text, type, click }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      className={`${style["button-container"]} ${type && style[type]}`}
      disabled={pending}
      onClick={async () => {
        if (click) await click()
      }}
    >
      {pending ? <Loading small /> : text}
    </button>
  )
}