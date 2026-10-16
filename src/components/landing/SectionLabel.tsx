import type { ReactNode } from "react";

// Small section title sitting on a hairline, e.g. "Testimonials ───────".
export default function SectionLabel({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
      <h2 className="font-sans text-xs font-medium uppercase tracking-[0.24em] text-ember">{children}</h2>
      {aside && <div className="hidden text-sm text-ink-soft md:block">{aside}</div>}
    </div>
  );
}
