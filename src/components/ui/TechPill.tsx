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
