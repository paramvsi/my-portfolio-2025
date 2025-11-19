# Portfolio 2025 - Complete Setup Instructions

## Overview
Building a dark, cinematic portfolio site showcasing real-time data expertise with Next.js 15, Tailwind CSS, and Framer Motion.

## Step 1: Initial Project Setup

```bash
# Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest portfolio-2025 --typescript --tailwind --app --src-dir --import-alias "@/*"

# When prompted, choose:
# ✔ Would you like to use ESLint? → Yes
# ✔ Would you like to use `src/` directory? → Yes (already set)
# ✔ Would you like to use App Router? → Yes (already set)
# ✔ Would you like to customize the default import alias? → No

# Navigate to project
cd portfolio-2025
```

## Step 2: Install Dependencies

```bash
# Core dependencies
npm install framer-motion@latest
npm install lucide-react
npm install clsx tailwind-merge
npm install @next/font

# Development dependencies
npm install -D @types/node

# Initialize shadcn/ui
npx shadcn@latest init
# Choose: Default style, Slate base color, CSS variables: Yes

# Install shadcn components (as needed)
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add tabs
```

## Step 3: Create Folder Structure

```bash
# Create directory structure
mkdir -p src/components/ui
mkdir -p src/components/sections
mkdir -p src/components/layout
mkdir -p src/lib
mkdir -p src/styles
mkdir -p src/types
mkdir -p src/data
mkdir -p public/images
mkdir -p public/fonts
mkdir -p src/app/(site)/work
mkdir -p src/app/(site)/about
mkdir -p src/app/(site)/contact
```

## Step 4: Clean Default Files

```bash
# Remove default Next.js boilerplate
rm -rf src/app/page.tsx
rm -rf src/app/layout.tsx
rm -rf src/app/globals.css
rm -rf src/app/favicon.ico
```

## Step 5: Create Configuration Files

### 5.1 Tailwind Configuration (`tailwind.config.ts`)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
          subtle: "#1f2937",
          strong: "#38bdf8",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#020617",
          elevated: "rgba(2, 6, 23, 0.8)",
        },
        foreground: {
          DEFAULT: "#e5e7eb",
          muted: "#9ca3af",
        },
        primary: {
          DEFAULT: "#22d3ee",
          dark: "#0e7490",
          foreground: "#020617",
        },
        secondary: {
          DEFAULT: "#6366f1",
          foreground: "#e5e7eb",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#e5e7eb",
        },
        success: {
          DEFAULT: "#22c55e",
          foreground: "#020617",
        },
        accent: {
          DEFAULT: "#f97316",
          foreground: "#020617",
        },
        muted: {
          DEFAULT: "#1f2937",
          foreground: "#9ca3af",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.6",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse at top right, rgba(34, 211, 238, 0.3), transparent 50%), radial-gradient(ellipse at bottom left, rgba(99, 102, 241, 0.2), transparent 50%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 5.2 Global Styles (`src/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 217 33% 7%;
    --foreground: 210 5% 91%;
    --card: 217 33% 10%;
    --card-foreground: 210 5% 91%;
    --popover: 217 33% 10%;
    --popover-foreground: 210 5% 91%;
    --primary: 189 94% 53%;
    --primary-foreground: 217 33% 7%;
    --secondary: 239 84% 67%;
    --secondary-foreground: 210 5% 91%;
    --muted: 215 20% 22%;
    --muted-foreground: 210 5% 65%;
    --accent: 25 95% 53%;
    --accent-foreground: 217 33% 7%;
    --destructive: 0 72% 61%;
    --destructive-foreground: 210 5% 91%;
    --border: 215 20% 22%;
    --input: 215 20% 22%;
    --ring: 189 94% 53%;
    --radius: 0.5rem;
  }

  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-background;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-muted rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-muted-foreground;
  }
}

