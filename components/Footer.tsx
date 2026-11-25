"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

/* ---------- Footer content ---------- */
const COMPANY = [
  { label: "About us", href: "/about" },
  { label: "Why choose us", href: "/why-us" },
  { label: "Our team", href: "/team" },
  // { label: "Careers", href: "/careers" },
  { label: "Insights & blog", href: "/insights" },
  { label: "Our portfolio", href: "/portfolio" },
  { label: "Contact us", href: "/contact" },
];

const SERVICES = [
  { label: "Market research", href: "/services/market-research" },
  { label: "Survey programming", href: "/services/survey-programming" },
  { label: "Digital marketing", href: "/services/digital-marketing" },
  { label: "Search engine optimization", href: "/services/seo" },
  { label: "Website development", href: "/services/web-development" },
  { label: "Mobile app development", href: "/services/mobile-apps" },
  { label: "UI/UX design", href: "/services/ui-ux-design" },
  { label: "AI & automation", href: "/services/ai-automation" },
];

const INDUSTRIES = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Retail & e-commerce", href: "/industries/retail-ecommerce" },
  { label: "Financial services", href: "/industries/financial-services" },
  { label: "Education", href: "/industries/education" },
  { label: "Real estate", href: "/industries/real-estate" },
  { label: "Startups", href: "/industries/startups" },
  { label: "Technology & SaaS", href: "/industries/technology-saas" },
];

const OFFICES = [
  {
    id: "india",
    label: "India",
    tz: "Asia/Kolkata",
    phone: "+91 00000 00000",
    address: "SG Highway, Ahmedabad, Gujarat 380015",
    email: "info@shreejeenexus.com",
  },
  {
    id: "uae",
    label: "UAE",
    tz: "Asia/Dubai",
    phone: "+971 00 000 0000",
    address: "Business Bay, Dubai, United Arab Emirates",
    email: "info@shreejeenexus.com",
  },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "Instagram", href: "https://instagram.com", icon: "ig" },
  { label: "Facebook", href: "https://facebook.com", icon: "fb" },
  { label: "X", href: "https://x.com", icon: "x" },
] as const;

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock";

