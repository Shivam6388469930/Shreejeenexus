
"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";

type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  tag: string;
  metric: string;
  metricLabel: string;
  image: string;
  accent: string;
};

const services: Service[] = [
  {
    id: "research",
    number: "01",
    title: "Market Research",
    shortTitle: "Research",
    description:
      "Discover what your customers value, what your market is becoming, and where your next opportunity exists.",
    tag: "INSIGHT ENGINE",
    metric: "360°",
    metricLabel: "Market View",
    image: "/images/services/market-research.jpg",
    accent: "#38bdf8",
  },
  {
    id: "survey",
    number: "02",
    title: "Survey Programming",
    shortTitle: "Surveys",
    description:
      "Transform research questions into intelligent, scalable survey experiences designed for accurate data collection.",
    tag: "DATA EXPERIENCE",
    metric: "99.9%",
    metricLabel: "Reliability",
    image: "/images/services/survey-programming.jpg",
    accent: "#818cf8",
  },
  {
    id: "growth",
    number: "03",
    title: "Business Growth",
    shortTitle: "Growth",
    description:
      "Connect evidence, strategy, and execution to create practical growth opportunities that move businesses forward.",
    tag: "GROWTH SYSTEM",
    metric: "3×",
    metricLabel: "Focus",
    image: "/images/services/business-growth.jpg",
    accent: "#a78bfa",
  },
  {
    id: "development",
    number: "04",
    title: "Digital Development",
    shortTitle: "Technology",
    description:
      "Build modern websites, applications, platforms, and internal systems engineered around real business requirements.",
    tag: "TECHNOLOGY",
    metric: "24/7",
    metricLabel: "Digital",
    image: "/images/services/development.jpg",
    accent: "#2563eb",
  },
  {
    id: "marketing",
    number: "05",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    description:
      "Create digital experiences and campaigns that connect your brand with the audiences that matter most.",
    tag: "AUDIENCE ENGINE",
    metric: "∞",
    metricLabel: "Reach",
    image: "/images/services/digital-marketing.jpg",
    accent: "#06b6d4",
  },
  {
    id: "design",
    number: "06",
    title: "Graphic Design",
    shortTitle: "Design",
    description:
      "Shape ideas into distinctive visual systems, identities, campaigns, and experiences people remember.",
    tag: "CREATIVE STUDIO",
    metric: "360°",
    metricLabel: "Identity",
    image: "/images/services/graphic-design.jpg",
    accent: "#3b82f6",
  },
];

