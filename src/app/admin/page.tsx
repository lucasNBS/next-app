import Input from "src/components/atoms/Input/Input";
import RowItem from "src/components/atoms/RowItem/RowItem";
import Textarea from "src/components/atoms/Textarea/Textarea";
import prisma from "src/lib/prisma";
import style from "src/styles/admin.module.css";

export default async function Admin() {
  const posts = await prisma.post.findMany()
  const users = await prisma.user.findMany()
  
  return (
    <main className={style["admin-container"]}>
      <section className={style["section-container"]}>
        <div className={style["section-list-container"]}>
          <h2 className={style["section-list-title"]}>Post</h2>
          <div className={style["section-list"]}>
            {posts.map((post, index) => {
              return <RowItem type="post" image={post.img} title={post.title} key={index} />
            })}
          </div>
        </div>
        <div className={style["section-form-container"]}>
          <h2 className={style["section-list-title"]}>Post Form</h2>
          <form className={style["form-container"]} action="">
            <Input type="text" name="title" placeholder="Title" />
            <Input type="text" name="image" placeholder="Post Image URL" />
            <Textarea name="description" placeholder="Description" />
            <button className={style["form-button"]}>Add Post</button>
          </form>
        </div>
      </section>

      <section className={style["section-container"]}>
        <div className={style["section-list-container"]}>
          <h2 className={style["section-list-title"]}>Users</h2>
          <div className={style["section-list"]}>
            {users.map((user, index) => {
              return <RowItem type="user" image={user.img} title={user.username} key={index} />
            })}
          </div>
        </div>
        <div className={style["section-form-container"]}>
          <h2 className={style["section-list-title"]}>Post Form</h2>
          <form className={style["form-container"]} action="">
            <Input type="text" name="username" placeholder="Username" />
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Password" />
            <Input type="text" name="image" placeholder="Profile Picture URL" />
            <button className={style["form-button"]}>Add User</button>
          </form>
        </div>
      </section>
    </main>
  )
}