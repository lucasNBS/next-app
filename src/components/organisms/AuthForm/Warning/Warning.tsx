import Link from "next/link"
import style from "./style.module.css"

type WarningProps = {
  text: string
  link: string
}

export default function Warning({ text, link }: WarningProps) {
  return (
    <span className={style["warning"]}>
      {text} <Link href={`/${link}`} prefetch={false}>{link}</Link>
    </span>
  )
}