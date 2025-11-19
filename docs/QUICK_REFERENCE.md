# Quick Reference: Adding Projects

## 🚀 Fast Track

```typescript
// 1. Open src/data/projects.ts
// 2. Add this object to the projects array:

{
  // IDs
  id: "unique-id",
  slug: "url-slug",

  // Header
  title: "Project Title",
  company: "Company Name",
  timeline: "2024 - Present",
  oneLineSummary: "One sentence about the product.", // optional

  // Tags (optional - defaults to category)
  primaryTag: "e-commerce",
  secondaryTag: "Featured",

  // Content
  description: "1-2 sentence card description.",
  longDescription: `3-5 sentence overview explaining:
    what, who uses it, problem solved, scale.`,

  // Role
  role: "Senior Frontend Developer",
  roleDescription: `2-4 sentences: level, ownership,
    collaboration, leadership.`, // optional but recommended

  // Impact (3-4 metrics)
  metrics: [
    "60% reduction in setup time",
    "1M+ records processed",
    "<500ms response time"
  ],

  // Tech (8-12 items)
  techStack: [
    "Next.js", "React", "TypeScript",
    "Node.js", "PostgreSQL", "Kafka"
  ],

  // Meta
  featured: true,
  category: "data-pipeline",

  // Links (optional)
  link: "https://...",
  github: "https://github.com/..."
}
```

## 📋 Categories

- `"ecommerce"`
- `"data-pipeline"`
- `"dashboard"`
- `"internal-tool"`
- `"side-project"`

## 🎯 Metric Format

Split on first space → VALUE (big) + LABEL (small)

```
"60% reduction in setup time"
 ^^^  ^^^^^^^^^^^^^^^^^^^^^
VALUE      LABEL
```

## 💡 Common Role Descriptions

### Senior Frontend
```
Senior Frontend Developer responsible for [feature]. Led [architecture/design]
of [components]. Collaborated with [teams] on [integration]. Established
[standards/patterns] adopted across [scope].
```

### Full-Stack
```
Full-Stack Developer implementing [features] end-to-end. Built [frontend]
using [tech] and [backend] APIs with [tech]. Integrated [third-party services].
Optimized [performance/UX] achieving [metric].
```

### Frontend
```
Frontend Developer focused on [UI/features]. Developed [components] using
[tech]. Worked with [team] on [integration]. Improved [metric] through
[optimization].
```

## ✅ Pre-Publish Checklist

- [ ] Unique id and slug
- [ ] All required fields filled
- [ ] 3-4 metrics in "VALUE label" format
- [ ] 8-12 tech items
- [ ] Role description 2-4 sentences
- [ ] Overview 3-5 sentences
- [ ] Category is valid
- [ ] `npm run build` passes

## 📂 File Locations

- **Data**: `src/data/projects.ts`
- **Types**: `src/types/index.ts`
- **Component**: `src/components/sections/ProjectDetail.tsx`
- **Template**: `docs/PROJECT_TEMPLATE.md`
