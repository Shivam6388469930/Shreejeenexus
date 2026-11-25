import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  CtaBanner,
  FadeUp,
  StaggerParent,
  StaggerChild,
  SectionHeading,
} from "@/components/PageAnimations";
import PortfolioFilters from "./PortfolioFilters";

export const metadata: Metadata = {
  title: "Portfolio | Shreejee Nexus",
  description:
    "Explore our portfolio of survey programming, market research, digital marketing, analytics, and web development projects delivering measurable impact.",
};

/* ── Project data ── */
const categories = [
  "All",
  "Survey Programming",
  "Market Research",
  "Digital Marketing",
  "Analytics",
  "Web Development",
] as const;

const projects = [
  {
    title: "Global Brand Tracker Survey",
    category: "Survey Programming",
    slug: "survey-programming",
    description:
      "Complex multi-language survey with advanced skip logic, quota management, and real-time dashboards for a Fortune 500 FMCG brand.",
    gradient: "from-peacock to-[#0a3d47]",
    image: "/images/categories/survey-programming.jpg",
  },
  {
    title: "Consumer Insights Study",
    category: "Market Research",
    slug: "market-research",
    description:
      "Comprehensive qualitative & quantitative research across 12 markets, uncovering actionable consumer trends and purchase drivers.",
    gradient: "from-marigold to-[#e09500]",
    image: "/images/categories/market-research.jpg",
  },
  {
    title: "Performance Marketing Campaign",
    category: "Digital Marketing",
    slug: "marketing",
    description:
      "Data-driven paid media strategy across Google, Meta, and LinkedIn — achieving 3.2× ROAS and 45% reduction in CAC.",
    gradient: "from-peacock via-[#0d6070] to-marigold/80",
    image: "/images/categories/digital-marketing.jpg",
  },
  {
    title: "Predictive Sales Analytics",
    category: "Analytics",
    slug: "analytics",
    description:
      "End-to-end BI dashboard with predictive models that improved forecast accuracy by 28% and identified $2M in revenue opportunities.",
    gradient: "from-[#0a3d47] to-peacock",
    image: "/images/categories/business-growth.jpg",
  },
  {
    title: "E-Commerce Platform Build",
    category: "Web Development",
    slug: "development",
    description:
      "Full-stack Next.js e-commerce solution with headless CMS, Stripe payments, and inventory management — launched in 10 weeks.",
    gradient: "from-marigold/90 via-[#f5c860] to-mist",
    image: "/images/categories/web-development.jpg",
  },
  {
    title: "Healthcare Survey Panel",
    category: "Survey Programming",
    slug: "survey-programming",
    description:
      "HIPAA-compliant patient feedback platform processing 50K+ monthly responses with automated reporting pipelines.",
    gradient: "from-peacock to-marigold/60",
    image: "/images/services/survey-programming.jpg",
  },
];

/* ── Stats ── */
const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "12+", label: "Industries Served" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Our Portfolio"
        title="Proven work. Measurable impact."
        description="From survey scripting to full-stack development, we deliver results that move the needle. Explore the projects that showcase our expertise and the outcomes our clients trust us to deliver."
      />

      {/* ── Filter + Grid ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Featured Projects"
            description="A curated selection of work across our core service areas."
            center
          />

          {/* Filter tabs */}
          <PortfolioFilters
            categories={categories as unknown as string[]}
            projects={projects}
          />
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="border-y border-peacock/10 bg-white/60 py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <StaggerParent className="grid gap-10 sm:grid-cols-3 text-center">
            {stats.map((s) => (
              <StaggerChild key={s.label}>
                <p className="font-display text-5xl font-extrabold tracking-tight text-peacock md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-2 text-lg text-peacock/60">{s.label}</p>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner
        title="Have a project in mind? Let's make it happen."
        description="Tell us about your goals and we'll craft a solution that delivers real, measurable outcomes."
        buttonText="Start a conversation"
        buttonHref="/contact"
      />
    </>
  );
}
