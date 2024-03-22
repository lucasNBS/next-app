import Image from "next/image";
import style from "src/styles/post.module.css";

export default function Post() {
  return (
    <main className={style["post-container"]}>
      <div className={style["post-image-container"]}>
        <Image
          src="https://fastly.picsum.photos/id/241/500/800.jpg?hmac=PiR6YaWnv6rq51-7W0--rNq1U7da5B-czZCSTUtEKSg"
          alt="A straight path in a mountain"
          fill
          loading="eager"
        />
      </div>
      <div className={style["post-content-container"]}>
        <h2 className={style["post-title"]}>Title</h2>
        <div className={style["post-data-container"]}>
          <Image
            src="https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE"
            alt="Forest"
            width={50}
            height={50}
            loading="eager"
          />
          <div className={style["post-data"]}>
            <span className={style["post-data-title"]}>Author</span>
            <span className={style["post-data-text"]}>Terry Jefferson</span>
          </div>
          <div className={style["post-data"]}>
            <span className={style["post-data-title"]}>Published</span>
            <span className={style["post-data-text"]}>01.01.2024</span>
          </div>
        </div>
        <p className={style["post-text"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, libero corporis saepe commodi animi esse quis autem aspernatur ducimus praesentium! Nulla beatae voluptas doloremque laudantium, aliquid dolore facilis totam velit ex, iusto sapiente saepe, provident dolor! Laboriosam cupiditate inventore qui doloremque velit minima, doloribus architecto! Consequuntur, incidunt eveniet in, obcaecati similique voluptatem commodi soluta iure, quod labore repudiandae ab? Minus totam vero voluptates sapiente ea, ab iste eligendi excepturi temporibus amet quam dignissimos, maiores laudantium molestiae, nemo assumenda praesentium culpa. Veritatis aspernatur sunt quidem dolores inventore quod error fugiat, dignissimos soluta blanditiis est recusandae vitae itaque perferendis voluptatum sit, odit sapiente quo alias illum libero labore quaerat. Labore cum quas itaque magnam nemo. Dolor placeat voluptatem nobis laborum, ad est ex repudiandae obcaecati doloribus illo animi laboriosam minima laudantium neque ea eveniet amet accusamus quam omnis quas vero magni totam quos. Dignissimos soluta amet velit cupiditate itaque doloremque fugiat ab neque vel aut sed maiores ut tempora optio, repellendus quisquam aliquid eveniet sit, alias blanditiis cumque tenetur. Rem sed repellendus officia vitae dolor tenetur ullam ex amet placeat? Hic libero neque omnis nisi earum quaerat quo eum cum, voluptate nesciunt officia eveniet deserunt quia. At in est animi ex delectus.
        </p>
      </div>
    </main>
  )
}