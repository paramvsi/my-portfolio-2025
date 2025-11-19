"use client";

import { motion } from "framer-motion";
import { Code2, Database, Activity, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import TechPill from "@/components/ui/TechPill";
import { skills } from "@/data/skills";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  Code2,
  Database,
  Activity,
  Zap,
};

export default function SkillsSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Expertise"
          title="Skills & Technologies"
          description="End-to-end web, data, and platform engineering with a focus on real-time systems and UX."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skills.map((skillCategory) => {
            const Icon = iconMap[skillCategory.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={skillCategory.category}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <GlassCard hover className="h-full group">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10 text-primary"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{skillCategory.name}</h3>
                  </div>

                  {skillCategory.description && (
                    <p className="text-sm text-foreground-muted mb-6 leading-relaxed">
                      {skillCategory.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15 }}
                      >
                        <TechPill variant="default" size="sm">
                          {skill}
                        </TechPill>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
