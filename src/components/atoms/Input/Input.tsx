import style from "./style.module.css"

type InputProps = {
  type: string
  placeholder: string
  styleType?: "auth"
}

export default function Input({ type, placeholder, styleType }: InputProps) {
  return (
    <input
      className={`${style["form-input"]} ${styleType && style[styleType]}`}
      type={type}
      placeholder={placeholder}
    />
  )
}