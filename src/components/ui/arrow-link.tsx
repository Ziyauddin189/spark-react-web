import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";
import { arrowClasses, type ArrowVariant } from "@/lib/arrow";

function Arrow() {
  return (
    <ArrowUpRight className="h-4 w-4 flex-none transition-transform group-hover/arrow:-translate-y-0.5 group-hover/arrow:translate-x-0.5" />
  );
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ArrowVariant };

export function ArrowLink({ variant, className, children, ...props }: LinkProps) {
  return (
    <a className={arrowClasses(variant, className)} {...props}>
      <Arrow />
      <span className="flex-1 text-center">{children}</span>
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ArrowVariant };

export function ArrowButton({ variant, className, children, ...props }: ButtonProps) {
  return (
    <button className={arrowClasses(variant, className)} {...props}>
      <Arrow />
      <span className="flex-1 text-center">{children}</span>
    </button>
  );
}
