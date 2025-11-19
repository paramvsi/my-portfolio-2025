"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Heart, Lightbulb } from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Divider from "@/components/ui/Divider";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const experience = [
  {
    company: "Etisalat (e&)",
    role: "Senior Full-Stack Developer",
    timeline: "2024 - Present",
    description:
      "Building data monetization platforms, real-time ETL pipeline builders, and AI-powered marketing tools for telecom-scale data processing.",
    achievements: [
      "Architected visual ETL builder processing 4M+ events/sec using Kafka, Flink, and NiFi",
      "Built AI-integrated marketing campaign portal reducing setup time from 2hrs to 15min",
      "Implemented real-time monitoring dashboard with <1s telemetry latency",
      "Established design system and component library used across organization",
    ],
  },
  {
    company: "Touchnote (UK)",
    role: "Senior Frontend Developer",
    timeline: "2020 - 2024",
    description:
      "Developed production-grade e-commerce platform for personalized cards and gifting serving millions of global users.",
    achievements: [
      "Rebuilt flagship card creator using Canvas API with 50% faster rendering",
      "Integrated Shopify, CMS-driven content workflows, and product personalization tools",
      "Achieved 90+ Lighthouse scores for performance and accessibility",
      "Reduced customer drop-off by 30% during card creation experience",
    ],
  },
  {
    company: "IBM India Pvt Ltd",
    role: "Full-Stack Developer",
    timeline: "2016 - 2020",
    description:
      "Built secure web applications and backend services for banking and insurance clients including BCBSMA, ADIB, and Barclays.",
    achievements: [
      "Developed Spring Boot microservices handling millions of daily transactions",
      "Built insurance portals managing policy riders, claims, and enrollment workflows",
      "Improved API response performance by 30% through optimization",
      "Delivered mission-critical banking features with 99.99% uptime",
    ],
  },
  {
    company: "Freelance",
    role: "Senior Frontend Developer",
    timeline: "2023 - 2025",
    description:
      "Delivered high-quality web solutions for Expedia Group and KingCaller AI, spanning agent management systems and AI SaaS marketing sites.",
    achievements: [
      "2+ years continuous engagement with Expedia on agent console portal",
      "Built KingCaller AI website with 95+ Lighthouse scores and premium animations",
      "Integrated Amazon Connect APIs for omnichannel routing workflows",
      "Reduced manual effort through automated agent management features",
    ],
  },
];

const values = [
  {
    icon: Code2,
    title: "Clean Engineering",
    description:
      "Writing maintainable, scalable code with clarity and purpose.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Staying ahead of emerging technologies, frameworks, and patterns.",
  },
  {
    icon: Heart,
    title: "User-Centric Design",
    description:
      "Crafting interfaces that prioritize performance, clarity, and accessibility.",
  },
  {
    icon: Briefcase,
    title: "Collaborative Delivery",
    description:
      "Working closely with cross-functional teams to ship reliable products.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <Container>
          {/* Intro */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent blur-3xl -z-10" />
            <SectionHeader
              eyebrow="About Me"
              title="Senior Full-Stack Engineer"
              description="Building modern web applications, enterprise platforms, and real-time systems."
              centered
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="max-w-4xl mx-auto" hover>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image */}
                <motion.div
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
                    <Image
                      src="/images/Paramveer-Singh.jpeg"
                      alt="Paramveer Singh"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Bio Text */}
                <div className="prose prose-invert max-w-none flex-1">
                  <p className="text-lg text-foreground-muted leading-relaxed">
                    I'm a Senior Full-Stack Engineer with 9+ years of experience building modern web platforms, real-time data systems, enterprise dashboards, and e-commerce experiences. I've worked across telecom, banking, insurance, government, and consumer products—designing intuitive UIs, scalable backend services, and high-performance data workflows. I currently work at Etisalat, building data monetization tools and large-scale streaming platforms.
                  </p>
                  <p className="text-lg text-foreground-muted leading-relaxed mt-4">
                    My journey in development started with a fascination for how interfaces can turn raw data into meaningful products. Over the years, I've built everything from AI-powered campaign builders and telecom ETL engines to personalized e-commerce platforms and banking portals. I enjoy combining clean UI engineering with backend architecture to deliver end-to-end solutions users rely on every day.
                  </p>
                  <p className="text-lg text-foreground-muted leading-relaxed mt-4">
                    Outside of work, I explore WebGL, Three.js, and interactive 3D experiences, experiment with developer tools, and build open-source projects around visualization and productivity. I'm passionate about mentorship, clean engineering practices, and moving teams toward modern, scalable solutions.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <Divider gradient spacing="xl" />

          {/* Values */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-center mb-12">Core Values</h2>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GlassCard hover className="h-full text-center">
                      <motion.div
                        className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-foreground-muted">{value.description}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <Divider gradient spacing="xl" />

          {/* Experience */}
          <motion.div
            id="experience"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <GlassCard hover>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Briefcase size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-foreground-muted">{exp.company}</p>
                        <p className="text-sm text-muted-foreground font-mono mt-1">
                          {exp.timeline}
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground-muted mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-foreground-muted flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
