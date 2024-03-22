import style from "./style.module.css";
import Logo from "src/components/atoms/Logo/Logo";
import Navbar from "src/components/molecules/Navbar/Navbar";

export default function Header() {
  return (
    <header className={style["header-container"]}>
      <Logo />
      <Navbar />
    </header>
  )
}