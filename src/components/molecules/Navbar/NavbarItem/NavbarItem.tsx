"use client"

import { usePathname } from "next/navigation";
import style from "./style.module.css"
import Link from "next/link";

type NavbarItemProps = {
  text: string
  path: string
}

export default function NavbarItem({ text, path }: NavbarItemProps) {
  const pathname = usePathname()
  
  return (
    <Link
      className={`${style["navbar-item-container"]} ${pathname === path && style.active}`}
      href={path}
      prefetch={false}
    >
      {text}
    </Link>
  )
}