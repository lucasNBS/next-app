import style from "./style.module.css"

type DataBoxProps = {
  title: string
  text: string
}

export default function DataBox({ title, text }: DataBoxProps) {
  return (
    <div className={style["data-container"]}>
      <span className={style["data-title"]}>{title}</span>
      <span className={style["data-text"]}>{text}</span>
    </div>
  )
}