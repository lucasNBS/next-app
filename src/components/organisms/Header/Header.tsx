import style from "./style.module.css";
import Logo from "src/components/atoms/Logo/Logo";
import Navbar from "src/components/molecules/Navbar/Navbar";
import { auth } from "src/lib/auth";
import { User } from "src/types/user";

export default async function Header() {
  const session = await auth()

  return (
    <header className={style["header-container"]}>
      <Logo main />
      <Navbar user={session?.user as User} />
    </header>
  )
}