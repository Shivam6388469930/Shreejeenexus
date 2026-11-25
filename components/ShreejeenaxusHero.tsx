"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 5 + 4,
  delay: Math.random() * 3,
}));

export default function ShreejeenaxusHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [loading, setLoading] = useState(true);
  const [mouseInside, setMouseInside] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const spotlightX = useTransform(smoothX, [-500, 500], ["-10%", "110%"]);
  const spotlightY = useTransform(smoothY, [-400, 400], ["-10%", "110%"]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* ================= LOADING SCREEN ================= */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? "auto" : "none",
        }}
        transition={{ duration: 0.7 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative h-16 w-16 rounded-full border border-blue-400/20 border-t-blue-400"
          >
            <div className="absolute inset-2 rounded-full border border-purple-400/20 border-b-purple-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm tracking-[0.35em] text-blue-200/70"
          >
            SHREEJEENAXUS
          </motion.div>
        </div>
      </motion.div>

      {/* ================= HERO ================= */}
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setMouseInside(true)}
        onMouseLeave={() => setMouseInside(false)}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* ================= BACKGROUND ================= */}

        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#173b91_0%,#071b48_35%,#020617_75%)]" />

        {/* Large animated glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[15%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]"
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[130px]"
        />

        {/* Mouse spotlight */}
        <motion.div
          style={{
            left: spotlightX,
            top: spotlightY,
            opacity: mouseInside ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="pointer-events-none absolute z-[2] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[90px]"
        />

        {/* ================= LIGHT BEAMS ================= */}

        <div className="absolute inset-0 z-[1] flex justify-center opacity-50">
          {[0, 1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.08, 0.3, 0.08],
              }}
              transition={{
                duration: 4 + item,
                delay: item * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-[2px] h-full w-[8vw] max-w-[150px] border-x border-blue-300/[0.05] bg-gradient-to-b from-blue-300/[0.12] via-blue-500/[0.02] to-transparent"
            />
          ))}
        </div>

        {/* ================= GRID ================= */}

        <div
          className="absolute inset-0 z-[1] opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />

        {/* ================= PARTICLES ================= */}

        <div className="absolute inset-0 z-[3]">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [-20, -100],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              className="absolute rounded-full bg-blue-300 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
            />
          ))}
        </div>

        {/* ================= FLOATING ORB ================= */}

        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[16%] top-[38%] z-[5] hidden md:block"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.4)] backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,1)]" />

            <div className="absolute inset-[-8px] rounded-full border border-blue-400/20" />
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center">
          {/* Brand Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.25,
            }}
            className="group relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl transition-all duration-500 group-hover:bg-blue-500/40" />

            <div className="relative flex items-center gap-3 rounded-full border border-blue-300/30 bg-white/[0.04] px-6 py-3 backdrop-blur-xl transition-all duration-500 group-hover:border-blue-300/60 group-hover:bg-white/[0.08]">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)]"
              />

              <span className="text-xs font-semibold tracking-[0.16em] text-blue-100">
                SHREEJEENAXUS
              </span>

              <span className="text-xs text-blue-300/60">
                • DIGITAL INNOVATION
              </span>
            </div>
          </motion.div>

          {/* ================= TITLE ================= */}

          <div className="relative">
            <motion.h1
              initial={{
                opacity: 0,
                y: 45,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[100px]"
            >
              Building the
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(15px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 1.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Glow behind Together */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-20 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[70px]" />

              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-6xl font-light italic tracking-[-0.05em] text-transparent sm:text-8xl md:text-9xl lg:text-[120px]">
                Together
              </span>
            </motion.div>
          </div>

          {/* ================= DESCRIPTION ================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.95,
            }}
            className="mt-10 max-w-3xl text-base leading-7 text-blue-50/70 sm:text-lg sm:leading-8"
          >
            Transform ideas into powerful digital experiences.{" "}
            <span className="text-white">
              Shreejeenaxus
            </span>{" "}
            combines technology, creativity, research, and intelligent
            solutions to help businesses build what comes next.
          </motion.p>

          {/* ================= BUTTONS ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 2.15,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton primary>
              Let's Build Together
              <Arrow />
            </MagneticButton>

            <MagneticButton>
              Explore Our Services
              <Arrow />
            </MagneticButton>
          </motion.div>

          {/* ================= BOTTOM INDICATOR ================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.6,
            }}
            className="mt-16 flex items-center gap-3 text-xs tracking-[0.25em] text-blue-300/40"
          >
            <motion.span
              animate={{
                scaleX: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-px w-10 bg-blue-400/40"
            />

            SCROLL TO EXPLORE

            <motion.span
              animate={{
                scaleX: [1.5, 1, 1.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-px w-10 bg-blue-400/40"
            />
          </motion.div>
        </div>

        {/* ================= BOTTOM VIGNETTE ================= */}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48 bg-gradient-to-t from-[#020617] to-transparent" />

        {/* Top vignette */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-32 bg-gradient-to-b from-[#020617]/50 to-transparent" />
      </section>
    </main>
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

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX * 0.12);
    y.set(mouseY * 0.12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{
        scale: 0.96,
      }}
      className={[
        "group relative flex min-w-[250px] items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold transition-all duration-500",
        primary
          ? "bg-white text-slate-950 shadow-[0_0_40px_rgba(147,197,253,0.18)]"
          : "border border-blue-200/30 bg-white/[0.03] text-white backdrop-blur-xl",
      ].join(" ")}
    >
      {/* Hover gradient */}
      <span
        className={[
          "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transition-transform duration-700 group-hover:translate-x-full",
          primary ? "via-blue-300/30" : "",
        ].join(" ")}
      />

      {/* Glow */}
      <span className="absolute inset-0 rounded-full opacity-0 shadow-[inset_0_0_25px_rgba(96,165,250,0.35)] transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

/* =========================================================
   ARROW
========================================================= */

function Arrow() {
  return (
    <motion.span
      className="relative z-10 flex h-5 w-5 items-center justify-center"
      initial={{ x: 0 }}
      whileHover={{ x: 4 }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M5 12H19M19 12L13 6M19 12L13 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
}