import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PageHero,
  SectionHeading,
  FadeUp,
  StaggerParent,
  StaggerChild,
  CtaBanner,
} from "@/components/PageAnimations";

export const metadata: Metadata = {
  title: "Insights & Blog | Shreejee Nexus",
  description:
    "Thought leadership, expert analysis, and actionable insights on market research, digital marketing, technology, and business strategy.",
};

/* ── Data ── */

const categories = [
  "All",
  "Market Research",
  "Digital Marketing",
  "Technology",
  "Analytics",
  "Design",
  "Business Strategy",
];

const featuredPost = {
  category: "Market Research",
  slug: "future-of-market-research-ai",
  title: "The Future of Market Research in the Age of AI",
  excerpt:
    "Artificial intelligence is fundamentally reshaping how we gather, process, and interpret consumer data. Discover the trends defining the next decade of research methodology — from predictive modelling to real-time sentiment analysis.",
  date: "October 22, 2026",
  readTime: "8 min read",
  image: "/images/insight-ai.jpg",
};

const posts = [
  {
    category: "Digital Marketing",
    slug: "data-driven-paid-media-strategies",
    title: "5 Data-Driven Strategies to Supercharge Your Paid Media",
    excerpt:
      "Stop guessing and start optimising. Learn how first-party data, creative testing, and attribution modelling can dramatically improve your ROAS.",
    date: "October 15, 2026",
    image: "/images/insight-marketing.jpg",
  },
  {
    category: "Technology",
    slug: "building-scalable-saas-platforms",
    title: "Building Scalable SaaS Platforms: Lessons from the Trenches",
    excerpt:
      "Our engineering team shares hard-won insights on architecture patterns, CI/CD pipelines, and multi-tenant design that keep products reliable at scale.",
    date: "October 8, 2026",
    image: "/images/industry-tech.jpg",
  },
  {
    category: "Analytics",
    slug: "actionable-analytics-guide",
    title: "From Raw Numbers to Real Impact: A Guide to Actionable Analytics",
    excerpt:
      "Dashboards don't drive decisions — narratives do. Here's how to transform sprawling datasets into clear, compelling stories for stakeholders.",
    date: "September 30, 2026",
    image: "/images/categories/business-growth.jpg",
  },
  {
    category: "Market Research",
    slug: "designing-high-completion-surveys",
    title: "Designing Surveys that People Actually Want to Complete",
    excerpt:
      "Response rates are falling across every channel. We explore question design, mobile-first layouts, and incentive models that reverse the trend.",
    date: "September 22, 2026",
    image: "/images/insight-research.jpg",
  },
  {
    category: "Business Strategy",
    slug: "why-go-to-market-plans-fail",
    title: "Why Most Go-to-Market Plans Fail — and How to Fix Yours",
    excerpt:
      "A well-crafted GTM strategy is the difference between a launch that lands and one that fizzles. We break down the five most common pitfalls.",
    date: "September 14, 2026",
    image: "/images/industry-startups.jpg",
  },
  {
    category: "Design",
    slug: "roi-of-user-experience",
    title: "The ROI of User Experience: Making the Business Case for UX",
    excerpt:
      "Great design isn't a luxury — it's a growth lever. We quantify the impact of UX improvements on conversion, retention, and customer lifetime value.",
    date: "September 6, 2026",
    image: "/images/categories/graphic-design.jpg",
  },
];

const categoryColors: Record<string, string> = {
  "Market Research": "bg-peacock/10 text-peacock",
  "Digital Marketing": "bg-marigold/15 text-amber-700",
  Technology: "bg-sky-100 text-sky-700",
  Analytics: "bg-emerald-100 text-emerald-700",
  Design: "bg-fuchsia-100 text-fuchsia-700",
  "Business Strategy": "bg-rose-100 text-rose-700",
};

/* ── Page ── */

export default function InsightsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Insights & Blog"
        title="Ideas that drive growth."
        description="Thought leadership, expert analysis, and practical frameworks from our team of researchers, strategists, and technologists."
      />

      {/* ── Categories bar ── */}
      <section className="border-b border-peacock/10 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-[1240px] px-6">
          <FadeUp>
            <div className="no-scrollbar flex gap-3 overflow-x-auto py-5">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    i === 0
                      ? "bg-peacock text-mist"
                      : "bg-peacock/5 text-peacock hover:bg-peacock/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Featured post ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <FadeUp>
            <Link
              href={`/insights/${featuredPost.slug}`}
              className="group relative block overflow-hidden rounded-3xl bg-peacock shadow-xl transition hover:shadow-2xl hover:-translate-y-0.5"
            >
              {/* background image */}
              <div className="absolute inset-0">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover opacity-35 transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  priority
                />
              </div>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-peacock via-peacock/90 to-transparent z-10" />
              {/* decorative circles */}
              <span className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold/10" />
              <span className="absolute bottom-10 right-1/4 h-8 w-8 rounded-full bg-marigold/30" />

              <div className="relative z-20 flex flex-col justify-end gap-5 p-8 md:p-14 lg:min-h-[440px]">
                <span className="w-fit rounded-full bg-marigold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-peacock shadow-sm">
                  {featuredPost.category}
                </span>
                <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-mist md:text-5xl">
                  {featuredPost.title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-mist/85 md:text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-mist/70">
                  <time>{featuredPost.date}</time>
                  <span className="h-1 w-1 rounded-full bg-mist/40" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-marigold transition group-hover:gap-3">
                  Read article
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Blog grid ── */}
      <section className="py-20 md:py-28 bg-white/40">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Latest Articles"
            title="Fresh perspectives"
            description="Stay ahead with expert takes on research, marketing, technology, and strategy."
            center
          />

          <StaggerParent className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerChild key={post.title}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-peacock/10 bg-white/80 backdrop-blur transition hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Article thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-peacock/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <span
                      className={`absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                        categoryColors[post.category] ?? "bg-peacock/10 text-peacock"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold tracking-tight text-peacock group-hover:text-[#08404a]">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-peacock/70">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-peacock/10 pt-4">
                      <time className="text-xs text-peacock/60">{post.date}</time>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-peacock transition group-hover:text-marigold group-hover:gap-2">
                        Read more
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerChild>
            ))}
          </StaggerParent>

          {/* Load-more button */}
          <FadeUp className="mt-14 text-center">
            <button className="rounded-[14px_14px_14px_4px] border-2 border-peacock/15 px-8 py-4 font-semibold text-peacock transition hover:-translate-y-0.5 hover:border-peacock hover:shadow-lg">
              Load more articles
            </button>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner
        title="Subscribe to our newsletter for the latest insights."
        description="Join thousands of professionals who receive our weekly digest of research trends, strategy tips, and product updates."
        buttonText="Subscribe now"
        buttonHref="/contact"
      />
    </main>
  );
}
