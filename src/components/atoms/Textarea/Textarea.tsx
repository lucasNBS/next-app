import style from "./style.module.css"

type TextareaProps = {
  name: string
  placeholder: string
}

export default function Textarea({ name, placeholder }: TextareaProps) {
  return (
    <textarea className={style["textarea"]} name={name} placeholder={placeholder}></textarea>
  )
}