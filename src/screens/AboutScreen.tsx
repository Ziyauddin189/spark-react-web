import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  { title: "Live Sunday Sessions", desc: "Interactive online classes every Sunday — questions welcomed, answered live." },
  { title: "Conceptual Learning", desc: "Rote is retired. Every idea is built from the ground up until it clicks." },
  { title: "Future-ready", desc: "Curriculum blends board rigor with the tools students actually need next." },
  { title: "Technology-first", desc: "Advanced teaching methods replacing stone-age lecture models." },
];

export default function AboutScreen() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="sticky top-32"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-ember">About the academy</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Not another coaching class.
              <span className="block italic text-muted-foreground">A launchpad.</span>
            </h2>
          </motion.div>
        </div>
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl leading-relaxed text-foreground/85 md:text-2xl"
          >
            Spark Academy exists to end rote learning. We teach the way concepts
            actually work — visually, interactively, and with the tools of the
            modern world. Every Sunday, students meet live for engaging sessions
            that make hard ideas click.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ember/15 text-ember">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="font-display text-xl font-semibold text-foreground">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-ember/20 to-azure/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
