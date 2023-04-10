//
// articles/route.ts - https://beta.nextjs.org/docs/routing/route-handlers
//
import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../lib/prisma";

function slugify(title: string): string {
  let res: string = "";
  let hyphen: boolean = false;

  for (const ch of title.toLowerCase()) {
    if (("a" <= ch && ch <= "z") || ("0" <= ch && ch <= "9")) {
      hyphen = true;
      res += ch;
    } else if (ch === " " && hyphen) {
      hyphen = false;
      res += "-";
    }
  }

  if (res[0] === "-") {
    res = res.slice(1);
  }

  if (res[res.length - 1] === "-") {
    res = res.slice(0, res.length - 1);
  }

  return res === "" ? "NoTitle" : res;
}

export async function GET(req: NextRequest) {
  const articles = await prisma.article.findMany();
  return NextResponse.json({ articles });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, content } = body;

  const currentDate = new Date();
  const article = await prisma.article.create({
    data: {
      title: title,
      content: content,
      createdAt: currentDate,
      updatedAt: currentDate,
      slug: slugify(title),
      // TODO: get logged-in user
      authorId: 1,
    },
  });

  return NextResponse.json({ article });
}
