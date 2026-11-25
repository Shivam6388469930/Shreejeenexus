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
  FloatingShape,
} from "@/components/PageAnimations";

export const metadata: Metadata = {
  title: "Our Team | Shreejee Nexus",
  description:
    "Meet the passionate strategists, researchers, developers, and designers driving innovation at ShreejeeNexus.",
};

const LEADERSHIP = [
  {
    name: "Raj Sharma",
    role: "Founder & Chief Executive Officer",
    department: "Executive Leadership",
    bio: "15+ years leading global market research operations and digital transformation initiatives across India, APAC, and the Middle East.",
    avatarBg: "from-peacock to-[#0a3d47]",
    initials: "RS",
    image: "/images/team/raj-sharma.jpg",
  },
  {
    name: "Priya Patel",
    role: "Chief Technology Officer",
    department: "Engineering & Innovation",
    bio: "Pioneering cloud-native architectures, survey automation pipelines, and high-performance engineering teams for global enterprises.",
    avatarBg: "from-marigold to-[#d99616]",
    initials: "PP",
    image: "/images/team/priya-patel.jpg",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Arun Kumar",
    role: "Head of Research & Strategy",
    department: "Market Research",
    bio: "Specializing in qualitative consumer discovery, conjoint analysis, and brand health modeling.",
    avatarBg: "from-peacock via-[#156c7d] to-peacock",
    initials: "AK",
    image: "/images/team/arun-kumar.jpg",
  },
  {
    name: "Neha Singh",
    role: "Lead UI/UX & Brand Designer",
    department: "Design Systems",
    bio: "Crafting intuitive digital journeys, design languages, and accessible interactive interfaces.",
    avatarBg: "from-marigold via-[#f7c95a] to-[#d99616]",
    initials: "NS",
    image: "/images/team/neha-singh.jpg",
  },
  {
    name: "Vikram Joshi",
    role: "Director of Performance Marketing",
    department: "Growth & Acquisition",
    bio: "Driving multi-channel acquisition funnels, algorithmic ad buying, and scalable attribution.",
    avatarBg: "from-[#07363f] to-peacock",
    initials: "VJ",
    image: "/images/team/vikram-joshi.jpg",
  },
  {
    name: "Anjali Mehta",
    role: "Lead Business & Data Analyst",
    department: "Business Intelligence",
    bio: "Building predictive analytics dashboards, automated pipelines, and actionable executive insights.",
    avatarBg: "from-peacock to-marigold",
    initials: "AM",
    image: "/images/team/anjali-mehta.jpg",
  },
  {
    name: "Rohit Verma",
    role: "Senior Full-Stack Architect",
    department: "Engineering",
    bio: "Designing resilient web apps, microservices, and serverless architectures with Next.js and TypeScript.",
    avatarBg: "from-[#0a3d47] to-peacock",
    initials: "RV",
    image: "/images/team/rohit-verma.jpg",
  },
  {
    name: "Sana Khan",
    role: "Survey Programming Specialist",
    department: "Operations",
    bio: "Master scripter in Decipher, Qualtrics, and Confirmit for multi-country, high-complexity studies.",
    avatarBg: "from-marigold to-peacock",
    initials: "SK",
    image: "/images/team/sana-khan.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Our People"
        title="Meet the minds behind ShreejeeNexus."
        description="We are a multidisciplinary collective of researchers, engineers, strategists, and creatives united by a common mission: turning deep market insights into transformative business growth."
      />

      {/* ── Leadership ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Leadership"
            title="Guiding Vision & Execution"
            description="Our leaders combine decades of domain mastery in market research, enterprise software, and growth strategy."
          />

          <StaggerParent className="grid gap-8 md:grid-cols-2">
            {LEADERSHIP.map((leader) => (
              <StaggerChild key={leader.name}>
                <div className="group relative overflow-hidden rounded-3xl border border-peacock/15 bg-white p-8 shadow-md transition hover:-translate-y-1.5 hover:shadow-xl md:p-10">
                  <FloatingShape className="-right-8 -top-8 h-28 w-28 bg-marigold/10" />
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl shadow-lg ring-2 ring-marigold/40">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <span className="rounded-full bg-marigold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-peacock">
                        {leader.department}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-extrabold text-peacock">
                        {leader.name}
                      </h3>
                      <p className="font-semibold text-peacock/70">{leader.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-peacock/75">{leader.bio}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── Core Team Grid ── */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Core Team"
            title="Experts in Every Discipline"
            description="Dedicated leads delivering precision across engineering, design, data, and research."
            center
          />

          <StaggerParent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <StaggerChild key={member.name}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-peacock/10 bg-white/80 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-marigold/50 hover:shadow-xl">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl shadow ring-1 ring-peacock/20">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-peacock">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-peacock/60">{member.role}</p>
                      </div>
                    </div>
                    <span className="mt-4 inline-block rounded-md bg-peacock/10 px-2.5 py-0.5 text-xs font-medium text-peacock">
                      {member.department}
                    </span>
                    <p className="mt-4 text-xs leading-relaxed text-peacock/70">{member.bio}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── Culture Callout ── */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <FadeUp>
            <div className="rounded-3xl border border-peacock/15 bg-gradient-to-br from-peacock to-[#083e48] p-10 text-mist shadow-xl md:p-14">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-marigold">
                  Life at ShreejeeNexus
                </span>
                <h3 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
                  Curious minds, collaborative culture.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist/80 md:text-base">
                  We believe that the best work emerges when analytical rigor meets creative freedom. We invest in continuous learning, foster transparent leadership, and empower every team member to make a meaningful difference for our global partners.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/careers"
                    className="inline-flex items-center gap-2 rounded-xl bg-marigold px-6 py-3 font-bold text-peacock shadow transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    View Open Positions →
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-xl border border-mist/20 bg-mist/10 px-6 py-3 font-semibold text-mist backdrop-blur transition hover:bg-mist/20"
                  >
                    Learn More About Our Mission
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CtaBanner
        title="Want to collaborate with our team?"
        description="Whether you have an upcoming survey research wave or a complex engineering challenge, we are ready to assist."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </main>
  );
}