/* Fires once when the element scrolls into view */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const ico = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function SocialIcon({ name }: { name: (typeof SOCIALS)[number]["icon"] }) {
  const p = { viewBox: "0 0 24 24", className: "h-[18px] w-[18px]", "aria-hidden": true, ...ico };
  if (name === "in")
    return (
      <svg {...p}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  if (name === "ig")
    return (
      <svg {...p}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    );
  if (name === "fb")
    return (
      <svg {...p}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  return (
    <svg {...p}>
      <path d="M4 4l11.7 16H20L8.3 4H4zM4 20l6.8-6.8M13.2 10.8L20 4" />
    </svg>
  );
}

const Phone = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" {...ico} aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
const Pin = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" {...ico} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" {...ico} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const Arrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} {...ico} strokeWidth={2.2} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------- Pieces ---------- */
function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-1.5 py-1 text-peacock/75 transition-all duration-300 hover:text-peacock hover:translate-x-1.5 ${FOCUS}`}
    >
      <span className="h-1 w-1 rounded-full bg-marigold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span>{children}</span>
    </Link>
  );
}

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-lg font-bold text-peacock after:mt-2 after:block after:h-[3px] after:w-8 after:rounded-full after:bg-marigold after:content-['']">
        {title}
      </h4>
      <ul className="flex flex-col gap-1 text-[14px]">
        {links.map((l) => (
          <li key={l.label}>
            <FooterLink href={l.href}>{l.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CtaPanel() {
  return (
    <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-peacock via-[#09424e] to-peacock px-7 py-12 text-mist md:px-14 md:py-16 shadow-2xl">
      {/* floating shapes */}
      <span className="animate-float pointer-events-none absolute -right-10 -top-12 h-56 w-56 rounded-full bg-marigold/85 blur-sm" />
      <span
        className="animate-float pointer-events-none absolute -bottom-16 right-40 hidden h-40 w-40 rounded-full border-[14px] border-mist/15 md:block"
        style={{ animationDelay: "-3s" }}
      />
      <span
        className="animate-float pointer-events-none absolute left-1/2 top-6 h-4 w-4 rounded-full bg-marigold"
        style={{ animationDelay: "-5s" }}
      />

      <div className="relative max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-marigold">
          Start Your Project
        </span>
        <h2 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Have an idea? Let&rsquo;s build it together.
        </h2>
        <p className="mt-5 max-w-md text-base text-mist/80">
          Tell us what you&rsquo;re working on. We&rsquo;ll review your requirements and reply within one business day with a customized plan.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className={`group inline-flex items-center gap-3 rounded-[16px_16px_16px_4px] bg-marigold px-8 py-4 font-bold text-peacock shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(245,184,46,0.95)] ${FOCUS}`}
          >
            Start a project
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <a
            href="mailto:info@shreejeenexus.com"
            className={`font-semibold text-mist underline decoration-marigold decoration-2 underline-offset-8 transition hover:text-marigold ${FOCUS}`}
          >
            info@shreejeenexus.com
          </a>
        </div>
      </div>

      {/* rotating text badge */}
      <svg
        viewBox="0 0 120 120"
        className="animate-spin-slow absolute bottom-8 right-8 hidden h-32 w-32 text-mist md:block opacity-90"
        aria-hidden="true"
      >
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill="currentColor" fontSize="11" fontWeight="600" letterSpacing="2.4">
          <textPath href="#badge-circle">LET&rsquo;S TALK • LET&rsquo;S BUILD • LET&rsquo;S TALK • LET&rsquo;S BUILD •</textPath>
        </text>
      </svg>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <form onSubmit={onSubmit} className="mt-7 max-w-sm">
      <label htmlFor="footer-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-peacock">
        Get insights in your inbox
      </label>
      <div className="relative flex items-center rounded-full border border-peacock/20 bg-white/70 p-1.5 backdrop-blur transition focus-within:border-peacock focus-within:shadow-[0_0_0_4px_rgba(245,184,46,0.35)]">
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setDone(false);
          }}
          placeholder="you@company.com"
          className="min-w-0 flex-1 bg-transparent px-4 py-2 text-[14px] outline-none placeholder:text-peacock/40 text-peacock"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            done ? "rotate-[360deg] bg-marigold text-peacock" : "bg-peacock text-mist hover:bg-[#08404a]"
          } ${FOCUS}`}
        >
          {done ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" {...ico} strokeWidth={2.6} aria-hidden="true">
              <path d="M5 12l5 5 9-10" />
            </svg>
          ) : (
            <Arrow />
          )}
        </button>
      </div>
      <p className="mt-2 h-5 text-xs text-peacock/70" aria-live="polite">
        {done ? "✓ You\u2019re subscribed to our research digest." : ""}
      </p>
    </form>
  );
}

function Offices() {
  const [active, setActive] = useState(0);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const o = OFFICES[active];
  const time = now
    ? new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: o.tz }).format(now)
    : "";

  const row =
    "group flex items-start gap-3 transition-transform duration-300 hover:translate-x-1";
  const iconBox =
    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-peacock/10 text-peacock transition-colors duration-300 group-hover:bg-marigold";

  return (
    <div>
      <h4 className="mb-4 font-display text-lg font-bold text-peacock after:mt-2 after:block after:h-[3px] after:w-8 after:rounded-full after:bg-marigold after:content-['']">
        Our presence
      </h4>

      {/* tabs with sliding pill */}
      <div
        role="tablist"
        className="relative mb-5 grid rounded-full bg-peacock/10 p-1"
        style={{ gridTemplateColumns: `repeat(${OFFICES.length}, 1fr)` }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-1 left-1 rounded-full bg-peacock transition-transform duration-300 ease-out"
          style={{
            width: `calc((100% - 8px) / ${OFFICES.length})`,
            transform: `translateX(${active * 100}%)`,
          }}
        />
        {OFFICES.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`relative z-10 rounded-full py-1.5 text-xs font-bold transition-colors duration-300 ${
              i === active ? "text-mist" : "text-peacock"
            } ${FOCUS}`}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div key={o.id} className="animate-fade-up flex flex-col gap-3.5 text-[14px]">
        <p className="flex items-center gap-2 text-xs font-semibold text-peacock/70">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-marigold" />
          </span>
          Local time: {time || "--:--"}
        </p>
        <a href={`tel:${o.phone.replace(/\s/g, "")}`} className={`${row} ${FOCUS}`}>
          <span className={iconBox}><Phone /></span>
          <span className="pt-1">{o.phone}</span>
        </a>
        <p className={row}>
          <span className={iconBox}><Pin /></span>
          <span className="pt-0.5 text-peacock/80">{o.address}</span>
        </p>
        <a href={`mailto:${o.email}`} className={`${row} ${FOCUS}`}>
          <span className={iconBox}><Mail /></span>
          <span className="pt-1">{o.email}</span>
        </a>
      </div>
    </div>
  );
}

