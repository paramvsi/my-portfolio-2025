"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
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
  link?: string;
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
  link,
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
        {/* Header - Fixed height */}
        <div className="flex items-start justify-between mb-4 h-[72px]">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors truncate" title={title}>
              {title}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-foreground-muted font-mono truncate">
                {company}
                {industry && <span className="text-primary/60"> · {industry}</span>}
              </p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center text-primary/60 hover:text-primary transition-colors flex-shrink-0"
                  title="View live project"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
          <motion.div
            className="text-primary transition-transform flex-shrink-0 ml-2"
            animate={{ x: 0, rotate: 0 }}
            whileHover={{ x: 4, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>

        {/* Description - Fixed height area */}
        <div className="mb-6 h-[72px]">
          <p className="text-foreground-muted line-clamp-3">{description}</p>
        </div>

        {/* Metrics - Fixed height */}
        <div className="mb-6 h-[88px]">
          {metrics.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 h-full">
              {metrics.slice(0, 2).map((metric, index) => (
                <div
                  key={index}
                  className="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 flex items-center"
                >
                  <p className="text-primary text-sm font-medium line-clamp-2">{metric}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Tech Stack - Fixed at bottom */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
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
