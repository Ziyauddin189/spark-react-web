import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const founderPoints = [
  "Setting the standards in education with technology",
  "Introducing advanced teaching methods over stone-age models",
  "Live interactive online sessions every Sunday",
  "Preparing students for the future, not just exams",
];

export default function FounderScreen() {
  return (
    <section id="founder" className="relative overflow-hidden bg-ink-deep py-28 text-cream md:py-40">
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-ember/40 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-azure/40 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-ember/60 to-azure/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <img src="/Ziyauddin.png" alt="Ziyauddin — Founder, Spark Academy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/15 bg-ink-deep/90 px-5 py-4 shadow-xl backdrop-blur">
              <div className="text-xs uppercase tracking-[0.2em] text-ember">Founder</div>
              <div className="font-display text-2xl font-semibold">Ziyauddin</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="text-xs uppercase tracking-[0.24em] text-ember">A note from the founder</div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
            “Education should ignite curiosity — not just fill notebooks.”
          </h2>
          <div className="mt-6 flex items-start gap-3 text-white/70">
            <Quote className="mt-1 h-5 w-5 flex-none text-ember" />
            <p className="text-lg leading-relaxed">
              I built Spark Academy because students deserve more than
              memorization. They deserve concepts that click, teachers who care,
              and technology that opens doors — for board exams, competitive
              exams, engineering, and beyond.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {founderPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Sparkles className="mt-0.5 h-4 w-4 flex-none text-ember" />
                <span className="text-sm text-white/85">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
