import style from "./style.module.css"

type InputProps = {
  type: string
  name: string
  placeholder: string
  styleType?: "auth"
}

export default function Input({ type, name, placeholder, styleType }: InputProps) {
  return (
    <input
      className={`${style["form-input"]} ${styleType && style[styleType]}`}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}