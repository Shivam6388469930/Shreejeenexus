import type { Metadata } from "next";
import Image from "next/image";
import {
  PageHero,
  SectionHeading,
  FadeUp,
  StaggerParent,
  StaggerChild,
  CtaBanner,
  FloatingShape,
} from "@/components/PageAnimations";

export const metadata: Metadata = {
  title: "About Us | Shreejee Nexus",
  description:
    "Learn about ShreejeeNexus — a global digital solutions company bridging market research with cutting-edge technology to deliver insight-driven impact for businesses worldwide.",
};

/* ── Data ── */

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "12+", label: "Industries Served" },
  { value: "6+", label: "Years of Excellence" },
];

const values = [
  {
    emoji: "💡",
    title: "Innovation",
    description:
      "We embrace emerging technologies and creative thinking to develop solutions that keep our clients ahead of the curve.",
  },
  {
    emoji: "🤝",
    title: "Integrity",
    description:
      "Transparency and ethical practices are at the core of everything we do — we earn trust by being honest and accountable.",
  },
  {
    emoji: "🌐",
    title: "Collaboration",
    description:
      "Great results come from great partnerships. We work closely with our clients and across disciplines to deliver holistic solutions.",
  },
  {
    emoji: "🏆",
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, constantly refining our craft to deliver measurable, impactful outcomes.",
  },
];

/* ── Page ── */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        eyebrow="About Us"
        title="We connect insight to impact."
        description="ShreejeeNexus is a global digital solutions company that fuses market research expertise with cutting-edge technology — empowering organizations to make smarter decisions, faster."
      />

      {/* ── Our Story ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Our Story"
            title="Built on curiosity, driven by purpose"
          />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <FadeUp delay={0}>
                <p className="text-lg leading-relaxed text-peacock/80">
                  ShreejeeNexus was founded with a singular belief: that the gap
                  between raw data and real-world impact could — and should — be
                  bridged. What began as a focused market research consultancy
                  quickly evolved into a multidisciplinary digital powerhouse,
                  bringing together survey programming, data analytics, software
                  development, and digital marketing under one roof.
                </p>
              </FadeUp>

              <FadeUp delay={1}>
                <p className="text-lg leading-relaxed text-peacock/75">
                  Today, our team of 50+ experts partners with clients across 12
                  industries to deliver end-to-end solutions — from uncovering
                  consumer insights to building the technology platforms that act
                  on them. We don&apos;t just gather information; we transform it into
                  strategy, software, and growth. Our mission-driven culture
                  ensures that every project we take on is aligned with our
                  clients&apos; long-term vision.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={2}>
              <div className="relative overflow-hidden rounded-3xl border border-peacock/15 shadow-xl">
                <div className="relative h-[380px] w-full">
                  <Image
                    src="/images/about-team.jpg"
                    alt="Shreejee Nexus team collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-peacock/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 backdrop-blur-md shadow-md">
                    <p className="font-display text-sm font-bold text-peacock">
                      Connecting data, strategy & engineering
                    </p>
                    <p className="text-xs text-peacock/70 mt-0.5">
                      Empowering global organizations with evidence-backed digital growth.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Stats / Numbers ── */}
      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <FloatingShape
          className="-left-16 top-10 h-56 w-56 bg-peacock/5"
          delay={1}
        />
        <FloatingShape
          className="-right-12 bottom-8 h-36 w-36 border-[8px] border-marigold/15"
          delay={3}
        />

        <div className="relative mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="By The Numbers"
            title="Impact you can measure"
            center
          />

          <StaggerParent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StaggerChild key={stat.label}>
                <div className="rounded-2xl border border-peacock/10 bg-white/70 p-8 text-center backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-display text-5xl font-extrabold tracking-tight text-peacock md:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-peacock/50">
                    {stat.label}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Purpose"
            title="Our Mission & Vision"
            center
          />

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <FadeUp delay={0}>
              <div className="rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-peacock/10 text-3xl">
                  🎯
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-peacock">
                  Our Mission
                </h3>
                <p className="mt-4 leading-relaxed text-peacock/70">
                  To empower businesses worldwide with data-driven insights and
                  innovative digital solutions, enabling them to make confident
                  decisions and achieve sustainable growth. We bridge the gap
                  between market intelligence and technology execution — so our
                  clients never have to choose between understanding their market
                  and acting on it.
                </p>
              </div>
            </FadeUp>

            {/* Vision */}
            <FadeUp delay={1}>
              <div className="rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-marigold/15 text-3xl">
                  🔭
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-peacock">
                  Our Vision
                </h3>
                <p className="mt-4 leading-relaxed text-peacock/70">
                  To be the most trusted global partner at the intersection of
                  research and technology — a company known for turning complex
                  data into clear strategies and exceptional digital experiences.
                  We envision a future where every business decision is backed by
                  insight, and every insight is amplified by the right
                  technology.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <FloatingShape
          className="right-10 top-16 h-44 w-44 bg-marigold/10"
          delay={0}
        />
        <FloatingShape
          className="-left-8 bottom-20 h-28 w-28 border-[8px] border-peacock/10"
          delay={2.5}
        />

        <div className="relative mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            center
          />

          <StaggerParent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerChild key={v.title}>
                <div className="rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="mb-4 block text-4xl">{v.emoji}</span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-peacock">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-peacock/60">
                    {v.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner
        title="Let's shape the future together"
        description="Partner with ShreejeeNexus to turn insights into action and ideas into outcomes."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
