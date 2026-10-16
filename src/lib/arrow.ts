import { cn } from "@/lib/utils";

export type ArrowVariant = "peach" | "light" | "ink" | "navy";

// Shared look for the "↗ LABEL" buttons used across the site.
export function arrowClasses(variant: ArrowVariant = "peach", className?: string) {
  return cn(
    "group/arrow inline-flex min-h-11 items-center gap-6 rounded-md px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    variant === "peach" && "bg-peach font-semibold text-on-accent shadow-[var(--shadow-glow)] hover:bg-peach-strong",
    variant === "light" && "border border-line bg-card text-ink hover:border-ember/50 hover:bg-raised",
    variant === "ink" && "bg-ink text-paper hover:bg-ink/90",
    variant === "navy" && "bg-paper text-ink hover:bg-deep",
    className,
  );
}
