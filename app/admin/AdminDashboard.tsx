"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { ContactMessage } from "@/lib/db";

interface AdminDashboardProps {
  adminEmail: string;
  adminName: string;
  initialMessages: ContactMessage[];
}

export default function AdminDashboard({
  adminEmail,
  adminName,
  initialMessages,
}: AdminDashboardProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessage[]>(initialMessages);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "unread" | "read" | "replied">("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Selected message for details view
  const [activeMessage, setActiveMessage] = useState<ContactMessage | null>(null);

  // Password change modal state
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState<{
    loading: boolean;
    error: string | null;
    success: string | null;
  }>({ loading: false, error: null, success: null });

  // Refresh messages from server
  const fetchMessages = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/admin/messages");
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error("Failed to refresh messages:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  // Toggle status (unread / read / replied)
  const handleUpdateStatus = async (
    id: string,
    newStatus: "unread" | "read" | "replied"
  ) => {
    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, status: newStatus } : m))
        );
        if (activeMessage?.id === id) {
          setActiveMessage((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // Delete message
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
        if (activeMessage?.id === id) {
          setActiveMessage(null);
        }
      }
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  // Handle password change
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordStatus({ loading: true, error: null, success: null });

    if (newPassword !== confirmPassword) {
      setPasswordStatus({
        loading: false,
        error: "New password and confirmation do not match.",
        success: null,
      });
      return;
    }

    if (newPassword.length < 8) {
      setPasswordStatus({
        loading: false,
        error: "New password must be at least 8 characters long.",
        success: null,
      });
      return;
    }

    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update password");
      }

      setPasswordStatus({
        loading: false,
        error: null,
        success: "Password updated successfully!",
      });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        setIsPasswordModalOpen(false);
        setPasswordStatus({ loading: false, error: null, success: null });
      }, 1500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error changing password";
      setPasswordStatus({ loading: false, error: msg, success: null });
    }
  };

  // Filter messages
  const filteredMessages = messages.filter((m) => {
    // Status filter
    if (statusFilter !== "all" && m.status !== statusFilter) {
      return false;
    }

    // Service filter
    if (serviceFilter !== "all" && m.service !== serviceFilter) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchName = m.name.toLowerCase().includes(query);
      const matchEmail = m.email.toLowerCase().includes(query);
      const matchCompany = (m.company || "").toLowerCase().includes(query);
      const matchService = m.service.toLowerCase().includes(query);
      const matchMessage = m.message.toLowerCase().includes(query);
      return matchName || matchEmail || matchCompany || matchService || matchMessage;
    }

    return true;
  });

  // Unique services in messages
  const servicesList = Array.from(new Set(messages.map((m) => m.service))).filter(Boolean);

  // Stats calculation
  const totalCount = messages.length;
  const unreadCount = messages.filter((m) => m.status === "unread").length;
  const readCount = messages.filter((m) => m.status === "read").length;
  const repliedCount = messages.filter((m) => m.status === "replied").length;

  return (
    <div className="min-h-screen">
      {/* ── Top Bar ── */}
      <header className="sticky top-0 z-30 border-b border-peacock/10 bg-white/95 px-6 py-3.5 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-peacock"
            >
              <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true">
                <circle cx="15" cy="20" r="12" fill="#F5B82E" />
                <circle cx="25" cy="20" r="12" fill="none" stroke="#0B4F5C" strokeWidth="4" />
              </svg>
              <span>
                shreejee<em className="font-semibold not-italic text-peacock/70">nexus</em>
              </span>
            </Link>
            <span className="hidden rounded-full bg-peacock/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-peacock sm:inline-block">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden rounded-xl border border-peacock/15 px-3 py-1.5 text-xs font-semibold text-peacock transition hover:bg-peacock/5 sm:inline-flex items-center gap-1"
            >
              <span>View Live Site</span>
              <span>↗</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsPasswordModalOpen(true)}
              className="rounded-xl border border-peacock/15 bg-white px-3 py-1.5 text-xs font-semibold text-peacock shadow-sm transition hover:border-marigold hover:bg-marigold/10"
            >
              Change Password
            </button>

            <div className="hidden items-center gap-2 text-xs md:flex">
              <span className="h-7 w-7 rounded-full bg-peacock text-mist flex items-center justify-center font-bold">
                {adminName.slice(0, 1).toUpperCase()}
              </span>
              <span className="font-semibold text-peacock/80">{adminEmail}</span>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl bg-peacock/10 px-3 py-1.5 text-xs font-bold text-peacock transition hover:bg-red-50 hover:text-red-600"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Container ── */}
      <div className="mx-auto max-w-[1320px] px-6 py-8">
        {/* Title & Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-peacock md:text-3xl">
              Contact Inquiries & Messages
            </h1>
            <p className="mt-1 text-sm text-peacock/70">
              Review, manage, and reply to client inquiries received through your website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={fetchMessages}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 rounded-xl border border-peacock/15 bg-white px-4 py-2 text-xs font-bold text-peacock shadow-sm transition hover:bg-peacock/5 disabled:opacity-50"
            >
              <svg
                className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 21h5v-5" />
              </svg>
              <span>{isRefreshing ? "Refreshing..." : "Refresh Messages"}</span>
            </button>
          </div>
        </div>

        {/* ── Quick Stats Grid ── */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-peacock/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-peacock/60">
              Total Inquiries
            </p>
            <p className="mt-2 font-display text-3xl font-black text-peacock">
              {totalCount}
            </p>
          </div>

          <div className="rounded-2xl border border-marigold/30 bg-marigold/10 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-peacock">
                Unread Messages
              </p>
              {unreadCount > 0 && (
                <span className="flex h-2.5 w-2.5 rounded-full bg-marigold animate-pulse" />
              )}
            </div>
            <p className="mt-2 font-display text-3xl font-black text-peacock">
              {unreadCount}
            </p>
          </div>

          <div className="rounded-2xl border border-peacock/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-peacock/60">
              Reviewed / Read
            </p>
            <p className="mt-2 font-display text-3xl font-black text-peacock">
              {readCount}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Replied
            </p>
            <p className="mt-2 font-display text-3xl font-black text-emerald-900">
              {repliedCount}
            </p>
          </div>
        </div>

        {/* ── Filter & Search Toolbar ── */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-peacock/10 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          {/* Status Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {(
              [
                { id: "all", label: `All (${totalCount})` },
                { id: "unread", label: `Unread (${unreadCount})` },
                { id: "read", label: `Read (${readCount})` },
                { id: "replied", label: `Replied (${repliedCount})` },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                  statusFilter === tab.id
                    ? "bg-peacock text-mist shadow-sm"
                    : "text-peacock/70 hover:bg-peacock/5 hover:text-peacock"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Service Filter */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            {servicesList.length > 0 && (
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="rounded-xl border border-peacock/15 bg-white px-3 py-2 text-xs font-semibold text-peacock outline-none focus:border-marigold"
              >
                <option value="all">All Services</option>
                {servicesList.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            )}

            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-peacock/15 bg-white px-3.5 py-2 pl-9 text-xs font-medium text-peacock placeholder:text-peacock/40 outline-none focus:border-marigold sm:w-60"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-peacock/40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Messages List / Table ── */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-peacock/10 bg-white shadow-sm">
          {filteredMessages.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-peacock/5 text-peacock/40">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-peacock">
                No inquiries found
              </h3>
              <p className="mt-1 text-xs text-peacock/60">
                {messages.length === 0
                  ? "When visitors submit the contact form, their inquiries will appear here."
                  : "No messages match your selected search or filter criteria."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-peacock/5">
              {filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`group relative flex flex-col justify-between gap-4 p-5 transition hover:bg-mist/40 md:flex-row md:items-center ${
                    msg.status === "unread" ? "bg-marigold/[0.04]" : ""
                  }`}
                >
                  {/* Left: Contact Info & Preview */}
                  <div
                    onClick={() => {
                      setActiveMessage(msg);
                      if (msg.status === "unread") {
                        handleUpdateStatus(msg.id, "read");
                      }
                    }}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-base font-bold text-peacock group-hover:text-[#08404a]">
                        {msg.name}
                      </span>
                      {msg.company && (
                        <span className="text-xs font-semibold text-peacock/60">
                          • {msg.company}
                        </span>
                      )}
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          msg.status === "unread"
                            ? "bg-marigold/30 text-peacock font-extrabold"
                            : msg.status === "replied"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-peacock/10 text-peacock/70"
                        }`}
                      >
                        {msg.status}
                      </span>
                      <span className="rounded-md bg-mist px-2 py-0.5 text-[11px] font-semibold text-peacock/80">
                        {msg.service}
                      </span>
                    </div>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-peacock/70">
                      {msg.message}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-[11px] text-peacock/50">
                      <span>{msg.email}</span>
                      {msg.phone && <span>• {msg.phone}</span>}
                      <span>
                        • {new Date(msg.createdAt).toLocaleString("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveMessage(msg);
                        if (msg.status === "unread") {
                          handleUpdateStatus(msg.id, "read");
                        }
                      }}
                      className="rounded-lg border border-peacock/15 bg-white px-3 py-1.5 text-xs font-bold text-peacock shadow-sm transition hover:border-marigold"
                    >
                      View
                    </button>

                    <a
                      href={`mailto:${msg.email}?subject=Re: Inquiry regarding ${encodeURIComponent(
                        msg.service
                      )} - Shreejee Nexus`}
                      onClick={() => handleUpdateStatus(msg.id, "replied")}
                      className="rounded-lg bg-peacock px-3 py-1.5 text-xs font-bold text-mist shadow-sm transition hover:bg-[#08404a]"
                    >
                      Reply
                    </a>

                    {msg.status === "unread" ? (
                      <button
                        type="button"
                        onClick={() => handleUpdateStatus(msg.id, "read")}
                        title="Mark as read"
                        className="rounded-lg bg-peacock/5 p-2 text-peacock/70 hover:bg-peacock/10"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleUpdateStatus(msg.id, "unread")}
                        title="Mark as unread"
                        className="rounded-lg bg-peacock/5 p-2 text-peacock/70 hover:bg-peacock/10"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="6" />
                        </svg>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleDelete(msg.id)}
                      title="Delete inquiry"
                      className="rounded-lg p-2 text-peacock/40 transition hover:bg-red-50 hover:text-red-600"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Message Detail Modal ── */}
      {activeMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-peacock/50 p-4 backdrop-blur-sm"
          onClick={() => setActiveMessage(null)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl border border-peacock/15 bg-white p-7 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-peacock/10 pb-4">
              <div>
                <span className="rounded-full bg-marigold/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-peacock">
                  {activeMessage.service}
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-peacock">
                  {activeMessage.name}
                </h3>
                {activeMessage.company && (
                  <p className="text-xs font-semibold text-peacock/60">
                    Company: {activeMessage.company}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveMessage(null)}
                className="rounded-full bg-peacock/5 p-2 text-peacock/60 hover:bg-peacock/10"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-mist/60 p-4 text-xs text-peacock/80">
              <div>
                <span className="font-bold uppercase tracking-wider text-peacock/50">Email:</span>
                <p className="font-semibold text-peacock">{activeMessage.email}</p>
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-peacock/50">Phone:</span>
                <p className="font-semibold text-peacock">{activeMessage.phone || "Not provided"}</p>
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-peacock/50">Submitted:</span>
                <p className="font-semibold text-peacock">
                  {new Date(activeMessage.createdAt).toLocaleString("en-US", {
                    dateStyle: "full",
                    timeStyle: "medium",
                  })}
                </p>
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-peacock/50">Status:</span>
                <p className="font-semibold capitalize text-peacock">{activeMessage.status}</p>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wider text-peacock/60">
                Message Content
              </label>
              <div className="mt-2 max-h-64 overflow-y-auto whitespace-pre-wrap rounded-xl border border-peacock/10 bg-mist/30 p-4 text-sm leading-relaxed text-peacock">
                {activeMessage.message}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-peacock/10 pt-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    handleUpdateStatus(
                      activeMessage.id,
                      activeMessage.status === "unread" ? "read" : "unread"
                    )
                  }
                  className="rounded-xl border border-peacock/15 px-3 py-2 text-xs font-bold text-peacock hover:bg-peacock/5"
                >
                  Mark as {activeMessage.status === "unread" ? "Read" : "Unread"}
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(activeMessage.id)}
                  className="rounded-xl px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>

              <a
                href={`mailto:${activeMessage.email}?subject=Re: Inquiry regarding ${encodeURIComponent(
                  activeMessage.service
                )} - Shreejee Nexus`}
                onClick={() => handleUpdateStatus(activeMessage.id, "replied")}
                className="inline-flex items-center gap-2 rounded-xl bg-peacock px-5 py-2 text-xs font-bold text-mist shadow transition hover:bg-[#08404a]"
              >
                <span>Reply to Client via Email</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Password Change Modal ── */}
      {isPasswordModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-peacock/50 p-4 backdrop-blur-sm"
          onClick={() => setIsPasswordModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-peacock/15 bg-white p-7 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-peacock/10 pb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-peacock">
                  Change Admin Password
                </h3>
                <p className="mt-0.5 text-xs text-peacock/60">
                  Update your authentication credentials
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPasswordModalOpen(false)}
                className="rounded-full bg-peacock/5 p-2 text-peacock/60 hover:bg-peacock/10"
              >
                ✕
              </button>
            </div>

            {passwordStatus.error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                {passwordStatus.error}
              </div>
            )}

            {passwordStatus.success && (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-800">
                {passwordStatus.success}
              </div>
            )}

            <form onSubmit={handleChangePassword} className="mt-5 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-peacock">
                  Current Password *
                </label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full rounded-xl border border-peacock/20 px-3.5 py-2.5 text-xs outline-none focus:border-marigold focus:ring-2 focus:ring-marigold/30"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-peacock">
                  New Password *
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full rounded-xl border border-peacock/20 px-3.5 py-2.5 text-xs outline-none focus:border-marigold focus:ring-2 focus:ring-marigold/30"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-peacock">
                  Confirm New Password *
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full rounded-xl border border-peacock/20 px-3.5 py-2.5 text-xs outline-none focus:border-marigold focus:ring-2 focus:ring-marigold/30"
                />
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="rounded-xl px-4 py-2 text-xs font-bold text-peacock/70 hover:bg-peacock/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={passwordStatus.loading}
                  className="rounded-xl bg-peacock px-5 py-2.5 text-xs font-bold text-mist shadow transition hover:bg-[#08404a] disabled:opacity-50"
                >
                  {passwordStatus.loading ? "Updating..." : "Save New Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

