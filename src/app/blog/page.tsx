import Post from "src/components/molecules/Post/Post";
import prisma from "src/lib/prisma";
import style from "src/styles/blog.module.css";

async function getPosts() {
  "use server"

  try {
    const posts = await prisma.post.findMany()
    return posts
  } catch (err) {
    console.log(err)
  }
}

export default async function Blog() {
  const posts = await getPosts()

  return (
    <main className={style["blog-container"]}>
      {posts?.map((post, index) => {
        return (
          <Post
            image={post.img}
            date={post.createdAt}
            title={post.title}
            description={post.description}
            id={post.id}
            key={index}
          />
        )
      })}
    </main>
  )
}