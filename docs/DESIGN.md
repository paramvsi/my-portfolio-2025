# DESIGN.md - Complete Design System

## Design Philosophy
**Dark. Cinematic. Data-Driven.**

This portfolio represents the intersection of enterprise data systems and beautiful UI. Every design decision reflects the precision required for telecom-scale applications while maintaining visual sophistication.

## Visual Language

### Core Aesthetic
- **Dark-first**: Deep slate backgrounds with light text
- **Glass morphism**: Layered transparency for depth
- **Subtle gradients**: Used sparingly for emphasis
- **Micro-animations**: Smooth, purposeful motion
- **Data visualization**: Abstract representations of data flow

## Color System

### Primary Palette
```css
/* Backgrounds */
--background: #020617;          /* slate-950 - Main background */
--background-elevated: #020617 + 80% opacity + blur;
--background-card: rgba(255, 255, 255, 0.05);

/* Borders */
--border-subtle: #1f2937;       /* gray-800 */
--border-default: rgba(255, 255, 255, 0.1);
--border-strong: #38bdf8;       /* sky-400 */

/* Text */
--text-primary: #e5e7eb;        /* gray-200 */
--text-muted: #9ca3af;          /* gray-400 */
--text-dim: #6b7280;            /* gray-500 */

/* Accents */
--primary: #22d3ee;             /* cyan-400 */
--primary-hover: #06b6d4;       /* cyan-500 */
--primary-dark: #0e7490;        /* cyan-700 */

--secondary: #6366f1;           /* indigo-400 */
--secondary-hover: #4f46e5;     /* indigo-600 */

--accent: #f97316;              /* orange-500 - sparse usage */
--success: #22c55e;             /* green-500 - metrics only */
--danger: #ef4444;              /* red-500 - errors only */
```

### Gradient Recipes
```css
/* Hero gradient overlay */
.hero-gradient {
  background: radial-gradient(
    ellipse at top right, 
    rgba(34, 211, 238, 0.3), 
    transparent 50%
  ),
  radial-gradient(
    ellipse at bottom left, 
    rgba(99, 102, 241, 0.2), 
    transparent 50%
  );
}

/* Text gradient (use sparingly) */
.text-gradient {
  background: linear-gradient(
    to right,
    #22d3ee,
    #6366f1,
    #f97316
  );
  -webkit-background-clip: text;
  color: transparent;
}

/* Button gradient */
.button-gradient {
  background: linear-gradient(
    135deg,
    rgba(34, 211, 238, 0.1),
    rgba(99, 102, 241, 0.1)
  );
}

/* Card glow */
.glow-primary {
  box-shadow: 
    0 0 40px rgba(34, 211, 238, 0.15),
    0 0 80px rgba(34, 211, 238, 0.1);
}
```

## Typography System

### Font Families
```css
--font-primary: 'Plus Jakarta Sans', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Type Scale
```css
/* Display - Hero sections only */
.text-display {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Headings */
.h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  font-weight: 700;
}

.h2 {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.25;
  font-weight: 600;
}

.h3 {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  line-height: 1.3;
  font-weight: 600;
}

/* Body */
.body-large {
  font-size: 1.125rem;
  line-height: 1.75;
}

.body-default {
  font-size: 1rem;
  line-height: 1.75;
}

