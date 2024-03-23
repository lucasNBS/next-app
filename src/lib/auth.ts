import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

async function login(credentials: Partial<Record<string, unknown>>) {
  try {
    const user = await prisma.user.findUnique({ where: { email: String(credentials.email) } })

    if (!user) throw new Error("No user found")

    const isPasswordCorrect = await bcrypt.compare(String(credentials.password), user.password)

    if (!isPasswordCorrect) throw new Error("Incorrect password")

    return user
  } catch (err) {
    console.log(err)
    throw new Error("Something went wrong")
  }
}


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials): Promise<any> {
        try {
          const user = await login(credentials)
          return user
        } catch (err) {
          console.log(err)
          return null
        }
      }
    })
  ],
  callbacks: {
    ...authConfig.callbacks
  }
})