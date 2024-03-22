import style from "./style.module.css"

export default function LoginButton() {
  const isLoged = true

  return (
    <button className={style["login-button-container"]}>{isLoged ? "Logout" : "Login"}</button>
  )
}