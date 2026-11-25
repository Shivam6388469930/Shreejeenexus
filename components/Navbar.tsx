"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type NavLink = { label: string; href: string; badge?: string };

type Menu =
  | { kind: "link"; label: string; href: string }
  | { kind: "groups"; label: string; groups: { title: string; links: NavLink[] }[] }
  | {
      kind: "feature";
      label: string;
      title: string;
      text: string;
      size: "sm" | "md" | "lg";
      columns: NavLink[][];
    };

/* ---------- Navigation Menu Content ---------- */
const MENUS: Menu[] = [
  {
    kind: "groups",
    label: "Company",
    groups: [
      {
        title: "Who we are",
        links: [
          { label: "About us", href: "/about" },
          { label: "Why choose us", href: "/why-us" },
          { label: "Our team", href: "/team" },
          { label: "Careers", href: "/careers", badge: "Hiring" },
          { label: "Contact us", href: "/contact" },
        ],
      },
      {
        title: "Resources & Media",
        links: [
          { label: "Insights & blog", href: "/insights" },
          { label: "Our portfolio", href: "/portfolio" },
          { label: "All services overview", href: "/services" },
          { label: "All industries", href: "/industries" },
        ],
      },
      {
        title: "Direct Connect",
        links: [
          { label: "info@shreejeenexus.com", href: "mailto:info@shreejeenexus.com" },
          { label: "services@shreejeenexus.com", href: "mailto:services@shreejeenexus.com" },
          { label: "careers@shreejeenexus.com", href: "mailto:careers@shreejeenexus.com" },
        ],
      },
    ],
  },
  {
    kind: "feature",
    label: "Services",
    size: "lg",
    title: "Research-led insights. Connected growth.",
    text: "Understand your market, shape your next move, and bring it to life through technology, marketing, and design.",
    columns: [
      [
        { label: "Market research", href: "/services/market-research" },
        { label: "Business consulting", href: "/services/business-consulting" },
        { label: "Search engine optimization", href: "/services/seo" },
        { label: "Software development", href: "/services/software-development" },
        { label: "UI/UX design", href: "/services/ui-ux-design" },
      ],
      [
        { label: "Survey programming", href: "/services/survey-programming" },
        { label: "Analytics & BI", href: "/services/analytics" },
        { label: "Performance marketing", href: "/services/performance-marketing" },
        { label: "Mobile app development", href: "/services/mobile-apps" },
      ],
      [
        { label: "AI & business automation", href: "/services/ai-automation", badge: "New" },
        { label: "Digital marketing", href: "/services/digital-marketing" },
        { label: "Website development", href: "/services/web-development" },
        { label: "Brand strategy", href: "/services/branding" },
      ],
    ],
  },
  {
    kind: "feature",
    label: "Industries",
    size: "md",
    title: "Digital solutions built for your industry.",
    text: "Purpose-built platforms that turn complex industry challenges into scalable digital experiences.",
    columns: [
      [
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Financial services", href: "/industries/financial-services" },
        { label: "Hospitality & travel", href: "/industries/hospitality-travel" },
        { label: "Startups", href: "/industries/startups" },
      ],
      [
        { label: "Retail & e-commerce", href: "/industries/retail-ecommerce" },
        { label: "Education", href: "/industries/education" },
        { label: "Real estate", href: "/industries/real-estate" },
        { label: "Technology & SaaS", href: "/industries/technology-saas" },
      ],
    ],
  },
  {
    kind: "feature",
    label: "Our portfolio",
    size: "sm",
    title: "Proven work. Measurable impact.",
    text: "See how strategy, engineering, and design come together to create meaningful outcomes.",
    columns: [
      [
        { label: "Survey programming", href: "/portfolio/survey-programming" },
        { label: "Market research & online surveys", href: "/portfolio/market-research" },
        { label: "Digital & performance marketing", href: "/portfolio/marketing" },
        { label: "Business & data analytics", href: "/portfolio/analytics" },
        { label: "Website & app development", href: "/portfolio/development" },
      ],
    ],
  },
  { kind: "link", label: "Insights", href: "/insights" },
];

const WIDTH = {
  lg: "lg:w-[min(1120px,calc(100vw_-_32px))]",
  md: "lg:w-[min(940px,calc(100vw_-_32px))]",
  sm: "lg:w-[min(880px,calc(100vw_-_32px))]",
} as const;

