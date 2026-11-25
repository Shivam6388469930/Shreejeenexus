import crypto from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "sn_admin_session";
const SESSION_SECRET =
  process.env.ADMIN_JWT_SECRET || "shreejee-nexus-secret-key-prod-2026";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

export interface SessionPayload {
  adminId: string;
  email: string;
  name: string;
  issuedAt: number;
  expiresAt: number;
}

// Sign a string with HMAC SHA-256
function sign(data: string): string {
  return crypto.createHmac("sha256", SESSION_SECRET).update(data).digest("base64url");
}

// Create a tamper-proof session token
export function createSessionToken(admin: { id: string; email: string; name: string }): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = {
    adminId: admin.id,
    email: admin.email,
    name: admin.name,
    issuedAt: now,
    expiresAt: now + MAX_AGE_SECONDS,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = sign(payloadB64);
  return `${payloadB64}.${signature}`;
}

// Verify and decode a session token
export function verifySessionToken(token: string): SessionPayload | null {
  if (!token || typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadB64, providedSignature] = parts;
  const expectedSignature = sign(payloadB64);

  // Timing safe comparison to prevent timing attacks
  const bufProvided = Buffer.from(providedSignature);
  const bufExpected = Buffer.from(expectedSignature);

  if (
    bufProvided.length !== bufExpected.length ||
    !crypto.timingSafeEqual(bufProvided, bufExpected)
  ) {
    return null;
  }

  try {
    const raw = Buffer.from(payloadB64, "base64url").toString("utf-8");
    const payload = JSON.parse(raw) as SessionPayload;

    const now = Math.floor(Date.now() / 1000);
    if (payload.expiresAt < now) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

// Set session cookie in server action or route handler
export async function setAdminSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

// Clear session cookie
export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

// Get current session from incoming request cookies
export async function getAdminSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  return verifySessionToken(token);
}

