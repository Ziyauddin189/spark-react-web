import { CircleCheck } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import SplitText from "@/components/landing/SplitText";
import SectionLabel from "@/components/landing/SectionLabel";

const reasons = [
  { title: "Live, not recorded", desc: "Real-time Sunday sessions with real interaction — questions, whiteboards and doubts, answered on the spot." },
  { title: "Conceptual mastery", desc: "We build every idea from first principles until it clicks. Rote learning is retired." },
  { title: "Small batches", desc: "Named students, not roll numbers. Feedback that actually reaches home." },
  { title: "Technology-first", desc: "Advanced teaching methods replacing stone-age lecture models — visual, interactive, modern." },
  { title: "Boards + entrance, one spine", desc: "Board rigor and competitive-exam thinking taught together, so nothing is learned twice." },
  { title: "Future-ready", desc: "Engineering foundation and software craft alongside academics — preparing for life, not just the next exam." },
];

// Feature list with check icons, mirroring "How we are changing the game".
export default function WhyScreen() {
  return (
    <section id="why" className="bg-surface px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>Why Spark Academy</SectionLabel>
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.025em] text-ink">
              <SplitText text="How we're changing the way students learn." />
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-7">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.06}>
                <h3 className="flex items-center gap-2.5 text-xl font-medium tracking-[-0.02em] text-ink md:text-2xl">
                  <CircleCheck className="h-5 w-5 flex-none fill-ember text-surface" strokeWidth={2.5} />
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
