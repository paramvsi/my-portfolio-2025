"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { skeleton } from "@/lib/animations";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "card" | "image" | "circle";
  animate?: boolean;
}

export default function Skeleton({
  className,
  variant = "text",
  animate = true,
}: SkeletonProps) {
  const Component = animate ? motion.div : "div";
  const animationProps = animate ? { variants: skeleton, ...skeleton } : {};

  return (
    <Component
      className={cn(
        "bg-white/5 rounded",
        {
          text: "h-4 w-full",
          card: "h-48 w-full rounded-2xl",
          image: "aspect-video w-full",
          circle: "h-12 w-12 rounded-full",
        }[variant],
        className
      )}
      {...animationProps}
    />
  );
}
