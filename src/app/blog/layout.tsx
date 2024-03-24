import { ReactNode } from "react"

type LayoutProps = {
  login: ReactNode
  children: ReactNode
}

export default function Layout({ login, children }: LayoutProps) {
  return (
    <>
      {login}
      {children}
    </>
  )
}