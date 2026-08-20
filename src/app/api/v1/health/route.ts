import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    data: { status: "ok", service: "creatorflow-api" },
    error: null,
    meta: { requestId: crypto.randomUUID() },
  });
}
