import { cn } from "@/lib/utils";

interface DividerProps {
  gradient?: boolean;
  spacing?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Divider({
  gradient = false,
  spacing = "md",
  className,
}: DividerProps) {
  return (
    <div
      className={cn(
        "w-full",
        {
          sm: "my-4",
          md: "my-8",
          lg: "my-12",
          xl: "my-16",
        }[spacing],
        className
      )}
    >
      <div
        className={cn(
          "h-px w-full",
          gradient
            ? "bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            : "bg-border"
        )}
      />
    </div>
  );
}
