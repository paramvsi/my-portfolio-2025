import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 2 | 3 | 4 | 6 | 8 | 12;
  className?: string;
}

export default function Grid({
  children,
  cols = 3,
  gap = 6,
  className,
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        {
          1: "grid-cols-1",
          2: "grid-cols-1 md:grid-cols-2",
          3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        }[cols],
        {
          2: "gap-2",
          3: "gap-3",
          4: "gap-4",
          6: "gap-6",
          8: "gap-8",
          12: "gap-12",
        }[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
