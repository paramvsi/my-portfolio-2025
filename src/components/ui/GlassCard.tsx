import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<MotionProps, "children"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "heavy";
}

export default function GlassCard({
  children,
  className,
  hover = false,
  variant = "default",
  ...motionProps
}: GlassCardProps) {
  const hoverAnimation = hover
    ? {
        whileHover: {
          y: -2,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        },
        transition: {
          duration: 0.3,
          ease: "easeOut" as const,
        },
      }
    : {};

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6",
        variant === "default" && "glass",
        variant === "heavy" && "glass-heavy",
        className
      )}
      {...hoverAnimation}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
