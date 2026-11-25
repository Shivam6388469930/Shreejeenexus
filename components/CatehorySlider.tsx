
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  animate,
} from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Market Research",
    description:
      "Understand customers, markets, competitors, and emerging opportunities.",
    image: "/images/categories/market-research.jpg",
    number: "01",
  },
  {
    id: 2,
    title: "Survey Programming",
    description:
      "Build reliable digital surveys and research experiences at scale.",
    image: "/images/categories/survey-programming.jpg",
    number: "02",
  },
  {
    id: 3,
    title: "Business Growth",
    description:
      "Turn research insights into practical strategies and measurable growth.",
    image: "/images/categories/business-growth.jpg",
    number: "03",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Create campaigns that connect brands with the right audiences.",
    image: "/images/categories/digital-marketing.jpg",
    number: "04",
  },
  {
    id: 5,
    title: "Web Development",
    description:
      "Engineer fast, scalable websites and digital products.",
    image: "/images/categories/web-development.jpg",
    number: "05",
  },
  {
    id: 6,
    title: "Graphic Design",
    description:
      "Build distinctive visual identities and communication systems.",
    image: "/images/categories/graphic-design.jpg",
    number: "06",
  },
];

export default function ShreejeenaxusCategorySlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /*
   * Duplicate slides to create a seamless carousel.
   */
  const slides = [
    ...categories,
    ...categories,
  ];

  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        if (prev >= categories.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 4500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paused]);

  const next = () => {
    setActive((prev) =>
      prev >= categories.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setActive((prev) =>
      prev <= 0 ? categories.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="relative overflow-hidden bg-[#f4f6ff] py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-20%] h-[500px] w-[500px] rounded-full bg-blue-300/10 blur-[120px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-300/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

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
              transition={{
                duration: 0.7,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />

              <span className="text-xs font-semibold tracking-[0.3em] text-blue-700">
                WHAT WE DO
              </span>
            </motion.div>

            <motion.h2
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
              className="max-w-3xl text-4xl font-light tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl"
            >
              Engineering excellence for a world that demands{" "}
              <span className="italic text-blue-700">
                innovation.
              </span>
            </motion.h2>

            <motion.p
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
                duration: 0.7,
                delay: 0.15,
              }}
              className="mt-5 max-w-2xl text-base leading-7 text-slate-600"
            >
              Explore the capabilities that connect research,
              technology, creativity, and business growth.
            </motion.p>
          </div>

          {/* =================================================
              CONTROLS
          ================================================= */}

          <div className="flex items-center gap-3">

            <button
              onClick={previous}
              aria-label="Previous category"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white/60 text-slate-700 backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </button>

            <button
              onClick={next}
              aria-label="Next category"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white/60 text-slate-700 backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)]"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="ml-3 hidden rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-medium text-slate-900 backdrop-blur-md transition-all hover:border-blue-500 hover:text-blue-600 md:block">
              Explore Portfolio
              <span className="ml-2">•••</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          SLIDER
      ===================================================== */}

      <div className="relative z-10 mt-14">
        <motion.div
          className="flex gap-8 px-6 md:px-[max(24px,calc((100vw-1280px)/2))]"
          animate={{
            x: `calc(-${active * 340}px)`,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 22,
            mass: 0.8,
          }}
        >
          {slides.map((category, index) => {
            const realIndex =
              index % categories.length;

            const isActive =
              realIndex === active;

            return (
              <CategoryCard
                key={`${category.id}-${index}`}
                category={category}
                index={index}
                active={isActive}
                onClick={() =>
                  setActive(realIndex)
                }
              />
            );
          })}
        </motion.div>
      </div>

      {/* =====================================================
          MOBILE DOTS
      ===================================================== */}

      <div className="relative z-10 mt-10 flex justify-center gap-2 md:hidden">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActive(index)}
            aria-label={`Go to ${category.title}`}
            className="relative h-1.5 overflow-hidden rounded-full bg-slate-300"
          >
            <motion.span
              animate={{
                width:
                  index === active
                    ? 35
                    : 8,
              }}
              className="block h-full rounded-full bg-blue-600"
            />
          </button>
        ))}
      </div>

      {/* =====================================================
          PROGRESS
      ===================================================== */}

      <div className="relative z-10 mx-auto mt-14 hidden max-w-7xl px-6 md:block">
        <div className="flex items-center gap-6">

          <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
            {String(active + 1).padStart(2, "0")}
          </span>

          <div className="relative h-px flex-1 overflow-hidden bg-slate-200">
            <motion.div
              animate={{
                width: `${
                  ((active + 1) /
                    categories.length) *
                  100
                }%`,
              }}
              transition={{
                duration: 0.5,
              }}
              className="absolute left-0 top-0 h-full bg-blue-600"
            />
          </div>

          <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
            {String(categories.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({
  category,
  index,
  active,
  onClick,
}: {
  category: (typeof categories)[number];
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.article
      onClick={onClick}
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.06, 0.4),
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative w-[300px] shrink-0 cursor-pointer sm:w-[330px]"
    >
      {/* IMAGE */}

      <div className="relative aspect-[0.92/1] overflow-hidden rounded-[24px] bg-slate-200 shadow-[0_15px_40px_rgba(15,23,42,0.08)]">

        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          sizes="330px"
        />

        {/* dark overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

        {/* animated blue glow */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"
        />

        {/* number */}

        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-medium text-white backdrop-blur-md">
          {category.number}
        </div>

        {/* CONTENT */}

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">

          <motion.div
            initial={{
              y: 10,
              opacity: 0.8,
            }}
            whileHover={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <h3 className="text-2xl font-medium tracking-tight">
              {category.title}
            </h3>

            <p className="mt-2 max-w-[270px] text-sm leading-6 text-white/70">
              {category.description}
            </p>
          </motion.div>

          {/* arrow */}

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs tracking-[0.2em] text-white/50">
              EXPLORE
            </span>

            <motion.span
              whileHover={{
                x: 6,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-slate-950"
            >
              →
            </motion.span>
          </div>
        </div>

        {/* top shine */}

        <motion.div
          initial={{
            x: "-130%",
          }}
          whileHover={{
            x: "130%",
          }}
          transition={{
            duration: 0.8,
          }}
          className="absolute inset-y-0 z-20 w-[35%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      {/* ACTIVE INDICATOR */}

      <motion.div
        animate={{
          width: active ? 60 : 0,
          opacity: active ? 1 : 0,
        }}
        className="mx-auto mt-4 h-1 rounded-full bg-blue-600"
      />
    </motion.article>
  );
}
