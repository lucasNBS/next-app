import Post from "src/components/molecules/Post/Post"
import style from "./style.module.css"
import { getPosts } from "src/actions/posts"

export default async function PostsGallery() {
  const posts = await getPosts()

  return (
    <main className={style["gallery-container"]}>
      {posts?.map((post, index) => {
        return (
          <Post
            image={post.img}
            date={post.createdAt}
            title={post.title}
            description={post.description}
            id={post.id}
            index={index}
            key={index}
          />
        )
      })}
    </main>
  )
}