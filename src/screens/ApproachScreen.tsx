import { motion } from "framer-motion";
import { Brain, Radio, Rocket, Users } from "lucide-react";

export default function ApproachScreen() {
  const rows = [
    { icon: Radio, k: "Live, not recorded", v: "Real-time Sunday sessions with real interaction — questions, whiteboards, doubts, answered." },
    { icon: Brain, k: "Conceptual mastery", v: "We build ideas from first principles. Rote learning is retired." },
    { icon: Rocket, k: "Future-ready", v: "Engineering foundation and software craft alongside academic rigor." },
    { icon: Users, k: "Personal attention", v: "Small batches. Named students. Feedback that actually reaches home." },
  ];
  return (
    <section id="approach" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.24em] text-ember">Our approach</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Rote learning{" "}
              <span className="text-destructive line-through decoration-4">out</span>.{" "}
              <span className="block">Conceptual learning in.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Making education engaging, practical, and impactful — preparing
              students for the future, not just the next exam.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="divide-y divide-border rounded-3xl border border-border bg-card">
              {rows.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.k}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-5 p-7 transition hover:bg-secondary/60"
                  >
                    <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-ink-deep text-cream">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-xl font-semibold text-foreground">{r.k}</div>
                      <p className="mt-1 text-muted-foreground">{r.v}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
