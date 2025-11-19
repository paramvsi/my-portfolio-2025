# COMPONENTS.md - Component Library Reference

## Component Architecture

Every component in this portfolio follows strict patterns for consistency and maintainability.

### Component Structure Template
```typescript
"use client"; // Only if needed

import { ComponentProps } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComponentNameProps extends ComponentProps<"div"> {
  // Specific props
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function ComponentName({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: ComponentNameProps) {
  return (
    <motion.div
      className={cn(
        // Base styles
        "base-styles",
        // Variant styles
        {
          "variant-default": variant === "default",
          "variant-primary": variant === "primary",
        },
        // Size styles
        {
          "size-sm": size === "sm",
          "size-md": size === "md",
        },
        // Custom className
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
```

## Core Components

### 1. Navigation
**Location:** `components/layout/Navigation.tsx`
**Purpose:** Fixed header navigation with glass morphism effect
```typescript
<Navigation />
```
**Features:**
- Sticky positioning with blur on scroll
- Mobile responsive hamburger menu
- Active link indicators
- Smooth transitions

### 2. GlassCard
**Location:** `components/ui/GlassCard.tsx`
**Purpose:** Reusable card with glass morphism effect
```typescript
<GlassCard hover={true} className="p-6">
  <h3>Content</h3>
</GlassCard>
```
**Props:**
- `hover`: Enable hover effects
- `variant`: "light" | "heavy" 
- `className`: Additional styles

### 3. TechPill
**Location:** `components/ui/TechPill.tsx`
**Purpose:** Technology/skill badges
```typescript
<TechPill variant="primary" size="sm">
  React
</TechPill>
```
**Props:**
- `variant`: "default" | "primary" | "secondary"
- `size`: "sm" | "md" | "lg"

### 4. AnimatedSection
**Location:** `components/ui/AnimatedSection.tsx`
**Purpose:** Scroll-triggered animation wrapper
```typescript
<AnimatedSection delay={0.2}>
  <div>Content appears on scroll</div>
</AnimatedSection>
```
**Props:**
- `delay`: Animation delay in seconds
- `once`: Animate only once (default: true)

### 5. ProjectCard
**Location:** `components/ui/ProjectCard.tsx`
**Purpose:** Display project information
```typescript
<ProjectCard
  title="Project Name"
  company="Company"
  description="Description"
  techStack={["React", "Node"]}
  metrics={["60% faster", "100k users"]}
  href="/work/project-slug"
/>
```
**Props:**
- `title`: Project name
- `company`: Company/client name
- `description`: Brief description
- `techStack`: Array of technologies
- `metrics`: Array of impact metrics
- `href`: Link to case study
- `featured`: Featured styling

### 6. MetricDisplay
**Location:** `components/ui/MetricDisplay.tsx`
**Purpose:** Display impact metrics with animation
```typescript
<MetricDisplay
  value="60%"
  label="Performance Increase"
  icon={<TrendingUp />}
/>
```
**Props:**
- `value`: Metric value
- `label`: Description
- `icon`: Lucide icon component
- `animate`: Enable count animation

### 7. Timeline
**Location:** `components/ui/Timeline.tsx`
**Purpose:** Display experience/education timeline
```typescript
<Timeline
  items={[
    {
      date: "2024 - Present",
      title: "Senior Frontend Developer",
      company: "Etisalat",
      description: "Building data platforms"
    }
  ]}
/>
```
**Props:**
- `items`: Array of timeline entries
- `orientation`: "vertical" | "horizontal"

### 8. CodeBlock
**Location:** `components/ui/CodeBlock.tsx`
**Purpose:** Display code with syntax highlighting
```typescript
<CodeBlock
  language="typescript"
  showLineNumbers={true}
>
{`const example = "code";`}
</CodeBlock>
```
**Props:**
- `language`: Programming language
- `showLineNumbers`: Display line numbers
- `highlightLines`: Array of line numbers to highlight

### 9. GradientButton
**Location:** `components/ui/GradientButton.tsx`
**Purpose:** CTA button with gradient effects
```typescript
<GradientButton
  variant="primary"
  size="lg"
  href="/contact"
>
  Get in Touch
</GradientButton>
```
**Props:**
- `variant`: "primary" | "secondary"
- `size`: "sm" | "md" | "lg"
- `href`: Optional link
- `onClick`: Click handler

### 10. SectionHeader
**Location:** `components/ui/SectionHeader.tsx`
**Purpose:** Consistent section titles
```typescript
<SectionHeader
  eyebrow="What I Do"
  title="Featured Work"
  description="Recent projects and case studies"
  centered={true}
/>
```
**Props:**
- `eyebrow`: Small text above title
- `title`: Main heading
- `description`: Optional subtitle
- `centered`: Center align text

## Section Components

### 11. HeroSection
**Location:** `components/sections/HeroSection.tsx`
**Purpose:** Landing hero with CTAs
```typescript
<HeroSection />
```
**Features:**
- Two-column layout
- Animated text entrance
- Tech stack pills
- CTA buttons
- Abstract visualization

### 12. FeaturedWork
**Location:** `components/sections/FeaturedWork.tsx`
**Purpose:** Showcase top projects
```typescript
<FeaturedWork projects={featuredProjects} />
```
**Props:**
- `projects`: Array of featured projects

