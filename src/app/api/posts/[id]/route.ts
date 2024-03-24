import prisma from "src/lib/prisma";

export const dynamic = "force-dynamic"

type RouteProps = {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params }: RouteProps) {
  const id = params.id
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true }
  })

  return Response.json(post)
}