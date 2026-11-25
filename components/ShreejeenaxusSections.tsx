"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Search,
  Lightbulb,
  Layers3,
  Target,
  Users,
  Rocket,
  BarChart3,
  Code2,
  Megaphone,
  Palette,
  Building2,
  Plane,
  Cpu,
  BriefcaseBusiness,
  Check,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type Insight = {
  category: string;
  title: string;
  date: string;
  image: string;
};

type Industry = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

type ProcessItem = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

/* =========================================================
   DATA
========================================================= */

const insights: Insight[] = [
  {
    category: "Research",
    title: "Turning customer intelligence into better decisions",
    date: "Oct 18, 2026",
    image: "/images/insight-research.jpg",
  },
  {
    category: "Technology",
    title: "How intelligent technology is reshaping modern businesses",
    date: "Oct 11, 2026",
    image: "/images/insight-ai.jpg",
  },
  {
    category: "Marketing",
    title: "Building growth strategies around real customer behavior",
    date: "Sep 28, 2026",
    image: "/images/insight-marketing.jpg",
  },
  {
    category: "Digital",
    title: "Designing digital experiences that move businesses forward",
    date: "Sep 15, 2026",
    image: "/images/insight-digital.jpg",
  },
];

const industries: Industry[] = [
  {
    title: "Real Estate",
    description:
      "Understand buyers, markets and opportunities with research-led insights.",
    image: "/images/industry-realestate.jpg",
    icon: <Building2 size={18} />,
  },
  {
    title: "Travel & Hospitality",
    description:
      "Discover what travelers value and create experiences that convert.",
    image: "/images/industry-travel.jpg",
    icon: <Plane size={18} />,
  },
  {
    title: "Technology & SaaS",
    description:
      "Turn complex products and customer signals into scalable growth.",
    image: "/images/industry-tech.jpg",
    icon: <Cpu size={18} />,
  },
  {
    title: "Startups",
    description:
      "Validate ideas, understand users and build smarter growth strategies.",
    image: "/images/industry-startups.jpg",
    icon: <Rocket size={18} />,
  },
  {
    title: "Financial Services",
    description:
      "Build trust through evidence, customer understanding and digital innovation.",
    image: "/images/industry-finance.jpg",
    icon: <BarChart3 size={18} />,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Shreejeenaxus helped us transform scattered customer information into a clear growth strategy.",
    name: "Managing Director",
    role: "Business Leadership",
    company: "Technology Company",
  },
  {
    quote:
      "The team understood the business problem first and then designed the right execution around it.",
    name: "Founder",
    role: "Founder",
    company: "Growth Startup",
  },
  {
    quote:
      "Their combination of research, technology and execution gave us much more clarity.",
    name: "CEO",
    role: "Chief Executive Officer",
    company: "Consumer Business",
  },
];

const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your market, audience, business challenge and the opportunity behind it.",
    icon: <Search size={20} />,
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Research, planning and analysis turn uncertainty into a focused direction.",
    icon: <Lightbulb size={20} />,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We translate strategy into products, campaigns, experiences and measurable solutions.",
    icon: <Code2 size={20} />,
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We review performance, learn from the data and continuously improve the solution.",
    icon: <Target size={20} />,
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Successful ideas become repeatable systems designed for sustainable growth.",
    icon: <Rocket size={20} />,
  },
];

/* =========================================================
   REVEAL WRAPPER
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 45,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function MagneticButton({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
  });

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const moveX =
          (event.clientX - (rect.left + rect.width / 2)) * 0.15;

        const moveY =
          (event.clientY - (rect.top + rect.height / 2)) * 0.15;

        x.set(moveX);
        y.set(moveY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`
        group relative inline-flex items-center gap-3
        overflow-hidden rounded-full px-6 py-3.5
        text-sm font-medium
        transition-all duration-500
        ${
          primary
            ? "bg-[#1749e8] text-white shadow-[0_15px_45px_rgba(23,73,232,0.28)]"
            : "border border-slate-300 bg-white/60 text-slate-900 backdrop-blur-xl"
        }
      `}
    >
      <span
        className={`
          absolute inset-0 -translate-x-full
          bg-gradient-to-r from-transparent via-white/30 to-transparent
          transition-transform duration-700
          group-hover:translate-x-full
        `}
      />

      <span className="relative z-10">{children}</span>

      <ArrowUpRight
        size={16}
        className="relative z-10 transition-transform duration-300 group-hover:rotate-45"
      />
    </motion.button>
  );
}

/* =========================================================
   IMAGE LOADER
   10% -> 100% visual reveal
========================================================= */

function AnimatedImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading shimmer */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: loaded ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute inset-0 z-20 bg-gradient-to-r from-slate-200 via-white to-slate-200"
      >
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-y-0 w-1/2 bg-white/50 blur-xl"
        />
      </motion.div>

      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{
          opacity: 0.08,
          scale: 1.12,
          filter: "blur(12px)",
        }}
        animate={
          loaded
            ? {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }
            : undefined
        }
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffb400]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1749e8]">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-5 max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-base">
          {description}
        </p>
      </Reveal>
    </div>
  );
}

/* =========================================================
   01. LATEST INSIGHTS
========================================================= */

export function LatestInsights() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % insights.length);
  };

  const previous = () => {
    setActive(
      (current) => (current - 1 + insights.length) % insights.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Latest Insights"
          title="Ideas that move businesses forward."
          description="Explore perspectives across research, technology, marketing and design — created to help leaders make clearer decisions."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Featured */}
          <Reveal>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="group relative h-[430px] overflow-hidden rounded-[30px] bg-slate-950"
            >
              <AnimatedImage
                src={insights[active].image}
                alt={insights[active].title}
                className="absolute inset-0 h-full w-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white backdrop-blur-xl">
                Featured
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <div className="mb-3 text-xs font-medium text-blue-200">
                  {insights[active].category}
                </div>

                <h3 className="max-w-xl text-2xl font-medium leading-tight text-white md:text-3xl">
                  {insights[active].title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-white/60">
                    {insights[active].date}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
                  >
                    <ArrowUpRight size={17} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {insights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <motion.button
                  onClick={() => setActive(index)}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group w-full overflow-hidden rounded-[24px] border text-left transition-all duration-500 ${
                    active === index
                      ? "border-blue-300 bg-blue-50 shadow-[0_20px_60px_rgba(23,73,232,0.12)]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                      {item.category}
                    </span>

                    <h3 className="mt-2 line-clamp-2 text-lg font-medium leading-snug text-slate-900">
                      {item.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span>{item.date}</span>

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-2">
          <button
            onClick={previous}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:border-blue-500 hover:text-blue-600"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:border-blue-500 hover:text-blue-600"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   02. WHY CHOOSE US
========================================================= */

export function WhyChooseUs() {
  const features = [
    {
      icon: <Lightbulb />,
      title: "Research-led thinking",
      text: "We start with evidence, customer understanding and the real business problem.",
    },
    {
      icon: <Layers3 />,
      title: "Connected capabilities",
      text: "Research, technology, marketing and creative execution work together.",
    },
    {
      icon: <Target />,
      title: "Clear outcomes",
      text: "Every engagement is designed around practical decisions and measurable progress.",
    },
    {
      icon: <Users />,
      title: "Collaborative delivery",
      text: "Your team stays involved throughout the process, not just at the final handoff.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#eef3ff] py-24 md:py-32">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(15,23,42,0.2)]"
              >
                <AnimatedImage
                  src="/images/why-us.jpg"
                  alt="Shreejeenaxus team"
                  className="h-[430px] w-full"
                />

                <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/30 bg-white/75 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500">
                        Our approach
                      </div>

                      <div className="mt-1 text-lg font-medium text-slate-900">
                        Think. Build. Improve.
                      </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-blue-300/50"
              />

              <div className="absolute -bottom-7 -left-7 h-28 w-28 rounded-3xl bg-blue-600 shadow-xl" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffb400]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  Why Shreejeenaxus
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-slate-950 md:text-5xl">
                Strategy that connects{" "}
                <span className="text-blue-600">thinking with action.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                We combine insight, technology and creativity to help
                organizations understand their customers, solve meaningful
                problems and create sustainable growth.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-xl transition-shadow hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      {feature.icon}
                    </div>

                    <h3 className="font-medium text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <MagneticButton primary>
                  Discover our approach
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   03. TESTIMONIALS
========================================================= */

export function Testimonials() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffb400]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                Client Perspective
              </span>
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light tracking-[-0.04em] text-slate-950 md:text-5xl">
              Trusted by teams that believe{" "}
              <span className="text-blue-600">better thinking</span> creates
              better growth.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item, index) => {
              const isActive = active === index;

              return (
                <motion.button
                  key={item.company}
                  onClick={() => setActive(index)}
                  animate={{
                    scale: isActive ? 1.03 : 0.96,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.02,
                  }}
                  className={`relative min-h-[280px] rounded-[28px] border p-7 text-left transition-all ${
                    isActive
                      ? "border-blue-300 bg-white shadow-[0_25px_80px_rgba(37,99,235,0.15)]"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <Quote
                    size={30}
                    className="text-blue-500"
                    strokeWidth={1.5}
                  />

                  <p className="mt-8 text-base leading-7 text-slate-700">
                    “{item.quote}”
                  </p>

                  <div className="absolute bottom-7 left-7">
                    <div className="text-sm font-semibold text-slate-950">
                      {item.name}
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      {item.role} · {item.company}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all ${
                  active === index
                    ? "w-10 bg-blue-600"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   04. INDUSTRIES
========================================================= */

export function IndustriesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % industries.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f0f4ff] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Context matters. So does the industry."
          description="Every market has different customers, behaviors and challenges. We adapt research, technology and growth strategies around the context that matters."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.title}
              onClick={() => setActive(index)}
              whileHover={{
                y: -10,
              }}
              animate={{
                flexGrow: active === index ? 1.4 : 1,
              }}
              className={`group relative h-[390px] overflow-hidden rounded-[28px] text-left ${
                active === index
                  ? "shadow-[0_30px_70px_rgba(15,23,42,0.2)]"
                  : ""
              }`}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${
                  active === index
                    ? "scale-110"
                    : "scale-100 group-hover:scale-110"
                }`}
              />

              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  active === index
                    ? "bg-gradient-to-t from-[#071331] via-[#071331]/30 to-transparent"
                    : "bg-gradient-to-t from-[#071331]/90 via-[#071331]/20 to-transparent"
                }`}
              />

              <div className="absolute inset-x-5 bottom-5">
                <div className="flex items-center gap-2 text-xs font-medium text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-xl">
                    {industry.icon}
                  </span>

                  <span>{industry.title}</span>
                </div>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-xs leading-6 text-white/75">
                        {industry.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-white">
                        Explore industry
                        <ArrowUpRight size={14} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="absolute right-4 top-4 text-xs text-white/50">
                0{index + 1}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   05. OUR PROCESS
========================================================= */

export function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#071331] py-24 text-white md:py-32">
      {/* animated background */}
      <motion.div
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="sticky top-24 self-start">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffb400]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300">
                  Our Process
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] md:text-5xl">
                From question
                <br />
                to <span className="text-blue-400">outcome.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                A flexible process designed to move from uncertainty to
                clarity, then from clarity to execution.
              </p>

              <div className="mt-8">
                <MagneticButton>
                  Start a conversation
                </MagneticButton>
              </div>

              {/* Progress */}
              <div className="mt-12 flex items-center gap-3">
                {processItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      active === index
                        ? "w-14 bg-blue-400"
                        : "w-5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {processItems.map((item, index) => {
              const isActive = active === index;

              return (
                <motion.button
                  key={item.number}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  layout
                  className={`group relative w-full overflow-hidden rounded-[26px] border text-left transition-all duration-500 ${
                    isActive
                      ? "border-blue-400/40 bg-blue-600"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-center gap-5">
                        <span
                          className={`text-xs font-bold ${
                            isActive
                              ? "text-white"
                              : "text-blue-400"
                          }`}
                        >
                          {item.number}
                        </span>

                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                            isActive
                              ? "bg-white/15 text-white"
                              : "bg-blue-500/10 text-blue-400"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <h3 className="text-xl font-medium md:text-2xl">
                          {item.title}
                        </h3>
                      </div>

                      <motion.div
                        animate={{
                          rotate: isActive ? 45 : 0,
                        }}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                          isActive
                            ? "border-white/30 bg-white/10"
                            : "border-white/10"
                        }`}
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                        >
                          <div className="ml-[100px] mt-6 max-w-2xl border-t border-white/15 pt-5">
                            <p className="text-sm leading-7 text-white/75">
                              {item.description}
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-xs font-semibold">
                              <Check size={14} />
                              Built around measurable outcomes
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* animated progress line */}
                  {isActive && (
                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 4,
                        ease: "linear",
                      }}
                      onAnimationComplete={() => {
                        setActive((current) =>
                          current === processItems.length - 1
                            ? 0
                            : current + 1
                        );
                      }}
                      className="absolute bottom-0 left-0 h-1 w-full origin-left bg-[#ffb400]"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ShreejeenaxusSections() {
  return (
    <main className="overflow-hidden">
      <LatestInsights />

      <WhyChooseUs />

      <Testimonials />

      <IndustriesSection />

      <ProcessSection />
    </main>
  );
}