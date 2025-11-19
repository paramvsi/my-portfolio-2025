# RULES.md - Non-Negotiable Development Rules

## ABSOLUTE RULES - NEVER BREAK THESE

### Rule #1: Dark Theme Only
```typescript
// ✅ CORRECT
className="bg-background text-foreground" // Uses #020617

// ❌ WRONG
className="bg-white text-black"
className="bg-gray-100"
toggleTheme() // NO THEME TOGGLES
```

### Rule #2: Color Palette Restriction
You may ONLY use these colors:
- Backgrounds: `bg-background`, `bg-background/80`
- Text: `text-foreground`, `text-muted`
- Primary: `text-primary`, `bg-primary`, `border-primary`
- Secondary: `text-secondary`, `bg-secondary`
- Glass: `bg-white/5`, `bg-white/10` (never higher than /10)
- Borders: `border-white/10`, `border-white/20`

FORBIDDEN COLORS:
- ❌ Any yellow (except the defined accent orange)
- ❌ Pink, purple (except in gradients)
- ❌ Bright green (except success states)
- ❌ Pure white or pure black
- ❌ Any color not in the palette

### Rule #3: Animation Constraints
```typescript
// ✅ CORRECT - Subtle and smooth
whileHover={{ y: -2, scale: 1.02 }}
transition={{ duration: 0.3, ease: "easeOut" }}

// ❌ WRONG - Bouncy and distracting
whileHover={{ rotate: 360, scale: 1.5 }}
transition={{ type: "spring", bounce: 0.8 }}
```

Maximum animation values:
- Scale: 0.95 to 1.05
- Translate: -20px to 20px
- Rotate: -5deg to 5deg
- Duration: 0.1s to 1s
- Opacity: Always 0 to 1

### Rule #4: Typography Hierarchy
```typescript
// Font sizes are FIXED
const typography = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  body: "text-base md:text-lg",
  small: "text-sm",
  code: "font-mono text-sm"
}

// NEVER use arbitrary values like text-[37px]
```

### Rule #5: Component Reusability
Before creating ANY new component:
1. Check if it exists in components/
2. Check if you can extend an existing one
3. Check if shadcn/ui has it
4. Only then create a new one

### Rule #6: Glass Morphism Only
```css
/* Elevation is achieved with glass, not shadows */
.elevated {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* NEVER use solid backgrounds for cards */
/* NEVER use box-shadow without glass */
```

### Rule #7: No External Images
- ❌ No stock photos
- ❌ No placeholder images  
- ❌ No avatar uploads (use initials or icons)
- ✅ SVG graphics only
- ✅ Canvas/WebGL visualizations
- ✅ CSS-only graphics

### Rule #8: Consistent Spacing
```typescript
// ONLY use these spacing values
const spacing = {
  xs: "space-x-2",   // 8px
  sm: "space-x-3",   // 12px
  md: "space-x-4",   // 16px
  lg: "space-x-6",   // 24px
  xl: "space-x-8",   // 32px
  "2xl": "space-x-12", // 48px
  section: "py-16 md:py-24",
  container: "max-w-6xl mx-auto px-6"
}
```

### Rule #9: Import Order
```typescript
// 1. React/Next
import { useState } from "react";
import Image from "next/image";

// 2. Third-party libraries
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// 3. Components
import Navigation from "@/components/Navigation";

// 4. Types
import type { Project } from "@/types";

// 5. Data/constants
import { projects } from "@/data/projects";
```

### Rule #10: Performance First
- Lazy load components below the fold
- Use next/dynamic for heavy components
- Images must be optimized
- Animations use transform/opacity only
- No unnecessary re-renders

## FORBIDDEN PATTERNS

### NEVER Do These:

