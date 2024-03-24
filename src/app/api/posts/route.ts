import prisma from "src/lib/prisma";

export const dynamic = "force-dynamic"

export async function GET() {
  const posts = await prisma.post.findMany()

  await new Promise(resolve => setTimeout(resolve, 5000))

  return Response.json(posts)
}