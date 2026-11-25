import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, FadeUp, CtaBanner } from "@/components/PageAnimations";

interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; avatar: string };
  excerpt: string;
  content: string[];
  takeaways: string[];
}

const ARTICLES: Record<string, Article> = {
  "future-of-market-research-ai": {
    title: "The Future of Market Research in the Age of AI",
    category: "Market Research",
    date: "October 22, 2026",
    readTime: "8 min read",
    author: {
      name: "Arun Kumar",
      role: "Head of Research & Strategy",
      avatar: "AK",
    },
    excerpt:
      "Artificial intelligence is fundamentally reshaping how we gather, process, and interpret consumer data. Discover the trends defining the next decade of research methodology.",
    takeaways: [
      "AI models automate data cleansing, reducing turnaround time by 60%.",
      "Synthetic respondents complement, but cannot wholly replace, human qualitative depth.",
      "Real-time voice and sentiment capture is unlocking spontaneous emotion scoring.",
      "The competitive moat will be ethical data curation and bespoke prompt pipelines.",
    ],
    content: [
      "The market research industry has traditionally balanced two competing pressures: speed and statistical rigor. For decades, conducting a multi-national brand tracker or a segmented consumer sentiment study meant weeks of fielding, painstaking data cleaning, and manual tabulations.",
      "Today, generative models and predictive analytics have shattered these timelines. Machine learning models can now monitor quota balances dynamically, identify duplicate or fraudulent panel respondents in fractions of a second, and automate open-ended coding with higher thematic consistency than fatigued human coders.",
      "However, speed without statistical validity is dangerous. At ShreejeeNexus, we champion a 'Human-in-the-Loop' methodology. AI handles the heavy lifting of parsing unstructured verbatims and cross-tabulating terabytes of demographic indices, while our senior research analysts synthesize those data points into strategic business decisions.",
      "As we look ahead, organizations that win will be those that integrate automated survey workflows directly into operational decision engines — turning consumer feedback from a quarterly post-mortem into a continuous strategic compass.",
    ],
  },
  "data-driven-paid-media-strategies": {
    title: "5 Data-Driven Strategies to Supercharge Your Paid Media",
    category: "Digital Marketing",
    date: "October 15, 2026",
    readTime: "6 min read",
    author: {
      name: "Vikram Joshi",
      role: "Director of Performance Marketing",
      avatar: "VJ",
    },
    excerpt:
      "Stop guessing and start optimising. Learn how first-party data, creative testing, and attribution modelling can dramatically improve your ROAS.",
    takeaways: [
      "First-party data signals outperform third-party cookies in targeting precision.",
      "High-velocity creative testing reveals winning hooks within 72 hours.",
      "Blended MER (Marketing Efficiency Ratio) prevents attribution double-counting.",
      "Landing page speed directly correlates with ad platform quality scores.",
    ],
    content: [
      "The era of lazy media buying is officially over. With third-party cookie deprecation and tightening privacy regulations across iOS and Android, growth marketers can no longer rely on algorithmic black boxes to magically deliver qualified buyers.",
      "Top-performing performance marketing teams now compete on data infrastructure and creative velocity. By feeding first-party CRM conversions back to Meta Conversions API and Google Enhanced Conversions, campaigns train bidding algorithms on verified revenue rather than superficial clicks.",
      "Furthermore, creative is now the biggest lever in targeting. Rather than tweaking micro-demographic sliders, testing 20 distinct hook variations in week one isolates the exact emotional triggers that convert cold prospects into high-LTV customers.",
    ],
  },
  "building-scalable-saas-platforms": {
    title: "Building Scalable SaaS Platforms: Lessons from the Trenches",
    category: "Technology",
    date: "October 8, 2026",
    readTime: "7 min read",
    author: {
      name: "Rohit Verma",
      role: "Senior Full-Stack Architect",
      avatar: "RV",
    },
    excerpt:
      "Our engineering team shares hard-won insights on architecture patterns, CI/CD pipelines, and multi-tenant design that keep products reliable at scale.",
    takeaways: [
      "Decouple core data models early to support multi-tenant isolation.",
      "Edge caching with Next.js reduces database load by over 70%.",
      "Automated canary deployments eliminate high-risk midnight releases.",
      "Design for observability with structured logging and distributed tracing.",
    ],
    content: [
      "Scaling a SaaS platform from ten early adopters to hundreds of thousands of daily active users presents distinct architectural inflection points. Code that performed admirably during the MVP phase frequently buckles under unexpected query patterns and concurrent background job queues.",
      "In this technical retrospective, we break down how modular architectures, event-driven microservices, and edge computing enable modern applications to maintain sub-second response times under peak global traffic surges.",
    ],
  },
  "actionable-analytics-guide": {
    title: "From Raw Numbers to Real Impact: A Guide to Actionable Analytics",
    category: "Analytics",
    date: "September 30, 2026",
    readTime: "5 min read",
    author: {
      name: "Anjali Mehta",
      role: "Lead Business & Data Analyst",
      avatar: "AM",
    },
    excerpt:
      "Dashboards don't drive decisions — narratives do. Here's how to transform sprawling datasets into clear, compelling stories for stakeholders.",
    takeaways: [
      "Limit executive dashboards to 5 core operational metrics.",
      "Pair every trend chart with a recommended business action.",
      "Automate data anomalies alerts before clients report discrepancies.",
    ],
    content: [
      "Most corporate data dashboards fail not because they lack data, but because they suffer from an abundance of noise. When executives open a dashboard crammed with 40 charts, cognitive overload sets in and decisions stall.",
      "Actionable analytics begins with backward design: defining the decision that must be made, determining the threshold for action, and presenting only the metrics that validate that specific direction.",
    ],
  },
  "designing-high-completion-surveys": {
    title: "Designing Surveys that People Actually Want to Complete",
    category: "Market Research",
    date: "September 22, 2026",
    readTime: "6 min read",
    author: {
      name: "Sana Khan",
      role: "Survey Programming Specialist",
      avatar: "SK",
    },
    excerpt:
      "Response rates are falling across every channel. We explore question design, mobile-first layouts, and incentive models that reverse the trend.",
    takeaways: [
      "Cap survey length at 12 minutes to prevent catastrophic completion drop-offs.",
      "Design grids as swipeable mobile cards rather than sprawling matrices.",
      "Progress indicators reduce abandonment by 23% when calibrated accurately.",
    ],
    content: [
      "Over 68% of survey respondents now complete questionnaires on smartphones while commuting or multitasking. Yet many enterprise surveys are still scripted as if respondents are seated at desktop monitors with wide horizontal displays.",
      "By eliminating tedious grid questions, implementing adaptive skip piping, and utilizing card-sort micro-interactions, survey programmers can achieve over 85% completion rates even among time-starved B2B executives.",
    ],
  },
  "why-go-to-market-plans-fail": {
    title: "Why Most Go-to-Market Plans Fail — and How to Fix Yours",
    category: "Business Strategy",
    date: "September 14, 2026",
    readTime: "7 min read",
    author: {
      name: "Raj Sharma",
      role: "Chief Executive Officer",
      avatar: "RS",
    },
    excerpt:
      "A well-crafted GTM strategy is the difference between a launch that lands and one that fizzles. We break down the five most common pitfalls.",
    takeaways: [
      "Validate willingness to pay before writing a single line of production code.",
      "Narrow target positioning to a single beachhead ICP before expanding.",
      "Align sales incentives with customer retention rather than raw signups.",
    ],
    content: [
      "The most common mistake startups and expanding enterprises make is conflating a marketing launch plan with a comprehensive Go-to-Market strategy. A press release and paid ad budget do not equal product-market alignment.",
      "A true GTM strategy addresses distribution unit economics, channel defensibility, competitive positioning, and customer onboarding friction simultaneously.",
    ],
  },
  "roi-of-user-experience": {
    title: "The ROI of User Experience: Making the Business Case for UX",
    category: "Design",
    date: "September 6, 2026",
    readTime: "5 min read",
    author: {
      name: "Neha Singh",
      role: "Lead UI/UX & Brand Designer",
      avatar: "NS",
    },
    excerpt:
      "Great design isn't a luxury — it's a growth lever. We quantify the impact of UX improvements on conversion, retention, and customer lifetime value.",
    takeaways: [
      "Every $1 invested in user research yields up to $100 in saved engineering rework.",
      "Streamlining checkout friction increases completed transactions by 35%.",
      "Consistent design systems accelerate development speed by 40%.",
    ],
    content: [
      "When budgets tighten, design is often mistakenly viewed as an aesthetic cosmetic expense. However, data from thousands of digital product audits demonstrates that user friction is the silent killer of marketing ROI.",
      "Investing in user journey mapping and rapid prototyping eliminates costly engineering dead-ends and ensures that every feature shipped directly addresses a validated customer pain point.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    return { title: "Article Not Found | Shreejee Nexus" };
  }

  return {
    title: `${article.title} | Shreejee Nexus Insights`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      >
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-mist/80">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-marigold font-bold text-peacock">
              {article.author.avatar}
            </span>
            <div>
              <p className="font-bold text-mist">{article.author.name}</p>
              <p className="text-xs text-mist/70">{article.author.role}</p>
            </div>
          </div>
          <span>•</span>
          <time>{article.date}</time>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </PageHero>

      {/* ── Article Body ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[860px] px-6">
          <FadeUp>
            {/* Key Takeaways Box */}
            <div className="mb-12 rounded-3xl border border-peacock/15 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
              <h3 className="font-display text-xl font-extrabold text-peacock md:text-2xl">
                Key Strategic Takeaways
              </h3>
              <ul className="mt-5 space-y-3">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex items-start gap-3 text-sm text-peacock/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-marigold text-xs font-bold text-peacock">
                      ✓
                    </span>
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-base leading-relaxed text-peacock/85 md:text-lg">
              {article.content.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Author Box */}
            <div className="mt-16 flex items-center gap-6 rounded-2xl border border-peacock/10 bg-mist/60 p-6 md:p-8">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-peacock text-xl font-bold text-mist">
                {article.author.avatar}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-marigold">
                  Written by
                </p>
                <h4 className="font-display text-lg font-bold text-peacock">
                  {article.author.name}
                </h4>
                <p className="text-sm text-peacock/70">{article.author.role}</p>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-12 flex justify-between border-t border-peacock/10 pt-6">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 font-semibold text-peacock transition hover:text-marigold"
              >
                ← Back to all insights
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-peacock transition hover:text-marigold"
              >
                Discuss with our team →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner
        title="Stay ahead of market shifts"
        description="Subscribe to our executive research briefing or book a consultation call."
        buttonText="Contact us"
        buttonHref="/contact"
      />
    </main>
  );
}

