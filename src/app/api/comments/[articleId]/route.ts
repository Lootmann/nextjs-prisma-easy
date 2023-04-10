//
// api/comments/[articleId]/route.ts
//
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { articleId: number } }
) {
  const comments = await prisma.comment.findMany({
    where: {
      articleId: Number(params.articleId),
    },
    include: {
      commentedBy: true,
    },
  });

  return NextResponse.json({ comments });
}
