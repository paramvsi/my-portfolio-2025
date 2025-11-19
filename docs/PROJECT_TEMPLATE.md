# Project Detail Page Template

This document provides the **exact structure** to follow when adding new projects to the portfolio. Each project detail page follows the same layout for consistency.

---

## 📐 Page Structure (Fixed Layout)

Every project detail page contains these sections in order:

1. **Top Bar** - Back to projects link + tags
2. **Header Block** - Title, company, timeline, optional summary
3. **Overview Card** - 3-5 lines about the product
4. **Impact & Results** - 3-4 metric cards
5. **Technologies Used** - Tech stack pills
6. **My Role** - Role title + 2-4 sentence description
7. **Footer** - View all projects link + optional external links

---

## 📝 Content Template

For each new project, copy this structure and fill in the values:

```typescript
{
  // Basic Info
  id: "unique-id",
  slug: "url-friendly-slug",
  title: "Project Title",
  company: "Company Name",
  timeline: "YYYY - YYYY" or "YYYY - Present",

  // Tags (optional)
  primaryTag: "e-commerce" | "data pipeline" | "dashboard" | "internal tool" | "side project",
  secondaryTag: "Featured" | "In Progress" | "Side Project",

  // Descriptions
  oneLineSummary: "One sentence describing what this product is/does.",

  description: "Short description (1-2 sentences) for project cards on the work page.",

  longDescription: `Overview paragraph (3-5 lines) answering:
    - What is this product?
    - Who uses it?
    - What problem does it solve?
    - What scale/constraints are relevant?`,

  // Role
  role: "Senior Frontend Developer" | "Full-Stack Developer" | "Frontend Developer",

  roleDescription: `2-4 sentences covering:
    - Your level and primary responsibilities
    - What you led/owned (architecture, UI, API integration, etc.)
    - Team collaboration (product, design, data, backend teams)
    - Any leadership/mentoring activities`,

  // Impact Metrics (3-4 items)
  metrics: [
    "60% reduction in pipeline setup time",
    "1M+ records processed per file",
    "<500ms average UI response",
    "17 micro-frontends managed"
  ],

  // Tech Stack (8-12 items mixing frontend, backend, data, tools)
  techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Apache Kafka",
    "PostgreSQL",
    "Apache Flink",
    "WebSockets"
  ],

  // Metadata
  featured: true | false,
  category: "dashboard" | "data-pipeline" | "ecommerce" | "internal-tool" | "side-project",

  // Optional External Links
  link: "https://example.com", // Live product URL
  github: "https://github.com/username/repo" // GitHub repo
}
```

---

## 💡 Guidelines

### Writing the Overview
- **First sentence**: What is this product?
- **Second sentence**: Who uses it and why?
- **Third sentence**: What's the main value/outcome?
- **Optional fourth**: Scale, constraints, or unique challenges

Example:
> "Built a comprehensive e-commerce platform for Touchnote's personalized cards and gifting business. Led development of customer-facing features including product browsing, customization tools, cart management, and checkout workflows. Integrated with Shopify for product catalog management and CMS for content delivery, while optimizing frontend performance and user experience across desktop and mobile devices."

### Impact Metrics Format
Each metric should be: `VALUE + LABEL`

Good examples:
- `"60% reduction in pipeline setup time"`
- `"1M+ records processed per file"`
- `"<500ms average UI response"`
- `"70% increase in customer acquisition"`

The component will automatically split on the first space to display the value large and label small.

### Role Description Best Practices
1. Start with your level: "Senior Frontend Developer", "Full-Stack Developer", etc.
2. Mention what you owned: architecture, UI components, API design, etc.
3. Include collaboration: worked with product, design, backend teams
4. Add leadership if relevant: mentored juniors, led technical decisions

Example:
> "Senior Frontend Developer responsible for architecting and implementing the visual pipeline builder interface. Led the design and development of the drag-and-drop workflow system, real-time data preview components, and metadata configuration UI. Collaborated closely with backend engineers on API design and data engineers on Kafka integration patterns. Established component patterns and design system standards adopted across the organization."

### Tech Stack Organization
Mix categories for a complete picture:
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Java/Spring, Express
- **Data/Infrastructure**: Kafka, PostgreSQL, Redis, Elasticsearch
- **APIs/Tools**: OpenAI API, Shopify, REST APIs, GraphQL
- **DevOps** (if relevant): Docker, Kubernetes, CI/CD

