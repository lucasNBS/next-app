import Link from "next/link";
import style from "./style.module.css";

type LogoProps = {
  main?: boolean
}

export default function Logo({ main }: LogoProps) {
  return main ? (
    <Link href="/" prefetch={false}>
      <h1 className={style["logo-container"]}>Next /App</h1>
    </Link>
  ) : (
    <h2 className={style["logo-container-secondary"]}>Next /App</h2>
  )
}