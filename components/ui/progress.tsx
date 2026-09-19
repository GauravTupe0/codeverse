"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export function Progress({ value = 0, className }: { value?: number; className?: string }) {
  return (
    <ProgressPrimitive.Root className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className)}>
      <ProgressPrimitive.Indicator className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all" style={{ width: `${value}%` }} />
    </ProgressPrimitive.Root>
  );
}
