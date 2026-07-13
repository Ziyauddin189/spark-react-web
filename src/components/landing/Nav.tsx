import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Batches", href: "#batches" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src="/Logo.png" alt="Spark Academy" className="h-12 w-12 object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-cream">Spark Academy</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Learn · Ignite · Launch</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition hover:text-ember">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#contact">
            <Button className="rounded-full bg-ink-deep px-5 text-cream hover:bg-ink">
              Join a batch <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
        <button
          className="md:hidden rounded-full border border-border bg-card p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="mx-4 rounded-2xl border border-border bg-card/95 p-5 shadow-xl backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full rounded-full bg-ink-deep text-cream">Join a batch</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
