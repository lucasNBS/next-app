import prisma from "src/lib/prisma";
import Button from "../Button/Button";
import style from "./style.module.css";
import Image from "next/image";
import { revalidateTag } from "next/cache";

type RowItemProps = {
  title: string
  image: string | null
  type: "post" | "user"
  id: number
}

async function remove(type: "post" | "user", id: number) {
  "use server"

  if (type === "post") {
    await prisma.post.delete({ where: { id: Number(id) } })  
  }

  if (type === "user") {
    await prisma.user.delete({ where: { id: Number(id) } })  
    await prisma.post.deleteMany({ where: { authorId: Number(id) } })  
  }

  revalidateTag("get-posts")
}


export default function RowItem({ title, image, type, id }: RowItemProps) {
  const handleRemove = remove.bind(null, type, id)

  return (
    <div className={style["row-item-container"]}>
      <div className={style["row-item-data-container"]}>
        <Image
          className={`${style["image"]} ${style[type]}`}
          src={image ? image : "/images/noimage.jpg"}
          width={30}
          height={30}
          alt={type === "post" ? "Post cover image" : "User profile picture"}
        />
        <span className={style["row-item-title"]}>{title}</span>
      </div>
      <Button text="Delete" type="delete" click={handleRemove} />
    </div>
  )
}