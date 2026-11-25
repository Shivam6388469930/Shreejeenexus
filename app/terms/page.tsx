import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, FadeUp } from "@/components/PageAnimations";

export const metadata: Metadata = {
  title: "Terms of Service | Shreejee Nexus",
  description: "Terms of service and legal agreement governing the use of Shreejee Nexus websites and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <PageHero
        eyebrow="Legal & Governance"
        title="Terms of Service"
        description="Effective Date: October 2026. Please read these terms carefully before accessing or engaging services provided by Shreejee Nexus."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-6">
          <FadeUp>
            <div className="rounded-3xl border border-peacock/10 bg-white p-8 shadow-sm md:p-14">
              <div className="prose prose-peacock max-w-none space-y-8 font-body text-peacock/85">
                <div>
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    1. Acceptance of Terms
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    By browsing this website or engaging Shreejee Nexus for research, survey programming, software engineering, or consulting services, you agree to be bound by these Terms of Service and all applicable regional laws and regulations. If you do not agree, you are prohibited from using this site and our services.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    2. Provision of Services & Statements of Work
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    All client projects, survey programming operations, and engineering deliverable scopes are governed by separate Statements of Work (SOW) or Master Services Agreements (MSA) executed between Shreejee Nexus and the contracting client. In the event of a conflict between these terms and an executed SOW, the terms of the specific SOW will prevail.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    3. Intellectual Property Rights
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    Unless otherwise specified in a formal client agreement:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>
                      <strong>Client Materials & Data:</strong> Clients retain full ownership of all proprietary data, survey respondent raw records, and brand assets provided to us.
                    </li>
                    <li>
                      <strong>Our Platform & Frameworks:</strong> Shreejee Nexus retains all rights, title, and interest in our proprietary survey scripting templates, custom software libraries, algorithms, website design, trademarks, and methodologies.
                    </li>
                  </ul>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    4. Acceptable Use Policy
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    Users of our website and survey systems agree not to:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Introduce bots, spiders, or automated scripts intended to falsify survey answers or collect unauthorized data.</li>
                    <li>Attempt to probe, scan, or breach the vulnerability of any Shreejee Nexus network, database, or API infrastructure.</li>
                    <li>Transmit malicious software, viruses, or defamatory materials through our communication forms.</li>
                  </ul>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    5. Disclaimer of Warranties
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    This website and its informational contents are provided &quot;as is&quot; without warranties of any kind, whether express or implied. While we strive for absolute accuracy, Shreejee Nexus does not warrant that site materials are error-free or that uninterrupted access will be maintained at all times.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    6. Limitation of Liability
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    To the maximum extent permitted by law, Shreejee Nexus and its directors, employees, or partners shall not be liable for any indirect, punitive, or consequential damages resulting from the use or inability to use this website or third-party survey panels.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    7. Governing Law & Jurisdiction
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    These Terms of Service are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any legal suit or proceeding shall be instituted exclusively in the competent courts of Ahmedabad, Gujarat, India.
                  </p>
                </div>

                <div className="border-t border-peacock/10 pt-8">
                  <h2 className="font-display text-2xl font-bold text-peacock md:text-3xl">
                    8. Contact Information
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    For legal questions regarding these terms, please contact:
                  </p>
                  <div className="mt-4 rounded-2xl bg-mist p-6 text-sm">
                    <p className="font-bold text-peacock">Shreejee Nexus Legal Affairs</p>
                    <p className="mt-1">Email: info@shreejeenexus.com</p>
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-between border-t border-peacock/10 pt-6 text-sm">
                <Link href="/" className="font-semibold text-peacock hover:text-marigold">
                  ← Back to Home
                </Link>
                <Link href="/privacy" className="font-semibold text-peacock hover:text-marigold">
                  View Privacy Policy →
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

