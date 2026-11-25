"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AboutImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const missionItems = [
    "Understand markets and audiences.",
    "Make evidence-informed decisions.",
    "Translate opportunities into action.",
    "Build better customer experiences.",
  ];

  return (
    <div className="relative w-full max-w-[660px] pb-[105px]">
      {/* =====================================================
          IMAGE
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0.1,
          scale: 1.06,
          filter: "blur(18px)",
          clipPath: "inset(100% 0 0 0)",
        }}
        animate={
          imageLoaded
            ? {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                clipPath: "inset(0% 0 0 0)",
              }
            : {
                opacity: 0.1,
                scale: 1.06,
                filter: "blur(18px)",
                clipPath: "inset(100% 0 0 0)",
              }
        }
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.012,
        }}
        className="
          group
          relative
          aspect-[4/3]
          w-full
          overflow-hidden
          rounded-[28px]
        "
      >
        {/* IMAGE */}
        <Image
          src="/images/about-team.jpg"
          alt="Shreejeenaxus team"
          fill
          priority
          onLoad={() => setImageLoaded(true)}
          className="
            object-cover
            transition-transform
            duration-[1200ms]
            ease-out
            group-hover:scale-[1.06]
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 660px"
        />

        {/* IMAGE GRADIENT */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            via-transparent
            to-white/5
          "
        />

        {/* =================================================
            LOADING SHIMMER
        ================================================= */}
        {!imageLoaded && (
          <motion.div
            initial={{
              x: "-120%",
            }}
            animate={{
              x: "120%",
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-y-0
              z-20
              w-[40%]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              blur-xl
            "
          />
        )}

        {/* =================================================
            REVEAL LIGHT
        ================================================= */}
        {imageLoaded && (
          <motion.div
            initial={{
              x: "-120%",
              opacity: 0,
            }}
            animate={{
              x: "120%",
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              z-10
              w-[35%]
              skew-x-[-15deg]
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              blur-md
            "
          />
        )}

        {/* IMAGE BORDER */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[28px]
            ring-1
            ring-black/5
            transition-all
            duration-500
            group-hover:ring-blue-400/20
          "
        />
      </motion.div>

      {/* =====================================================
          MISSION CARD
          Floating over the image like the reference design
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 45,
          scale: 0.96,
        }}
        animate={
          imageLoaded
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                y: 45,
                scale: 0.96,
              }
        }
        transition={{
          duration: 0.8,
          delay: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-0
          right-[6%]
          z-20
          w-[82%]
          rounded-[25px]
          border
          border-white/70
          bg-white/[0.88]
          p-7
          shadow-[0_25px_70px_rgba(30,50,100,0.14)]
          backdrop-blur-xl
          md:p-8
          lg:p-9
        "
      >
        {/* TOP ACCENT LINE */}
        <motion.div
          initial={{
            width: 0,
          }}
          animate={
            imageLoaded
              ? {
                  width: "55px",
                }
              : {
                  width: 0,
                }
          }
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="
            mb-4
            h-[3px]
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-cyan-400
          "
        />

        {/* TITLE */}
        <h3
          className="
            text-[22px]
            font-semibold
            leading-tight
            tracking-tight
            text-slate-950
            md:text-[24px]
          "
        >
          Our mission is simple
        </h3>

        {/* MISSION ITEMS */}
        <div className="mt-5 space-y-3.5">
          {missionItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={
                imageLoaded
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {
                      opacity: 0,
                      x: -15,
                    }
              }
              transition={{
                duration: 0.5,
                delay: 0.9 + index * 0.12,
              }}
              className="
                flex
                items-start
                gap-3
                text-[13px]
                leading-5
                text-slate-700
                md:text-sm
              "
            >
              <span
                className="
                  mt-[1px]
                  shrink-0
                  text-[14px]
                  font-semibold
                  text-amber-500
                "
              >
                ↗
              </span>

              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* =====================================================
          FLOATING ORBIT DOT
      ===================================================== */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-5
          top-[48%]
          z-30
          hidden
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-blue-500/40
          bg-blue-500/5
          backdrop-blur-md
          lg:flex
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-amber-400
            shadow-[0_0_15px_rgba(251,191,36,0.9)]
          "
        />
      </motion.div>
    </div>
  );
}