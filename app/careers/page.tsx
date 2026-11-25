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
  title: "Careers | Shreejee Nexus",
};

/* ── data ── */

const benefits = [
  {
    icon: "🚀",
    title: "Learning & Growth",
    description:
      "Continuous upskilling through mentorship programs, certifications, and access to cutting-edge tools and technologies.",
  },
  {
    icon: "💡",
    title: "Innovative Projects",
    description:
      "Work on challenging projects across market research, digital marketing, and software development that push boundaries.",
  },
  {
    icon: "🤝",
    title: "Collaborative Culture",
    description:
      "Join a diverse, cross-functional team where every voice is heard and ideas flow freely across departments.",
  },
  {
    icon: "⚖️",
    title: "Work-Life Balance",
    description:
      "Flexible schedules, generous PTO, and a results-first mindset that respects your time and well-being.",
  },
];

const positions = [
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "India / Remote",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "India / Remote",
  },
  {
    title: "Market Research Analyst",
    department: "Research",
    location: "India",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "India / Remote",
  },
  {
    title: "Business Analyst",
    department: "Consulting",
    location: "India",
  },
  {
    title: "Survey Programmer",
    department: "Research",
    location: "India / Remote",
  },
];

const departmentColors: Record<string, string> = {
  Engineering: "bg-peacock/10 text-peacock",
  Marketing: "bg-marigold/15 text-marigold",
  Research: "bg-emerald-100 text-emerald-700",
  Design: "bg-violet-100 text-violet-700",
  Consulting: "bg-sky-100 text-sky-700",
};

/* ── page ── */

export default function CareersPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <PageHero
        eyebrow="Careers"
        title="Build your career at ShreejeeNexus."
        description="We're a team of curious minds united by a passion for growth and innovation. Join us to solve meaningful problems, learn every day, and shape the future of market research, digital marketing, and technology."
      />

      {/* ─── Why Join Us ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Why Join Us"
            title="Grow with a team that invests in you"
            description="From day one you'll find the support, freedom, and challenge you need to do the best work of your career."
            center
          />

          <StaggerParent className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <StaggerChild key={b.title}>
                <div className="group rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="mb-4 block text-4xl">{b.icon}</span>
                  <h3 className="font-display text-xl font-bold text-peacock">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-peacock/65">
                    {b.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ─── Open Positions ─── */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Open Positions"
            title="Find your next role"
            description="We're actively hiring across departments. Take a look at our current openings and apply today."
            center
          />

          <StaggerParent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {positions.map((p) => (
              <StaggerChild key={p.title}>
                <div className="flex flex-col justify-between rounded-2xl border border-peacock/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
                  <div>
                    <h3 className="font-display text-lg font-bold text-peacock">
                      {p.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-semibold ${departmentColors[p.department] ?? "bg-gray-100 text-gray-600"}`}
                      >
                        {p.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-peacock/50">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {p.location}
                      </span>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[14px_14px_14px_4px] bg-peacock px-7 py-3.5 text-sm font-semibold text-mist transition hover:-translate-y-0.5 hover:bg-[#08404a]"
                  >
                    Apply
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ─── Culture ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <FadeUp>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-marigold">
                Our Culture
              </p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-peacock md:text-5xl after:mt-3 after:block after:h-[4px] after:w-12 after:rounded-full after:bg-marigold after:content-['']">
                Where ambition meets purpose
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-peacock/70">
                At ShreejeeNexus, culture isn't just a buzzword — it's the
                foundation of everything we build. We believe in transparency,
                ownership, and celebrating wins together. Whether you're a
                seasoned professional or just starting out, you'll find a place
                here to experiment, lead, and make a real impact.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-peacock/70">
                We host regular hackathons, knowledge-sharing sessions, and
                team offsites that keep our energy high and our bonds strong.
                Your ideas aren't just welcome — they're expected.
              </p>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-peacock via-[#0a3d47] to-peacock p-10 text-mist md:p-14">
                <span className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-marigold/20" aria-hidden="true" />
                <span className="pointer-events-none absolute -bottom-6 left-6 h-24 w-24 rounded-full border-[8px] border-mist/10" aria-hidden="true" />

                <div className="relative space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-marigold/20 text-lg">
                      🌟
                    </span>
                    <h3 className="font-display text-xl font-bold">
                      Our Values
                    </h3>
                  </div>
                  <ul className="space-y-3 text-mist/80">
                    {[
                      "Curiosity over complacency",
                      "Ownership at every level",
                      "Respect and inclusivity",
                      "Continuous improvement",
                      "Client success is our success",
                    ].map((v) => (
                      <li key={v} className="flex items-start gap-2">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-5 w-5 shrink-0 text-marigold"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CtaBanner
        title="Don't see your role? Reach out anyway."
        description="We're always looking for talented people. Send us your résumé and tell us what excites you — we'd love to hear from you."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
