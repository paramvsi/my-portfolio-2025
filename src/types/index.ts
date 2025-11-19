export interface Project {
  id: string;
  slug: string;
  title: string;
  company: string;
  description: string;
  longDescription?: string;
  role: string;
  timeline: string;
  techStack: string[];
  metrics: string[];
  featured: boolean;
  category: "dashboard" | "data-pipeline" | "internal-tool" | "side-project";
  image?: string;
  link?: string;
  github?: string;
}

export interface Skill {
  category: "frontend" | "backend" | "data" | "delivery";
  name: string;
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
