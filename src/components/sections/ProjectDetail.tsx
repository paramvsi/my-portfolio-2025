"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Project } from "@/types";
import { projects } from "@/data/projects";
import { fadeUp } from "@/lib/animations";

interface ProjectDetailProps {
  project: Project;
}

// Accent colors for metric cards
const metricAccents = ["text-primary", "text-tertiary", "text-secondary", "text-primary"];

function parseMetric(metric: string): { value: string; description: string } {
  // Match leading value: numbers with optional prefixes (<, >, ~), suffixes (%, +, ×, x),
  // unit abbreviations (M, k, K, ms, s, hrs), ranges (→), and combinations like "1M+", "<500ms", "2hrs → 15min"
  const match = metric.match(/^([<>~]?[\d,.]+\s*[MkKBx×%+]*(?:ms|s|hrs?|min)?\+?(?:\s*(?:→|->)\s*[\d,.]+\s*[MkKBx×%+]*(?:ms|s|hrs?|min)?\+?)?)/);
  if (match) {
    const value = match[1].trim();
    const description = metric.slice(match[0].length).trim();
    return { value, description };
  }
  return { value: "✓", description: metric };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const projectIndex = projects.indexOf(project);
  const hasImage = projectIndex >= 0 && projectIndex < 20;
  const imageSrc = hasImage
    ? `/images/Work/Project-${String(projectIndex + 1).padStart(2, "0")}.jpg`
    : null;

  const longText = project.longDescription || project.description;
  // Split long description into paragraphs
  const paragraphs = longText.split("\n").filter((p) => p.trim());

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[870px] flex items-center pt-24 overflow-hidden">
        {/* Background Image */}
        {imageSrc && (
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              className="object-cover opacity-30"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
        )}

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-on-surface-variant/60 hover:text-primary font-label text-sm uppercase tracking-widest transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>

          <div className="max-w-3xl">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-sm mb-4 block">
              {project.primaryTag || project.category.replace("-", " ")}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8">
              {project.title}
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-10">
              {project.oneLineSummary || project.description}
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap gap-12 border-t border-outline-variant/30 pt-8">
              <div>
                <p className="font-label text-on-surface-variant/50 text-xs uppercase tracking-widest mb-1">
                  Role
                </p>
                <p className="font-body font-semibold text-tertiary">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="font-label text-on-surface-variant/50 text-xs uppercase tracking-widest mb-1">
                  Timeline
                </p>
                <p className="font-body font-semibold">{project.timeline}</p>
              </div>
              {project.industry && (
                <div>
                  <p className="font-label text-on-surface-variant/50 text-xs uppercase tracking-widest mb-1">
                    Sector
                  </p>
                  <p className="font-body font-semibold">{project.industry}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-32"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary" />
              Overview
            </h2>
            <p className="font-body text-on-surface-variant text-lg">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-8 space-y-8 font-body text-on-surface-variant leading-loose text-lg"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Blockquote */}
            <div className="bg-surface-container p-8 rounded-xl border-l-4 border-primary">
              <p className="italic text-on-surface">
                &ldquo;Building this project required balancing complex
                technical requirements with an intuitive user experience —
                ensuring performance at scale while keeping the interface
                accessible.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Measured Impact */}
      {project.metrics.length > 0 && (
        <section className="py-24 max-w-7xl mx-auto px-8">
          <motion.h2
            className="font-headline text-3xl font-bold mb-12 text-center"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Measured Impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.metrics.slice(0, 3).map((metric, index) => {
              const parsed = parseMetric(metric);
              return (
                <motion.div
                  key={index}
                  className="glass-card p-10 rounded-xl relative overflow-hidden group hover:bg-surface-variant transition-all duration-500"
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p
                    className={`font-headline text-5xl font-extrabold ${metricAccents[index % metricAccents.length]} mb-4`}
                  >
                    {parsed.value}
                  </p>
                  <p className="font-body text-on-surface-variant">
                    {parsed.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Engineering Stack */}
      <section className="py-24 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">
                Engineering Stack
              </h2>
              <p className="font-body text-on-surface-variant max-w-xl">
                Technologies used to deliver a high-performance, maintainable
                application.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-2 rounded-full bg-surface-high text-on-surface font-label text-sm hover:text-secondary cursor-default transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Execution & Role */}
      <section className="py-24 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Project Image */}
            {imageSrc && (
              <motion.div
                className="relative"
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={imageSrc}
                    alt={`${project.title} detail`}
                    width={800}
                    height={500}
                    className="grayscale hover:grayscale-0 transition-all duration-700 w-full"
                  />
                </div>
              </motion.div>
            )}

            {/* Role Details */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-headline text-3xl font-bold mb-6">
                Execution &amp; Role
              </h2>
              <p className="font-body text-on-surface-variant text-lg leading-loose mb-8">
                As the{" "}
                <span className="text-primary font-semibold">
                  {project.role}
                </span>
                {project.roleDescription
                  ? `, ${project.roleDescription.charAt(0).toLowerCase()}${project.roleDescription.slice(1)}`
                  : ` at ${project.company}, I focused on delivering a robust, scalable solution.`}
              </p>

              {/* Achievement bullets from metrics */}
              {project.metrics.length > 0 && (
                <ul className="space-y-4">
                  {project.metrics.slice(0, 4).map((metric, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle
                        size={20}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span className="font-body">{metric}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-32 text-center"
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8">
            Interested in the Process?
          </h2>
          <p className="font-body text-xl text-on-surface-variant mb-12">
            I&apos;m currently open to discussing architectural challenges and
            new project opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/work"
              className="bg-gradient-to-r from-primary to-primary-dark text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              View More Projects
            </Link>
            <Link
              href="/contact"
              className="border border-outline-variant text-on-surface px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
