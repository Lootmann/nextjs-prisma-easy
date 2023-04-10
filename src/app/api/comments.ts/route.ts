//
// api/comments/route.ts
//
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const res = await fetch(`http://localhost:3000/api/comments`);
  return NextResponse.json({ msg: "hello world" });
}
