"use client"

import { User } from "src/types/user"
import style from "./style.module.css"
import { handleLogout } from "./action"
import { useRouter } from "next/navigation"

type LoginButtonProps = {
  user: User
}

export default function LoginButton({ user }: LoginButtonProps) {
  const router = useRouter()
  
  return (
    <button
      className={style["login-button-container"]}
      onClick={() => {
        if (user) {
          handleLogout()
        } else {
          router.push("/login")
        }
      }}
    >
      {user ? "Logout" : "Login"}
    </button>
  )
}