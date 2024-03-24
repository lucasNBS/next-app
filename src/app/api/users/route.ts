import prisma from "src/lib/prisma";

export const dynamic = "force-dynamic"

export async function GET() {
  const users = await prisma.user.findMany()

  await new Promise(resolve => setTimeout(resolve, 2000))

  return Response.json(users)
}