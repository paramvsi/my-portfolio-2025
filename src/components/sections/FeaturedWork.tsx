"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code2 } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { fadeUp } from "@/lib/animations";

// Rotating accent colors for project eyebrows
const projectAccents = [
  { eyebrow: "text-secondary", hoverTitle: "group-hover:text-primary" },
  { eyebrow: "text-tertiary", hoverTitle: "group-hover:text-tertiary" },
  { eyebrow: "text-primary", hoverTitle: "group-hover:text-primary" },
];

export default function FeaturedWork() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
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
              {/* Image Placeholder */}
              <div
                className={`${
                  isReversed ? "md:col-span-7 md:order-2 order-1" : "md:col-span-7"
                } overflow-hidden rounded-xl bg-surface-high border border-outline-variant/20 shadow-2xl transition-all duration-700 hover:shadow-primary/10`}
              >
                <div className="w-full aspect-[16/10] bg-gradient-to-br from-surface-high to-surface-variant flex items-center justify-center p-12 transition-all duration-1000 group-hover:scale-[1.02]">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Code2 size={32} className="text-primary" />
                    </div>
                    <h4 className="font-headline text-2xl font-bold text-on-surface/60">
                      {project.title}
                    </h4>
                    <p className="font-label text-sm text-on-surface-variant/50 uppercase tracking-widest">
                      {project.company}
                    </p>
                  </div>
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
