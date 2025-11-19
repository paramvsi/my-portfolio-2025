"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import { featuredProjects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function FeaturedWork() {
  return (
    <AnimatedSection className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Work"
          description="Selected projects across e-commerce, enterprise platforms, and real-time data systems."
        />

        <Grid cols={3} gap={6}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              company={project.company}
              industry={project.industry}
              description={project.description}
              techStack={project.techStack.slice(0, 4)}
              metrics={project.metrics.slice(0, 2)}
              href={`/work/${project.slug}`}
              featured={project.featured}
              link={project.link}
            />
          ))}
        </Grid>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
