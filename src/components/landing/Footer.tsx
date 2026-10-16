import { Mail, MessageCircle } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { site, whatsappLink } from "@/lib/site";

const iconLink =
  "inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-line text-ink transition hover:border-ink hover:bg-card";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "Batches", href: "#batches" },
  { label: "Founder", href: "#founder" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Footer as an inset rounded card, like the reference site.
export default function Footer() {
  return (
    <footer className="bg-paper px-3 pb-24 md:px-6 md:pb-6">
      <div className="mx-auto max-w-[1400px] rounded-2xl border border-line bg-surface p-6 md:p-10">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink">
            Learn · Ignite · Launch
            <div className="mt-1 normal-case tracking-normal text-ink-soft">{site.location}</div>
          </div>
          <a href="#top" className="flex items-center gap-3 md:justify-center">
            <img src="/Logowithoutbg.png" alt="" className="h-12 w-12 rounded-full bg-white object-contain p-1" />
            <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">Spark Academy</span>
          </a>
          <div className="md:text-right">
            <ArrowLink href="#contact" className="w-full sm:w-auto sm:min-w-52">Join a batch</ArrowLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="inline-flex min-h-11 items-center text-[12px] font-medium uppercase tracking-[0.1em] text-ink hover:text-ember-deep">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={`mailto:${site.email}`} className={iconLink} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
            <span className="ml-3 text-xs text-ink-soft">© {new Date().getFullYear()} Spark Academy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
