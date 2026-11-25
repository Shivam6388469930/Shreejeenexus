import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PageHero,
  SectionHeading,
  FadeUp,
  StaggerParent,
  StaggerChild,
  CtaBanner,
  FloatingShape,
} from "@/components/PageAnimations";

interface PortfolioCategory {
  title: string;
  eyebrow: string;
  description: string;
  overview: string;
  stats: { metric: string; label: string }[];
  caseStudies: {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    impact: string[];
    tags: string[];
  }[];
  capabilities: string[];
}

const PORTFOLIO_DATA: Record<string, PortfolioCategory> = {
  "survey-programming": {
    title: "Survey Programming & Logic Solutions",
    eyebrow: "Portfolio Case Studies",
    description:
      "Complex scripting, multi-language internationalization, quota control, and seamless respondent routing for global market research panels.",
    overview:
      "We build robust, high-integrity survey instruments across Decipher, Confirmit, Qualtrics, and custom engines. Our programming ensures maximum response quality, minimal drop-offs, and 100% compliance with data privacy standards.",
    stats: [
      { metric: "500K+", label: "Completed Interviews" },
      { metric: "99.8%", label: "Data Quality Rate" },
      { metric: "25+", label: "Languages Programmed" },
      { metric: "<24h", label: "Average Turnaround" },
    ],
    caseStudies: [
      {
        title: "Multi-Country FMCG Brand Health Tracker",
        client: "Global Consumer Goods Leader",
        challenge:
          "Managing dynamic quotas across 14 languages with complex skip logic and continuous fielding without server bottlenecks.",
        solution:
          "Engineered a modular Decipher questionnaire architecture with adaptive routing, audio/video testing, and real-time dashboard exports.",
        impact: [
          "Reduced respondent drop-off from 18% to 4.2%",
          "Automated daily reporting saving 15 analyst hours/week",
          "Flawless execution across 75,000 completed surveys",
        ],
        tags: ["Decipher", "Multi-Market", "Advanced Piping", "Brand Tracking"],
      },
      {
        title: "Specialty Healthcare & HCP Conjoint Analysis",
        client: "Life Sciences & Pharma Research Group",
        challenge:
          "Screening verified oncologists and cardiologists with precise specialty screening rules and dynamic discrete-choice conjoint grids.",
        solution:
          "Developed custom interactive conjoint cards with responsive mobile layouts and double-blind qualification verification.",
        impact: [
          "100% target HCP sample achieved ahead of schedule",
          "Seamless export into Sawtooth analysis pipeline",
          "Zero survey logic or quota discrepancies reported",
        ],
        tags: ["Healthcare", "Conjoint Analysis", "Mobile Optimized", "HIPAA Ready"],
      },
    ],
    capabilities: [
      "Decipher, Qualtrics & Confirmit Scripting",
      "Dynamic Conjoint & MaxDiff Implementations",
      "Video/Audio Media Testing & Eye-Tracking Integration",
      "Custom Javascript & Interactive Question Types",
      "Real-Time Quota & Balancing Controllers",
      "API Integrations with Sample Providers",
    ],
  },
  "market-research": {
    title: "Market Research & Online Surveys",
    eyebrow: "Portfolio Case Studies",
    description:
      "Rigorous quantitative studies, qualitative focus panels, and competitive intelligence that uncover what customers truly think and do.",
    overview:
      "From questionnaire design and sample procurement to deep statistical analysis and executive storytelling, we transform raw market feedback into clear strategic moves.",
    stats: [
      { metric: "150+", label: "Research Studies Conducted" },
      { metric: "12+", label: "Geographies Covered" },
      { metric: "98%", label: "Client Re-engagement Rate" },
      { metric: "40%", label: "Faster Strategic Decision-Making" },
    ],
    caseStudies: [
      {
        title: "Next-Gen Fintech Market Entry Feasibility",
        client: "Series-B Digital Banking Platform",
        challenge:
          "Assessing consumer trust, competitor switching barriers, and pricing tolerance in a saturated digital wallet landscape.",
        solution:
          "Designed a mixed-method study combining 2,400 online quantitative respondents with 24 in-depth virtual exploratory interviews.",
        impact: [
          "Identified underserved micro-business merchant segment",
          "Informed go-to-market pricing structure adopted at launch",
          "Contributed to 250% higher customer sign-ups in Q1",
        ],
        tags: ["Fintech", "Market Entry", "Pricing Strategy", "Quantitative + Qual"],
      },
      {
        title: "B2B SaaS Buyer Journey & Churn Forensics",
        client: "Enterprise HR Tech Firm",
        challenge:
          "Uncovering reasons behind mid-market subscription churn and identifying feature gaps versus legacy competitors.",
        solution:
          "Executed win-loss interviews with 80 enterprise buyers and ran a segmented satisfaction pulse across 600 decision-makers.",
        impact: [
          "Pinpointed 3 key workflow blockers causing 65% of cancellations",
          "Guided product roadmap reprioritization for next 2 quarters",
          "Net retention rate improved by 14 points within 6 months",
        ],
        tags: ["B2B SaaS", "Churn Analysis", "Win-Loss Research", "Buyer Persona"],
      },
    ],
    capabilities: [
      "Brand Health & Sentiment Tracking",
      "Product Concept & Packaging Testing",
      "Pricing Elasticity (Van Westendorp & Gabor-Granger)",
      "Customer Satisfaction (CSAT, NPS, CES)",
      "Employee Engagement Diagnostics",
      "Target Audience Segmentation & Personas",
    ],
  },
  marketing: {
    title: "Digital & Performance Marketing",
    eyebrow: "Portfolio Case Studies",
    description:
      "High-precision search, social, and programmatic campaigns engineered for verified revenue, customer acquisition, and maximum ROAS.",
    overview:
      "We pair creative storytelling with statistical audience targeting and conversion rate optimization to turn clicks into profitable long-term customers.",
    stats: [
      { metric: "3.4x", label: "Average Return on Ad Spend" },
      { metric: "$10M+", label: "Ad Spend Managed" },
      { metric: "-42%", label: "Reduction in Customer Acquisition Cost" },
      { metric: "240%", label: "Organic Search Growth Average" },
    ],
    caseStudies: [
      {
        title: "DTC Lifestyle Brand Scale Campaign",
        client: "Sustainable Apparel Retailer",
        challenge:
          "Scaling monthly revenues past $300k without ballooning customer acquisition costs on Meta and Google.",
        solution:
          "Revamped the entire creative funnel with 40+ UGC variations, dynamic retargeting, and full server-side Conversion API tracking.",
        impact: [
          "Scaled ad revenue from $280K to $950K/month",
          "Maintained blended ROAS of 3.8x during peak holiday season",
          "Lowered cart abandonment rate by 22% with SMS workflows",
        ],
        tags: ["Performance Ads", "Meta Ads", "Google Ads", "Shopify Plus"],
      },
      {
        title: "B2B Enterprise Lead Engine for Industrial IoT",
        client: "Smart Manufacturing Platform",
        challenge:
          "Reaching high-value plant managers and CTOs with high buying authority in a niche technical vertical.",
        solution:
          "Executed high-intent LinkedIn InMail sequences, targeted Google Search on technical problem keywords, and gated whitepapers.",
        impact: [
          "Generated 140+ qualified enterprise sales meetings",
          "Secured $3.2M in verified pipeline contract value",
          "Decreased cost per qualified lead (CPQL) by 38%",
        ],
        tags: ["B2B Demand Gen", "LinkedIn Ads", "Account-Based Marketing", "SEO"],
      },
    ],
    capabilities: [
      "Paid Search (Google & Bing Ads)",
      "Paid Social (Meta, LinkedIn, TikTok, X)",
      "Conversion Rate Optimization (CRO)",
      "Programmatic & Display Advertising",
      "Funnel Architecture & Copywriting",
      "Attribution Modeling & Analytics Tagging",
    ],
  },
  analytics: {
    title: "Business & Data Analytics",
    eyebrow: "Portfolio Case Studies",
    description:
      "Modern data pipelines, executive dashboards, predictive modeling, and business intelligence systems that turn numbers into clarity.",
    overview:
      "We connect fragmented data silos into unified, real-time analytics platforms that empower executives to make proactive, evidence-based choices.",
    stats: [
      { metric: "10x", label: "Faster Executive Reporting" },
      { metric: "100M+", label: "Data Records Modeled" },
      { metric: "99.9%", label: "Automated ETL Reliability" },
      { metric: "35%", label: "Inventory Waste Reduction" },
    ],
    caseStudies: [
      {
        title: "Real-Time Omnichannel Retail Intelligence Hub",
        client: "Multi-Store Retail Chain (80+ Locations)",
        challenge:
          "Inconsistent inventory tracking across physical stores and online portals resulting in stockouts and delayed replenishment.",
        solution:
          "Engineered a modern data stack using Snowflake and dbt with PowerBI interactive dashboards refreshing hourly.",
        impact: [
          "Eliminated 12 hours of manual spreadsheet compiling per week",
          "Reduced out-of-stock incidents by 34% across core SKUs",
          "Enabled dynamic store-to-store inventory rebalancing",
        ],
        tags: ["Snowflake", "PowerBI", "dbt", "Supply Chain Analytics"],
      },
      {
        title: "Predictive Patient Appointment & Resource Optimizer",
        client: "Regional Healthcare Network",
        challenge:
          "High patient no-show rates (19%) leading to idle clinical staff and delayed patient treatments.",
        solution:
          "Built a machine learning classification model predicting no-show probabilities to trigger intelligent reminder cadences.",
        impact: [
          "Reduced overall no-show rate to under 7.5%",
          "Generated an estimated $840K in recovered clinic billings",
          "Staff scheduling efficiency improved by 28%",
        ],
        tags: ["Machine Learning", "Python", "Healthcare BI", "Tableau"],
      },
    ],
    capabilities: [
      "Modern Data Warehouse Setup (Snowflake, BigQuery)",
      "Interactive BI Dashboards (Power BI, Tableau, Looker)",
      "Automated ETL / ELT Pipelines",
      "Predictive Machine Learning Modeling",
      "Customer Lifetime Value & Churn Modeling",
      "Marketing Attribution & ROI Dashboards",
    ],
  },
  development: {
    title: "Website & App Development",
    eyebrow: "Portfolio Case Studies",
    description:
      "Scalable web applications, high-performance responsive portals, mobile experiences, and digital platforms built with modern technology.",
    overview:
      "We build resilient, lightning-fast web applications and mobile apps using Next.js, React, Node.js, and cloud-native architecture. Every product is engineered for high conversion, rock-solid security, and effortless scale.",
    stats: [
      { metric: "99/100", label: "Average Google Lighthouse Score" },
      { metric: "<1.2s", label: "Average Page Load Time" },
      { metric: "99.99%", label: "Application Uptime Record" },
      { metric: "60%", label: "Increase in Mobile Conversions" },
    ],
    caseStudies: [
      {
        title: "Next-Gen Headless E-Commerce Platform",
        client: "Luxury Lifestyle & Home Decor Brand",
        challenge:
          "A slow legacy CMS site with high cart bounce rates, poor mobile performance, and frequent checkout crashes.",
        solution:
          "Rebuilt with Next.js App Router, Tailwind CSS, Shopify Headless Storefront API, and global edge caching.",
        impact: [
          "Page load time improved from 4.8 seconds to 0.9 seconds",
          "Mobile conversion rate spiked by 64% within first 60 days",
          "Seamless international currency checkout in 18 regions",
        ],
        tags: ["Next.js", "Tailwind CSS", "Shopify Storefront", "Vercel Edge"],
      },
      {
        title: "Cloud-Native B2B Logistics & Fleet Portal",
        client: "Cross-Border Logistics Carrier",
        challenge:
          "Manual dispatch operations and phone tracking causing dispatch errors and customer visibility complaints.",
        solution:
          "Delivered a real-time responsive web app with live GPS map tracking, driver dispatch scheduling, and automated invoicing.",
        impact: [
          "Over 12,000 active monthly freight tracking sessions",
          "Dispatch time per shipment reduced by 55%",
          "Customer support inquiry calls dropped by 48%",
        ],
        tags: ["React", "Node.js", "WebSockets", "Mapbox", "AWS"],
      },
    ],
    capabilities: [
      "Custom Web Applications (Next.js, React, TypeScript)",
      "Headless E-Commerce Solutions (Shopify, Stripe, Medusa)",
      "Progressive Web Apps (PWA) & Native Mobile Apps",
      "REST & GraphQL Microservices Architecture",
      "UI/UX Design Systems & High-Fidelity Prototypes",
      "DevOps, CI/CD & Cloud Infrastructure Management",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(PORTFOLIO_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = PORTFOLIO_DATA[slug];

  if (!data) {
    return { title: "Portfolio | Shreejee Nexus" };
  }

  return {
    title: `${data.title} | Shreejee Nexus Portfolio`,
    description: data.description,
  };
}

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = PORTFOLIO_DATA[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl border border-mist/20 bg-mist/10 px-5 py-2.5 text-sm font-semibold text-mist backdrop-blur transition hover:bg-mist/20"
          >
            ← Back to all portfolio
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-marigold px-6 py-2.5 text-sm font-bold text-peacock shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Discuss a project
          </Link>
        </div>
      </PageHero>

      {/* ── Key Metrics ── */}
      <section className="border-b border-peacock/10 bg-white py-12">
        <div className="mx-auto max-w-[1240px] px-6">
          <StaggerParent className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {data.stats.map((s) => (
              <StaggerChild key={s.label}>
                <div className="rounded-2xl border border-peacock/10 bg-mist/50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
                  <p className="font-display text-3xl font-extrabold text-peacock md:text-5xl">
                    {s.metric}
                  </p>
                  <p className="mt-2 text-sm font-medium text-peacock/70">{s.label}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── Overview & Capabilities ── */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="text-sm font-semibold uppercase tracking-widest text-marigold">
                  Domain Expertise
                </p>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-peacock md:text-4xl">
                  Strategic execution, measurable outcomes.
                </h2>
                <p className="mt-5 leading-relaxed text-peacock/75">{data.overview}</p>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                title="Core Capabilities"
                description="Specialized competencies engineered to deliver precision and scale."
              />
              <StaggerParent className="grid gap-4 sm:grid-cols-2">
                {data.capabilities.map((cap) => (
                  <StaggerChild key={cap}>
                    <div className="flex items-center gap-3.5 rounded-xl border border-peacock/10 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:border-marigold hover:shadow-md">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-marigold/20 text-peacock font-bold text-xs">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-peacock">{cap}</span>
                    </div>
                  </StaggerChild>
                ))}
              </StaggerParent>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Case Studies ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Recent Project Showcases"
            description="Deep dive into challenges tackled, methods deployed, and real-world results delivered."
            center
          />

          <div className="mt-14 space-y-12">
            {data.caseStudies.map((cs, idx) => (
              <FadeUp key={cs.title} delay={idx}>
                <div className="relative overflow-hidden rounded-3xl border border-peacock/15 bg-white p-8 shadow-lg transition hover:shadow-2xl md:p-12">
                  <FloatingShape className="-right-10 -top-10 h-36 w-36 bg-marigold/15" delay={idx} />
                  
                  <div className="relative">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-peacock/10 pb-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-marigold">
                          {cs.client}
                        </span>
                        <h3 className="mt-1 font-display text-2xl font-extrabold text-peacock md:text-3xl">
                          {cs.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-peacock/10 px-3 py-1 text-xs font-semibold text-peacock"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-peacock">
                            The Challenge
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-peacock/75">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-peacock">
                            Our Solution
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-peacock/75">
                            {cs.solution}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-peacock/10 bg-mist/60 p-6 md:p-8">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-peacock">
                          Key Impact & Results
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {cs.impact.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-sm text-peacock">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-peacock text-mist text-xs font-bold">
                                →
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CtaBanner
        title={`Looking for high-impact ${data.title}?`}
        description="Let's build a customized roadmap for your unique objectives and timeline."
        buttonText="Schedule a consultation"
        buttonHref="/contact"
      />
    </main>
  );
}

