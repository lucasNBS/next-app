"use client"

import LoginButton from "src/components/atoms/LoginButton/LoginButton";
import NavbarItem from "./NavbarItem/NavbarItem";
import style from "./style.module.css";
import { defaultLinks } from "./array";
import { useState } from "react";
import { User } from "src/types/user";

type NavbarProps = {
  user: User
}

export default function Navbar({ user }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className={style["navbar-container"]}>
        {defaultLinks.map((link, index) => {
          return (
            <NavbarItem text={link.text} path={link.path} key={index} />
          )
        })}
        {user?.isAdmin && <NavbarItem text="Admin" path="/admin" />}
        <LoginButton user={user} />
      </nav>
      <button
        className={style["aside-button"]}
        onClick={() => setIsMobileMenuOpen(pre => !pre)}
      >
        Menu
      </button>
      {isMobileMenuOpen && (
        <aside className={style["aside-container"]}>
          <nav className={`${style["navbar-container"]} ${style["mobile"]}`}>
            {defaultLinks.map((link, index) => {
              return (
                <NavbarItem text={link.text} path={link.path} key={index} />
              )
            })}
            {user?.isAdmin && <NavbarItem text="Admin" path="/admin" />}
            <LoginButton user={user} />
          </nav>
        </aside>
      )}
    </>
  )
}