import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { getContactMessages } from "@/lib/db";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard • Messages & Portal | Shreejee Nexus",
  description: "View and manage contact inquiries and security settings.",
};

async function AdminContent() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const initialMessages = await getContactMessages();

  return (
    <AdminDashboard
      adminEmail={session.email}
      adminName={session.name}
      initialMessages={initialMessages}
    />
  );
}

function AdminFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="flex items-center gap-3 text-peacock font-semibold">
        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        <span>Loading Admin Portal...</span>
      </div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f5f8f7] font-body text-peacock">
      <Suspense fallback={<AdminFallback />}>
        <AdminContent />
      </Suspense>
    </main>
  );
}
