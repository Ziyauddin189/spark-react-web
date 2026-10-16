import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useScroll, useTransform } from "framer-motion";
import { ArrowLink } from "@/components/ui/arrow-link";
import Reveal from "@/components/landing/Reveal";
import SplitText from "@/components/landing/SplitText";
import CountUp from "@/components/landing/CountUp";
import SpinBadge from "@/components/landing/SpinBadge";
import { useMediaQuery } from "@/lib/useMediaQuery";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const layoutSpring = { type: "spring", stiffness: 70, damping: 18, mass: 1 } as const;
const brandGradient = "linear-gradient(90deg, var(--color-ember), var(--color-gold), var(--color-azure))";

// A giant word built letter-by-letter: each letter pops up out of a mask, and
// bounces when hovered. The gradient is spread across the letters so the whole
// word still reads as one sweep of colour.
function Letters({ word, show, delay, gradient }: { word: string; show: boolean; delay: number; gradient?: boolean }) {
  const chars = [...word];
  return (
    <span className="-mb-[0.08em] inline-flex overflow-hidden pb-[0.22em] pr-[0.06em]">
      {chars.map((c, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={
            gradient
              ? {
                  backgroundImage: brandGradient,
                  backgroundSize: `${chars.length * 100}% 100%`,
                  backgroundPosition: `${(i / Math.max(chars.length - 1, 1)) * 100}% 0`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }
              : undefined
          }
          initial={{ y: "115%", rotate: 10 }}
          animate={show ? { y: "0%", rotate: 0 } : undefined}
          whileHover={{ y: "-12%", transition: { type: "spring", stiffness: 500, damping: 12 } }}
          transition={{ duration: 0.9, delay: delay + i * 0.05, ease }}
        >
          {c}
        </motion.span>
      ))}
      <motion.span
        className="inline-block text-ember"
        initial={{ scale: 0 }}
        animate={show ? { scale: 1 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 12, delay: delay + chars.length * 0.05 + 0.2 }}
      >
        .
      </motion.span>
    </span>
  );
}

const stats = [
  { value: "7", label: "Focused batches" },
  { value: "Live", label: "Every Sunday" },
  { value: "100%", label: "Concept first" },
  { value: "1:1", label: "Doubt support" },
];

const mission =
  "Spark Academy exists to end rote learning. We teach the way concepts actually work — live, interactive and with the tools of the modern world — from 10th boards to JEE Mains and software craft.";

export default function HeroScreen({ ready }: { ready: boolean }) {
  const isWide = useMediaQuery("(min-width: 768px)");
  const [spread, setSpread] = useState(false);
  const wide = spread && isWide;

  // Like the reference: the words land in a tight centred stack, then the
  // composition breaks apart into the rising diagonal.
  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(() => setSpread(true), 1500);
    return () => window.clearTimeout(t);
  }, [ready]);

  // Scroll: the headline zooms toward you and fades as you leave the hero.
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const blobShift = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const tagline = "Setting the standards in education with technology.";

  return (
    <>
      <section
        id="top"
        ref={heroRef}
        className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pt-24 pb-24 md:px-8"
      >
        {/* Ambient brand glow, drifting on scroll */}
        <motion.div aria-hidden="true" style={{ y: blobShift }} className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-40 top-16 h-[28rem] w-[28rem] rounded-full bg-azure/25 blur-3xl md:h-[36rem] md:w-[36rem]"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-ember/25 blur-3xl md:h-[36rem] md:w-[36rem]"
          />
        </motion.div>

        {/* Spinning logo halo — wide screens only, appears once the words spread out */}
        <AnimatePresence>
          {wide && (
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.35 }}
              className="pointer-events-none absolute right-[5%] top-[15%] hidden h-[clamp(14rem,19vw,20rem)] w-[clamp(14rem,19vw,20rem)] xl:block"
            >
              <div className="absolute inset-0 animate-[spin_28s_linear_infinite] rounded-full bg-gradient-to-tr from-ember/50 via-transparent to-azure/50 blur-2xl" />
              <div className="relative h-full w-full rounded-full bg-white p-6">
                <img src="/Logowithoutbg.png" alt="" className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div style={{ scale, opacity, y }} className="mx-auto w-full max-w-[1400px] origin-center">
          <h1 className="text-[clamp(3.9rem,17.5vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.025em] text-ink md:text-[clamp(6.5rem,12.5vw,12rem)]">
            <span className="sr-only">Spark Academy — Learn. Ignite. Launch. {tagline}</span>
            <LayoutGroup>
              <span aria-hidden="true" className="flex flex-col">
                <motion.span layout transition={layoutSpring} className={wide ? "self-start pl-[6%]" : "self-center"}>
                  <Letters word="Learn" show={ready} delay={0.15} />
                </motion.span>
                <motion.span layout transition={layoutSpring} className="self-center">
                  <Letters word="Ignite" show={ready} delay={0.35} gradient />
                </motion.span>
                <span className={wide ? "flex w-full items-end justify-between gap-10" : "flex flex-col items-center"}>
                  <AnimatePresence>
                    {wide && (
                      <motion.span
                        key="tagline"
                        initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, delay: 0.25, ease }}
                        className="mb-[0.6em] max-w-xs font-sans text-lg font-normal leading-snug tracking-normal text-ink-soft"
                      >
                        {tagline}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <motion.span layout transition={layoutSpring} className={wide ? "pr-[2%]" : ""}>
                    <Letters word="Launch" show={ready} delay={0.55} />
                  </motion.span>
                </span>
              </span>
            </LayoutGroup>
          </h1>

          {/* Phones keep the stacked composition (like the reference), with an action */}
          {!isWide && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, delay: 1.2, ease }}
              className="mx-auto mt-6 w-full max-w-xs text-center"
            >
              <p className="text-base leading-snug text-ink-soft">{tagline}</p>
              <ArrowLink href="#batches" className="mt-6 w-full">Explore batches</ArrowLink>
            </motion.div>
          )}
        </motion.div>

        {/* Spinning sticker / scroll cue */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={ready ? { opacity: 1, scale: 1 } : undefined}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.9 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 [@media(max-height:700px)]:hidden"
        >
          <SpinBadge href="#programs" />
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-surface px-4 py-16 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <div className="font-sans text-xs font-medium uppercase tracking-[0.24em] text-ember">Our Mission</div>
          </Reveal>
          <div className="md:col-span-8">
            <p className="font-display text-[1.6rem] font-normal leading-[1.25] tracking-[-0.01em] text-ink md:text-[2.4rem]">
              <SplitText text={mission} stagger={0.018} />
            </p>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Every Sunday, students meet live for sessions where questions are
                welcomed and answered in real time. Small batches, named students,
                and feedback that actually reaches home.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ArrowLink href="#batches" className="sm:min-w-56">Explore batches</ArrowLink>
                <ArrowLink href="#founder" variant="light" className="sm:min-w-56">Meet the founder</ArrowLink>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              {/* gap-px over a line-coloured background draws the hairline grid */}
              <dl className="mt-14 grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-surface py-6 pr-4 [&:nth-child(even)]:pl-5 md:[&:not(:first-child)]:pl-6">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-4xl font-medium tracking-[-0.02em] text-ink md:text-5xl">
                      <CountUp value={s.value} />
                    </dd>
                    <dd className="mt-1 text-sm text-ink-soft">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
