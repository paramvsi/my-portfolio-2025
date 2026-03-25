"use client";

import { motion } from "framer-motion";
import { Code2, Database, Activity, Zap } from "lucide-react";
import { skills } from "@/data/skills";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  Code2,
  Database,
  Activity,
  Zap,
};

// Accent colors for each card
const cardAccents = [
  { icon: "text-primary", hover: "hover:border-primary/30", label: "text-primary" },
  { icon: "text-tertiary", hover: "hover:border-tertiary/30", label: "text-primary" },
  { icon: "text-secondary", hover: "hover:border-secondary/30", label: "text-primary" },
  { icon: "text-primary", hover: "hover:border-primary/20", label: "text-primary" },
];

export default function SkillsSection() {
  const [frontend, backend, data, tools] = skills;
  const FrontendIcon = iconMap[frontend.icon as keyof typeof iconMap];
  const BackendIcon = iconMap[backend.icon as keyof typeof iconMap];
  const DataIcon = iconMap[data.icon as keyof typeof iconMap];
  const ToolsIcon = iconMap[tools.icon as keyof typeof iconMap];

  return (
    <section className="bg-surface-low py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
            Technical Proficiency
          </h2>
          <motion.div
            className="h-1 w-20 bg-primary rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {/* Card 1: Frontend & UI (2-col span) */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 glass-card p-8 rounded-xl flex flex-col justify-between group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
          >
            <div>
              <FrontendIcon
                size={36}
                className="text-primary mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
              />
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-background">
                {frontend.name}
              </h3>
              <p className="font-body text-on-surface-variant mb-6">
                {frontend.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontend.items.slice(0, 6).map((item) => (
                <span
                  key={item}
                  className="bg-surface-high px-3 py-1 rounded-full font-label text-xs text-secondary font-medium hover:bg-secondary hover:text-white transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Backend & Infrastructure */}
          <motion.div
            variants={staggerItem}
            className="glass-card p-8 rounded-xl group hover:border-tertiary/30 transition-all duration-500 hover:-translate-y-2"
          >
            <BackendIcon
              size={36}
              className="text-tertiary mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3"
            />
            <h3 className="font-headline text-2xl font-bold mb-4">
              {backend.name}
            </h3>
            <p className="font-body text-on-surface-variant text-sm mb-4">
              {backend.description}
            </p>
            <ul className="space-y-2 font-label text-xs uppercase tracking-widest text-primary">
              {backend.items.slice(0, 5).map((item) => (
                <li
                  key={item}
                  className="hover:translate-x-1 transition-transform cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Data & Real-time */}
          <motion.div
            variants={staggerItem}
            className="glass-card p-8 rounded-xl group hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2"
          >
            <DataIcon
              size={36}
              className="text-secondary mb-6 transition-transform group-hover:scale-110"
            />
            <h3 className="font-headline text-2xl font-bold mb-4">
              {data.name}
            </h3>
            <p className="font-body text-on-surface-variant text-sm mb-4">
              {data.description}
            </p>
            <ul className="space-y-2 font-label text-xs uppercase tracking-widest text-primary">
              {data.items.slice(0, 5).map((item) => (
                <li
                  key={item}
                  className="hover:translate-x-1 transition-transform cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 4: Tools & Practices (full-width) */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-4 glass-card p-10 rounded-xl flex flex-col md:flex-row items-center gap-12 group hover:border-primary/20 transition-all duration-700"
          >
            <div className="flex-1">
              <h3 className="font-headline text-3xl font-bold mb-4">
                {tools.name}
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {tools.description} Leveraging modern tooling and best practices for CI/CD automation, testing, and observability across the full development lifecycle.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 flex-1">
              {[
                { icon: Zap, label: "Performance" },
                { icon: Code2, label: "Testing" },
                { icon: Activity, label: "Observability" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="w-24 h-24 rounded-full border border-outline-variant/30 flex items-center justify-center bg-white/5 transition-all duration-500 hover:scale-110 hover:border-primary/50 hover:bg-primary/5"
                >
                  <Icon size={28} className="text-on-surface" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
