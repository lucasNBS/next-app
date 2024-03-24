"use server"

import prisma from "src/lib/prisma"
import { FormState } from "src/types/form"
import bcrypt from "bcrypt";
import { revalidateTag } from "next/cache";

export async function handleRegister(state: FormState, form: FormData): Promise<FormState> {
  const { username, image, email, password, admin } = Object.fromEntries(form)

  if (
    String(username).trim() === ""||
    String(email).trim() === "" ||
    String(password).trim() === ""
  ) {
    return { success: false, error: true, message: "Invalid values" }
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: String(email) } })

    if (user) return { success: false, error: true, message: "User already exists!" }
    
    const salt = await bcrypt.genSalt(5)
    const hashedPassword = await bcrypt.hash(String(password), salt)

    const userData = {
      username: String(username),
      img: String(image),
      email: String(email),
      password: hashedPassword,
      isAdmin: Boolean(admin)
    }

    await prisma.user.create({ data: userData })
    revalidateTag("get-users")
    return { success: true, error: false, message: "" }
  } catch (err) {
    console.log(err)
    return { success: false, error: true, message: "Something went wrong" }
  }
}