export default function ShreejeenaxusServices() {
  const [active, setActive] = useState(0);

  /*
   * Mouse spotlight
   */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const current = services[active];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#050a18] px-5 py-28 text-white sm:px-8 lg:px-12"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* main blue glow */}

        <motion.div
          style={{
            left: smoothX,
            top: smoothY,
          }}
          className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[100px]"
        />

        {/* static atmosphere */}

        <div className="absolute -left-[15%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <div className="absolute -right-[10%] bottom-[5%] h-[550px] w-[550px] rounded-full bg-indigo-500/[0.08] blur-[140px]" />

        {/* grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* noise */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050a18_85%)]" />
      </div>

      {/* =====================================================
          TOP INTRO
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">

          <div>
            <motion.div
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
              className="mb-6 flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative h-3 w-3 rounded-full bg-blue-400" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.35em] text-blue-300">
                Our Capabilities
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
              }}
              className="max-w-4xl text-4xl font-light leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              From questions
              <br />

              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
                to possibilities.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <p className="text-sm leading-7 text-slate-400">
              Research, technology, marketing and creative
              capabilities connected through one integrated
              growth ecosystem.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-blue-500" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                Shreejeenaxus
              </span>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            MAIN EXPERIENCE
        =================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.4fr]">

          {/* =================================================
              LEFT — CAPABILITY CORE
          ================================================= */}

          <div className="relative hidden min-h-[620px] lg:block">

            <div className="sticky top-24">

              <div className="relative mx-auto aspect-square max-w-[480px]">

                {/* outer orbit */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[7%] rounded-full border border-white/[0.07]"
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_#60a5fa]" />
                </motion.div>

                {/* second orbit */}

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[18%] rounded-full border border-blue-400/10"
                >
                  <span className="absolute bottom-[-4px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-indigo-400 shadow-[0_0_20px_#818cf8]" />
                </motion.div>

                {/* glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[70px]"
                />

                {/* center */}

                <motion.div
                  key={current.id}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="absolute left-1/2 top-1/2 flex h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-center shadow-[0_0_100px_rgba(37,99,235,0.12)] backdrop-blur-xl"
                >
                  <span className="text-[10px] uppercase tracking-[0.35em] text-blue-300">
                    {current.tag}
                  </span>

                  <span className="mt-5 text-6xl font-light tracking-[-0.06em]">
                    {current.metric}
                  </span>

                  <span className="mt-2 text-xs text-slate-500">
                    {current.metricLabel}
                  </span>
                </motion.div>

                {/* floating labels */}

                <FloatingLabel
                  text="INSIGHT"
                  className="left-[5%] top-[28%]"
                />

                <FloatingLabel
                  text="STRATEGY"
                  className="right-[3%] top-[20%]"
                />

                <FloatingLabel
                  text="TECH"
                  className="bottom-[20%] left-[8%]"
                />

                <FloatingLabel
                  text="CREATIVE"
                  className="bottom-[13%] right-[5%]"
                />
              </div>

              {/* core description */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  className="mx-auto mt-2 max-w-md text-center"
                >
                  <p className="text-sm leading-7 text-slate-400">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =================================================
              RIGHT — SERVICE NAVIGATION
          ================================================= */}

          <div className="space-y-3">

            {services.map((service, index) => {
              const isActive = index === active;

              return (
                <ServiceItem
                  key={service.id}
                  service={service}
                  index={index}
                  active={isActive}
                  onClick={() => setActive(index)}
                />
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm text-slate-500">
              Have a challenge worth solving?
            </p>

            <p className="mt-1 text-lg text-white">
              Let's build the next move together.
            </p>
          </div>

          <button className="group flex w-fit items-center gap-4 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10">
            Start a conversation

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE ITEM
========================================================= */

function ServiceItem({
  service,
  index,
  active,
  onClick,
}: {
  service: Service;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
      }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ${
        active
          ? "border-blue-400/30 bg-gradient-to-r from-blue-600/[0.18] via-blue-500/[0.08] to-transparent"
          : "border-white/[0.07] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.045]"
      }`}
    >
      {/* active glow */}

      {active && (
        <motion.div
          layoutId="activeGlow"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(59,130,246,0.18),transparent_45%)]"
        />
      )}

      {/* progress line */}

      <motion.div
        animate={{
          height: active ? "100%" : "0%",
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute left-0 top-0 w-[3px] bg-gradient-to-b from-blue-400 to-indigo-500"
      />

      <div className="relative p-6 sm:p-7">

        {/* top */}

        <div className="flex items-start justify-between gap-5">

          <div className="flex items-center gap-5">

            <span
              className={`font-mono text-xs transition-colors ${
                active
                  ? "text-blue-300"
                  : "text-slate-600 group-hover:text-slate-400"
              }`}
            >
              {service.number}
            </span>

            <div>
              <span
                className={`text-[9px] uppercase tracking-[0.3em] transition-colors ${
                  active
                    ? "text-blue-300"
                    : "text-slate-600"
                }`}
              >
                {service.tag}
              </span>

              <h3
                className={`mt-1 text-xl font-light tracking-[-0.02em] transition-all duration-300 sm:text-2xl ${
                  active
                    ? "text-white"
                    : "text-slate-300 group-hover:text-white"
                }`}
              >
                {service.title}
              </h3>
            </div>
          </div>

          {/* arrow */}

          <motion.div
            animate={{
              rotate: active ? 0 : -45,
              scale: active ? 1 : 0.9,
            }}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
              active
                ? "border-blue-400/40 bg-blue-500/20 text-blue-200"
                : "border-white/10 text-slate-600 group-hover:border-white/20 group-hover:text-white"
            }`}
          >
            →
          </motion.div>
        </div>

        {/* expanded area */}

        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mt-7 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-[1fr_180px]">

                <div>
                  <p className="max-w-xl text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <button className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-300 transition-colors hover:text-white">
                    Discover capability
                    <span>↗</span>
                  </button>
                </div>

                {/* image */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.15,
                  }}
                  className="relative aspect-[1.3/1] overflow-hidden rounded-xl"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="180px"
                  />

                  <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />

                  <div className="absolute bottom-2 left-2 rounded-md border border-white/20 bg-black/20 px-2 py-1 text-[8px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                    {service.number}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* =========================================================
   FLOATING LABEL
========================================================= */

function FloatingLabel({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${className} rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[8px] tracking-[0.25em] text-slate-500 backdrop-blur-md`}
    >
      {text}
    </motion.div>
  );
}