function Marquee() {
  const items = SERVICES.map((s) => s.label);
  const track = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y border-peacock/10 py-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-8 group-hover:[animation-play-state:paused]">
        {track.map((t, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-peacock/75 transition-colors hover:text-peacock md:text-3xl">
              {t}
            </span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-marigold" aria-hidden="true">
              <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

function Wordmark() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="select-none " aria-hidden="true">
      <p
        className={`wordmark whitespace-nowrap pb-3 pt-6 font-display text-[clamp(40px,13vw,188px)] font-extrabold leading-none tracking-tighter ${
          inView ? "in" : ""
        }`}
      >
        shreejeenexus
      </p>
    </div>
  );
}

function BackToTop() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const C = 2 * Math.PI * 20;
  const visible = progress > 0.08;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-mist shadow-[0_10px_30px_-10px_rgba(11,79,92,0.5)] transition-all duration-300 hover:-translate-y-1 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      } ${FOCUS}`}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(11,79,92,0.12)" strokeWidth="3" />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="#F5B82E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
        />
      </svg>
      <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-peacock transition-transform duration-300 group-hover:-translate-y-0.5" {...ico} strokeWidth={2.4} aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="bg-mist font-body text-peacock">
      <div className="mx-auto max-w-[1240px] px-6 pt-20">
        <Reveal>
          <CtaPanel />
        </Reveal>

        {/* main grid */}
        <div className="grid gap-12 pb-16 pt-20 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.15fr_0.9fr_1.3fr]">
          <Reveal>
            <Link href="/" aria-label="shreejee Nexus home" className={`inline-flex items-center gap-2.5 font-display text-[25px] font-extrabold tracking-tight ${FOCUS}`}>
              <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true">
                <circle cx="15" cy="20" r="12" fill="#F5B82E" />
                <circle cx="25" cy="20" r="12" fill="none" stroke="#0B4F5C" strokeWidth="4" />
              </svg>
              <span>
                shreejee<em className="font-semibold not-italic text-peacock/65">nexus</em>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-peacock/75">
              Market research, survey programming, and growth solutions that turn insight into action, from first
              question to launch.
            </p>

            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-peacock/10 text-peacock transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-marigold hover:shadow-[0_10px_20px_-8px_rgba(245,184,46,0.9)] ${FOCUS}`}
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>

            <Newsletter />
          </Reveal>

          <Reveal delay={100}><LinkColumn title="Company" links={COMPANY} /></Reveal>
          <Reveal delay={200}><LinkColumn title="Services" links={SERVICES} /></Reveal>
          <Reveal delay={300}><LinkColumn title="Industries" links={INDUSTRIES} /></Reveal>
          <Reveal delay={400}><Offices /></Reveal>
        </div>
      </div>

      <Marquee />

      <div className="mx-auto max-w-[1240px] px-6">
        <Wordmark />

        <div className="flex flex-col items-center justify-between gap-4 border-t border-peacock/10 py-7 text-sm text-peacock/70 sm:flex-row">
          <p>&copy; 2026 Shreejee Nexus. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <FooterLink href="/privacy">Privacy policy</FooterLink>
            <FooterLink href="/terms">Terms of service</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/admin">Admin</FooterLink>
          </div>
          <p className="font-medium text-peacock">Building the future together</p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
