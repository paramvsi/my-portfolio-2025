"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface MetricDisplayProps {
  value: string;
  label: string;
  icon?: ReactNode;
  animate?: boolean;
  className?: string;
}

export default function MetricDisplay({
  value,
  label,
  icon,
  animate = true,
  className,
}: MetricDisplayProps) {
  return (
    <motion.div
      variants={animate ? fadeUp : undefined}
      initial={animate ? "initial" : undefined}
      whileInView={animate ? "animate" : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-col items-center text-center", className)}
    >
      {icon && (
        <div className="mb-3 text-primary">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-foreground-muted">
        {label}
      </div>
    </motion.div>
  );
}
