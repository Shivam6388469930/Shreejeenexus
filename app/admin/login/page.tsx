import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import AdminLoginForm from "./AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Portal Login | Shreejee Nexus",
  description: "Secure administrative login portal for Shreejee Nexus.",
};

async function LoginContent() {
  const session = await getAdminSession();
  if (session) {
    redirect("/admin");
  }

  return <AdminLoginForm />;
}

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-peacock via-[#09424e] to-peacock px-6 py-20 text-mist">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-marigold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-marigold/10 blur-3xl" />

      <div className="relative w-full max-w-md">
        <Suspense fallback={<div className="text-center text-sm text-mist/60">Loading portal...</div>}>
          <LoginContent />
        </Suspense>
      </div>
    </main>
  );
}
