import { getPosts } from "src/actions/posts";
import style from "./style.module.css";
import RowItem from "src/components/atoms/RowItem/RowItem";

export default async function AdminPosts() {
  const posts = await getPosts()

  return (
    <div className={style["section-list"]}>
      {posts.map((post, index) => {
        return (
          <RowItem
            type="post"
            image={post.img}
            title={post.title}
            id={post.id}
            key={index}
          />
        )
      })}
    </div>
  )
}