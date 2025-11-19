# ANIMATIONS.md - Animation System Documentation

## Core Philosophy
**Subtle. Smooth. Purposeful.**

Animations should enhance the experience, not distract from content. Every animation must have a clear purpose: guide attention, provide feedback, or smooth transitions.

## Animation Principles

### 1. Performance First
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating `width`, `height`, `padding`, `margin`
- Keep paint and layout operations minimal
- Use `will-change` sparingly and remove after animation

### 2. Subtlety Over Spectacle
- Maximum duration: 1 second
- Preferred duration: 300-500ms
- Micro-interactions: 100-300ms
- Page transitions: 500-800ms

### 3. Natural Motion
- Use easing functions, never linear
- Accelerate at start, decelerate at end
- Follow material physics principles
- Respect user motion preferences

## Framer Motion Setup

### Base Configuration
```typescript
// lib/motion.ts
export const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1], // Custom easing
};

export const quickTransition = {
  duration: 0.3,
  ease: "easeOut",
};

export const smoothTransition = {
  duration: 0.8,
  ease: "easeInOut",
};
```

## Animation Patterns

### 1. Page Entrance
```typescript
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Usage
<motion.main
  variants={pageVariants}
  initial="initial"
  animate="enter"
  exit="exit"
>
```

### 2. Scroll Reveal
```typescript
const scrollReveal = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  viewport: {
    once: true,
    amount: 0.3,
  },
};

// Usage
<motion.section {...scrollReveal}>
  Content reveals on scroll
</motion.section>
```

### 3. Hover States
```typescript
const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  whileTap: {
    scale: 0.98,
  },
};

const hoverLift = {
  whileHover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)",
    transition: {
      duration: 0.3,
    },
  },
};
```

### 4. Staggered Lists
```typescript
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Usage
<motion.ul
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.li
      key={item.id}
      variants={itemVariants}
    >
      {item.content}
    </motion.li>
  ))}
</motion.ul>
```

### 5. Text Animations
```typescript
const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Usage - Word by word reveal
const words = "Building amazing experiences".split(" ");
{words.map((word, i) => (
  <motion.span
    key={i}
    custom={i}
    variants={textReveal}
    initial="hidden"
    animate="visible"
  >
    {word}{" "}
  </motion.span>
))}
```

### 6. Loading States
```typescript
const shimmer = {
  initial: {
    backgroundPosition: "-200% 0",
  },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const skeleton = {
  initial: {
    opacity: 0.3,
  },
  animate: {
    opacity: 0.7,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};
```

### 7. Floating Elements
```typescript
const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Multiple elements floating
const floatDelayed = (delay: number) => ({
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});
```

### 8. Path Animations (SVG)
```typescript
const drawPath = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
};

// Usage
<motion.svg>
  <motion.path
    d="M..."
    variants={drawPath}
    initial="hidden"
    animate="visible"
  />
</motion.svg>
```

### 9. Number Counting
```typescript
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to = 100, duration = 1 }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={ref}>{from}</span>;
}
```

### 10. Gradient Animations
```typescript
const gradientShift = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
  style: {
    backgroundSize: "200% 200%",
  },
};
```

## Advanced Patterns

### Parallax Scrolling (Subtle)
```typescript
import { useScroll, useTransform } from "framer-motion";

function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <motion.div style={{ y }} className="absolute">
      Background element moves slower
    </motion.div>
  );
}
```

### Gesture-Based Animations
```typescript
const dragConstraints = {
  top: -10,
  left: -10,
  right: 10,
  bottom: 10,
};

<motion.div
  drag
  dragConstraints={dragConstraints}
  dragElastic={0.1}
  whileDrag={{ scale: 1.1 }}
/>
```

### Exit Animations
```typescript
import { AnimatePresence } from "framer-motion";

<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

## Performance Optimization

### 1. Layout Animations
```typescript
// Use layoutId for smooth transitions
<motion.div layoutId="card-1">
  Content that moves between states
</motion.div>
```

### 2. GPU Acceleration
```typescript
// Good - Uses transform
<motion.div
  animate={{ x: 100, y: 100, scale: 1.1 }}
/>

// Bad - Causes reflow
<motion.div
  animate={{ left: 100, top: 100, width: 200 }}
/>
```

### 3. Reduce Motion Support
```typescript
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const animation = {
  animate: {
    x: prefersReducedMotion ? 0 : 100,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5,
    },
  },
};
```

### 4. Animation Cleanup
```typescript
useEffect(() => {
  const controls = animate(/* ... */);
  return () => controls.stop();
}, []);
```

## Animation Timing Guide

| Type | Duration | Easing | Use Case |
|------|----------|--------|----------|
| Micro | 100-200ms | easeOut | Hover, focus |
| Quick | 200-300ms | easeOut | Toggles, tooltips |
| Normal | 300-500ms | easeInOut | Cards, modals |
| Smooth | 500-800ms | easeInOut | Page transitions |
| Slow | 800-1000ms | easeInOut | Hero reveals |

## Easing Functions

```typescript
// Custom easing curves
const easings = {
  // Smooth acceleration and deceleration
  smooth: [0.25, 0.1, 0.25, 1],
  
  // Quick start, smooth end
  out: [0, 0, 0.58, 1],
  
  // Smooth start, quick end
  in: [0.42, 0, 1, 1],
  
  // Balanced in and out
  inOut: [0.42, 0, 0.58, 1],
  
  // Slight overshoot (use sparingly)
  back: [0.68, -0.55, 0.265, 1.55],
};
```

## DO's and DON'Ts

### DO's ✅
- Use transforms for position changes
- Animate opacity for fades
- Keep animations under 1 second
- Use easing functions
- Test on low-end devices
- Provide reduced motion options
- Clean up animations on unmount
- Use GPU-accelerated properties

### DON'Ts ❌
- Don't animate width/height directly
- Don't use spring animations (too bouncy)
- Don't animate on every scroll event
- Don't chain more than 3 animations
- Don't animate critical content
- Don't use random or loop animations
- Don't forget accessibility
- Don't animate margin/padding

## Testing Animations

```typescript
// Test animation performance
const measureAnimation = () => {
  performance.mark("animation-start");
  
  // Run animation
  
  performance.mark("animation-end");
  performance.measure(
    "animation",
    "animation-start",
    "animation-end"
  );
  
  const measure = performance.getEntriesByName("animation")[0];
  console.log(`Animation took ${measure.duration}ms`);
};
```

## Debugging

```typescript
// Slow down all animations for debugging
const debugTransition = {
  duration: 3, // Slow motion
  ease: "linear", // Remove easing
};

// Visual debugging
<motion.div
  onAnimationStart={() => console.log("Started")}
  onAnimationComplete={() => console.log("Completed")}
  onUpdate={(latest) => console.log(latest)}
/>
```

## Browser Support

All animations should work in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Fallbacks for older browsers:
- CSS transitions as backup
- Static states for no-JS
- Reduced motion for accessibility

Remember: **Every animation should have purpose. If you can't explain why it's there, remove it.**
