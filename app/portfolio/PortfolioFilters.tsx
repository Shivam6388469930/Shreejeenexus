"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  slug: string;
  description: string;
  gradient: string;
  image?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.97 },
};

export default function PortfolioFilters({
  categories,
  projects,
}: {
  categories: string[];
  projects: Project[];
}) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter pills */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === cat
                ? "bg-peacock text-mist shadow-lg shadow-peacock/20"
                : "border border-peacock/15 bg-white/70 text-peacock/70 hover:border-peacock/30 hover:bg-white hover:text-peacock"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div
        layout
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.45,
                ease: [0.25, 0.4, 0.25, 1],
                delay: i * 0.08,
              }}
              layout
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block rounded-2xl border border-peacock/10 bg-white/70 backdrop-blur transition hover:shadow-xl hover:-translate-y-1"
              >
                {/* Project Image Header */}
                <div
                  className={`relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br ${project.gradient}`}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  {/* Subtle dark gradient overlay to ensure text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-peacock/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  {/* Category pill on image */}
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-mist/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-peacock shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-peacock/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-peacock/60">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-peacock">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-peacock/60">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-marigold transition group-hover:gap-3">
                    View project
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
