"use client"

import style from "./style.module.css"

type ButtonProps = {
  click: () => Promise<void>
}

export default function Button({ click }: ButtonProps) {
  return (
    <button className={style["button-container"]} onClick={async () => await click()}>Delete</button>
  )
}