import style from "./style.module.css"

type InputProps = {
  type: string
  placeholder: string
}

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input className={style["form-input"]} type={type} placeholder={placeholder} />
  )
}