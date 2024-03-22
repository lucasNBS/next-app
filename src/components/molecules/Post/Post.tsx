import style from "./style.module.css"
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  image: string | null
  date: Date
  title: string
  description: string
  id: number
}

export default function Post({ image, date, title, description, id }: PostProps) {
  return (
    <article className={style["card-container"]}>
      <div className={style["card-image-container"]}>
        <Image
          src={image ? image : "/images/noimage.jpg"}
          alt="Forest"
          fill
        />
        <span className={style["card-date"]}>{date.toDateString().slice(4)}</span>
      </div>
      <h3 className={style["card-title"]}>{title}</h3>
      <p className={style["card-description"]}>{description}</p>
      <Link className={style["card-link"]} href={`/blog/${id}`} prefetch={false}>Read More</Link>
    </article>
  )
}