import style from "./style.module.css";
import RowItem from "src/components/atoms/RowItem/RowItem";

async function getUsers() {
  "use server"
  const posts = await fetch("http://localhost:3000/api/users", {
    next: { tags: ["get-users"] }
  }).then(res => res.json())

  return posts
}

export default async function AdminUsers() {
  const users = await getUsers()

  return (
    <div className={style["section-list"]}>
      {users.map((user, index) => {
        return (
          <RowItem
            type="user"
            image={user.img}
            title={user.username}
            id={user.id}
            key={index}
          />
        )
      })}
    </div>
  )
}