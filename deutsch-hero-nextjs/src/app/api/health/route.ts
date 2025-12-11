import { NextResponse } from "next/server";
import { prismaHealthcheck } from "@/lib/prisma";

export async function GET() {
  const result = await prismaHealthcheck();

  if (result.ok) {
    return NextResponse.json({ ok: true });
  }

  console.error("Prisma healthcheck failed", result.error);
  return NextResponse.json({ ok: false, error: "Database connection failed" }, { status: 500 });
}