### 13. SkillsSection
**Location:** `components/sections/SkillsSection.tsx`
**Purpose:** Display technical skills
```typescript
<SkillsSection />
```
**Categories:**
- Frontend technologies
- Backend & Data
- Tools & Practices

### 14. AboutPreview
**Location:** `components/sections/AboutPreview.tsx`
**Purpose:** Brief introduction
```typescript
<AboutPreview />
```
**Features:**
- Two-column layout
- Timeline preview
- Personal story

### 15. ContactCTA
**Location:** `components/sections/ContactCTA.tsx`
**Purpose:** Contact call-to-action
```typescript
<ContactCTA />
```
**Features:**
- Gradient background
- Email/LinkedIn buttons
- Animated entrance

## Utility Components

### 16. Container
**Location:** `components/ui/Container.tsx`
**Purpose:** Consistent max-width wrapper
```typescript
<Container size="lg">
  <div>Constrained content</div>
</Container>
```
**Props:**
- `size`: "sm" | "md" | "lg" | "xl"

### 17. Grid
**Location:** `components/ui/Grid.tsx`
**Purpose:** Responsive grid layouts
```typescript
<Grid cols={3} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```
**Props:**
- `cols`: 1-4 columns
- `gap`: Spacing between items

### 18. Skeleton
**Location:** `components/ui/Skeleton.tsx`
**Purpose:** Loading placeholder
```typescript
<Skeleton className="h-32 w-full" />
```
**Props:**
- `variant`: "text" | "card" | "image"
- `animate`: Enable shimmer

### 19. Badge
**Location:** `components/ui/Badge.tsx`
**Purpose:** Status/category indicators
```typescript
<Badge variant="success">
  Completed
</Badge>
```
**Props:**
- `variant`: "default" | "success" | "warning" | "danger"

### 20. Divider
**Location:** `components/ui/Divider.tsx`
**Purpose:** Section separators
```typescript
<Divider gradient={true} />
```
**Props:**
- `gradient`: Use gradient effect
- `spacing`: Vertical spacing

## Animation Variants

### Reusable Framer Motion Variants
**Location:** `lib/animations.ts`

```typescript
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};
```

## Component Usage Guidelines

### DO's ✅
- Always use TypeScript interfaces
- Include default props
- Make components composable
- Use cn() for className merging
- Add ARIA labels for accessibility
- Export from index files
- Document complex props

### DON'Ts ❌
- Don't hardcode colors/sizes
- Don't use inline styles
- Don't forget mobile responsiveness
- Don't create similar components
- Don't skip TypeScript types
- Don't ignore accessibility
- Don't over-animate

## Component Creation Checklist

When creating a new component:
- [ ] Check if similar component exists
- [ ] Follow naming conventions
- [ ] Add TypeScript interface
- [ ] Use design system tokens
- [ ] Include default props
- [ ] Make it responsive
- [ ] Add keyboard navigation
- [ ] Include ARIA labels
- [ ] Use Framer Motion for animations
- [ ] Document usage in this file
- [ ] Export from index.ts
- [ ] Test on mobile devices

## Import Organization

```typescript
// components/index.ts
// UI Components
export { default as GlassCard } from "./ui/GlassCard";
export { default as TechPill } from "./ui/TechPill";
export { default as AnimatedSection } from "./ui/AnimatedSection";

// Layout Components
export { default as Navigation } from "./layout/Navigation";
export { default as Footer } from "./layout/Footer";

// Section Components
export { default as HeroSection } from "./sections/HeroSection";
export { default as FeaturedWork } from "./sections/FeaturedWork";

// Usage
import { 
  GlassCard, 
  TechPill, 
  Navigation 
} from "@/components";
```

## Component Performance

### Optimization Rules:
1. Use `React.memo` for expensive components
2. Implement `useMemo` for complex calculations
3. Use `next/dynamic` for below-fold components
4. Lazy load heavy animations
5. Optimize re-renders with proper deps
6. Use CSS transforms for animations
7. Avoid inline functions in render

### Example Optimized Component:
```typescript
import { memo, useMemo } from "react";
import dynamic from "next/dynamic";

const HeavyVisualization = dynamic(
  () => import("./HeavyVisualization"),
  { 
    loading: () => <Skeleton />,
    ssr: false 
  }
);

const OptimizedComponent = memo(({ data }) => {
  const processedData = useMemo(
    () => expensiveOperation(data),
    [data]
  );

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
});

OptimizedComponent.displayName = "OptimizedComponent";
```

## Testing Components

### Test Structure:
```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentName } from "./ComponentName";

describe("ComponentName", () => {
  it("renders with default props", () => {
    render(<ComponentName />);
    expect(screen.getByRole("...")).toBeInTheDocument();
  });

  it("handles user interaction", async () => {
    const user = userEvent.setup();
    render(<ComponentName />);
    await user.click(screen.getByRole("button"));
    // assertions
  });

  it("is accessible", () => {
    const { container } = render(<ComponentName />);
    expect(container).toHaveNoViolations();
  });
});
```

Remember: Every component should feel premium, perform smoothly, and maintain the dark, cinematic aesthetic of the portfolio.
