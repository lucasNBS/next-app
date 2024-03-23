import style from "./style.module.css";
import Image from "next/image";

type RowItemProps = {
  title: string
  image: string | null
  type: "post" | "user"
}

export default function RowItem({ title, image, type }: RowItemProps) {
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
      <button className={style["row-item-delete"]}>Delete</button>
    </div>
  )
}