Limit to 8-12 items max. Show breadth but stay focused.

---

## 🎯 Examples

### Example 1: E-commerce Project

```typescript
{
  id: "touchnote-ecommerce",
  slug: "touchnote-ecommerce-platform",
  title: "Touchnote E-commerce Platform",
  company: "Touchnote (UK)",
  timeline: "2021 - 2023",
  primaryTag: "e-commerce",
  secondaryTag: "Featured",

  oneLineSummary: "Production e-commerce platform for personalized cards and gifting.",

  description: "Developed a production-grade e-commerce web application for personalised cards and gifting. Delivered end-to-end features using React/Angular, integrated Node.js APIs with CMS tools, and connected product and catalog data with Shopify.",

  longDescription: `Built a comprehensive e-commerce platform for Touchnote's personalized cards and gifting business. Led development of customer-facing features including product browsing, customization tools, cart management, and checkout workflows. Integrated with Shopify for product catalog management and CMS for content delivery, while optimizing frontend performance and user experience across desktop and mobile devices.`,

  role: "Frontend Developer",

  roleDescription: `Led frontend development across React and Angular codebases, implementing product customization flows, shopping cart, and checkout experiences. Integrated Node.js backend APIs with headless CMS systems and Shopify product catalog. Collaborated with design team on UI/UX optimization and product team on feature prioritization. Improved page load performance by 40% through code splitting and lazy loading strategies.`,

  metrics: [
    "70% increase in customer acquisition",
    "40% faster page loads",
    "Simplified checkout flow",
    "99.9% uptime achieved"
  ],

  techStack: [
    "React",
    "Angular",
    "Node.js",
    "Shopify",
    "CMS",
    "REST APIs",
    "TypeScript",
    "Redux"
  ],

  featured: true,
  category: "ecommerce"
}
```

### Example 2: Data Pipeline Project

```typescript
{
  id: "daitics-platform",
  slug: "daitics-data-monetization",
  title: "Real-time Data Pipeline Builder",
  company: "Etisalat (e&)",
  timeline: "2024 - Present",
  primaryTag: "data pipeline",
  secondaryTag: "Featured",

  oneLineSummary: "Visual ETL pipeline builder for telecom data monetization.",

  description: "Built a metadata-driven operator UI for constructing real-time data pipelines, enabling non-technical users to process telecom-scale data streams.",

  longDescription: `Developed a comprehensive visual pipeline builder that revolutionizes how Etisalat handles data monetization. The platform allows business users to create complex ETL workflows through an intuitive drag-and-drop interface, processing millions of records daily with sub-second latency. Integrated with Apache Kafka for stream processing and PostgreSQL for metadata management.`,

  role: "Senior Frontend Developer",

  roleDescription: `Led the architecture and development of the visual pipeline builder interface using Next.js 15 and React 19. Designed the drag-and-drop workflow system, real-time data preview components, and metadata configuration UI. Collaborated with backend engineers on Kafka integration patterns and data engineers on operator semantics. Established micro-frontend architecture managing 17+ applications and created the design system used across the organization.`,

  metrics: [
    "60% reduction in pipeline setup time",
    "1M+ records processed per file",
    "<500ms average UI response",
    "17 micro-frontends managed"
  ],

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

  featured: true,
  category: "data-pipeline"
}
```

---

## ✅ Checklist Before Publishing

Before adding a new project, verify:

- [ ] All required fields are filled (id, slug, title, company, timeline, role, description, longDescription)
- [ ] Metrics are formatted as "VALUE label text" (will split on first space)
- [ ] Tech stack has 8-12 items covering frontend, backend, data/tools
- [ ] Role description is 2-4 sentences covering level, ownership, collaboration
- [ ] Overview paragraph answers: what, who, problem, scale
- [ ] One-line summary is concise and descriptive (if provided)
- [ ] Tags are appropriate (primaryTag defaults to category if not set)
- [ ] Category matches one of: "dashboard", "data-pipeline", "ecommerce", "internal-tool", "side-project"

---

## 🚀 How to Add a New Project

1. Open `src/data/projects.ts`
2. Copy the template structure from this document
3. Fill in all the fields for your project
4. Add the object to the `projects` array
5. Set `featured: true` if it should appear on the homepage
6. Run `npm run build` to verify TypeScript types
7. Test the project detail page at `/work/[your-slug]`

The layout will automatically adapt to your content!
