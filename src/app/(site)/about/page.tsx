"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Lightbulb, Heart, Briefcase, GraduationCap, Award } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { fadeUp } from "@/lib/animations";

const experience = [
  {
    company: "Etisalat (e&)",
    role: "Senior Full-Stack Developer",
    timeline: "2024 — Present",
    description:
      "Building data monetization platforms, real-time ETL pipeline builders, and AI-powered marketing tools for telecom-scale data processing.",
    isCurrent: true,
  },
  {
    company: "Touchnote (UK)",
    role: "Senior Frontend Developer",
    timeline: "2020 — 2024",
    description:
      "Developed production-grade e-commerce platform for personalized cards and gifting serving millions of global users.",
    isCurrent: false,
  },
  {
    company: "IBM India Pvt Ltd",
    role: "Full-Stack Developer",
    timeline: "2016 — 2020",
    description:
      "Built secure web applications and backend services for banking and insurance clients including BCBSMA, ADIB, and Barclays.",
    isCurrent: false,
  },
  {
    company: "Freelance",
    role: "Senior Frontend Developer",
    timeline: "2023 — 2025",
    description:
      "Delivered high-quality web solutions for Expedia Group and KingCaller AI, spanning agent management systems and AI SaaS marketing sites.",
    isCurrent: false,
  },
];

const principles = [
  {
    icon: Code2,
    title: "Clean Code Elegance",
    description:
      "Code is meant to be read by humans. I prioritize clarity, maintainability, and architectural beauty in every module.",
  },
  {
    icon: Lightbulb,
    title: "Scalability First",
    description:
      "Designing systems that don't just work today, but evolve gracefully with future demands and unforeseen growth.",
  },
  {
    icon: Heart,
    title: "User-Centric Architecture",
    description:
      "Putting the human experience at the center of technical decisions, ensuring performance serves utility.",
  },
];

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech in Computer Science",
    institution: "Punjab Technical University • 2012–2016",
    description:
      "Focused on algorithms, data structures, and software engineering fundamentals.",
  },
  {
    icon: Award,
    degree: "Continuous Learning",
    institution: "Self-directed • 2016–Present",
    description:
      "Deep expertise in React, distributed systems, cloud architecture, and real-time data processing through hands-on building and open-source contributions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center overflow-hidden">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="font-label text-primary tracking-widest uppercase text-sm mb-6 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Precision Architect
            </motion.span>
            <motion.h1
              className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building with{" "}
              <span className="text-primary italic">Purpose.</span>
            </motion.h1>
            <motion.p
              className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I&apos;m a Senior Full-Stack Engineer with 9+ years of experience
              building modern web platforms, real-time data systems, and
              enterprise applications. Every line of code is a conscious choice
              towards scalability, elegance, and intent.
            </motion.p>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-primary/10 bg-surface-low">
              <Image
                src="/images/Paramveer-Singh.jpeg"
                alt="Paramveer Singh"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative corner borders */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-primary/40 transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-primary/40 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </motion.div>
        </section>

        {/* Core Design Principles */}
        <section className="bg-surface-low py-32">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="font-headline text-4xl font-bold tracking-tight">
                Core Design Principles
              </h2>
              <p className="font-label text-tertiary tracking-widest uppercase text-xs">
                Engineering Philosophy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card p-8 rounded-xl border-t border-white/5 flex flex-col gap-6 hover:-translate-y-2 hover:border-t-primary/30"
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon
                      size={36}
                      className="text-primary transition-transform duration-500 hover:scale-125"
                    />
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-3">
                        {principle.title}
                      </h3>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Professional Journey - Timeline */}
        <section
          id="experience"
          className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-12 gap-12"
        >
          <motion.div
            className="md:col-span-4 md:sticky md:top-32 h-fit"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-6">
              Professional Journey
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed">
              9+ years of engineering excellence across telecom, e-commerce,
              banking, insurance, and consumer platforms.
            </p>
          </motion.div>

          <div className="md:col-span-8 flex flex-col gap-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative pl-12 ${
                  index < experience.length - 1 ? "pb-12 border-l border-primary/20" : "border-l border-primary/20"
                }`}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 left-[-8px] w-4 h-4 rounded-full ${
                    exp.isCurrent
                      ? "bg-primary shadow-[0_0_15px_rgba(120,251,197,0.5)] animate-pulse"
                      : "bg-surface-variant border border-primary/50 hover:bg-primary/40 transition-colors"
                  }`}
                />
                <span
                  className={`font-label text-xs mb-2 block uppercase tracking-widest ${
                    exp.isCurrent ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {exp.timeline}
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-1">
                  {exp.role}
                </h3>
                <p className="font-body text-tertiary font-medium mb-4">
                  {exp.company}
                </p>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pull Quote */}
        <section className="py-32 bg-surface-lowest overflow-hidden relative">
          {/* Animated background orbs */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-tertiary blur-[100px] animate-pulse" />
          </div>

          <motion.div
            className="max-w-4xl mx-auto px-8 text-center relative z-10"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="text-6xl text-primary/30 mb-8">&ldquo;</div>
            <blockquote className="font-headline text-3xl md:text-5xl font-light italic text-on-surface leading-tight mb-12 transition-all duration-700 hover:scale-[1.02]">
              The best code is not just functional; it is invisible. It creates
              a seamless flow that empowers the user while fading into the
              background of a perfect experience.
            </blockquote>
            <cite className="font-label text-tertiary uppercase tracking-[0.2em] text-sm not-italic">
              — Paramveer Singh
            </cite>
          </motion.div>
        </section>

        {/* Academic Foundation */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <motion.div
            className="mb-16 text-center md:text-left"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
              Academic Foundation
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto md:mx-0" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-surface-container p-10 rounded-xl flex items-start gap-8 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-lg bg-surface-high flex items-center justify-center shrink-0 shadow-lg">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-1">
                      {edu.degree}
                    </h3>
                    <p className="font-body text-on-surface-variant mb-4">
                      {edu.institution}
                    </p>
                    <p className="font-body text-sm text-on-surface-variant/60">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