const GRID_COLS: Record<number, string> = {
  1: "lg:grid-cols-[1.1fr_1fr]",
  2: "lg:grid-cols-[1.1fr_1fr_1fr]",
  3: "lg:grid-cols-[1.1fr_1fr_1fr_1fr]",
};

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peacock";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-300 ease-out ${
        open ? "rotate-180 text-marigold" : "text-peacock/60"
      }`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 6l5 5 5-5" />
    </svg>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="shreejee Nexus home"
      className={`group flex items-center gap-2.5 font-display text-[25px] font-extrabold tracking-tight ${FOCUS}`}
    >
      <span className="relative flex h-[38px] w-[38px] items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="15" cy="20" r="12" fill="#F5B82E" className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          <circle cx="25" cy="20" r="12" fill="none" stroke="#0B4F5C" strokeWidth="4" className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </svg>
      </span>
      <span>
        shreejee<em className="font-semibold not-italic text-peacock/70">nexus</em>
      </span>
    </Link>
  );
}

function Cta({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2.5 overflow-hidden rounded-[14px_14px_14px_4px] bg-peacock px-6 py-2.5 text-sm font-semibold text-mist shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08404a] hover:shadow-lg hover:shadow-peacock/20 ${FOCUS} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span>Get in touch</span>
        <span className="flex gap-[3px]" aria-hidden="true">
          <i className="h-1.5 w-1.5 rounded-full bg-marigold transition-transform duration-300 group-hover:scale-125" />
          <i className="h-1.5 w-1.5 rounded-full bg-marigold transition-transform duration-300 group-hover:scale-125 group-hover:delay-75" />
          <i className="h-1.5 w-1.5 rounded-full bg-marigold transition-transform duration-300 group-hover:scale-125 group-hover:delay-150" />
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isDesktop = () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;

  const closeAll = useCallback(() => {
    setOpenIndex(null);
    setMobileOpen(false);
  }, []);

  // Track scroll position for backdrop blur styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click or ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      clearTimeout(closeTimer.current);
    };
  }, [closeAll]);

  // Lock body scroll on mobile open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const renderLink = (l: NavLink) => {
    const isActive = pathname === l.href;
    return (
      <li key={l.href + l.label}>
        <Link
          href={l.href}
          onClick={closeAll}
          className={`group flex items-center justify-between rounded-xl px-3 py-2 text-[14px] font-medium transition-all duration-200 hover:bg-marigold/20 hover:pl-4 ${
            isActive ? "bg-marigold/20 font-bold text-peacock" : "text-peacock/85 hover:text-peacock"
          } ${FOCUS}`}
        >
          <span className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                isActive ? "bg-marigold scale-125" : "bg-transparent group-hover:bg-marigold"
              }`}
            />
            <span>{l.label}</span>
          </span>
          {l.badge && (
            <span className="rounded-full bg-marigold/30 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-peacock">
              {l.badge}
            </span>
          )}
        </Link>
      </li>
    );
  };

  const topItem =
    "flex w-full items-center justify-between gap-1.5 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-peacock/10 lg:w-auto lg:rounded-full lg:px-4 lg:py-2";

  return (
    <>
      <header
        ref={navRef}
        className={`sticky top-0 z-50 font-body leading-normal text-peacock transition-all duration-300 ${
          scrolled
            ? "border-b border-peacock/10 bg-mist/90 backdrop-blur-md shadow-sm"
            : "border-b border-peacock/10 bg-mist/95 backdrop-blur-sm"
        }`}
      >
        <div className="relative mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-3">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex lg:items-center lg:gap-1">
            {MENUS.map((m, i) => {
              if (m.kind === "link") {
                const isActive = pathname === m.href;
                return (
                  <li key={m.label}>
                    <Link
                      href={m.href}
                      onClick={closeAll}
                      className={`${topItem} ${
                        isActive ? "bg-peacock/10 font-bold text-peacock" : ""
                      } ${FOCUS}`}
                    >
                      {m.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = openIndex === i;
              const panelId = `mega-${i}`;

              const panelBase =
                "gap-x-8 gap-y-4 rounded-[24px] border border-peacock/10 bg-[linear-gradient(135deg,rgba(242,247,245,0.98)_40%,rgba(243,236,209,0.95))] p-5 absolute left-1/2 top-[calc(100%+6px)] -translate-x-1/2 shadow-[0_24px_60px_-18px_rgba(11,79,92,0.35)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";
              const visibility = isOpen
                ? "grid visible translate-y-0 opacity-100"
                : "hidden lg:grid invisible pointer-events-none translate-y-2 opacity-0";

              return (
                <li
                  key={m.label}
                  onMouseEnter={() => {
                    if (!isDesktop()) return;
                    clearTimeout(closeTimer.current);
                    setOpenIndex(i);
                  }}
                  onMouseLeave={() => {
                    if (!isDesktop()) return;
                    closeTimer.current = setTimeout(() => setOpenIndex(null), 140);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`${topItem} ${
                      isOpen ? "bg-marigold/20 text-peacock" : ""
                    } ${FOCUS}`}
                  >
                    <span>{m.label}</span>
                    <Chevron open={isOpen} />
                  </button>

                  {m.kind === "groups" ? (
                    <div
                      id={panelId}
                      className={`${panelBase} ${visibility} grid-cols-3 ${WIDTH.lg} px-8 py-7`}
                    >
                      {m.groups.map((g) => (
                        <div key={g.title}>
                          <h4 className="mb-2 font-display text-lg font-bold text-peacock after:mt-1.5 after:block after:h-[3px] after:w-8 after:rounded-full after:bg-marigold after:content-['']">
                            {g.title}
                          </h4>
                          <ul className="flex flex-col gap-0.5 pt-2">
                            {g.links.map(renderLink)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      id={panelId}
                      className={`${panelBase} ${visibility} ${WIDTH[m.size]} ${GRID_COLS[m.columns.length]}`}
                    >
                      <div className="flex flex-col justify-between rounded-2xl border-l-[4px] border-marigold bg-white/75 p-6 backdrop-blur">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-marigold">
                            Featured Overview
                          </span>
                          <h3 className="mt-1 font-display text-2xl font-bold leading-tight tracking-tight text-peacock">
                            {m.title}
                          </h3>
                          <p className="mt-3 text-xs leading-relaxed text-peacock/75">
                            {m.text}
                          </p>
                        </div>
                        <Link
                          href={m.label === "Services" ? "/services" : m.label === "Industries" ? "/industries" : "/portfolio"}
                          onClick={closeAll}
                          className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-peacock hover:text-marigold"
                        >
                          <span>Explore all {m.label.toLowerCase()}</span>
                          <span>→</span>
                        </Link>
                      </div>

                      {m.columns.map((col, ci) => (
                        <ul key={ci} className="flex flex-col content-start gap-0.5 py-1">
                          {col.map(renderLink)}
                        </ul>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Cta />
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-peacock/10 text-peacock transition-colors duration-200 hover:bg-peacock/15 lg:hidden ${FOCUS}`}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          onClick={closeAll}
          className="fixed inset-0 z-40 bg-peacock/40 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Mobile Menu Dropdown / Drawer */}
      <div
        className={`fixed inset-x-0 top-[61px] z-50 max-h-[calc(100vh-61px)] overflow-y-auto border-b border-peacock/10 bg-mist p-6 shadow-2xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {MENUS.map((m, i) => {
            if (m.kind === "link") {
              const isActive = pathname === m.href;
              return (
                <li key={m.label}>
                  <Link
                    href={m.href}
                    onClick={closeAll}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                      isActive ? "bg-peacock/10 font-bold" : "hover:bg-peacock/5"
                    }`}
                  >
                    {m.label}
                  </Link>
                </li>
              );
            }

            const isOpen = openIndex === i;

            return (
              <li key={m.label} className="border-b border-peacock/10 pb-2">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold hover:bg-peacock/5"
                >
                  <span>{m.label}</span>
                  <Chevron open={isOpen} />
                </button>

                {isOpen && (
                  <div className="mt-2 rounded-2xl bg-white/70 p-4">
                    {m.kind === "groups" ? (
                      <div className="space-y-4">
                        {m.groups.map((g) => (
                          <div key={g.title}>
                            <p className="text-xs font-bold uppercase tracking-wider text-peacock/60 mb-1">
                              {g.title}
                            </p>
                            <ul className="space-y-1">
                              {g.links.map(renderLink)}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="border-l-2 border-marigold pl-3 py-1">
                          <p className="font-display text-sm font-bold text-peacock">
                            {m.title}
                          </p>
                          <p className="text-xs text-peacock/70 mt-1">{m.text}</p>
                        </div>
                        {m.columns.flat().map(renderLink)}
                      </div>
                    )}
                  </div>
                )}
              </li>
            );
          })}

          <li className="pt-4">
            <Cta onClick={closeAll} className="flex w-full justify-center py-3 text-base" />
          </li>
        </ul>
      </div>
    </>
  );
}
