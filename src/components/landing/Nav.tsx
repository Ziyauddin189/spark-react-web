import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { site, whatsappLink } from "@/lib/site";

const leftLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Batches", href: "#batches" },
  { label: "Why Spark", href: "#why" },
];
const rightLinks = [
  { label: "Founder", href: "#founder" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];
const allLinks = [...leftLinks, ...rightLinks];

// Big numbered cards at the top of the mobile menu (like the reference site).
const featured = [
  { n: "01", label: "Batches", href: "#batches" },
  { n: "02", label: "Programs", href: "#programs" },
  { n: "03", label: "Contact", href: "#contact" },
];

// Highlights the link for the section currently in the middle of the screen.
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = allLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <a
      href={href}
      aria-current={active ? "true" : undefined}
      className={`relative py-3 text-[12px] font-medium uppercase tracking-[0.1em] transition-colors hover:text-ember-deep ${
        active ? "text-ember-deep" : "text-ink"
      }`}
    >
      {label}
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-3 top-3 z-50 md:inset-x-6 md:top-4">
      <div className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between rounded-2xl border border-line bg-surface/75 px-3 shadow-[0_8px_30px_-12px_oklch(0_0_0/0.18)] backdrop-blur-md md:px-6">
        {/* Left: links on desktop, menu button on mobile */}
        <nav className="hidden items-center gap-7 lg:flex">
          {leftLinks.map((l) => (
            <NavLink key={l.href} {...l} active={active === l.href} />
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink transition hover:bg-card lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Centre: logo */}
        <a href="#top" onClick={close} className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5">
          <img src="/Logowithoutbg.png" alt="" className="h-9 w-9 rounded-full bg-white object-contain p-0.5 sm:h-10 sm:w-10" />
          <span className="hidden whitespace-nowrap font-display text-[15px] font-semibold tracking-[-0.03em] text-ink min-[380px]:inline min-[400px]:text-lg sm:text-xl">Spark Academy</span>
        </a>

        {/* Right: links + CTA on desktop, compact CTA on mobile */}
        <div className="hidden items-center gap-7 lg:flex">
          {rightLinks.map((l) => (
            <NavLink key={l.href} {...l} active={active === l.href} />
          ))}
          <ArrowLink href="#contact">Join a batch</ArrowLink>
        </div>
        <a
          href="#contact"
          onClick={close}
          className="inline-flex h-11 items-center gap-1 rounded-md bg-peach px-3 text-[12px] font-medium uppercase tracking-[0.1em] text-ink lg:hidden"
        >
          Join <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-h-[calc(100dvh-6.5rem)] max-w-[1400px] overflow-y-auto rounded-2xl border border-line bg-surface p-3 shadow-xl lg:hidden"
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {featured.map((f) => (
                <a
                  key={f.href}
                  href={f.href}
                  onClick={close}
                  className="flex items-center justify-between rounded-xl bg-card p-4 transition hover:bg-raised"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-xs text-ink-soft">({f.n})</span>
                    <span className="font-display text-2xl font-medium tracking-[-0.03em] text-ink">{f.label}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink" />
                </a>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-4 px-2">
              {allLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className={`py-3 text-[13px] font-medium uppercase tracking-[0.1em] ${
                    active === l.href ? "text-ember-deep" : "text-ink"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <ArrowLink href="#contact" onClick={close} className="w-full">
                Join a batch
              </ArrowLink>
              <ArrowLink href={whatsappLink()} target="_blank" rel="noopener noreferrer" variant="light" className="w-full">
                WhatsApp {site.phoneDisplay}
              </ArrowLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
