"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { fadeUp } from "@/lib/animations";

// Project images mapped by index
const projectImages = [
  { src: "/images/HomeProjects/Project-01.jpg", bg: "bg-[#0a1628]", fit: "object-contain" },
  { src: "/images/HomeProjects/Project-02.jpg", bg: "bg-[#e8e8e8]", fit: "object-cover" },
  { src: "/images/HomeProjects/Project-03.jpg", bg: "bg-[#f5f0e8]", fit: "object-contain" },
];

// Rotating accent colors for project eyebrows
const projectAccents = [
  { eyebrow: "text-secondary", hoverTitle: "group-hover:text-primary" },
  { eyebrow: "text-tertiary", hoverTitle: "group-hover:text-tertiary" },
  { eyebrow: "text-primary", hoverTitle: "group-hover:text-primary" },
];

export default function FeaturedWork() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32 overflow-hidden">
      {/* Header Row */}
      <motion.div
        className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <span className="font-label text-primary tracking-widest text-sm font-bold uppercase">
            Work
          </span>
          <h2 className="font-headline text-5xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/work"
          className="group flex items-center gap-2 font-headline font-bold text-lg text-primary hover:text-primary-dark transition-colors"
        >
          View all projects
          <ArrowRight
            size={20}
            className="group-hover:translate-x-2 transition-transform"
          />
        </Link>
      </motion.div>

      {/* Alternating Projects */}
      <div className="space-y-32">
        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          const accent = projectAccents[index % projectAccents.length];

          return (
            <motion.div
              key={project.id}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Project Image */}
              <div
                className={`${
                  isReversed ? "md:col-span-7 md:order-2 order-1" : "md:col-span-7"
                } min-w-0 overflow-hidden rounded-xl bg-surface-high border border-outline-variant/20 shadow-2xl transition-all duration-700 hover:shadow-primary/10`}
              >
                <div className={`w-full aspect-[16/10] overflow-hidden relative ${(projectImages[index] || projectImages[0]).bg}`}>
                  <Image
                    src={(projectImages[index] || projectImages[0]).src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className={`${(projectImages[index] || projectImages[0]).fit} transition-all duration-1000 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`${
                  isReversed
                    ? "md:col-span-5 md:order-1 order-2 md:text-right"
                    : "md:col-span-5"
                } space-y-6`}
              >
                <span
                  className={`font-label ${accent.eyebrow} text-sm font-bold uppercase tracking-widest`}
                >
                  {project.industry || project.company}
                </span>
                <h3
                  className={`font-headline text-4xl font-bold text-on-background ${accent.hoverTitle} transition-colors duration-500`}
                >
                  {project.title}
                </h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
                <div
                  className={`flex gap-4 ${isReversed ? "md:justify-end" : ""}`}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary hover:text-on-primary transition-all hover:scale-110 active:scale-90"
                    aria-label={`View ${project.title} details`}
                  >
                    <ArrowRight size={20} />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-surface-high text-on-surface p-3 rounded-full hover:bg-surface-variant transition-all hover:scale-110 active:scale-90"
                      aria-label={`Open ${project.title} externally`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
