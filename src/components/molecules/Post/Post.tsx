import style from "./style.module.css"
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  image: string
  date: string
  title: string
  description: string
}

export default function Post({ image, date, title, description }: PostProps) {
  return (
    <article className={style["card-container"]}>
      <div className={style["card-image-container"]}>
        <Image
          src={image}
          alt="Forest"
          fill
        />
        <span className={style["card-date"]}>{date}</span>
      </div>
      <h3 className={style["card-title"]}>{title}</h3>
      <p className={style["card-description"]}>{description}</p>
      <Link className={style["card-link"]} href="/">Read More</Link>
    </article>
  )
}