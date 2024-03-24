import style from "./style.module.css"

type LoadingProps = {
  small?: boolean
}

export default function Loading({ small }: LoadingProps) {
  return (
    <div className={style["loading-container"]}>
      <div className={`${style["loading"]} ${small && style["small"]}`} />
    </div>
  )
}