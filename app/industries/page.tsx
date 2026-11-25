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
  title: "Industries We Serve | Shreejee Nexus",
  description:
    "Tailored digital solutions, research frameworks, and scalable platforms built specifically for your vertical.",
};

const INDUSTRIES_LIST = [
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    icon: "🏥",
    tagline: "Empowering Care Delivery with Digital Health",
    desc: "HIPAA-compliant platforms, telemedicine portals, patient feedback loops, and medical analytics.",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    icon: "🏭",
    tagline: "Smart Operations & Connected Supply Chains",
    desc: "Predictive maintenance, industrial IoT dashboards, inventory tracking, and ERP integration.",
  },
  {
    title: "Financial Services",
    href: "/industries/financial-services",
    icon: "💳",
    tagline: "Secure, Scalable Fintech Platforms",
    desc: "Digital banking interfaces, risk analytics, regulatory compliance, and seamless payment gateways.",
  },
  {
    title: "Hospitality & Travel",
    href: "/industries/hospitality-travel",
    icon: "✈️",
    tagline: "Frictionless Guest Journeys & Booking Engines",
    desc: "Dynamic booking systems, guest loyalty platforms, revenue management tools, and traveler insights.",
  },
  {
    title: "Startups",
    href: "/industries/startups",
    icon: "🚀",
    tagline: "Rapid MVPs & Product-Market Fit Validation",
    desc: "Agile product discovery, investor-ready prototypes, research-backed go-to-market strategies.",
  },
  {
    title: "Retail & E-commerce",
    href: "/industries/retail-ecommerce",
    icon: "🛍️",
    tagline: "Omnichannel Commerce & Conversion Optimization",
    desc: "High-performance headless storefronts, checkout optimization, inventory sync, and customer retention.",
  },
  {
    title: "Education",
    href: "/industries/education",
    icon: "🎓",
    tagline: "Modern Learning Systems & Student Portals",
    desc: "LMS architectures, interactive virtual classrooms, student engagement analytics, and credentialing.",
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    icon: "🏢",
    tagline: "PropTech, Virtual Showcases & Lead Engines",
    desc: "Interactive property portals, broker CRMs, virtual touring integration, and high-intent buyer acquisition.",
  },
  {
    title: "Technology & SaaS",
    href: "/industries/technology-saas",
    icon: "💻",
    tagline: "Cloud Architectures & Scalable Platforms",
    desc: "SaaS platform engineering, API integrations, developer tools, user onboarding funnels, and churn modeling.",
  },
];

export default function IndustriesIndexPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Specialized Verticals"
        title="Digital solutions built for your industry."
        description="We understand that every sector faces unique regulatory hurdles, customer expectations, and technical demands. Our vertical-specific solutions turn industry bottlenecks into competitive advantages."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Sector Expertise"
            title="Purpose-Built Digital Platforms"
            description="Explore our specialized services and case studies across 9 major global industries."
            center
          />

          <StaggerParent className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_LIST.map((ind) => (
              <StaggerChild key={ind.href}>
                <Link
                  href={ind.href}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-peacock/10 bg-white/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-marigold/60 hover:shadow-xl"
                >
                  <FloatingShape className="-right-6 -top-6 h-20 w-20 bg-marigold/10 transition group-hover:scale-150" />
                  <div>
                    <span className="text-4xl" aria-hidden="true">
                      {ind.icon}
                    </span>

                    <h3 className="mt-6 font-display text-2xl font-bold text-peacock transition-colors group-hover:text-peacock">
                      {ind.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-marigold">
                      {ind.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-peacock/70">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 border-t border-peacock/10 pt-4 text-sm font-bold text-peacock transition-transform duration-300 group-hover:translate-x-1">
                    <span>View Industry Solutions</span>
                    <span className="text-marigold">→</span>
                  </div>
                </Link>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      <CtaBanner
        title="Don't see your specific industry listed?"
        description="We also deliver custom solutions across logistics, non-profits, energy, and media. Let's discuss your domain requirements."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </main>
  );
}

