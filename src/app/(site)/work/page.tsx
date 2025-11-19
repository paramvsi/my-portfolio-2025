"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import Grid from "@/components/ui/Grid";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Grid3x3, MonitorDot, GitMerge, Boxes, Sparkles } from "lucide-react";

type Category = "all" | "dashboard" | "data-pipeline" | "internal-tool" | "side-project";

const categories = [
  { id: "all" as Category, label: "All Projects", icon: Grid3x3 },
  { id: "dashboard" as Category, label: "Dashboards", icon: MonitorDot },
  { id: "data-pipeline" as Category, label: "Data Pipelines", icon: GitMerge },
  { id: "internal-tool" as Category, label: "Internal Tools", icon: Boxes },
  { id: "side-project" as Category, label: "Side Projects", icon: Sparkles },
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
      <main className="min-h-screen pt-24 pb-16">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
          >
            <SectionHeader
              eyebrow="Portfolio"
              title="All Projects"
              description="A collection of real-time data systems, enterprise dashboards, and web applications I've built."
              centered
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground scale-105"
                      : "bg-muted/20 text-foreground-muted hover:bg-muted/40 hover:scale-102"
                  }`}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Grid cols={3} className="gap-x-8 gap-y-10 md:gap-x-10">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    <ProjectCard
                      title={project.title}
                      company={project.company}
                      industry={project.industry}
                      description={project.description}
                      techStack={project.techStack.slice(0, 4)}
                      metrics={project.metrics.slice(0, 2)}
                      href={`/work/${project.slug}`}
                      featured={project.featured}
                    />
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="text-center py-20"
            >
              <p className="text-foreground-muted">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </Container>
      </main>
    </>
  );
}
