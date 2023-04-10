//
// articles/new/route.ts - https://beta.nextjs.org/docs/routing/route-handlers
//
import { NextRequest, NextResponse } from "next/server";

// import prisma from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  return NextResponse.json({ msg: "post" });
}

export async function PUT(req: NextRequest) {
  return NextResponse.json({ msg: "put" });
}

export async function PATCH(req: NextRequest) {
  console.log("* PATCH");
  console.log(req.body);

  const { title, content } = req.body;
  console.log(title, content);

  return NextResponse.json({ msg: "patch" });
}
