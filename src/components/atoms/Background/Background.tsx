"use client"

import { useRouter } from "next/navigation"
import style from "./style.module.css"

export default function Background() {
  const router = useRouter()
  
  return (
    <div className={style["background"]} onClick={() => router.back()}></div>
  )
}