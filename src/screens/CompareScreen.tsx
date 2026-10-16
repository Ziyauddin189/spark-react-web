import { CircleCheck } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";
import Reveal from "@/components/landing/Reveal";
import SplitText from "@/components/landing/SplitText";

const without = ["Rote memorization", "Recorded, one-way lectures", "Crowded classrooms", "Exam-only focus"];
const withSpark = ["Concept-first teaching", "Live, interactive Sundays", "Small, named batches", "Future-ready skills"];

// "Without vs With" comparison, mirroring the reference site's section.
export default function CompareScreen() {
  return (
    <section className="bg-paper px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px] text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.025em] text-ink">
            <SplitText text="Coaching shouldn't feel like a chore." />
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Most coaching is built around memorizing for the next test. We built
            Spark around understanding — so marks follow, and curiosity stays.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-deep/60 p-6 max-sm:rounded-b-none max-sm:border-b-0 sm:rounded-r-none sm:border-r-0 md:p-8">
              <h3 className="text-xl font-medium tracking-[-0.02em] text-ink md:text-2xl">Typical coaching</h3>
              <ul className="mt-5 space-y-4 text-[15px] text-ink-soft">
                {without.map((w) => (
                  <li key={w}>• {w}</li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl border border-line bg-card p-6 shadow-[0_20px_50px_-30px_oklch(0_0_0/0.45)] sm:-my-3 md:p-8">
              <h3 className="text-xl font-medium tracking-[-0.02em] text-ink md:text-2xl">With Spark</h3>
              <ul className="mt-5 space-y-4 text-[15px] text-ink">
                {withSpark.map((w) => (
                  <li key={w} className="flex items-center gap-2.5">
                    <CircleCheck className="h-4 w-4 flex-none fill-ember text-card" strokeWidth={2.5} />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="mt-16 text-2xl font-medium tracking-[-0.02em] text-ink">Not sure which batch fits?</h3>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Tell us the student's class and goal — we'll suggest the right batch
            and share timings and fees.
          </p>
          <ArrowLink href="#contact" className="mt-6 w-full sm:w-auto sm:min-w-64">
            Get batch guidance
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
