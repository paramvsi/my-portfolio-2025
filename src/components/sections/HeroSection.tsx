"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import TechPill from "@/components/ui/TechPill";

const techStack = ["Next.js 15", "React", "TypeScript", "Kafka", "Real-time Data"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary text-sm font-mono mb-4"
            >
              Senior Full-Stack Engineer · Real-time Data & Dashboards
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              I build <span className="text-gradient">real-time data products</span> and dashboards that make telecom-scale data usable.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-foreground-muted text-lg mb-8"
            >
              Specializing in Next.js applications, streaming pipelines, and enterprise data platforms.
              Currently building data monetization tools at Etisalat by e& (Daitics).
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-medium rounded-full transition-colors"
              >
                View my work
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 font-medium rounded-full transition-colors"
              >
                <Download size={16} />
                Download resume
              </Link>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  <TechPill variant="primary">{tech}</TechPill>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl glass p-8 glow-primary">
              {/* Simple data flow visualization */}
              <div className="w-full h-full flex items-center justify-center text-primary/20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="50" cy="50" r="4" fill="currentColor" className="animate-pulse" />
                  <circle cx="150" cy="50" r="4" fill="currentColor" className="animate-pulse delay-100" />
                  <circle cx="100" cy="100" r="6" fill="currentColor" className="animate-pulse delay-200" />
                  <circle cx="50" cy="150" r="4" fill="currentColor" className="animate-pulse delay-300" />
                  <circle cx="150" cy="150" r="4" fill="currentColor" className="animate-pulse delay-400" />

                  <path d="M50,50 L100,100 M150,50 L100,100 M50,150 L100,100 M150,150 L100,100"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.5" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
