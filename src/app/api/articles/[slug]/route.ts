// api/articles/[slug]
// get an article by slug
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// TODO: slug doesn't unique field !
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  if (!params.slug) {
    return NextResponse.json(
      { msg: `Query Parms 'slug' is missing` },
      { status: 404 }
    );
  }

  const article = await prisma.article.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      author: true,
    },
  });

  if (article === null) {
    return NextResponse.json(
      { msg: `Article ${params.slug} is Not Found` },
      { status: 404 }
    );
  }

  return NextResponse.json({ article }, { status: 200 });
}
