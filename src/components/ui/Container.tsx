import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

export default function Container({
  children,
  size = "xl",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        {
          sm: "max-w-2xl",
          md: "max-w-3xl",
          lg: "max-w-5xl",
          xl: "max-w-[1500px]",
          "2xl": "max-w-7xl",
        }[size],
        className
      )}
    >
      {children}
    </div>
  );
}
