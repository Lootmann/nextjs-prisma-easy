//
// articles/route.ts - https://beta.nextjs.org/docs/routing/route-handlers
//
import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../lib/prisma";

export async function GET(req: NextRequest) {
  const articles = await prisma.article.findMany();
  return NextResponse.json({ articles });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ msg: "post" });
}

export async function PUT(req: NextRequest) {
  return NextResponse.json({ msg: "put" });
}

export async function PATCH(req: NextRequest) {
  return NextResponse.json({ msg: "patch" });
}

export async function DELETE(req: NextRequest) {
  return NextResponse.json({ msg: "delete" });
}
