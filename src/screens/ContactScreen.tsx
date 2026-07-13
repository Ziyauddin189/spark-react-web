import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactScreen() {
  return (
    <>
      <section id="contact" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-ink-deep/10 bg-gradient-to-br from-ink-deep via-ink to-ink-deep p-10 text-cream shadow-[var(--shadow-elegant)] md:p-16"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-ember/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-azure/30 blur-3xl" />

            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-ember">
                  <Calendar className="h-3.5 w-3.5" /> Sundays · Live
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Ready to spark something bigger?
                </h2>
                <p className="mt-4 max-w-md text-white/75">
                  Join a batch, meet the mentors, and experience learning that
                  actually moves you forward.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:ziyauddinshaik7@gmail.com">
                    <Button size="lg" className="rounded-full bg-ember px-7 text-ink-deep hover:bg-ember/80">
                      Enroll now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#batches">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white/25 bg-transparent px-7 text-white hover:bg-white hover:text-ink-deep"
                    >
                      View batches
                    </Button>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: Mail, k: "Email", v: "ziyauddinshaik7@gmail.com", href: "mailto:ziyauddinshaik7@gmail.com" },
                  { icon: Phone, k: "Call", v: "+91 7337006907", href: "tel:7337006907" },
                  { icon: MapPin, k: "Base", v: "Andhra Pradesh, India" },
                  { icon: Calendar, k: "Live class", v: "Every Sunday" },
                ].map((c) => {
                  const Icon = c.icon;
                  const CardContent = (
                    <>
                      <Icon className="h-5 w-5 text-ember" />
                      <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/60">{c.k}</div>
                      <div className="mt-1 font-medium break-all text-white">{c.v}</div>
                    </>
                  );

                  return c.href ? (
                    <a
                      key={c.k}
                      href={c.href}
                      className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div key={c.k} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      {CardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="Spark Academy" className="h-11 w-11 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-base font-semibold text-foreground">Spark Academy</div>
              <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} · Learn · Ignite · Launch</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-foreground/70">
              <a href="mailto:ziyauddinshaik7@gmail.com" className="rounded-full border border-border p-2 transition hover:text-ember hover:border-ember" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/spark_academy_nlr?igsh=N2NnZWVkdXVrcWR5" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border p-2 transition hover:text-ember hover:border-ember" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="tel:7337006907" className="rounded-full border border-border p-2 transition hover:text-ember hover:border-ember" aria-label="WhatsApp/Phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
          </div>
        </div>
      </footer>
    </>
  );
}
