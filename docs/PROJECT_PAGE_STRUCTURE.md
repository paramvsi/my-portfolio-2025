# Project Detail Page Structure

This document shows the **exact visual layout** of every project detail page.

---

## 📐 Page Layout (Visual Structure)

```
┌─────────────────────────────────────────────────────────┐
│  ← Back to projects                                     │
│                                                          │
│  [Primary Tag]  [Secondary Tag]                         │
│                                                          │
│  PROJECT TITLE (h1)                                     │
│  🏢 Company Name · 2024 - Present                       │
│  One-line summary of the product (optional, italic)     │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  ╔══════════════════════════════════════════════════╗  │
│  ║  Overview                                        ║  │
│  ║                                                  ║  │
│  ║  3-5 sentence paragraph explaining:              ║  │
│  ║  - What is this product?                         ║  │
│  ║  - Who uses it?                                  ║  │
│  ║  - What problem does it solve?                   ║  │
│  ║  - Scale/constraints (if relevant)               ║  │
│  ╚══════════════════════════════════════════════════╝  │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  Impact & Results                                       │
│                                                          │
│  ╔═════════╗  ╔═════════╗  ╔═════════╗  ╔═════════╗   │
│  ║   60%   ║  ║   1M+   ║  ║ <500ms  ║  ║   17+   ║   │
│  ║─────────║  ║─────────║  ║─────────║  ║─────────║   │
│  ║ faster  ║  ║ records ║  ║   avg   ║  ║  micro- ║   │
│  ║  setup  ║  ║per file ║  ║response ║  ║frontends║   │
│  ╚═════════╝  ╚═════════╝  ╚═════════╝  ╚═════════╝   │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Technologies Used                                      │
│                                                          │
│  [Next.js]  [React]  [TypeScript]  [Tailwind]          │
│  [Kafka]  [PostgreSQL]  [Flink]  [WebSockets]          │
│  [Redux]  [Docker]  [Jest]  [Storybook]                │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  ╔══════════════════════════════════════════════════╗  │
│  ║  My Role                                         ║  │
│  ║                                                  ║  │
│  ║  Senior Frontend Developer                       ║  │
│  ║                                                  ║  │
│  ║  2-4 sentences covering:                         ║  │
│  ║  - Level and primary responsibilities            ║  │
│  ║  - What you led/owned                            ║  │
│  ║  - Team collaboration                            ║  │
│  ║  - Leadership/mentoring                          ║  │
│  ╚══════════════════════════════════════════════════╝  │
│                                                          │
│  [View Live Project]  [View on GitHub]  (optional)     │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│                  View all projects →                    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Component Breakdown

### 1. Top Bar
```typescript
← Back to projects
```
- Link back to `/work`
- Always visible at top

### 2. Tags
```typescript
[data pipeline]  [Featured]
```
- Primary tag: category or custom (e.g., "e-commerce", "dashboard")
- Secondary tag: "Featured", "In Progress", "Side Project", etc.
- Capitalize primary tag automatically

### 3. Header
```typescript
Real-time Data Pipeline Builder          // h1
🏢 Etisalat (e&) · 2024 - Present        // company + timeline
Visual ETL pipeline builder...           // oneLineSummary (optional)
```
- Title: 4xl-5xl font size
- Company + timeline on same line with dot separator
- Optional one-liner in italic below

### 4. Overview Card (Glass Card)
```typescript
Overview

Built a comprehensive e-commerce platform for Touchnote's
personalized cards and gifting business. Led development of
customer-facing features including product browsing,
customization tools, cart management, and checkout workflows...
```
- Glass card with padding
- Title: "Overview" (h2)
- Paragraph: longDescription
- Answer: what, who, problem, scale

### 5. Impact Metrics (Grid of Glass Cards)
```typescript
Impact & Results

┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   60%    │  │   1M+    │  │ <500ms   │  │   17+    │
│──────────│  │──────────│  │──────────│  │──────────│
│ reduction│  │ records  │  │ average  │  │  micro-  │
│in setup  │  │per file  │  │ response │  │ frontends│
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```
- Title: "Impact & Results" (h2)
- Grid: 2-4 columns responsive
- Each metric splits on first space:
  - First part = BIG number (gradient)
  - Rest = small label (muted)

### 6. Tech Stack Pills
```typescript
Technologies Used

[Next.js] [React] [TypeScript] [Kafka] [PostgreSQL]...
```
- Title: "Technologies Used" (h2)
- Flexbox wrap
- 8-12 tech pills
- Mix: frontend, backend, data, tools

### 7. Role Card (Glass Card)
```typescript
My Role

Senior Frontend Developer

Led the architecture and development of the visual pipeline
builder interface using Next.js 15 and React 19. Designed
the drag-and-drop workflow system...
```
- Glass card with padding
- Title: "My Role" (h2)
- Role name in primary color
- Description: 2-4 sentences

### 8. External Links (Optional)
```typescript
[View Live Project]  [View on GitHub]
```
- Only shown if project.link or project.github exists
- Primary button for live link
- Secondary button for GitHub

### 9. Footer
```typescript
────────────────────────────────

        View all projects →
```
- Centered link
- Goes to `/work`

---

## 📱 Responsive Behavior

### Desktop (lg+)
- Metrics grid: 4 columns
- Container: max-w-[1500px]
- Spacing: py-16

### Tablet (md)
- Metrics grid: 2 columns
- Container: still max-w-[1500px]
- Spacing: py-12

### Mobile (sm)
- Metrics grid: 1 column
- Container: full width with px-6
- Spacing: py-8

---

## 🎯 Data Flow

```typescript
Project Data (projects.ts)
        ↓
  Project Type (types/index.ts)
        ↓
ProjectDetail Component (sections/ProjectDetail.tsx)
        ↓
    Rendered Page (/work/[slug])
```

### Required Fields
- id, slug
- title, company, timeline
- description, longDescription (or just description)
- role
- metrics (array)
- techStack (array)
- featured (boolean)
- category (enum)

### Optional Fields
- oneLineSummary
- roleDescription
- primaryTag, secondaryTag
- link, github
- image

---

## ✅ Visual Consistency Rules

1. **Typography**
   - h1: text-4xl md:text-5xl
   - h2: text-2xl
   - Body: text-lg
   - Muted: text-foreground-muted

2. **Spacing**
   - Section gaps: mb-12
   - Card padding: p-6 md:p-8
   - Element gaps: gap-4, gap-6

3. **Cards**
   - Always use GlassCard component
   - Hover effects where interactive
   - Border: border-white/10

4. **Animations**
   - fadeUp variants
   - Stagger delays: 0.1s increments
   - viewport: once: true

5. **Colors**
   - Primary: For highlights, tags, values
   - Foreground: For main text
   - Foreground-muted: For secondary text
   - Accent: For secondary tags

---

## 🔍 Example Rendering

**Input (projects.ts):**
```typescript
metrics: [
  "60% reduction in pipeline setup time",
  "1M+ records processed per file"
]
```

**Output (rendered):**
```
┌──────────────┐  ┌──────────────┐
│     60%      │  │     1M+      │  ← Large gradient text
│──────────────│  │──────────────│
│  reduction   │  │   records    │  ← Small muted text
│ in pipeline  │  │  processed   │
│ setup time   │  │  per file    │
└──────────────┘  └──────────────┘
```

The component automatically:
1. Splits metric on first space
2. Displays first part large with gradient
3. Displays rest small with muted color
4. Centers everything in a glass card

---

This structure ensures **every project page looks consistent** while being
**easy to populate** by just filling in the data fields.
