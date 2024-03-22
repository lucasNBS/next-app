import Logo from "src/components/atoms/Logo/Logo"
import style from "./style.module.css"

export default function Footer() {
  return (
    <footer className={style["footer-container"]}>
      <Logo />
      <span className={style["footer-text"]}>
        Next /App creative thoughts agency &copy; All rights reserved
      </span>
    </footer>
  )
}