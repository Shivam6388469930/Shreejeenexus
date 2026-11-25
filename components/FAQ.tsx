
"use client";

import { useEffect, useRef, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What services does Shreejeenaxus offer?",
    answer:
      "Shreejeenaxus provides digital solutions across research, technology, web development, digital marketing, creative design, and business growth. We combine strategy and execution to build practical solutions for modern businesses.",
  },
  {
    question: "How does research work with technology?",
    answer:
      "We connect research insights with technology and execution. This allows businesses to transform customer understanding and market intelligence into digital products, campaigns, and measurable business outcomes.",
  },
  {
    question: "What does Business Growth Solutions include?",
    answer:
      "Our business growth solutions can include market analysis, customer research, digital strategy, campaign planning, conversion optimization, technology implementation, and ongoing performance improvement.",
  },
  {
    question: "Can we engage you for development, marketing, or design alone?",
    answer:
      "Absolutely. You can work with Shreejeenaxus for a focused requirement or a complete end-to-end engagement. Our services can be combined or delivered independently depending on your business needs.",
  },
  {
    question: "How are scope and timelines agreed?",
    answer:
      "We begin by understanding your requirements, objectives, priorities, and technical constraints. After defining the scope, we establish milestones, deliverables, timelines, and a clear execution plan.",
  },
  {
    question: "How do we start a conversation?",
    answer:
      "Simply reach out to our team with your requirement. We will understand your goals, discuss possible solutions, and recommend the best way to move forward.",
  },
];

function PlusIcon({ active }: { active: boolean }) {
  return (
    <span
      className={`
        relative flex h-8 w-8 shrink-0 items-center justify-center
        rounded-full border transition-all duration-500
        ${
          active
            ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.45)]"
            : "border-slate-300 bg-white text-slate-700 group-hover:border-blue-400 group-hover:text-blue-600"
        }
      `}
    >
      <span
        className={`
          absolute h-[1.5px] w-3.5 rounded-full bg-current
          transition-transform duration-500
          ${active ? "rotate-180" : "rotate-0"}
        `}
      />

      <span
        className={`
          absolute h-3.5 w-[1.5px] rounded-full bg-current
          transition-all duration-500
          ${active ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
        `}
      />
    </span>
  );
}

export default function ShreejeenaxusFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f9ff] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/20 blur-[100px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* LEFT SIDE */}
          <div
            className={`
              relative
              transition-all duration-1000
              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }
            `}
          >
            {/* Small label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400 opacity-40" />
                <span className="relative h-2 w-2 rounded-full bg-orange-400" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600">
                Frequently Asked
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              Questions
              <br />

              <span className="relative inline-block">
                <span className="relative z-10">Worth Asking.</span>

                <span className="absolute -bottom-2 left-0 h-2 w-2/3 rounded-full bg-blue-500/15 blur-sm" />

                <span className="absolute -bottom-[3px] left-0 h-[2px] w-1/3 bg-gradient-to-r from-blue-600 to-cyan-400" />
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Everything you need to know about working with
              <span className="font-medium text-slate-700">
                {" "}
                Shreejeenaxus
              </span>
              . If you have a question that is not answered here, our team is
              always happy to talk.
            </p>

            {/* Decorative information card */}
            <div className="group relative mt-12 max-w-md overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(30,64,175,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(30,64,175,0.14)]">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition-all duration-700 group-hover:scale-150" />

              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M12 17h.01" />
                    <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Still have questions?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Let&apos;s discuss your requirement directly.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
              >
                Talk to our team
                <span>→</span>
              </button>
            </div>

            {/* Floating decorative element */}
            <div className="absolute -left-10 bottom-10 hidden h-20 w-20 rounded-full border border-blue-200/50 lg:block">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* Top accent */}
            <div
              className={`
                mb-5 h-px w-full origin-left bg-gradient-to-r
                from-blue-500/60 via-indigo-300/30 to-transparent
                transition-transform duration-1000
                ${visible ? "scale-x-100" : "scale-x-0"}
              `}
            />

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const active = activeIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`
                      group relative overflow-hidden rounded-2xl
                      border transition-all duration-500
                      ${
                        visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }
                      ${
                        active
                          ? "border-blue-200 bg-white shadow-[0_20px_55px_rgba(37,99,235,0.12)]"
                          : "border-slate-200/80 bg-white/75 hover:border-blue-200 hover:bg-white hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)]"
                      }
                    `}
                    style={{
                      transitionDelay: visible
                        ? `${index * 90 + 150}ms`
                        : "0ms",
                    }}
                  >
                    {/* Hover light sweep */}
                    <span
                      className={`
                        pointer-events-none absolute inset-y-0 left-0 w-1/3
                        -translate-x-full bg-gradient-to-r
                        from-transparent via-blue-50/70 to-transparent
                        transition-transform duration-700
                        group-hover:translate-x-[400%]
                      `}
                    />

                    {/* Active left indicator */}
                    <span
                      className={`
                        absolute left-0 top-0 h-full w-[3px]
                        origin-center bg-gradient-to-b
                        from-blue-500 via-cyan-400 to-indigo-600
                        transition-transform duration-500
                        ${
                          active
                            ? "scale-y-100"
                            : "scale-y-0 group-hover:scale-y-50"
                        }
                      `}
                    />

                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={active}
                      aria-controls={`faq-answer-${index}`}
                      className="relative flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
                    >
                      <div className="flex items-center gap-5">
                        {/* Number */}
                        <span
                          className={`
                            hidden text-[10px] font-bold tracking-[0.2em]
                            transition-colors duration-300 sm:block
                            ${
                              active
                                ? "text-blue-600"
                                : "text-slate-300 group-hover:text-blue-500"
                            }
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`
                            text-sm font-medium transition-colors duration-300 sm:text-[15px]
                            ${
                              active
                                ? "text-slate-950"
                                : "text-slate-700 group-hover:text-slate-950"
                            }
                          `}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <PlusIcon active={active} />
                    </button>

                    {/* Animated answer */}
                    <div
                      id={`faq-answer-${index}`}
                      className={`
                        grid transition-[grid-template-rows,opacity]
                        duration-500 ease-out
                        ${
                          active
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-7">
                          <div className="flex gap-5">
                            <span className="hidden w-5 shrink-0 sm:block" />

                            <p className="max-w-2xl text-sm leading-7 text-slate-500">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Active bottom glow */}
                    <div
                      className={`
                        absolute bottom-0 left-1/2 h-px -translate-x-1/2
                        bg-gradient-to-r from-transparent via-blue-500 to-transparent
                        transition-all duration-700
                        ${
                          active
                            ? "w-2/3 opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center">
              <p className="text-xs text-slate-400">
                Can&apos;t find what you&apos;re looking for?
              </p>

              <button
                type="button"
                className="
                  group relative overflow-hidden rounded-full
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  px-6 py-3 text-xs font-semibold text-white
                  shadow-[0_10px_30px_rgba(37,99,235,0.2)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Talk to Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
