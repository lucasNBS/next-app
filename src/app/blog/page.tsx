import Image from "next/image";
import Link from "next/link";
import style from "src/styles/blog.module.css";

export default function Blog() {
  return (
    <main className={style["blog-container"]}>
      <article className={style["card-container"]}>
        <div className={style["card-image-container"]}>
          <Image
            src="https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE"
            alt="Forest"
            fill
          />
          <span className={style["card-date"]}>05.01.2024</span>
        </div>
        <h3 className={style["card-title"]}>Title</h3>
        <p className={style["card-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat. Temporibus dolores quod aliquam, quia eius inventore in eos necessitatibus pariatur magnam fugit ad! Natus, labore. Enim suscipit eligendi illo?
        </p>
        <Link className={style["card-link"]} href="/">Read More</Link>
      </article>

      <article className={style["card-container"]}>
        <div className={style["card-image-container"]}>
          <Image
            src="https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE"
            alt="Forest"
            fill
          />
          <span className={style["card-date"]}>05.01.2024</span>
        </div>
        <h3 className={style["card-title"]}>Title</h3>
        <p className={style["card-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat. Temporibus dolores quod aliquam, quia eius inventore in eos necessitatibus pariatur magnam fugit ad! Natus, labore. Enim suscipit eligendi illo?
        </p>
        <Link className={style["card-link"]} href="/">Read More</Link>
      </article>

      <article className={style["card-container"]}>
        <div className={style["card-image-container"]}>
          <Image
            src="https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE"
            alt="Forest"
            fill
          />
          <span className={style["card-date"]}>05.01.2024</span>
        </div>
        <h3 className={style["card-title"]}>Title</h3>
        <p className={style["card-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat. Temporibus dolores quod aliquam, quia eius inventore in eos necessitatibus pariatur magnam fugit ad! Natus, labore. Enim suscipit eligendi illo?
        </p>
        <Link className={style["card-link"]} href="/">Read More</Link>
      </article>

      <article className={style["card-container"]}>
        <div className={style["card-image-container"]}>
          <Image
            src="https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE"
            alt="Forest"
            fill
          />
          <span className={style["card-date"]}>05.01.2024</span>
        </div>
        <h3 className={style["card-title"]}>Title</h3>
        <p className={style["card-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat. Temporibus dolores quod aliquam, quia eius inventore in eos necessitatibus pariatur magnam fugit ad! Natus, labore. Enim suscipit eligendi illo?
        </p>
        <Link className={style["card-link"]} href="/">Read More</Link>
      </article>

      <article className={style["card-container"]}>
        <div className={style["card-image-container"]}>
          <Image
            src="https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE"
            alt="Forest"
            fill
          />
          <span className={style["card-date"]}>05.01.2024</span>
        </div>
        <h3 className={style["card-title"]}>Title</h3>
        <p className={style["card-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat. Temporibus dolores quod aliquam, quia eius inventore in eos necessitatibus pariatur magnam fugit ad! Natus, labore. Enim suscipit eligendi illo?
        </p>
        <Link className={style["card-link"]} href="/">Read More</Link>
      </article>
    </main>
  )
}