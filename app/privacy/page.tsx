import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, FadeUp } from "@/components/PageAnimations";

export const metadata: Metadata = {
  title: "Privacy Policy | Shreejee Nexus",
  description: "Privacy policy and data protection practices at Shreejee Nexus.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Legal & Compliance"
        title="Privacy Policy"
        description="Last updated: October 2026. How Shreejee Nexus collects, uses, protects, and handles your personal information and research data."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-6">
          <FadeUp>
            <div className="rounded-3xl border border-peacock/10 bg-white p-8 shadow-sm md:p-14">
              <div className="prose prose-peacock max-w-none space-y-8 font-body text-peacock/85">
                <div>
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    1. Introduction & Overview
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    Shreejee Nexus (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to safeguarding the personal data you share with us. This Privacy Policy details the types of information we may collect from you when you visit our website (shreejeenexus.com), use our market research and software consulting services, or participate in online surveys programmed or hosted by us.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    2. Information We Collect
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    We collect information across several categories based on how you interact with our platforms:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>
                      <strong>Contact & Account Data:</strong> Name, work email address, phone number, company name, and job title when submitted through our contact and consultation forms.
                    </li>
                    <li>
                      <strong>Survey & Research Data:</strong> Anonymized or pseudonymized responses to surveys, feedback forms, and interactive research panels. We strictly adhere to ESOMAR and Insights Association standards.
                    </li>
                    <li>
                      <strong>Technical & Usage Data:</strong> IP address, browser type, operating system, pages viewed, duration of visit, and referral URLs collected via cookies and server logs.
                    </li>
                  </ul>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    3. How We Use Your Information
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    The data we collect is utilized strictly for legitimate business and research purposes, including:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Responding to client inquiries, proposals, and scheduling consultation calls.</li>
                    <li>Executing research studies, survey logic validation, data tabulations, and market reports.</li>
                    <li>Maintaining security, preventing fraud, and optimizing website user experience.</li>
                    <li>Complying with applicable legal, accounting, and regulatory obligations.</li>
                  </ul>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    4. Data Security & Storage
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    We employ industry-standard administrative, physical, and technical safeguards — including TLS encryption in transit, AES-256 encryption at rest, role-based access control, and continuous threat monitoring — to protect against unauthorized access, alteration, or disclosure.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    5. Cookies & Tracking Technologies
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    We use essential and analytics cookies to understand site performance and visitor interactions. You can modify your browser settings to refuse cookies; however, some site functionalities may become unavailable or experience reduced performance.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    6. Your Privacy Rights
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    Depending on your location (such as under GDPR, CCPA, or applicable Indian data protection laws), you may have the right to access, rectify, delete, or restrict processing of your personal data. To exercise these rights, please contact our Data Protection Officer at{" "}
                    <a href="mailto:privacy@shreejeenexus.com" className="font-semibold text-peacock underline decoration-marigold decoration-2">
                      privacy@shreejeenexus.com
                    </a>.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    7. Contact Our Privacy Team
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    If you have questions or concerns about this policy or our privacy practices, please contact us at:
                  </p>
                  <div className="mt-4 rounded-2xl bg-mist p-6 text-sm">
                    <p className="font-bold text-peacock">Shreejee Nexus Privacy Office</p>
                    <p className="mt-1">Email: info@shreejeenexus.com</p>
                    <p>Offices: Ahmedabad (India) | Dubai (UAE)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-between border-t border-peacock/10 pt-6 text-sm">
                <Link href="/" className="font-semibold text-peacock hover:text-marigold">
                  ← Back to Home
                </Link>
                <Link href="/terms" className="font-semibold text-peacock hover:text-marigold">
                  View Terms of Service →
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

