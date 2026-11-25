import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHeading,
  FadeUp,
  StaggerParent,
  StaggerChild,
  CtaBanner,
  FloatingShape,
} from "@/components/PageAnimations";

/* ------------------------------------------------------------------ */
/*  Industry data map                                                  */
/* ------------------------------------------------------------------ */

interface IndustryChallenge {
  title: string;
  description: string;
}

interface IndustrySolution {
  icon: string;
  title: string;
  description: string;
}

interface IndustryStat {
  value: string;
  label: string;
}

interface IndustryData {
  name: string;
  tagline: string;
  description: string;
  heroDescription: string;
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  stats: IndustryStat[];
}

const industries: Record<string, IndustryData> = {
  healthcare: {
    name: "Healthcare",
    tagline: "Digital-First Patient Care",
    description:
      "We build HIPAA-compliant digital solutions for hospitals, clinics, and telemedicine providers — improving patient engagement and enabling data-driven clinical decisions.",
    heroDescription:
      "Empowering healthcare providers with secure, scalable digital solutions that improve patient outcomes and streamline operations.",
    challenges: [
      {
        title: "Data Silos & Interoperability",
        description:
          "Patient records spread across disconnected systems hinder coordinated care and slow clinical decision-making.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Navigating HIPAA, HITECH, and evolving data-privacy regulations demands constant vigilance and robust security frameworks.",
      },
      {
        title: "Patient Engagement",
        description:
          "Keeping patients informed and actively involved in their care journey remains a persistent challenge for most health systems.",
      },
      {
        title: "Rising Operational Costs",
        description:
          "Manual workflows, paper-based processes, and legacy infrastructure inflate costs while reducing staff productivity.",
      },
    ],
    solutions: [
      {
        icon: "🏥",
        title: "Telemedicine Platforms",
        description:
          "End-to-end virtual care solutions with HD video, e-prescriptions, and integrated EHR connectivity.",
      },
      {
        icon: "📊",
        title: "Health Data Analytics",
        description:
          "Real-time dashboards and predictive models that surface clinical insights from complex patient datasets.",
      },
      {
        icon: "🔒",
        title: "HIPAA-Compliant Systems",
        description:
          "Secure cloud architectures with encryption at rest & in transit, audit trails, and role-based access controls.",
      },
      {
        icon: "📱",
        title: "Patient Engagement Apps",
        description:
          "Mobile-first portals for appointment scheduling, medication reminders, and secure provider messaging.",
      },
      {
        icon: "🔗",
        title: "EHR/EMR Integration",
        description:
          "HL7 FHIR-compliant middleware that connects disparate clinical systems into a unified data fabric.",
      },
      {
        icon: "🤖",
        title: "AI-Driven Diagnostics",
        description:
          "Machine-learning models that assist clinicians with early detection, triage prioritization, and treatment recommendations.",
      },
    ],
    stats: [
      { value: "40%", label: "Reduction in Administrative Costs" },
      { value: "3×", label: "Patient Engagement Growth" },
      { value: "99.9%", label: "System Uptime Achieved" },
      { value: "60%", label: "Faster Report Generation" },
    ],
  },

  manufacturing: {
    name: "Manufacturing",
    tagline: "Smart Factory, Smarter Outcomes",
    description:
      "From IoT-powered shop floors to predictive maintenance systems, we help manufacturers digitise operations, reduce downtime, and boost throughput.",
    heroDescription:
      "Transforming traditional manufacturing with IoT integration, supply chain optimization, and intelligent automation.",
    challenges: [
      {
        title: "Unplanned Downtime",
        description:
          "Equipment failures without early warning cause production stoppages and cascading supply-chain delays.",
      },
      {
        title: "Supply Chain Complexity",
        description:
          "Multi-tier supplier networks, fluctuating demand, and geopolitical risks make end-to-end visibility critical yet elusive.",
      },
      {
        title: "Quality Consistency",
        description:
          "Maintaining Six Sigma–level quality across high-volume lines requires continuous monitoring and rapid corrective action.",
      },
      {
        title: "Legacy System Modernization",
        description:
          "Aging SCADA and MES platforms resist integration with modern cloud, analytics, and automation tooling.",
      },
    ],
    solutions: [
      {
        icon: "📡",
        title: "IoT Integration",
        description:
          "Sensor networks and edge computing that capture real-time machine data for instant visibility.",
      },
      {
        icon: "🔧",
        title: "Predictive Maintenance",
        description:
          "ML models that forecast failures before they happen, slashing unplanned downtime by up to 45%.",
      },
      {
        icon: "🏭",
        title: "ERP Solutions",
        description:
          "Custom-fit enterprise resource planning systems that unify procurement, production, and finance.",
      },
      {
        icon: "📦",
        title: "Supply Chain Optimization",
        description:
          "Demand sensing, inventory optimization, and logistics planning powered by advanced analytics.",
      },
      {
        icon: "✅",
        title: "Quality Management Systems",
        description:
          "Digital QMS platforms with automated inspections, non-conformance tracking, and CAPA workflows.",
      },
    ],
    stats: [
      { value: "45%", label: "Reduction in Downtime" },
      { value: "30%", label: "Inventory Cost Savings" },
      { value: "2×", label: "Throughput Increase" },
      { value: "98%", label: "On-Time Delivery Rate" },
    ],
  },

  "financial-services": {
    name: "Financial Services",
    tagline: "Fintech That Builds Trust",
    description:
      "We design and engineer fintech solutions — from digital banking platforms to risk analytics engines — that meet regulatory demands while delighting end users.",
    heroDescription:
      "Building secure, compliant, and innovative financial technology solutions for banks, insurers, and fintech disruptors.",
    challenges: [
      {
        title: "Regulatory Compliance",
        description:
          "KYC, AML, PCI-DSS, and evolving global regulations impose stringent data-handling and reporting requirements.",
      },
      {
        title: "Fraud & Cybersecurity",
        description:
          "Sophisticated attack vectors and synthetic identity fraud demand multi-layered, real-time defense systems.",
      },
      {
        title: "Legacy Core Systems",
        description:
          "Monolithic mainframe-era platforms slow innovation and make it costly to launch new products or channels.",
      },
      {
        title: "Customer Experience Gap",
        description:
          "Digital-native consumers expect seamless, instant experiences that most legacy institutions struggle to deliver.",
      },
    ],
    solutions: [
      {
        icon: "🏦",
        title: "Digital Banking Platforms",
        description:
          "Cloud-native core banking solutions with real-time processing, open APIs, and multi-currency support.",
      },
      {
        icon: "📈",
        title: "Risk Analytics",
        description:
          "Quantitative models for credit scoring, market risk, and portfolio stress-testing with live dashboards.",
      },
      {
        icon: "💳",
        title: "Digital Payments",
        description:
          "PCI-compliant payment gateways, wallet systems, and UPI/SEPA integration for frictionless transactions.",
      },
      {
        icon: "🛡️",
        title: "Regulatory Compliance Tools",
        description:
          "Automated KYC/AML pipelines, transaction monitoring, and regulatory reporting engines.",
      },
      {
        icon: "💰",
        title: "Wealth Management Tools",
        description:
          "Robo-advisory platforms, portfolio trackers, and client-facing dashboards for financial advisors.",
      },
      {
        icon: "🔍",
        title: "Fraud Detection",
        description:
          "Real-time anomaly detection using AI/ML that flags suspicious activity before losses occur.",
      },
    ],
    stats: [
      { value: "70%", label: "Faster Onboarding" },
      { value: "50%", label: "Fraud Reduction" },
      { value: "99.99%", label: "Transaction Uptime" },
      { value: "4×", label: "Compliance Reporting Speed" },
    ],
  },

  "hospitality-travel": {
    name: "Hospitality & Travel",
    tagline: "Memorable Journeys, Powered by Tech",
    description:
      "We craft booking platforms, guest experience systems, and revenue management tools that help hospitality brands deliver exceptional, personalised experiences.",
    heroDescription:
      "Elevating guest experiences and streamlining operations for hotels, airlines, and travel companies through intelligent technology.",
    challenges: [
      {
        title: "Fragmented Booking Channels",
        description:
          "OTAs, direct bookings, and metasearch engines create rate parity headaches and channel management complexity.",
      },
      {
        title: "Guest Personalisation",
        description:
          "Travellers expect curated, on-demand experiences, yet most brands lack the data infrastructure to deliver them.",
      },
      {
        title: "Revenue Volatility",
        description:
          "Seasonal demand swings, last-minute cancellations, and dynamic pricing pressures erode margins.",
      },
    ],
    solutions: [
      {
        icon: "🛎️",
        title: "Booking Platforms",
        description:
          "Commission-free, direct-booking engines with integrated availability, pricing, and payment processing.",
      },
      {
        icon: "⭐",
        title: "Guest Experience Systems",
        description:
          "Mobile check-in, digital concierge, and in-stay engagement tools that elevate satisfaction scores.",
      },
      {
        icon: "💹",
        title: "Revenue Management",
        description:
          "AI-driven dynamic pricing, demand forecasting, and channel optimization to maximize RevPAR.",
      },
      {
        icon: "🎁",
        title: "Loyalty Programs",
        description:
          "Points, tiers, and gamified reward systems that boost repeat bookings and lifetime value.",
      },
      {
        icon: "🗺️",
        title: "Travel Tech Solutions",
        description:
          "Itinerary builders, tour-operator platforms, and multi-lingual content management for global reach.",
      },
    ],
    stats: [
      { value: "35%", label: "Increase in Direct Bookings" },
      { value: "4.8★", label: "Average Guest Rating" },
      { value: "25%", label: "RevPAR Growth" },
      { value: "60%", label: "Loyalty Program Adoption" },
    ],
  },

  startups: {
    name: "Startups",
    tagline: "From Idea to Scale",
    description:
      "We partner with early-stage and growth-stage startups to ship MVPs fast, validate product-market fit, and build scalable architectures that grow with you.",
    heroDescription:
      "Accelerating startup journeys with lean development, rapid prototyping, and growth-ready technology stacks.",
    challenges: [
      {
        title: "Speed to Market",
        description:
          "First-mover advantage is fleeting — startups need to ship a viable product before runway runs out.",
      },
      {
        title: "Product-Market Fit",
        description:
          "Building the right product requires constant user feedback loops and willingness to pivot quickly.",
      },
      {
        title: "Scaling Infrastructure",
        description:
          "An architecture that works for 100 users often buckles at 100 000 without intentional design.",
      },
      {
        title: "Limited Resources",
        description:
          "Small teams must prioritize ruthlessly — every engineering hour must move the needle on growth metrics.",
      },
    ],
    solutions: [
      {
        icon: "🚀",
        title: "MVP Development",
        description:
          "Rapid prototyping and iterative build cycles that get your core product into users' hands in weeks, not months.",
      },
      {
        icon: "🔬",
        title: "Product-Market Fit Research",
        description:
          "User interviews, survey programming, and data analysis to validate assumptions before scaling.",
      },
      {
        icon: "📈",
        title: "Growth Hacking",
        description:
          "Data-driven acquisition experiments, funnel optimization, and viral loop engineering.",
      },
      {
        icon: "⚡",
        title: "Lean Development",
        description:
          "Agile sprints with minimal overhead — ship, measure, learn, and iterate relentlessly.",
      },
      {
        icon: "💵",
        title: "Fundraising Support",
        description:
          "Pitch deck design, financial modelling, and investor-ready metrics dashboards.",
      },
      {
        icon: "🏗️",
        title: "Scalable Architectures",
        description:
          "Cloud-native, microservices-based stacks designed to handle exponential growth without rewrites.",
      },
    ],
    stats: [
      { value: "4 wks", label: "Average MVP Launch Time" },
      { value: "85%", label: "Client Funding Success Rate" },
      { value: "10×", label: "User Base Growth (Avg)" },
      { value: "50+", label: "Startups Launched" },
    ],
  },

  "retail-ecommerce": {
    name: "Retail & E-commerce",
    tagline: "Commerce Without Boundaries",
    description:
      "We build online stores, marketplace integrations, and customer analytics platforms that help retailers sell more, understand their customers, and scale effortlessly.",
    heroDescription:
      "Powering next-generation retail experiences with omnichannel solutions, data-driven personalization, and seamless marketplace integrations.",
    challenges: [
      {
        title: "Omnichannel Consistency",
        description:
          "Shoppers expect a seamless experience whether browsing on mobile, desktop, social, or in-store.",
      },
      {
        title: "Cart Abandonment",
        description:
          "Average abandonment rates hover near 70% — recovering even a fraction represents significant revenue.",
      },
      {
        title: "Inventory Management",
        description:
          "Over-stocking ties up capital; under-stocking costs sales. Real-time visibility is non-negotiable.",
      },
      {
        title: "Customer Retention",
        description:
          "Acquisition costs climb while brand loyalty erodes — personalised experiences are the key differentiator.",
      },
    ],
    solutions: [
      {
        icon: "🛒",
        title: "Online Store Development",
        description:
          "Custom-built or headless commerce storefronts optimized for conversion, speed, and SEO.",
      },
      {
        icon: "🔗",
        title: "Marketplace Integration",
        description:
          "Unified listing, order, and inventory sync across Amazon, Shopify, WooCommerce, and more.",
      },
      {
        icon: "📦",
        title: "Inventory Management",
        description:
          "Real-time stock tracking, automated reorder points, and multi-warehouse fulfillment logic.",
      },
      {
        icon: "📊",
        title: "Customer Analytics",
        description:
          "RFM segmentation, cohort analysis, and predictive CLV models to drive targeted campaigns.",
      },
      {
        icon: "🌐",
        title: "Omnichannel Solutions",
        description:
          "Unified POS, mobile app, and web experiences with shared cart, wishlist, and loyalty data.",
      },
    ],
    stats: [
      { value: "55%", label: "Conversion Rate Uplift" },
      { value: "3×", label: "Repeat Purchase Rate" },
      { value: "40%", label: "Reduction in Stockouts" },
      { value: "$2M+", label: "Revenue Recovered from Carts" },
    ],
  },

  education: {
    name: "Education",
    tagline: "Learning Reimagined",
    description:
      "We develop e-learning platforms, LMS solutions, and student engagement tools that make education accessible, interactive, and outcomes-driven.",
    heroDescription:
      "Transforming education through innovative e-learning platforms, virtual classrooms, and intelligent student engagement tools.",
    challenges: [
      {
        title: "Digital Divide",
        description:
          "Unequal access to devices and connectivity demands lightweight, offline-capable learning solutions.",
      },
      {
        title: "Student Engagement",
        description:
          "Passive content delivery leads to high dropout rates — interactive, gamified experiences improve retention.",
      },
      {
        title: "Content Management at Scale",
        description:
          "Institutions juggle thousands of courses, assessments, and media assets across departments and programmes.",
      },
      {
        title: "Outcome Measurement",
        description:
          "Demonstrating learning efficacy requires robust analytics that go beyond completion certificates.",
      },
    ],
    solutions: [
      {
        icon: "🎓",
        title: "E-Learning Platforms",
        description:
          "Feature-rich course marketplaces with video hosting, quizzes, certificates, and payment integration.",
      },
      {
        icon: "📚",
        title: "LMS Development",
        description:
          "Custom learning management systems with SCORM/xAPI compliance, gradebooks, and cohort management.",
      },
      {
        icon: "🎮",
        title: "Student Engagement Tools",
        description:
          "Gamification layers, discussion forums, peer review systems, and achievement badges.",
      },
      {
        icon: "💻",
        title: "Virtual Classrooms",
        description:
          "Live video sessions with breakout rooms, whiteboards, polls, and automated attendance tracking.",
      },
      {
        icon: "📝",
        title: "Content Management",
        description:
          "Headless CMS solutions for authoring, versioning, and distributing educational content at scale.",
      },
    ],
    stats: [
      { value: "80%", label: "Course Completion Rate" },
      { value: "3×", label: "Student Engagement Growth" },
      { value: "50K+", label: "Learners Served" },
      { value: "95%", label: "Instructor Satisfaction" },
    ],
  },

  "real-estate": {
    name: "Real Estate",
    tagline: "Smarter Property, Better Deals",
    description:
      "We build property listing platforms, virtual tour experiences, and CRM systems that help realtors close deals faster and buyers find their perfect space.",
    heroDescription:
      "Digitizing real estate with intelligent listing platforms, immersive virtual tours, and powerful lead generation systems.",
    challenges: [
      {
        title: "Lead Quality",
        description:
          "High volumes of unqualified leads drain agent time — smart scoring and nurturing are essential.",
      },
      {
        title: "Market Transparency",
        description:
          "Buyers and investors demand real-time pricing data, neighbourhood analytics, and comparable sales intelligence.",
      },
      {
        title: "Remote Property Viewing",
        description:
          "Geographic distance and busy schedules make in-person tours impractical for a growing share of buyers.",
      },
      {
        title: "Fragmented Workflows",
        description:
          "Listings, client communication, document signing, and closings often live in disconnected tools.",
      },
    ],
    solutions: [
      {
        icon: "🏠",
        title: "Property Listing Platforms",
        description:
          "MLS-integrated, search-optimized listing portals with advanced filters, maps, and saved-search alerts.",
      },
      {
        icon: "🕶️",
        title: "Virtual Tours",
        description:
          "360° walkthroughs and 3D floor plans that let buyers explore properties from anywhere in the world.",
      },
      {
        icon: "📇",
        title: "CRM for Realtors",
        description:
          "Pipeline management, automated follow-ups, and transaction coordination in one unified platform.",
      },
      {
        icon: "📉",
        title: "Market Analysis Tools",
        description:
          "Comparative market analysis, price trend dashboards, and neighbourhood scoring algorithms.",
      },
      {
        icon: "🎯",
        title: "Lead Generation Systems",
        description:
          "Landing pages, chatbot qualification, and AI-powered lead scoring to fill your sales pipeline.",
      },
    ],
    stats: [
      { value: "3×", label: "Faster Deal Closings" },
      { value: "60%", label: "More Qualified Leads" },
      { value: "45%", label: "Increase in Virtual Tours" },
      { value: "$500M+", label: "Property Value Transacted" },
    ],
  },

  "technology-saas": {
    name: "Technology & SaaS",
    tagline: "Build Products That Scale",
    description:
      "We help SaaS companies design, build, and operate cloud-native products — from API ecosystems to developer tools — with engineering excellence at every layer.",
    heroDescription:
      "Engineering cloud-native SaaS products, robust API ecosystems, and developer-first platforms built to scale globally.",
    challenges: [
      {
        title: "Time to Feature",
        description:
          "Competitive markets demand rapid iteration — slow release cycles risk losing customers to nimbler rivals.",
      },
      {
        title: "Multi-Tenant Architecture",
        description:
          "Balancing tenant isolation, data security, and infrastructure efficiency in shared environments is complex.",
      },
      {
        title: "API Ecosystem Complexity",
        description:
          "Growing partner and integration networks require versioned, well-documented, and highly available APIs.",
      },
      {
        title: "Churn & Adoption",
        description:
          "Onboarding friction, missing features, and poor DX push users toward competitors.",
      },
    ],
    solutions: [
      {
        icon: "☁️",
        title: "SaaS Product Development",
        description:
          "Full-cycle product engineering — from UX research and design to CI/CD-driven delivery and post-launch iteration.",
      },
      {
        icon: "🌐",
        title: "Cloud Infrastructure",
        description:
          "IaC-managed AWS/GCP/Azure environments with auto-scaling, observability, and cost optimization.",
      },
      {
        icon: "🔌",
        title: "API Ecosystems",
        description:
          "RESTful and GraphQL API design, gateway management, rate limiting, and developer portals.",
      },
      {
        icon: "🛠️",
        title: "Developer Tools",
        description:
          "SDKs, CLI tooling, sandbox environments, and documentation portals that boost developer adoption.",
      },
      {
        icon: "⚙️",
        title: "Platform Engineering",
        description:
          "Internal developer platforms with golden paths, service catalogs, and self-service provisioning.",
      },
      {
        icon: "📊",
        title: "Product Analytics",
        description:
          "Event-driven analytics pipelines, feature-flag systems, and A/B testing frameworks for data-informed decisions.",
      },
    ],
    stats: [
      { value: "2×", label: "Faster Release Cycles" },
      { value: "99.99%", label: "Platform Uptime" },
      { value: "40%", label: "Reduction in Infra Costs" },
      { value: "70%", label: "Faster Developer Onboarding" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

const allSlugs = Object.keys(industries);

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = industries[slug];

  if (!data) {
    return { title: "Industry Not Found — ShreejeeNexus" };
  }

  return {
    title: `${data.name} Solutions — ShreejeeNexus`,
    description: data.description,
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = industries[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* ---- Hero ---- */}
      <PageHero
        title={data.name}
        eyebrow={data.tagline}
        description={data.heroDescription}
      />

      {/* ---- Industry Challenges ---- */}
      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <FloatingShape
          className="absolute -left-20 top-20 size-64 rounded-full bg-peacock/5"
          delay={0}
        />
        <FloatingShape
          className="absolute -right-16 bottom-10 size-48 rounded-full bg-marigold/10"
          delay={1.5}
        />

        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            title="Industry Challenges"
            description={`Key obstacles facing ${data.name} today — and why the right technology partner matters.`}
          />

          <StaggerParent className="mt-14 grid gap-8 sm:grid-cols-2">
            {data.challenges.map((c) => (
              <StaggerChild key={c.title}>
                <div className="rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="font-display text-xl font-bold text-peacock">
                    {c.title}
                  </h3>
                  <p className="mt-3 font-body leading-relaxed text-peacock/70">
                    {c.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ---- Our Solutions ---- */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <FloatingShape
          className="absolute -right-24 top-40 size-72 rounded-full bg-peacock/5"
          delay={0.5}
        />

        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            title="Our Solutions"
            description={`Tailored digital solutions designed specifically for the ${data.name} sector.`}
          />

          <StaggerParent className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.solutions.map((s) => (
              <StaggerChild key={s.title}>
                <div className="group rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="mb-4 block text-4xl" aria-hidden="true">
                    {s.icon}
                  </span>
                  <h3 className="font-display text-xl font-bold text-peacock">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-body leading-relaxed text-peacock/70">
                    {s.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ---- Key Results ---- */}
      <section className="bg-gradient-to-br from-peacock to-[#0a3d47] py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <FadeUp>
            <h2 className="text-center font-display text-4xl font-extrabold tracking-tight text-mist md:text-5xl">
              Key Results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center font-body text-lg text-mist/70">
              Measurable impact we&apos;ve delivered for our {data.name}{" "}
              clients.
            </p>
          </FadeUp>

          <StaggerParent className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.stats.map((s) => (
              <StaggerChild key={s.label}>
                <div className="rounded-2xl border border-mist/10 bg-white/10 p-8 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                  <p className="font-display text-4xl font-extrabold text-marigold md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-3 font-body text-sm font-medium uppercase tracking-wider text-mist/80">
                    {s.label}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <CtaBanner
        title={`Ready to Transform Your ${data.name} Business?`}
        description="Let's discuss how ShreejeeNexus can help you overcome industry challenges and drive measurable growth."
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </>
  );
}
