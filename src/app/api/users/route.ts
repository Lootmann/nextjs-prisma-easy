//
// api/users/route.ts
//
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const users = prisma.user.findMany();
  return NextResponse.json({ users });
}