@layer utilities {
  /* Glass morphism */
  .glass {
    @apply bg-white/5 backdrop-blur-xl border border-white/10;
  }

  .glass-heavy {
    @apply bg-white/10 backdrop-blur-2xl border border-white/20;
  }

  /* Text gradients */
  .text-gradient {
    @apply bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent;
  }

  /* Glow effects */
  .glow-primary {
    box-shadow: 0 0 40px rgba(34, 211, 238, 0.3);
  }

  .glow-secondary {
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
  }

  /* Animated gradient background */
  .animated-gradient {
    background-size: 400% 400%;
    animation: gradient-shift 15s ease infinite;
  }
}
```

### 5.3 Root Layout (`src/app/layout.tsx`)

```typescript
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Paramveer Singh - Senior Frontend Engineer",
  description: "Building real-time data products and dashboards that make telecom-scale data usable.",
  keywords: ["Frontend Developer", "Real-time Data", "Dashboard Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Paramveer Singh" }],
  openGraph: {
    title: "Paramveer Singh - Senior Frontend Engineer",
    description: "Building real-time data products and dashboards",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        jakarta.variable,
        jetbrains.variable,
        "font-sans antialiased bg-background min-h-screen"
      )}>
        {children}
      </body>
    </html>
  );
}
```

### 5.4 Utilities (`src/lib/utils.ts`)

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Step 6: Create Core Components

### 6.1 Navigation Component (`src/components/layout/Navigation.tsx`)

```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass border-b border-white/10" : ""
        )}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="relative">
              <span className="text-lg font-semibold">Paramveer Singh</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary to-transparent" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-foreground-muted"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-4 py-2 text-sm font-medium border border-primary/30 rounded-full hover:bg-primary/10 transition-colors"
              >
                Resume
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <nav className="relative h-full flex flex-col items-center justify-center space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 text-lg font-medium border border-primary/30 rounded-full hover:bg-primary/10 transition-colors"
              >
                Resume
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

### 6.2 Glass Card Component (`src/components/ui/GlassCard.tsx`)

```typescript
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  className, 
  hover = false,
  ...motionProps 
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6",
        hover && "hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.8)] transition-all duration-300",
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
```

### 6.3 Tech Pill Component (`src/components/ui/TechPill.tsx`)

```typescript
import { cn } from "@/lib/utils";

interface TechPillProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function TechPill({ 
  children, 
  variant = "default",
  size = "sm",
  className 
}: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono rounded-full border",
        {
          "default": "border-border-subtle bg-muted/20 text-foreground-muted",
          "primary": "border-primary/30 bg-primary/10 text-primary",
          "secondary": "border-secondary/30 bg-secondary/10 text-secondary",
        }[variant],
        {
          "sm": "px-2 py-0.5 text-xs",
          "md": "px-3 py-1 text-sm",
          "lg": "px-4 py-1.5 text-base",
        }[size],
        className
      )}
    >
      {children}
    </span>
  );
}
```

### 6.4 Animated Section Component (`src/components/ui/AnimatedSection.tsx`)

```typescript
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
```

## Step 7: Create Initial Pages

### 7.1 Home Page (`src/app/(site)/page.tsx`)

```typescript
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedWork />
        <SkillsSection />
        <AboutPreview />
        <ContactCTA />
      </main>
    </>
  );
}
```

### 7.2 Hero Section Component (`src/components/sections/HeroSection.tsx`)

