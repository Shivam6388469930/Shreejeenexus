"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

/* ── Fade-in-up wrapper ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.12 },
  }),
};

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger parent ── */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function StaggerParent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger child ── */
export function StaggerChild({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Hero entrance ── */
export function HeroEntrance({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Floating decoration ── */
export function FloatingShape({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={`pointer-events-none absolute rounded-full ${className}`}
      animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      aria-hidden="true"
    />
  );
}

/* ── Section heading ── */
export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <FadeUp className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-marigold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-peacock md:text-5xl after:mt-3 after:block after:h-[4px] after:w-12 after:rounded-full after:bg-marigold after:content-['']">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-peacock/70">{description}</p>
      )}
    </FadeUp>
  );
}

/* ── Page hero ── */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-peacock via-[#0a3d47] to-peacock py-24 text-mist md:py-36">
      {/* Decorative shapes */}
      <FloatingShape className="-right-20 -top-20 h-72 w-72 bg-marigold/20" delay={0} />
      <FloatingShape className="-bottom-10 left-10 h-40 w-40 border-[10px] border-mist/10" delay={2} />
      <FloatingShape className="right-1/3 top-1/4 h-6 w-6 bg-marigold/50" delay={4} />

      <div className="relative mx-auto max-w-[1240px] px-6">
        <HeroEntrance>
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-marigold">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/75 md:text-xl">
              {description}
            </p>
          )}
          {children}
        </HeroEntrance>
      </div>
    </section>
  );
}

/* ── CTA banner (reusable at bottom of pages) ── */
export function CtaBanner({
  title = "Ready to get started?",
  description = "Let's talk about how we can help your business grow.",
  buttonText = "Contact us",
  buttonHref = "/contact",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[36px] bg-peacock px-8 py-16 text-center text-mist md:px-16 md:py-20">
            <FloatingShape className="-right-10 -top-10 h-48 w-48 bg-marigold/25" />
            <FloatingShape className="-bottom-12 left-20 h-32 w-32 border-[10px] border-mist/10" delay={3} />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-mist/75">{description}</p>
              <a
                href={buttonHref}
                className="mt-8 inline-flex items-center gap-3 rounded-[14px_14px_14px_4px] bg-marigold px-8 py-4 font-semibold text-peacock transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(245,184,46,0.9)]"
              >
                {buttonText}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

