import { NextRequest, NextResponse } from "next/server";
import { verifyAdminCredentials } from "@/lib/db";
import { createSessionToken, setAdminSessionCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const admin = await verifyAdminCredentials(email, password);
    if (!admin) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = createSessionToken({
      id: admin.id,
      email: admin.email,
      name: admin.name,
    });

    await setAdminSessionCookie(token);

    return NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

