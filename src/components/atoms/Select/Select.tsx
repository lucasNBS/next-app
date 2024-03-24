import { ReactNode } from "react";
import style from "./style.module.css";

type SelectProps = {
  children: ReactNode
  name: string
}

export default function Select({ children, name }: SelectProps) {
  return (
    <select className={style["select-container"]} name={name}>
      {children}
    </select>
  )
}