```typescript
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import TechPill from "@/components/ui/TechPill";

const techStack = ["Next.js 15", "React", "TypeScript", "Kafka", "Real-time Data"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary text-sm font-mono mb-4"
            >
              Senior Full-Stack Engineer · Real-time Data & Dashboards
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              I build <span className="text-gradient">real-time data products</span> and dashboards that make telecom-scale data usable.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-foreground-muted text-lg mb-8"
            >
              Specializing in Next.js applications, streaming pipelines, and enterprise data platforms. 
              Currently building data monetization tools at Etisalat by e& (Daitics).
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-medium rounded-full transition-colors"
              >
                View my work
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 font-medium rounded-full transition-colors"
              >
                <Download size={16} />
                Download resume
              </Link>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  <TechPill variant="primary">{tech}</TechPill>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl glass p-8 glow-primary">
              {/* Add your visualization here - could be an SVG, canvas, or image */}
              <div className="w-full h-full flex items-center justify-center text-primary/20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Simple data flow visualization */}
                  <circle cx="50" cy="50" r="4" fill="currentColor" className="animate-pulse" />
                  <circle cx="150" cy="50" r="4" fill="currentColor" className="animate-pulse delay-100" />
                  <circle cx="100" cy="100" r="6" fill="currentColor" className="animate-pulse delay-200" />
                  <circle cx="50" cy="150" r="4" fill="currentColor" className="animate-pulse delay-300" />
                  <circle cx="150" cy="150" r="4" fill="currentColor" className="animate-pulse delay-400" />
                  
                  <path d="M50,50 L100,100 M150,50 L100,100 M50,150 L100,100 M150,150 L100,100" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        fill="none" 
                        opacity="0.5" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## Step 8: Project Data Structure

### 8.1 Types (`src/types/index.ts`)

```typescript
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
```

### 8.2 Project Data (`src/data/projects.ts`)

```typescript
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "daitics-data-monetization",
    title: "Real-time Data Pipeline Builder",
    company: "Etisalat (Daitics)",
    description: "Built a metadata-driven ETL operator UI atop Kafka/Postgres for telecom pipelines.",
    longDescription: `Developed a comprehensive data pipeline builder that allows non-technical users to create 
    complex ETL workflows through a visual interface. The system handles telecom-scale data with 
    low-latency processing and robust error handling.`,
    role: "Senior Frontend Developer",
    timeline: "2024 - Present",
    techStack: ["Next.js", "React", "TypeScript", "Kafka", "PostgreSQL", "Tailwind CSS", "Flink"],
    metrics: [
      "Reduced pipeline setup time by 60%",
      "Supports 1M+ records per file",
      "Sub-second UI response times"
    ],
    featured: true,
    category: "data-pipeline"
  },
  // Add more projects...
];

export const featuredProjects = projects.filter(p => p.featured);
```

## Step 9: Environment Variables

### 9.1 Environment File (`.env.local`)

```bash
# Site configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Paramveer Singh"
NEXT_PUBLIC_SITE_DESCRIPTION="Senior Frontend Engineer"

# Contact
NEXT_PUBLIC_EMAIL=your.email@example.com
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_GITHUB=https://github.com/yourusername

# Analytics (optional)
NEXT_PUBLIC_GA_ID=
```

## Step 10: Run the Development Server

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## Next Steps

1. **Add Content**: Populate `projects.ts` with your actual projects
2. **Create Case Study Pages**: Build individual project pages in `/work/[slug]`
3. **Add Animations**: Enhance with more Framer Motion animations
4. **Optimize Images**: Add project screenshots and optimize with next/image
5. **SEO**: Add proper meta tags and OpenGraph images
6. **Testing**: Add tests for critical components
7. **Performance**: Run Lighthouse and optimize
8. **Deploy**: Deploy to Vercel or your preferred platform

## Additional Features to Consider

- [ ] Dark/Light mode toggle (though dark-first is great)
- [ ] Blog section for technical articles
- [ ] Interactive code snippets
- [ ] Loading animations
- [ ] Page transitions
- [ ] Contact form with email service
- [ ] Analytics integration
- [ ] RSS feed for blog
- [ ] Sitemap generation

## Deployment Checklist

- [ ] Update all environment variables
- [ ] Add favicon and meta images
- [ ] Test all links
- [ ] Validate responsive design
- [ ] Check accessibility (ARIA labels, keyboard navigation)
- [ ] Optimize bundle size
- [ ] Set up error monitoring
- [ ] Configure custom domain
