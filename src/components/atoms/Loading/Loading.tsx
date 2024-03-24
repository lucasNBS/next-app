import style from "./style.module.css"

export default function Loading() {
  return (
    <div className={style["loading-container"]}>
      <div className={style["loading"]} />
    </div>
  )
}