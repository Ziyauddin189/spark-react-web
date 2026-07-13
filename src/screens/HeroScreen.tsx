import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "7+", label: "Focused Batches" },
  { value: "100%", label: "Concept First" },
  { value: "Live", label: "Every Sunday" },
  { value: "1:1", label: "Doubt Support" },
];

export default function HeroScreen() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16"
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-azure/25 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-ember/25 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_75%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Hero visual: responsive logo halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="pointer-events-none relative mb-8 lg:absolute lg:right-12 xl:right-24 lg:top-20 z-0"
        >
          <div className="relative h-[240px] w-[240px] md:h-[320px] md:w-[320px] lg:h-[440px] lg:w-[440px]">
            <div className="absolute inset-0 animate-[spin_28s_linear_infinite] rounded-full bg-gradient-to-tr from-ember/40 via-transparent to-azure/40 blur-2xl" />
            <div className="relative h-full w-full rounded-full bg-white p-4 md:p-6 lg:p-8 drop-shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
              <img
                src="/Logowithoutbg.png"
                alt="Spark Academy logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-ember"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Learning, reimagined</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-[88px] max-w-4xl lg:max-w-3xl xl:max-w-4xl relative z-10"
        >
          Setting the standards in{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-ember via-gold to-azure bg-clip-text text-transparent italic pr-2">
              education
            </span>
          </span>
          <br />
          with technology.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Bored of stone-age teaching? So were we. Spark Academy delivers live
          interactive Sunday sessions, conceptual mastery, and future-ready
          training — from 10th boards to JEE Mains and software craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#batches">
            <Button
              size="lg"
              className="rounded-full bg-ink-deep px-7 text-base text-cream hover:bg-ink"
            >
              Explore batches <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#founder">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-ink-deep/20 bg-transparent px-7 text-base text-foreground hover:bg-ink-deep hover:text-cream"
            >
              Meet the founder
            </Button>
          </a>
        </motion.div>



        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold text-foreground md:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
