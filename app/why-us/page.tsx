import type { Metadata } from "next";
import {
  PageHero,
  SectionHeading,
  FadeUp,
  StaggerParent,
  StaggerChild,
  CtaBanner,
} from "@/components/PageAnimations";

export const metadata: Metadata = {
  title: "Why Choose Us | Shreejee Nexus",
};

const differentiators = [
  {
    icon: "🔬",
    title: "Research-Backed Strategy",
    description:
      "Every recommendation we make is grounded in rigorous market research and validated data — no guesswork, just evidence.",
  },
  {
    icon: "🔄",
    title: "End-to-End Execution",
    description:
      "From initial research through to development and marketing, we manage the entire lifecycle so nothing falls through the cracks.",
  },
  {
    icon: "🏭",
    title: "Industry Expertise",
    description:
      "Our team brings deep domain knowledge across healthcare, fintech, FMCG, and technology sectors, ensuring contextual solutions.",
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    description:
      "Advanced analytics and real-time dashboards let you see exactly what's working, so every dollar is optimized for impact.",
  },
  {
    icon: "⚡",
    title: "Agile & Scalable",
    description:
      "Our modular approach lets us start lean and scale rapidly — adapting to your evolving needs without missing deadlines.",
  },
  {
    icon: "🤝",
    title: "Dedicated Partnership",
    description:
      "We embed with your team as a true extension, not a revolving-door vendor. Your wins are our wins.",
  },
];

const comparisons = [
  {
    label: "Strategy approach",
    others: "Generic templates and one-size-fits-all plans",
    us: "Custom strategies built on primary research & your unique data",
  },
  {
    label: "Communication",
    others: "Weekly status emails with vague updates",
    us: "Dedicated Slack channel, live dashboards & weekly strategy calls",
  },
  {
    label: "Team model",
    others: "Rotating freelancers you've never met",
    us: "Named specialists who learn your business inside-out",
  },
  {
    label: "Reporting",
    others: "Vanity metrics that look good on paper",
    us: "Actionable KPIs tied directly to revenue & growth goals",
  },
  {
    label: "Scalability",
    others: "Rigid retainers that don't flex",
    us: "Modular engagements that scale up or down with your needs",
  },
];

export default function WhyUsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Why Choose Us"
        title="What sets ShreejeeNexus apart."
        description="We combine deep research expertise with full-stack execution to deliver measurable results. Here's why forward-thinking brands trust us as their growth partner."
      />

      {/* ── Differentiator Cards ── */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Our Edge"
            title="Six reasons to partner with us"
            center
          />

          <StaggerParent className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <StaggerChild key={d.title}>
                <div className="group rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-peacock/5 text-3xl">
                    {d.icon}
                  </span>
                  <h3 className="font-display text-xl font-bold text-peacock">
                    {d.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-peacock/65">
                    {d.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── Comparison Section ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="The Difference"
            title="Others vs. ShreejeeNexus"
            description="Side-by-side, the difference is clear. We don't just promise — we prove it."
            center
          />

          <FadeUp>
            <div className="overflow-hidden rounded-2xl border border-peacock/10">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_1fr_1fr] bg-peacock text-sm font-semibold text-mist">
                <div className="px-6 py-4" />
                <div className="border-l border-mist/10 px-6 py-4 text-center">
                  Others
                </div>
                <div className="border-l border-mist/10 bg-marigold/20 px-6 py-4 text-center">
                  ShreejeeNexus
                </div>
              </div>

              {/* Data rows */}
              {comparisons.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1fr_1fr_1fr] text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-mist/60"
                  }`}
                >
                  <div className="px-6 py-5 font-semibold text-peacock">
                    {row.label}
                  </div>
                  <div className="border-l border-peacock/5 px-6 py-5 text-peacock/60">
                    {row.others}
                  </div>
                  <div className="border-l border-peacock/5 bg-marigold/5 px-6 py-5 font-medium text-peacock">
                    ✓&ensp;{row.us}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner
        title="Experience the difference."
        description="Partner with a team that treats your growth like their own. Let's start a conversation."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
