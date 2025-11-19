import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "daitics-platform",
    slug: "daitics-data-monetization",
    title: "Real-time Data Pipeline Builder",
    company: "Etisalat (Daitics)",
    description: "Built a metadata-driven operator UI for constructing real-time data pipelines, enabling non-technical users to process telecom-scale data streams.",
    longDescription: `Developed a comprehensive visual pipeline builder that revolutionizes how Etisalat handles data monetization. The platform allows business users to create complex ETL workflows through an intuitive drag-and-drop interface, processing millions of records daily with sub-second latency.`,
    role: "Senior Frontend Developer",
    timeline: "2024 - Present",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Apache Kafka",
      "PostgreSQL",
      "Apache Flink",
      "WebSockets",
      "Redux Toolkit"
    ],
    metrics: [
      "60% reduction in pipeline setup time",
      "1M+ records processed per file",
      "<500ms average UI response",
      "17 micro-frontends managed"
    ],
    featured: true,
    category: "data-pipeline"
  },
  {
    id: "ai-marketing-portal",
    slug: "ai-marketing-campaign-builder",
    title: "AI-Powered Marketing Campaign Builder",
    company: "Etisalat (Daitics)",
    description: "Developed an AI-integrated marketing portal that leverages customer data insights to create targeted campaigns with predictive analytics.",
    longDescription: `Built a sophisticated marketing platform that combines AI recommendations with telecom customer data to enable marketers to create highly targeted campaigns. The system provides real-time suggestions, audience segmentation, and performance predictions.`,
    role: "Senior Frontend Developer",
    timeline: "2024",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "OpenAI API",
      "Chart.js",
      "React Query",
      "Zustand",
      "Tailwind CSS"
    ],
    metrics: [
      "35% increase in campaign effectiveness",
      "2hrs → 15min campaign creation time",
      "10k+ AI-generated suggestions daily"
    ],
    featured: true,
    category: "dashboard"
  },
  {
    id: "streaming-dashboard",
    slug: "real-time-analytics-dashboard",
    title: "Real-time Streaming Analytics Dashboard",
    company: "Etisalat (Daitics)",
    description: "Created a high-performance dashboard for monitoring real-time data streams, featuring live charts, alerts, and drill-down analytics.",
    longDescription: `Engineered a real-time monitoring solution that visualizes streaming data from Kafka topics, providing instant insights into data flow, processing rates, and system health with sub-second update latency.`,
    role: "Senior Frontend Developer",
    timeline: "2024",
    techStack: [
      "React",
      "D3.js",
      "WebSockets",
      "Apache Kafka",
      "Time Series DB",
      "React Window",
      "Web Workers"
    ],
    metrics: [
      "100k+ data points per second",
      "50ms update latency",
      "99.9% uptime achieved"
    ],
    featured: true,
    category: "dashboard"
  },
  {
    id: "js-visualizer",
    slug: "javascript-runtime-visualizer",
    title: "Interactive JavaScript Runtime Visualizer",
    company: "Personal Project",
    description: "Building an educational tool that visualizes JavaScript runtime concepts like event loop, closures, and hoisting in an interactive 3D environment.",
    longDescription: `Developing a museum-quality educational experience that helps developers understand complex JavaScript concepts through interactive 3D visualizations, animations, and real-time code execution.`,
    role: "Creator",
    timeline: "2024 - Present",
    techStack: [
      "Three.js",
      "React Three Fiber",
      "TypeScript",
      "Monaco Editor",
      "AST Parser",
      "Framer Motion 3D"
    ],
    metrics: [
      "5 core concepts visualized",
      "60fps smooth 3D performance"
    ],
    featured: false,
    category: "side-project"
  },
  {
    id: "operator-marketplace",
    slug: "etl-operator-marketplace",
    title: "ETL Operator Component Marketplace",
    company: "Etisalat (Daitics)",
    description: "Designed and built an internal marketplace for sharing and discovering reusable ETL operators across teams.",
    role: "Frontend Lead",
    timeline: "2024",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Elasticsearch",
      "Docker",
      "Storybook"
    ],
    metrics: [
      "200+ operators published",
      "30% development time saved"
    ],
    featured: false,
    category: "internal-tool"
  }
];

export const featuredProjects = projects.filter(p => p.featured);
