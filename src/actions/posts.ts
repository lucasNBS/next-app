"use server"

import { revalidateTag } from "next/cache";
import { auth } from "src/lib/auth";
import prisma from "src/lib/prisma";
import { FormState } from "src/types/form";
import { User } from "src/types/user";

export async function handleCreate(state: FormState, form: FormData): Promise<FormState> {
  const { title, image, description } = Object.fromEntries(form)

  if (String(title).trim() === "" || String(description).trim() === "") {
    return { success: false, error: true, message: "Invalid values" }
  }
  
  try {
    const session = await auth()
    const user = session?.user as User

    if (!user) return { success: false, error: true, message: "You must be logged in to do this" }

    const postData = {
      title: String(title),
      description: String(description),
      img: String(image),
      authorId: user.id
    }

    await prisma.post.create({ data: postData })
    revalidateTag("get-posts")
    return { success: true, error: false, message: "" }
  } catch (err) {
    console.log(err)
    return { success: false, error: true, message: "Something went wrong" }
  }
}


export async function getPosts() {
  const posts = await fetch("http://localhost:3000/api/posts", {
    next: { tags: ["get-posts"] }
  }).then(res => res.json())

  return posts
}