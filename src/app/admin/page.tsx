import { handleRegister } from "src/actions/auth";
import { handleCreate } from "src/actions/posts";
import Input from "src/components/atoms/Input/Input";
import RowItem from "src/components/atoms/RowItem/RowItem";
import Select from "src/components/atoms/Select/Select";
import Textarea from "src/components/atoms/Textarea/Textarea";
import Form from "src/components/molecules/Form/Form";
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
        </div>
        <div className={style["section-form-container"]}>
          <h2 className={style["section-list-title"]}>Post Form</h2>
          <Form action={handleCreate} text="Add Post">
            <Input type="text" name="title" placeholder="Title" />
            <Input type="text" name="image" placeholder="Post Image URL" />
            <Textarea name="description" placeholder="Description" />
          </Form>
        </div>
      </section>

      <section className={style["section-container"]}>
        <div className={style["section-list-container"]}>
          <h2 className={style["section-list-title"]}>Users</h2>
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
        </div>
        <div className={style["section-form-container"]}>
          <h2 className={style["section-list-title"]}>Users Form</h2>
          <Form action={handleRegister} text="Add User">
            <Input type="text" name="username" placeholder="Username" />
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Password" />
            <Input type="text" name="image" placeholder="Profile Picture URL" />
            <Select name="admin">
              <option value="false">Is Admin?</option>
              <option value="false">False</option>
              <option value="true">True</option>
            </Select>
          </Form>
        </div>
      </section>
    </main>
  )
}