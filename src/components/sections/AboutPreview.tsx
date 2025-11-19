"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp } from "@/lib/animations";

const experience = [
  {
    company: "Etisalat (e&)",
    role: "Senior Full-Stack Developer",
    timeline: "2024 - Present",
    icon: Briefcase,
  },
  {
    company: "Touchnote (UK)",
    role: "Senior Frontend Developer",
    timeline: "2020 - 2024",
    icon: Briefcase,
  },
  {
    company: "IBM India Pvt Ltd",
    role: "Full-Stack Developer",
    timeline: "2016 - 2020",
    icon: Briefcase,
  },
  {
    company: "Freelance",
    role: "Senior Frontend Developer",
    timeline: "2023 - 2025",
    icon: Briefcase,
  },
];

export default function AboutPreview() {
  return (
    <AnimatedSection className="py-16 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: About Text */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="About Me"
              title="Building Web, Data, and Platform Products at Scale"
              description=""
            />

            <div className="space-y-4 text-foreground-muted">
              <p>
                I'm a Senior Full-Stack Engineer specializing in modern web apps, enterprise platforms, and high-performance data systems. At Etisalat, I build data monetization tools, streaming ETL engines, and real-time dashboards that serve telecom-scale traffic.
              </p>
              <p>
                I've also built personalized e-commerce platforms at Touchnote, banking and insurance systems at IBM, marketing automation tools, and multiple developer-focused side projects. I enjoy designing clean UI flows, optimizing backend services, and solving problems at scale.
              </p>
              <p>
                When I'm not working, I explore 3D web technologies, build experimental tools, and contribute to open-source projects.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-primary hover:gap-3 transition-all"
            >
              More about me
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <GlassCard hover>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap size={24} className="text-primary" />
                Experience
              </h3>

              <div className="space-y-6">
                {experience.map((exp, index) => {
                  const Icon = exp.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold">{exp.role}</h4>
                        <p className="text-sm text-foreground-muted">{exp.company}</p>
                        <p className="text-xs text-muted-foreground mt-1 font-mono">
                          {exp.timeline}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                href="/about#experience"
                className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:gap-3 transition-all"
              >
                View full experience
                <ArrowRight size={14} />
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
