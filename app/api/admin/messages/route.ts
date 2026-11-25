import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getContactMessages } from "@/lib/db";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await getContactMessages();
  return NextResponse.json({ messages });
}

