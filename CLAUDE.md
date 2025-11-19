# CLAUDE.md - Core Instructions for Claude Code

## CRITICAL: READ THIS FIRST
You are building a premium, dark-themed portfolio for a Senior Frontend Engineer specializing in real-time data systems. Every decision must align with the established design system. DO NOT deviate from these guidelines.

## Your Role
You are implementing a meticulously designed portfolio with:
- **Dark, cinematic aesthetic** with subtle animations
- **Data visualization focus** reflecting enterprise dashboard expertise  
- **Glass morphism** and modern UI patterns
- **Consistent, restrained animations** using Framer Motion

## Core Principles

### 1. NEVER DEVIATE FROM THE DESIGN SYSTEM
- Use ONLY the colors defined in `tailwind.config.ts`
- Use ONLY the fonts specified (Plus Jakarta Sans, JetBrains Mono)
- Use ONLY the spacing/sizing tokens defined
- Follow the component patterns in `DESIGN.md`

### 2. DARK THEME ONLY
- Background is always `#020617` (slate-950)
- No light mode toggles or variations
- Text is always light on dark
- Use glass morphism for elevation, not white backgrounds

### 3. ANIMATION RESTRAINT
- Animations should be subtle and professional
- Use Framer Motion for ALL animations
- No bouncy, playful, or attention-seeking effects
- Stick to: fade, slide, scale (subtle), and float
- Duration: 0.3-0.6s for micro, 0.5-1s for macro
- Easing: "easeOut" or "easeInOut" only

### 4. COMPONENT CONSISTENCY
- Every new component must follow existing patterns
- Reuse existing components before creating new ones
- Check `COMPONENTS.md` before building anything new
- Maintain consistent hover states across all interactive elements

### 5. TYPOGRAPHY HIERARCHY
```
H1: text-4xl md:text-5xl lg:text-6xl font-bold
H2: text-3xl md:text-4xl font-semibold  
H3: text-2xl md:text-3xl font-semibold
H4: text-xl md:text-2xl font-medium
Body: text-base md:text-lg
Small: text-sm
Code: font-mono text-sm
```

### 6. SPACING CONSISTENCY
```
Sections: py-16 md:py-24
Container: max-w-6xl mx-auto px-6
Card padding: p-6 md:p-8
Element gaps: gap-4, gap-6, gap-8, gap-12
```

## What You Must Do

### BEFORE Writing Any Code:
1. Check if a similar component exists
2. Review the design system colors/spacing
3. Plan the animation approach
4. Consider responsive behavior
5. Ensure accessibility

### WHEN Creating Components:
1. Use TypeScript with proper types
2. Make components reusable and composable
3. Use cn() utility for className merging
4. Add proper ARIA labels
5. Ensure keyboard navigation works

### WHEN Adding Animations:
1. Use Framer Motion, not CSS animations
2. Keep duration under 1 second
3. Use staggerChildren for lists
4. Add whileInView for scroll animations
5. Avoid animation on critical content

### WHEN Styling:
1. Use Tailwind classes exclusively
2. Never use inline styles
3. Follow mobile-first responsive design
4. Use the glass utility for elevated surfaces
5. Apply hover states consistently

## What You Must NEVER Do

### NEVER:
- ❌ Add colorful, playful elements
- ❌ Use Comic Sans, Papyrus, or decorative fonts
- ❌ Create light mode variations
- ❌ Add bouncy or spring animations
- ❌ Use pure white (#FFFFFF) backgrounds
- ❌ Add stock photos or generic illustrations
- ❌ Create carousel/slider components
- ❌ Use gradient text on small elements
- ❌ Add sound effects or background music
- ❌ Implement parallax scrolling everywhere

### NEVER Say:
- "Let me add some fun animations"
- "How about we make it more colorful"
- "We could add a light mode"
- "Let's make it pop more"
- "How about a different font"

## Code Standards

### File Structure:
```typescript
// 1. Imports (grouped and ordered)
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// 2. Types/Interfaces
interface ComponentProps {
  // ...
}

// 3. Component
export default function ComponentName({ }: ComponentProps) {
  // Hooks first
  // Event handlers
  // Render
}
```

### Animation Patterns:
```typescript
// Scroll reveal
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>

// Hover state
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  transition={{ duration: 0.3 }}
>

// Stagger children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

## Quality Checklist

Before completing ANY task, verify:
- [ ] Follows dark theme strictly
- [ ] Uses only defined colors
- [ ] Animations are subtle
- [ ] Responsive on all screens
- [ ] Accessible (keyboard, screen reader)
- [ ] TypeScript types are complete
- [ ] No deviation from design system
- [ ] Glass morphism applied correctly
- [ ] Consistent with existing components
- [ ] Performance optimized

## Remember
You are building a PORTFOLIO, not a playground. Every pixel should communicate professionalism, technical excellence, and attention to detail. The design is already decided - your job is to implement it perfectly.

When in doubt, choose:
- Subtlety over boldness
- Consistency over creativity  
- Simplicity over complexity
- Performance over effects
