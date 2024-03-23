"use server"

import { signOut } from "src/lib/auth"

export async function handleLogout() {
  await signOut()
}