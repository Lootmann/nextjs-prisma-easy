//
// articles/route.ts - https://beta.nextjs.org/docs/routing/route-handlers
//
import { getAllArticles } from "@/apis/articles";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const articles = await getAllArticles();
  return NextResponse.json({ articles: articles });
}

export async function POST(req: Request) {
  return NextResponse.json({ msg: "post" });
}

export async function PUT(req: Request) {
  return NextResponse.json({ msg: "put" });
}

export async function PATCH(req: Request) {
  return NextResponse.json({ msg: "patch" });
}

export async function DELETE(req: Request) {
  return NextResponse.json({ msg: "delete" });
}
