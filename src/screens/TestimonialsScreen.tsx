import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import SectionLabel from "@/components/landing/SectionLabel";
import { testimonials, type Testimonial } from "@/data/testimonials";

const AUTOPLAY_MS = 7000;

function initials(name: string) {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ t }: { t: Testimonial }) {
  if (t.photo) return <img src={t.photo} alt="" className="h-14 w-14 rounded-full object-cover" />;
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ember to-azure text-lg font-semibold text-white">
      {initials(t.name)}
    </div>
  );
}

// Slider mirroring the reference site: big name on the left, quote on the right,
// arrows + progress bar. Auto-advances, pauses on hover/focus, swipeable on phones.
export default function TestimonialsScreen() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    if (paused || reduceMotion || count < 2) return;
    const t = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, reduceMotion, count, go]);

  if (count === 0) return null;
  const t = testimonials[index];

  return (
    <section id="testimonials" className="bg-deep px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel aside={`${index + 1} / ${count}`}>Testimonials</SectionLabel>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="What parents and students say"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="mt-10 md:mt-14"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              aria-live={paused ? "polite" : "off"}
              className="grid cursor-grab md:min-h-[17rem] grid-cols-1 gap-8 active:cursor-grabbing md:grid-cols-12 md:gap-10"
            >
              <figcaption className="md:col-span-5">
                <Avatar t={t} />
                <div className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-none tracking-[-0.025em] text-ink">
                  {t.name}
                </div>
                <div className="mt-3 text-[15px] text-ink-soft">{t.role}</div>
              </figcaption>
              <blockquote className="flex gap-4 md:col-span-7 md:gap-6">
                <Quote className="h-10 w-10 flex-none fill-ember text-transparent md:h-16 md:w-16" />
                <p className="text-xl leading-[1.35] tracking-[-0.01em] text-ink md:text-[1.75rem]">{t.quote}</p>
              </blockquote>
            </motion.figure>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-5 md:mt-4 md:w-[calc(5/12*100%)]">
            <div className="flex gap-1">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-card"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-card"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative h-0.5 flex-1 rounded-full bg-ink/15" aria-hidden="true">
              <motion.div
                className="absolute inset-y-0 rounded-full bg-ember"
                animate={{ left: `${(index / count) * 100}%` }}
                style={{ width: `${100 / count}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
