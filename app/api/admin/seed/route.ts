import { NextRequest, NextResponse } from "next/server";
import { ensureAdminSeed, DEFAULT_ADMIN } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const forceReset = Boolean(body.reset);

    const admin = await ensureAdminSeed(forceReset);

    return NextResponse.json({
      success: true,
      message: forceReset
        ? "Admin account reset to default credentials"
        : "Admin seed verified",
      email: admin.email,
      defaultPasswordHint: forceReset ? DEFAULT_ADMIN.defaultPassword : "[Preserved]",
    });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

