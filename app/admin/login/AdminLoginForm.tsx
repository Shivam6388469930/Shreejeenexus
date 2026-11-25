"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setIsSubmitting(false);
      const msg = err instanceof Error ? err.message : "Failed to sign in";
      setError(msg);
    }
  };

  const handleFillDemo = () => {
    setEmail("admin@shreejeenexus.com");
    setPassword("Admin@Nexus2026!");
    setError(null);
  };

  return (
    <div className="rounded-3xl border border-mist/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-10">
      {/* Brand Logo Header */}
      <div className="text-center">
        <Link href="/" className="inline-flex items-center gap-2.5 font-display text-2xl font-black text-mist">
          <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="15" cy="20" r="12" fill="#F5B82E" />
            <circle cx="25" cy="20" r="12" fill="none" stroke="#F2F7F5" strokeWidth="4" />
          </svg>
          <span>
            shreejee<em className="font-semibold not-italic text-marigold">nexus</em>
          </span>
        </Link>
        <h1 className="mt-4 font-display text-2xl font-extrabold text-mist">
          Admin Portal
        </h1>
        <p className="mt-1 text-xs text-mist/70">
          Sign in to review client inquiries and manage portal settings
        </p>
      </div>

      {error && (
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-400/30 bg-red-500/20 p-3.5 text-xs font-medium text-red-200">
          <svg className="h-4 w-4 shrink-0 text-red-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-mist/80">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@shreejeenexus.com"
            className="w-full rounded-xl border border-mist/25 bg-mist/10 px-4 py-3 text-sm text-mist placeholder:text-mist/40 outline-none transition focus:border-marigold focus:ring-2 focus:ring-marigold/30"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-mist/80">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full rounded-xl border border-mist/25 bg-mist/10 px-4 py-3 text-sm text-mist placeholder:text-mist/40 outline-none transition focus:border-marigold focus:ring-2 focus:ring-marigold/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-mist/60 hover:text-marigold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-marigold py-3.5 font-bold text-peacock shadow-lg transition hover:-translate-y-0.5 hover:shadow-marigold/30 disabled:opacity-70 cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin text-peacock" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Verifying credentials...</span>
            </span>
          ) : (
            <span>Sign In to Dashboard</span>
          )}
        </button>
      </form>

      {/* Demo Seed Credentials Helper */}
      <div className="mt-8 rounded-2xl border border-mist/15 bg-black/20 p-4 text-xs text-mist/75">
        <div className="flex items-center justify-between">
          <span className="font-bold text-marigold">Default Seed Credentials</span>
          <button
            type="button"
            onClick={handleFillDemo}
            className="rounded-md bg-marigold/20 px-2.5 py-1 text-[11px] font-bold text-marigold hover:bg-marigold/30"
          >
            Auto-fill
          </button>
        </div>
        <p className="mt-2 font-mono text-[11px] text-mist/90">
          User: admin@shreejeenexus.com
        </p>
        <p className="font-mono text-[11px] text-mist/90">
          Pass: Admin@Nexus2026!
        </p>
      </div>

      <div className="mt-6 text-center">
        <Link href="/" className="text-xs font-semibold text-mist/60 hover:text-marigold">
          ← Back to Shreejee Nexus Website
        </Link>
      </div>
    </div>
  );
}

