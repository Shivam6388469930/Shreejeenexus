"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type Point = {
  x: number;
  y: number;
  z: number;
};

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ShreejeenaxusHeros() {
  const [loading, setLoading] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const contentX = useTransform(smoothX, [-600, 600], [-12, 12]);
  const contentY = useTransform(smoothY, [-400, 400], [-8, 8]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#01040d] text-white"
    >
      {/* =====================================================
          LOADER
      ===================================================== */}

      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? "auto" : "none",
        }}
        transition={{
          duration: 0.8,
        }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#01040d]"
      >
        <div className="flex flex-col items-center">
          <div className="relative h-24 w-24">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-blue-400/20 border-t-cyan-300"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-3 rounded-full border border-purple-400/20 border-r-purple-300"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                }}
                className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_30px_#22d3ee]"
              />
            </div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="mt-7 text-xs tracking-[0.5em] text-cyan-100/70"
          >
            SHREEJEENAXUS
          </motion.div>

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: 180,
            }}
            transition={{
              duration: 1.1,
              delay: 0.35,
            }}
            className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
          />
        </div>
      </motion.div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center justify-center">

        {/* BACKGROUND SCENE */}

        <AnimatedResearchUniverse
          mouseX={smoothX}
          mouseY={smoothY}
        />

        {/* Optional video layer

        Put your own video at:

        /public/videos/shreejeenaxus-bg.mp4

        Then uncomment this block:

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source
            src="/videos/shreejeenaxus-bg.mp4"
            type="video/mp4"
          />
        </video>

        */}

        {/* DARK OVERLAY */}

        <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(circle_at_center,transparent_15%,rgba(1,4,13,0.25)_50%,rgba(1,4,13,0.92)_100%)]" />

        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-[#01040d]/20 via-transparent to-[#01040d]" />

        {/* =================================================
            CONTENT
        ================================================= */}

        <motion.div
          style={{
            x: contentX,
            y: contentY,
          }}
          className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 text-center"
        >

          {/* BRAND */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.65,
            }}
            className="group relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl transition-all duration-500 group-hover:bg-cyan-400/40" />

            <div className="relative flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.035] px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-300/50">
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]"
              />

              <span className="text-xs font-medium tracking-[0.25em] text-cyan-100">
                SHREEJEENAXUS
              </span>

              <span className="hidden text-xs text-white/30 sm:inline">
                /
              </span>

              <span className="hidden text-xs tracking-[0.15em] text-white/50 sm:inline">
                DIGITAL INTELLIGENCE
              </span>
            </div>
          </motion.div>

          {/* =================================================
              HEADLINE
          ================================================= */}

          <div className="relative max-w-6xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 45,
                filter: "blur(18px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.1,
                delay: 1.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl font-light leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[82px]"
            >
              Research that
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 45,
                filter: "blur(18px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.1,
                delay: 1.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-1"
            >
              <div className="absolute left-1/2 top-1/2 -z-10 h-28 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-400 bg-clip-text text-5xl font-light italic tracking-[-0.055em] text-transparent sm:text-7xl md:text-8xl lg:text-[96px]">
                moves business forward.
              </span>
            </motion.div>

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

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
              delay: 2.2,
            }}
            className="mt-9 max-w-4xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8"
          >
            We connect market research, survey programming,
            technology, marketing, and creative execution to
            transform complex information into{" "}
            <span className="text-cyan-100">
              clear business direction.
            </span>
          </motion.p>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 2.4,
            }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <MagneticButton primary>
              Who We Are
              <Arrow />
            </MagneticButton>

            <MagneticButton>
              What We Do
              <Arrow />
            </MagneticButton>

            <MagneticButton primary>
              Work With Us
              <Arrow />
            </MagneticButton>
          </motion.div>

          {/* =================================================
              DATA INDICATOR
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.8,
            }}
            className="mt-16 flex items-center gap-4 text-[10px] tracking-[0.3em] text-white/30"
          >
            <span className="h-px w-10 bg-cyan-400/30" />

            DISCOVER THE NEXT SIGNAL

            <motion.span
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-cyan-300"
            >
              ↓
            </motion.span>

            <span className="h-px w-10 bg-cyan-400/30" />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

/* =========================================================
   ANIMATED BACKGROUND
========================================================= */

function AnimatedResearchUniverse({
  mouseX,
  mouseY,
}: {
  mouseX: any;
  mouseY: any;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);

    /* -----------------------------------------
       CREATE PARTICLES
    ----------------------------------------- */

    particles.current = Array.from(
      { length: 180 },
      () => ({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1.8 + 0.3,
        speed: Math.random() * 0.0008 + 0.0002,
        opacity: Math.random() * 0.8 + 0.1,
      })
    );

    /* -----------------------------------------
       ANIMATION
    ----------------------------------------- */

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const time = performance.now();

      /* ---------------------------------------
         BACKGROUND
      --------------------------------------- */

      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7
      );

      gradient.addColorStop(
        0,
        "rgba(8,54,100,0.5)"
      );

      gradient.addColorStop(
        0.45,
        "rgba(3,20,45,0.8)"
      );

      gradient.addColorStop(
        1,
        "rgba(1,4,13,1)"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /* ---------------------------------------
         DATA GRID
      --------------------------------------- */

      ctx.save();

      ctx.strokeStyle =
        "rgba(56,189,248,0.06)";

      ctx.lineWidth = 1;

      const gridSize = 70;

      for (
        let x = 0;
        x < width;
        x += gridSize
      ) {
        ctx.beginPath();

        ctx.moveTo(x, 0);
        ctx.lineTo(
          width / 2 +
            (x - width / 2) * 0.35,
          height
        );

        ctx.stroke();
      }

      for (
        let y = 0;
        y < height;
        y += gridSize
      ) {
        ctx.beginPath();

        ctx.moveTo(0, y);
        ctx.lineTo(width, y);

        ctx.stroke();
      }

      ctx.restore();

      /* ---------------------------------------
         PARTICLES
      --------------------------------------- */

      const particlePositions: Point[] = [];

      particles.current.forEach(
        (particle) => {
          particle.y -= particle.speed;

          if (particle.y < 0) {
            particle.y = 1;
            particle.x = Math.random();
          }

          const px =
            particle.x * width;

          const py =
            particle.y * height;

          particlePositions.push({
            x: px,
            y: py,
            z: particle.size,
          });

          ctx.beginPath();

          ctx.arc(
            px,
            py,
            particle.size,
            0,
            Math.PI * 2
          );

          ctx.fillStyle =
            `rgba(103,232,249,${particle.opacity})`;

          ctx.shadowBlur = 10;
          ctx.shadowColor = "#22d3ee";

          ctx.fill();

          ctx.shadowBlur = 0;
        }
      );

      /* ---------------------------------------
         CONNECT NEAR PARTICLES
      --------------------------------------- */

      for (
        let i = 0;
        i < particlePositions.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < particlePositions.length;
          j++
        ) {
          const a =
            particlePositions[i];

          const b =
            particlePositions[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance =
            Math.sqrt(
              dx * dx + dy * dy
            );

          if (distance < 100) {
            const opacity =
              (1 - distance / 100) *
              0.15;

            ctx.strokeStyle =
              `rgba(56,189,248,${opacity})`;

            ctx.beginPath();

            ctx.moveTo(
              a.x,
              a.y
            );

            ctx.lineTo(
              b.x,
              b.y
            );

            ctx.stroke();
          }
        }
      }

      /* ---------------------------------------
         CENTRAL ORBIT
      --------------------------------------- */

      const centerX =
        width / 2;

      const centerY =
        height / 2;

      const globeRadius =
        Math.min(width, height) *
        0.23;

      /* outer glow */

      const glow =
        ctx.createRadialGradient(
          centerX,
          centerY,
          10,
          centerX,
          centerY,
          globeRadius * 1.5
        );

      glow.addColorStop(
        0,
        "rgba(34,211,238,0.15)"
      );

      glow.addColorStop(
        0.5,
        "rgba(59,130,246,0.08)"
      );

      glow.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        globeRadius * 1.5,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /* ---------------------------------------
         GLOBE LATITUDE
      --------------------------------------- */

      ctx.save();

      ctx.translate(
        centerX,
        centerY
      );

      const rotation =
        time * 0.00025;

      ctx.rotate(rotation);

      for (
        let i = -3;
        i <= 3;
        i++
      ) {
        const ratio =
          i / 4;

        const radius =
          globeRadius *
          Math.sqrt(
            1 - ratio * ratio
          );

        ctx.beginPath();

        ctx.ellipse(
          0,
          ratio * globeRadius,
          radius,
          radius * 0.23,
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          "rgba(103,232,249,0.20)";

        ctx.lineWidth = 1;

        ctx.stroke();
      }

      /* longitude */

      for (
        let i = 0;
        i < 8;
        i++
      ) {
        const angle =
          (i / 8) *
          Math.PI *
          2;

        ctx.save();

        ctx.rotate(angle);

        ctx.beginPath();

        ctx.ellipse(
          0,
          0,
          globeRadius,
          globeRadius * 0.25,
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          "rgba(96,165,250,0.17)";

        ctx.stroke();

        ctx.restore();
      }

      ctx.restore();

      /* ---------------------------------------
         ORBIT RINGS
      --------------------------------------- */

      for (
        let i = 0;
        i < 3;
        i++
      ) {
        const orbitRotation =
          time * (0.0003 + i * 0.0001);

        ctx.save();

        ctx.translate(
          centerX,
          centerY
        );

        ctx.rotate(
          orbitRotation
        );

        ctx.beginPath();

        ctx.ellipse(
          0,
          0,
          globeRadius *
            (1.25 + i * 0.25),
          globeRadius *
            (0.25 + i * 0.04),
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          `rgba(34,211,238,${0.13 - i * 0.025})`;

        ctx.lineWidth = 1;

        ctx.stroke();

        ctx.restore();
      }

      /* ---------------------------------------
         SCANNING BEAM
      --------------------------------------- */

      const scanY =
        centerY +
        Math.sin(time * 0.001) *
          globeRadius;

      const scanGradient =
        ctx.createLinearGradient(
          centerX -
            globeRadius,
          scanY,
          centerX +
            globeRadius,
          scanY
        );

      scanGradient.addColorStop(
        0,
        "rgba(34,211,238,0)"
      );

      scanGradient.addColorStop(
        0.5,
        "rgba(34,211,238,0.8)"
      );

      scanGradient.addColorStop(
        1,
        "rgba(34,211,238,0)"
      );

      ctx.strokeStyle =
        scanGradient;

      ctx.lineWidth = 1;

      ctx.beginPath();

      ctx.moveTo(
        centerX - globeRadius,
        scanY
      );

      ctx.lineTo(
        centerX + globeRadius,
        scanY
      );

      ctx.stroke();

      /* ---------------------------------------
         CENTER CORE
      --------------------------------------- */

      const pulse =
        1 +
        Math.sin(time * 0.003) *
          0.08;

      const coreGradient =
        ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          35 * pulse
        );

      coreGradient.addColorStop(
        0,
        "rgba(255,255,255,0.9)"
      );

      coreGradient.addColorStop(
        0.2,
        "rgba(103,232,249,0.8)"
      );

      coreGradient.addColorStop(
        1,
        "rgba(34,211,238,0)"
      );

      ctx.fillStyle =
        coreGradient;

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        35 * pulse,
        0,
        Math.PI * 2
      );

      ctx.fill();

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Floating glass cards */}

      <FloatingCard
        className="left-[4%] top-[19%]"
        rotate={-8}
        delay={0}
      >
        <CardIcon type="research" />

        <div>
          <p className="text-[10px] tracking-[0.2em] text-cyan-200/60">
            INTELLIGENCE
          </p>

          <p className="mt-1 text-lg font-medium">
            Market Research
          </p>

          <div className="mt-3 h-1 w-20 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-full w-1/2 bg-cyan-300"
            />
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="right-[5%] top-[17%]"
        rotate={9}
        delay={1}
      >
        <CardIcon type="data" />

        <div>
          <p className="text-[10px] tracking-[0.2em] text-blue-200/60">
            TECHNOLOGY
          </p>

          <p className="mt-1 text-lg font-medium">
            Data & Platforms
          </p>

          <div className="mt-3 flex gap-1">
            {[1, 2, 3, 4, 5].map(
              (item) => (
                <motion.span
                  key={item}
                  animate={{
                    opacity: [0.25, 1, 0.25],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: item * 0.15,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-4 rounded-full bg-blue-300"
                />
              )
            )}
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="bottom-[13%] right-[8%]"
        rotate={-7}
        delay={2}
      >
        <CardIcon type="growth" />

        <div>
          <p className="text-[10px] tracking-[0.2em] text-purple-200/60">
            GROWTH
          </p>

          <p className="mt-1 text-lg font-medium">
            Business Strategy
          </p>

          <div className="mt-3 text-xs text-white/40">
            SIGNAL → INSIGHT → ACTION
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="bottom-[14%] left-[8%]"
        rotate={7}
        delay={3}
      >
        <CardIcon type="creative" />

        <div>
          <p className="text-[10px] tracking-[0.2em] text-pink-200/60">
            CREATIVE
          </p>

          <p className="mt-1 text-lg font-medium">
            Digital Experiences
          </p>

          <div className="mt-3 flex gap-2">
            <span className="h-1.5 w-8 rounded-full bg-pink-300/70" />
            <span className="h-1.5 w-4 rounded-full bg-purple-300/60" />
          </div>
        </div>
      </FloatingCard>
    </>
  );
}

/* =========================================================
   FLOATING CARD
========================================================= */

function FloatingCard({
  children,
  className,
  rotate,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  rotate: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        rotate,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: [
          rotate,
          rotate + 2,
          rotate,
        ],
        y: [0, -12, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay: 2 + delay * 0.15,
        },
        scale: {
          duration: 0.8,
          delay: 2 + delay * 0.15,
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        y: {
          duration: 5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 50,
      }}
      className={`absolute z-[6] hidden w-[260px] rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-500 hover:border-cyan-300/30 hover:bg-white/[0.09] lg:block ${className}`}
    >
      <div className="flex items-center gap-4">
        {children}
      </div>

      {/* Glass reflection */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-20deg]"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   CARD ICON
========================================================= */

function CardIcon({
  type,
}: {
  type:
    | "research"
    | "data"
    | "growth"
    | "creative";
}) {
  const icons = {
    research: "⌁",
    data: "◈",
    growth: "↗",
    creative: "✦",
  };

  return (
    <motion.div
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] text-xl text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.08)]"
    >
      {icons[type]}
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
    stiffness: 350,
    damping: 22,
  });

  const springY = useSpring(y, {
    stiffness: 350,
    damping: 22,
  });

  const handleMove = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const offsetX =
      e.clientX -
      rect.left -
      rect.width / 2;

    const offsetY =
      e.clientY -
      rect.top -
      rect.height / 2;

    x.set(offsetX * 0.12);
    y.set(offsetY * 0.12);
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
        scale: 0.95,
      }}
      className={[
        "group relative flex h-14 min-w-[190px] items-center justify-center gap-3 overflow-hidden rounded-full px-7 text-sm font-semibold",
        "transition-all duration-500",
        primary
          ? "bg-white text-[#06101e] shadow-[0_0_45px_rgba(103,232,249,0.12)]"
          : "border border-white/20 bg-white/[0.035] text-white backdrop-blur-xl",
      ].join(" ")}
    >
      {/* animated light */}

      <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

      {/* border glow */}

      <span className="absolute inset-0 rounded-full border border-cyan-300/0 transition-all duration-500 group-hover:border-cyan-300/50 group-hover:shadow-[inset_0_0_25px_rgba(34,211,238,0.12)]" />

      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
}

/* =========================================================
   ARROW
========================================================= */

function Arrow() {
  return (
    <motion.span
      initial={{
        x: 0,
      }}
      whileHover={{
        x: 5,
      }}
      className="relative z-10"
    >
      →
    </motion.span>
  );
}