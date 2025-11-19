"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import TechPill from "@/components/ui/TechPill";
import MetricDisplay from "@/components/ui/MetricDisplay";
import Divider from "@/components/ui/Divider";
import { Project } from "@/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <Container size="lg">
        {/* Back Button */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Tags */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full capitalize">
              {project.primaryTag || project.category.replace("-", " ")}
            </span>
            {(project.featured || project.secondaryTag) && (
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {project.secondaryTag || "Featured"}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

          {/* Company + Timeline */}
          <div className="flex flex-wrap items-center gap-2 text-foreground-muted mb-3">
            <Briefcase size={18} />
            <span className="font-medium">{project.company}</span>
            <span>·</span>
            <span>{project.timeline}</span>
          </div>

          {/* One-line Summary */}
          {project.oneLineSummary && (
            <p className="text-foreground-muted text-lg italic">
              {project.oneLineSummary}
            </p>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-foreground-muted text-lg leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </GlassCard>
        </motion.div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-8">Impact & Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.metrics.map((metric, index) => (
                <GlassCard key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                    {metric.split(" ")[0]}
                  </p>
                  <p className="text-sm text-foreground-muted">
                    {metric.split(" ").slice(1).join(" ")}
                  </p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        )}

        <Divider gradient spacing="lg" />

        {/* Tech Stack */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <TechPill key={tech} variant="primary" size="md">
                {tech}
              </TechPill>
            ))}
          </div>
        </motion.div>

        {/* Role */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <div className="space-y-3">
              <p className="text-primary font-semibold">{project.role}</p>
              {project.roleDescription && (
                <p className="text-foreground-muted text-lg leading-relaxed">
                  {project.roleDescription}
                </p>
              )}
            </div>
          </GlassCard>
        </motion.div>

        {/* Links */}
        {(project.link || project.github) && (
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-medium rounded-full transition-colors"
              >
                <ExternalLink size={18} />
                View Live Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 font-medium rounded-full transition-colors"
              >
                <Github size={18} />
                View on GitHub
              </a>
            )}
          </motion.div>
        )}

        {/* Next/Previous Projects */}
        <Divider gradient spacing="xl" />

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
        >
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
            >
              View all projects
              <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
