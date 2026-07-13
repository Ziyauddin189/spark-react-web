import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "border-transparent bg-accent text-accent-foreground shadow-[var(--shadow-glow)] hover:bg-accent/80",
      secondary:
        "border-transparent bg-foreground/10 text-foreground hover:bg-foreground/20",
      destructive:
        "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
      outline: "text-foreground border-border",
    },
  },
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants.variants.variant
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantClass = badgeVariants.variants.variant[variant] || badgeVariants.variants.variant.default
  return (
    <div className={cn(badgeVariants.base, variantClass, className)} {...props} />
  )
}

export { Badge, badgeVariants }
