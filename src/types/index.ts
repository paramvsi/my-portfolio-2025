export interface Project {
  id: string;
  slug: string;
  title: string;
  company: string;
  industry?: string;
  description: string;
  longDescription?: string;
  oneLineSummary?: string;
  role: string;
  roleDescription?: string;
  timeline: string;
  techStack: string[];
  metrics: string[];
  featured: boolean;
  category: "dashboard" | "data-pipeline" | "internal-tool" | "side-project" | "ecommerce";
  primaryTag?: string;
  secondaryTag?: string;
  image?: string;
  link?: string;
  github?: string;
}

export interface Skill {
  category: "frontend" | "backend" | "data" | "delivery";
  name: string;
  description?: string;
  items: string[];
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  timeline: string;
  description: string;
  achievements: string[];
}
