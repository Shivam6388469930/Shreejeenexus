import type { Metadata } from "next";
import {
  PageHero,
  SectionHeading,
  FadeUp,
  StaggerParent,
  StaggerChild,
} from "@/components/PageAnimations";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Shreejee Nexus",
};

/* ── Icon helpers ── */
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.24a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68a2 2 0 0 1 1.72 2.03Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

/* ── Contact info data ── */
const contactCards = [
  {
    icon: <MailIcon />,
    label: "Email Us",
    value: "info@shreejeenexus.com",
    href: "mailto:info@shreejeenexus.com",
  },
  {
    icon: <PhoneIcon />,
    label: "Call Us",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
  },
  {
    icon: <MapPinIcon />,
    label: "Visit Us",
    value: "Ahmedabad, Gujarat, India",
    href: "#offices",
  },
];

/* ── Office locations data ── */
const offices = [
  {
    country: "India",
    flag: "🇮🇳",
    city: "Ahmedabad, Gujarat",
    address: "123 Business Park, SG Highway, Ahmedabad, Gujarat 380015, India",
    phone: "+91 00000 00000",
    email: "india@shreejeenexus.com",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    city: "Dubai",
    address: "Office 456, Business Bay Tower, Dubai, United Arab Emirates",
    phone: "+971 00 000 0000",
    email: "uae@shreejeenexus.com",
  },
];

/* ── Page ── */
export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Contact Us"
        title="Let's start a conversation."
        description="Have a question, a project idea, or just want to say hello? We'd love to hear from you. Reach out and let's explore how ShreejeeNexus can help elevate your business."
      />

      {/* ── Contact Form + Info ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form — takes 3/5 */}
            <div className="lg:col-span-3">
              <FadeUp>
                <ContactForm />
              </FadeUp>
            </div>

            {/* Contact info cards — takes 2/5 */}
            <div className="lg:col-span-2">
              <StaggerParent className="flex flex-col gap-6">
                {contactCards.map((card) => (
                  <StaggerChild key={card.label}>
                    <a
                      href={card.href}
                      className="group flex items-start gap-5 rounded-2xl border border-peacock/10 bg-white/70 p-7 backdrop-blur transition hover:shadow-xl hover:-translate-y-1"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-peacock/10 text-peacock transition group-hover:bg-marigold group-hover:text-peacock">
                        {card.icon}
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-marigold">
                          {card.label}
                        </p>
                        <p className="mt-1 font-display text-lg font-bold text-peacock">
                          {card.value}
                        </p>
                      </div>
                    </a>
                  </StaggerChild>
                ))}
              </StaggerParent>

              {/* Quick message */}
              <FadeUp delay={2}>
                <div className="mt-10 rounded-2xl bg-gradient-to-br from-peacock to-[#0a3d47] p-8 text-mist">
                  <h3 className="font-display text-xl font-bold">
                    Prefer a quick chat?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/75">
                    Our team typically responds within 24 hours. For urgent
                    inquiries, give us a call directly and we&apos;ll be happy to
                    assist you right away.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Office Locations ── */}
      <section id="offices" className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6">
          <SectionHeading
            eyebrow="Our Offices"
            title="Where to find us"
            description="With offices in India and the UAE, we're positioned to serve clients across Asia, the Middle East, and beyond."
            center
          />

          <StaggerParent className="grid gap-8 md:grid-cols-2">
            {offices.map((office) => (
              <StaggerChild key={office.country}>
                <div className="group relative overflow-hidden rounded-2xl border border-peacock/10 bg-white/70 p-8 backdrop-blur transition hover:shadow-xl hover:-translate-y-1">
                  {/* Decorative corner accent */}
                  <span className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-marigold/10 transition group-hover:scale-150" />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{office.flag}</span>
                      <div>
                        <h3 className="font-display text-xl font-extrabold text-peacock">
                          {office.country}
                        </h3>
                        <p className="text-sm text-peacock/60">{office.city}</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 text-sm text-peacock/70">
                      <div className="flex items-start gap-3">
                        <MapPinIcon />
                        <span className="pt-1">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <PhoneIcon />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MailIcon />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>
    </main>
  );
}