```typescript
// ❌ Inline styles
<div style={{ background: "red" }}>

// ❌ CSS modules or styled-components  
import styles from "./Component.module.css"
import styled from "styled-components"

// ❌ Arbitrary Tailwind values
className="w-[437px] text-[#2a2a2a]"

// ❌ Console.logs in production
console.log("Debug:", data)

// ❌ Any rainbow/gradient animations
@keyframes rainbow { }

// ❌ Carousel/slider components
<Carousel><Slider><Swiper>

// ❌ Confetti, particles, or decorative effects
import Confetti from "react-confetti"

// ❌ Loading spinners (use skeletons)
<Spinner /> <LoadingDots />

// ❌ Toast notifications (use inline feedback)
toast.success("Done!")

// ❌ Modal dialogs (use pages or inline)
<Modal><Dialog><Popup>
```

## REQUIRED PATTERNS

### ALWAYS Do These:

```typescript
// ✅ TypeScript for everything
interface Props {
  title: string;
  description?: string;
}

// ✅ Consistent error handling
try {
  // operation
} catch (error) {
  console.error("ComponentName error:", error);
  // graceful fallback
}

// ✅ Accessibility
<button
  aria-label="Open menu"
  aria-expanded={isOpen}
  onClick={handleClick}
>

// ✅ Responsive design
className="text-sm md:text-base lg:text-lg"

// ✅ Framer Motion for animations
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>

// ✅ Semantic HTML
<nav><main><section><article><aside>

// ✅ Loading states
{isLoading ? <Skeleton /> : <Content />}
```

## FILE NAMING CONVENTIONS

```bash
# Components - PascalCase
components/Navigation.tsx
components/ProjectCard.tsx

# Pages - kebab-case
app/work/page.tsx
app/work/[slug]/page.tsx

# Utilities - camelCase
utils/formatDate.ts
utils/parseProject.ts

# Constants - SCREAMING_SNAKE_CASE
const MAX_PROJECTS = 10;
const API_ENDPOINT = "https://...";

# Types - PascalCase with .types.ts
types/project.types.ts
types/api.types.ts
```

## GIT COMMIT RULES

```bash
# Format: type(scope): message

feat(home): add hero section animation
fix(nav): correct mobile menu overflow  
style(global): update color palette
refactor(projects): simplify card component
docs(readme): add setup instructions
perf(images): optimize asset loading
test(utils): add date formatter tests
```

## CODE REVIEW CHECKLIST

Before ANY code is complete:
- [ ] Follows dark theme strictly
- [ ] Uses only approved colors
- [ ] Animations are subtle (<1s)
- [ ] Responsive on all devices
- [ ] TypeScript types complete
- [ ] No console.logs
- [ ] Accessible (keyboard, ARIA)
- [ ] Reuses existing components
- [ ] Follows naming conventions
- [ ] Includes error handling
- [ ] Performance optimized
- [ ] Glass morphism applied correctly

## HIERARCHY OF DECISIONS

When making any decision, priority order:
1. **User Performance** - Will it load fast?
2. **Design Consistency** - Does it match the system?
3. **Accessibility** - Can everyone use it?
4. **Maintainability** - Is it clean and reusable?
5. **Feature Completeness** - Does it work fully?

## EMERGENCY OVERRIDES

The ONLY acceptable reasons to break these rules:
1. Critical accessibility fix
2. Security vulnerability patch
3. Performance optimization (with metrics)
4. Browser compatibility issue

Even then:
- Document the exception
- Add a TODO comment
- Create a task to fix properly
- Get approval first

## RESPONSE TO SUGGESTIONS

When someone suggests:
- "Let's add some color!" → "The design system uses a refined dark palette"
- "How about animations?" → "We use subtle Framer Motion animations"
- "Can we add a carousel?" → "We display projects in a responsive grid"
- "Let's try this font!" → "We maintain consistency with Plus Jakarta Sans"
- "Add a light mode?" → "This is designed as a dark-theme portfolio"

## FINAL WORD

These rules create a cohesive, professional portfolio. Breaking them breaks the design. The constraints force creativity within boundaries, resulting in a refined final product.

**When in doubt: Less is more. Subtle is better. Dark is the way.**
