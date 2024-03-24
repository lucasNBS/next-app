import style from "./style.module.css"
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  image: string | null
  date: Date
  title: string
  description: string
  id: number
  index: number
}

export default function Post({ image, date, title, description, id, index }: PostProps) {
  return (
    <article className={style["card-container"]}>
      <div className={style["card-image-container"]}>
        <Image
          src={image ? image : "/images/noimage.jpg"}
          alt="Forest"
          fill
          sizes="(max-width: 750px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index <= 3 ? true : false}
        />
        <span className={style["card-date"]}>{new Date(date).toDateString().slice(4)}</span>
      </div>
      <h3 className={style["card-title"]}>{title}</h3>
      <p className={style["card-description"]}>{description.slice(0, 50)}</p>
      <Link className={style["card-link"]} href={`/blog/${id}`} prefetch={false}>Read More</Link>
    </article>
  )
}