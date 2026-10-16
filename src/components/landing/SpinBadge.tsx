import { ArrowDown } from "lucide-react";

// Rotating circular text sticker — doubles as a "scroll down" link.
export default function SpinBadge({ href, className }: { href: string; className?: string }) {
  const text = "LIVE EVERY SUNDAY ✦ CONCEPT FIRST ✦ ";
  return (
    <a href={href} aria-label="Scroll to programs" className={`group relative block h-24 w-24 md:h-28 md:w-28 ${className ?? ""}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_14s_linear_infinite] text-ink">
        <defs>
          <path id="spin-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-current font-sans text-[8px] font-semibold">
          {/* textLength stretches the text to exactly one lap of the circle */}
          <textPath href="#spin-badge-circle" textLength={236} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full bg-ember text-on-accent transition-transform group-hover:scale-110">
        <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
      </span>
    </a>
  );
}
