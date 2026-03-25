"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

type Category = "all" | "dashboard" | "data-pipeline" | "ecommerce" | "internal-tool" | "side-project";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "dashboard", label: "Dashboards" },
  { id: "data-pipeline", label: "Pipelines" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "side-project", label: "Side Projects" },
];

// Asymmetric grid layout patterns (cycle every 4 cards)
const layoutPatterns = [
  { colSpan: "md:col-span-8", aspect: "aspect-[16/9]", minH: "" },
  { colSpan: "md:col-span-4", aspect: "", minH: "min-h-[500px]" },
  { colSpan: "md:col-span-5", aspect: "aspect-square", minH: "" },
  { colSpan: "md:col-span-7", aspect: "aspect-video", minH: "" },
];

// Accent color rotation
const accentPatterns = [
  { pill: "bg-primary/20 text-primary border-primary/20", hover: "hover:border-primary/30", title: "group-hover:text-primary" },
  { pill: "bg-tertiary/20 text-tertiary border-tertiary/20", hover: "hover:border-tertiary/30", title: "group-hover:text-tertiary" },
  { pill: "bg-primary/20 text-primary border-primary/20", hover: "hover:border-primary/30", title: "group-hover:text-primary" },
  { pill: "bg-secondary/20 text-secondary border-secondary/20", hover: "hover:border-secondary/30", title: "group-hover:text-secondary" },
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
        {/* Nebula Background */}
        <div className="absolute inset-0 nebula-glow opacity-50 pointer-events-none" />

        {/* Header Section */}
        <header className="max-w-7xl mx-auto mb-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-label text-primary font-bold tracking-widest uppercase text-xs">
                Portfolio Gallery
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background">
                Selected Projects
              </h1>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex flex-wrap gap-2 bg-surface-low p-1.5 rounded-full border border-outline-variant/10"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-label text-sm font-bold transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-on-primary shadow-lg shadow-primary/20 hover:brightness-110"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </header>

        {/* Project Gallery (Asymmetric Grid) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10"
          >
            {filteredProjects.map((project, index) => {
              const layout = layoutPatterns[index % 4];
              const accent = accentPatterns[index % 4];

              return (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className={`${layout.colSpan} group relative rounded-xl overflow-hidden glass-card border border-outline-variant/10 cursor-pointer ${accent.hover} project-card`}
                >
                  {/* Image / Placeholder */}
                  <div className={`${layout.aspect} ${layout.minH} overflow-hidden ${!layout.aspect && !layout.minH ? "aspect-video" : ""}`}>
                    <div className="project-image w-full h-full bg-gradient-to-br from-surface-high via-surface-container to-surface-variant flex items-center justify-center transition-transform duration-1000">
                      <div className="text-center space-y-3 p-8">
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Code2 size={28} className="text-primary/60" />
                        </div>
                        <p className="font-label text-xs text-on-surface-variant/40 uppercase tracking-widest">
                          {project.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-variant via-surface-variant/20 to-transparent opacity-90 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`${accent.pill} px-3 py-1 rounded-full text-[10px] font-bold font-label uppercase tracking-widest border`}>
                        {project.industry || project.category}
                      </span>
                    </div>
                    <h3 className={`font-headline text-2xl md:text-3xl font-bold mb-2 ${accent.title} transition-colors`}>
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant font-body max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Arrow Button */}
                  <div className="absolute top-8 right-8 p-4 rounded-full bg-primary text-on-primary opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl shadow-primary/40">
                    <ArrowUpRight size={20} />
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 relative z-10"
          >
            <p className="text-on-surface-variant font-body">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.section
          className="max-w-4xl mx-auto mt-32 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-background tracking-tight">
            Have a bold idea?
          </h2>
          <p className="text-on-surface-variant font-body mb-10 text-lg max-w-lg mx-auto">
            I&apos;m always open to discussing new projects and collaborations. Let&apos;s build something that pushes boundaries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-5 bg-primary text-on-primary font-label font-bold rounded-full hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="px-10 py-5 bg-transparent border border-outline-variant text-on-surface font-label font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              About Me
            </Link>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
