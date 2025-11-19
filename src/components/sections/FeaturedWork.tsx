"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import { featuredProjects } from "@/data/projects";

export default function FeaturedWork() {
  return (
    <AnimatedSection className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Work"
          description="Selected projects showcasing real-time data systems, enterprise dashboards, and scalable frontend architectures."
        />

        <Grid cols={3} gap={6}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              company={project.company}
              description={project.description}
              techStack={project.techStack.slice(0, 4)}
              metrics={project.metrics.slice(0, 2)}
              href={`/work/${project.slug}`}
              featured={project.featured}
            />
          ))}
        </Grid>
      </Container>
    </AnimatedSection>
  );
}