.body-small {
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Code */
.code {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
}
```

## Component Patterns

### Glass Cards
```css
/* Default glass effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

/* Heavy glass - for important elements */
.glass-heavy {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Hover state */
.glass:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Buttons
```css
/* Primary button */
.btn-primary {
  background: var(--primary);
  color: var(--background);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
}

/* Secondary button */
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid rgba(34, 211, 238, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
}

.btn-secondary:hover {
  background: rgba(34, 211, 238, 0.1);
  border-color: rgba(34, 211, 238, 0.5);
}
```

### Tech Pills
```css
.tech-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 9999px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--primary);
}
```

## Layout System

### Container Widths
```css
.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }
.container-2xl { max-width: 1536px; }
.container-default { max-width: 1280px; } /* Standard */
```

### Spacing Scale
```css
--space-xs: 0.5rem;    /* 8px */
--space-sm: 0.75rem;   /* 12px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
--space-5xl: 8rem;     /* 128px */
```

### Grid System
```css
/* Project grid */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Two column layout */
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
```

## Animation System

### Timing Functions
```javascript
const easings = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
};
```

### Standard Durations
```javascript
const durations = {
  instant: 0.1,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
};
```

### Animation Presets
```javascript
// Fade up
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Scale fade
const scaleFade = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.4, ease: "easeOut" }
};

// Slide in from left
const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Stagger container
const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

// Stagger item
const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};
```

## Icon System

### Lucide Icons Usage
```typescript
import { 
  Code2,        // Development
  Database,     // Data
  Activity,     // Real-time
  Layers,       // Architecture
  Zap,          // Performance
  Users,        // Team
  GitBranch,    // Version control
  Terminal,     // CLI
  Gauge,        // Dashboard
  ArrowRight,   // Navigation
  ExternalLink, // External links
  Download,     // Downloads
  Mail,         // Contact
  Linkedin,     // Social
  Github,       // Social
} from "lucide-react";
```

### Icon Sizes
```css
.icon-xs { width: 16px; height: 16px; }
.icon-sm { width: 20px; height: 20px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
```

## Responsive Breakpoints

```css
/* Mobile first approach */
--screen-sm: 640px;   /* Small tablets */
--screen-md: 768px;   /* Tablets */
--screen-lg: 1024px;  /* Desktop */
--screen-xl: 1280px;  /* Large desktop */
--screen-2xl: 1536px; /* Extra large */

/* Usage */
@media (min-width: 768px) { }  /* md: */
@media (min-width: 1024px) { } /* lg: */
```

## Effects & Utilities

### Blur Effects
```css
.blur-sm { backdrop-filter: blur(4px); }
.blur-md { backdrop-filter: blur(8px); }
.blur-lg { backdrop-filter: blur(16px); }
.blur-xl { backdrop-filter: blur(24px); }
.blur-2xl { backdrop-filter: blur(40px); }
```

### Shadow System
```css
.shadow-soft {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-glow {
  box-shadow: 
    0 0 20px rgba(34, 211, 238, 0.15),
    0 0 40px rgba(34, 211, 238, 0.1);
}

.shadow-card {
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.2),
    0 2px 10px rgba(0, 0, 0, 0.1);
}
```

## DO's and DON'Ts

### DO's ✅
- Use consistent spacing from the scale
- Apply glass effects to elevated surfaces
- Keep animations under 1 second
- Use hover states for interactivity
- Maintain high contrast ratios
- Test on mobile first
- Use semantic HTML
- Apply ARIA labels

### DON'Ts ❌
- Don't use pure black (#000000)
- Don't use pure white (#FFFFFF)  
- Don't animate everything
- Don't use more than 3 font sizes per section
- Don't mix border radiuses
- Don't use drop shadows on dark backgrounds
- Don't forget focus states
- Don't break the grid alignment

## Component Library Reference

### Core Components
1. `Navigation` - Fixed header with glass effect
2. `GlassCard` - Reusable card with blur
3. `TechPill` - Technology badge
4. `AnimatedSection` - Scroll-triggered animations
5. `ProjectCard` - Project showcase card
6. `MetricDisplay` - Impact metrics display
7. `Timeline` - Experience timeline
8. `ContactForm` - Contact section

### Each component must:
- Follow the color system exactly
- Include proper TypeScript types
- Be fully responsive
- Have keyboard navigation
- Include ARIA labels
- Use Framer Motion for animations
- Follow the spacing scale

## Quality Standards
Every element should feel:
- **Premium** - Like it belongs in a $10k template
- **Cohesive** - Part of a unified system
- **Performant** - Smooth even on low-end devices
- **Accessible** - Usable by everyone
- **Maintainable** - Easy to update and extend
