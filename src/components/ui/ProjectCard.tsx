"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import TechPill from "./TechPill";
import GlassCard from "./GlassCard";

interface ProjectCardProps {
  title: string;
  company: string;
  industry?: string;
  description: string;
  techStack: string[];
  metrics?: string[];
  href: string;
  featured?: boolean;
  className?: string;
}

export default function ProjectCard({
  title,
  company,
  industry,
  description,
  techStack,
  metrics = [],
  href,
  featured = false,
  className,
}: ProjectCardProps) {
  return (
    <Link href={href} className="block group">
      <GlassCard
        hover
        className={cn(
          "h-full flex flex-col",
          featured && "border-primary/30",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-foreground-muted font-mono">
              {company}
              {industry && <span className="text-primary/60"> · {industry}</span>}
            </p>
          </div>
          <motion.div
            className="text-primary transition-transform"
            animate={{ x: 0, rotate: 0 }}
            whileHover={{ x: 4, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-foreground-muted mb-6 flex-1">{description}</p>

        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="mb-6 grid grid-cols-2 gap-3">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2"
              >
                <p className="text-primary text-sm font-medium">{metric}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {techStack.map((tech) => (
            <TechPill key={tech} variant="default" size="sm">
              {tech}
            </TechPill>
          ))}
        </div>
      </GlassCard>
    </Link>
  );
}
