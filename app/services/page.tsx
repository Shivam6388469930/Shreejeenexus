import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Our Services | Shreejee Nexus",
  description:
    "Explore our full suite of research, survey programming, digital marketing, AI automation, and software development services.",
};

const SERVICES_LIST = [
  {
    title: "Market Research",
    href: "/services/market-research",
    category: "Insights & Strategy",
    icon: "📊",
    desc: "Rigorous quantitative and qualitative studies, competitive benchmarking, and consumer sentiment diagnostics.",
  },
  {
    title: "Survey Programming",
    href: "/services/survey-programming",
    category: "Insights & Strategy",
    icon: "📋",
    desc: "Complex logic scripting across Decipher, Qualtrics, and Confirmit with multi-language and quota balancing.",
  },
  {
    title: "Business Consulting",
    href: "/services/business-consulting",
    category: "Strategy & Advisory",
    icon: "💼",
    desc: "Strategic advisory for growth, operations optimization, market entry, and organizational transformation.",
  },
  {
    title: "Analytics & Business Intelligence",
    href: "/services/analytics",
    category: "Data & BI",
    icon: "📈",
    desc: "Interactive dashboards, predictive models, data warehouse pipelines, and automated reporting.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    href: "/services/seo",
    category: "Digital Growth",
    icon: "🔍",
    desc: "Technical audits, keyword authority strategies, local SEO, and backlink architectures that dominate organic search.",
  },
  {
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    category: "Digital Growth",
    icon: "🎯",
    desc: "ROI-driven paid media across Google, Meta, and LinkedIn with full-funnel attribution and conversion optimization.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    category: "Digital Growth",
    icon: "📱",
    desc: "Comprehensive multi-channel campaigns, social media management, brand awareness, and email automation.",
  },
  {
    title: "Brand Strategy & Creative Design",
    href: "/services/branding",
    category: "Creative & Brand",
    icon: "✨",
    desc: "Cohesive brand identities, visual systems, positioning frameworks, and unforgettable creative narratives.",
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    category: "Product & Experience",
    icon: "🎨",
    desc: "Human-centric user research, wireframing, high-fidelity prototypes, and scalable design systems.",
  },
  {
    title: "Website Design & Development",
    href: "/services/web-development",
    category: "Engineering",
    icon: "🌐",
    desc: "Lightning-fast Next.js websites, headless e-commerce, custom CMS builds, and progressive web apps.",
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    category: "Engineering",
    icon: "⚙️",
    desc: "Enterprise web platforms, cloud-native architectures, API microservices, and custom workflow software.",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-apps",
    category: "Engineering",
    icon: "📲",
    desc: "Native iOS/Android and cross-platform Flutter/React Native applications engineered for engagement.",
  },
  {
    title: "AI & Business Automation",
    href: "/services/ai-automation",
    category: "Future Tech",
    icon: "🤖",
    desc: "Intelligent process automation, AI conversational agents, NLP document pipelines, and machine learning models.",
  },
];

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Our Full Capabilities"
        title="Research-led insights. Connected growth."
        description="We bridge the gap between deep market understanding and cutting-edge digital execution. Explore how our services help forward-thinking companies scale faster."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Capabilities Directory"
            title="Comprehensive Solutions for Modern Business"
            description="From initial market validation to technical deployment and customer acquisition, we support every phase of your growth journey."
            center
          />

          <StaggerParent className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_LIST.map((service) => (
              <StaggerChild key={service.href}>
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-peacock/10 bg-white/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-marigold/60 hover:shadow-xl"
                >
                  <FloatingShape className="-right-6 -top-6 h-20 w-20 bg-marigold/10 transition group-hover:scale-150" />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl" aria-hidden="true">
                        {service.icon}
                      </span>
                      <span className="rounded-full bg-peacock/10 px-3 py-1 text-xs font-semibold text-peacock">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold text-peacock transition-colors group-hover:text-peacock">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-peacock/70">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-peacock/10 pt-4 text-sm font-bold text-peacock transition-transform duration-300 group-hover:translate-x-1 group-hover:text-peacock">
                    <span>Explore Service</span>
                    <span className="text-marigold">→</span>
                  </div>
                </Link>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      <CtaBanner
        title="Ready to transform your business?"
        description="Talk to our specialists to design a tailor-made roadmap combining research and engineering."
        buttonText="Schedule a discovery call"
        buttonHref="/contact"
      />
    </main>
  );
}

