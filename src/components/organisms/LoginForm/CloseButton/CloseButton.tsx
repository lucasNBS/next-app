"use client"

import { useRouter } from "next/navigation";
import style from "./style.module.css";

export default function CloseButton() {
  const router = useRouter()

  return (
    <span className={style["close-button"]} onClick={() => router.back()}>&times;</span>
  )
}