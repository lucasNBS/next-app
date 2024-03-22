import Post from "src/components/molecules/Post/Post";
import style from "src/styles/blog.module.css";

const postsList = [
  {
    image: "https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE",
    date: "05.01.2024",
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut, optio minus ullam commodi assumenda?"
  },
  {
    image: "https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE",
    date: "05.01.2024",
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut, optio minus ullam commodi assumenda?"
  },
  {
    image: "https://fastly.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE",
    date: "05.01.2024",
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut, optio minus ullam commodi assumenda?"
  }
]

export default function Blog() {
  return (
    <main className={style["blog-container"]}>
      {postsList.map((post, index) => {
        return (
          <Post
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
            key={index}
          />
        )
      })}
    </main>
  )
}