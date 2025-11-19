"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import TechPill from "@/components/ui/TechPill";

const techStack = [
  "Next.js",
  "React",
  "Angular",
  "Java/Spring",
  "Node.js",
  "Kafka",
  "Postgres",
  "E-commerce",
  "Banking",
  "Insurance",
  "Real-Time Systems"
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />

      <div className="relative max-w-[1500px] mx-auto px-6 py-20">
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
              Senior Full-Stack Engineer · Web Platforms · Enterprise Apps · Real-Time Systems
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              I build modern, <span className="text-gradient">scalable applications</span>—from web platforms to enterprise systems and real-time solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-foreground-muted text-lg mb-8"
            >
              With 9+ years of experience, I&apos;ve delivered full-stack products across e-commerce, banking, insurance, and telecom. I combine modern frontend engineering, solid backend architecture, and clean UI/UX to ship reliable, production-ready applications end-to-end.
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
                href="/paramveer_resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 font-medium rounded-full transition-colors"
              >
                <Download size={16} />
                Download résumé
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

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden md:flex justify-center items-center"
          >
            {/* Gradient background blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-50" />

            {/* Photo container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden ring-2 ring-primary/30 ring-offset-4 ring-offset-background shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Paramveer-Singh.jpeg"
                  alt="Paramveer Singh - Senior Full-Stack Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 0px, (max-width: 1024px) 320px, 384px"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
