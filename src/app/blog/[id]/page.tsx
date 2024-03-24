import style from "src/styles/post.module.css";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getPost } from "src/actions/posts";

type PostProps = {
  params: {
    id: string
  }
}

export default async function Post({ params }: PostProps) {
  const { id } = params

  const post = await getPost(Number(id))

  if (post == null) redirect("/blog")

  return (
    <main className={style["post-container"]}>
      <div className={style["post-image-container"]}>
        <Image
          src={post.img ? post.img : "/images/noimage.jpg"}
          alt="Post image"
          fill
          sizes="(max-width: 850px) 0vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>
      <div className={style["post-content-container"]}>
        <h2 className={style["post-title"]}>Title</h2>
        <div className={style["post-data-container"]}>
          <Image
            src={post.author.img ? post.author.img : "/images/noavatar.png"}
            alt="Author avatar image"
            width={50}
            height={50}
            priority={true}
          />
          <div className={style["post-data"]}>
            <span className={style["post-data-title"]}>Author</span>
            <span className={style["post-data-text"]}>{post.author.username}</span>
          </div>
          <div className={style["post-data"]}>
            <span className={style["post-data-title"]}>Published</span>
            <span className={style["post-data-text"]}>
              {new Date(post.createdAt).toDateString().slice(4)}
            </span>
          </div>
        </div>
        <p className={style["post-text"]}>{post.description}</p>
      </div>
    </main>
  )
}