import { Quote } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { site } from "@/lib/site";

const points = [
  "Live interactive online sessions every Sunday",
  "Advanced teaching methods over stone-age models",
  "Preparing students for the future, not just exams",
];

// Quote card + portrait, mirroring the reference site's founder block.
export default function FounderScreen() {
  return (
    <section id="founder" className="bg-deep px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 md:gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <div className="flex h-full flex-col rounded-2xl bg-card p-6 md:p-10">
            <Quote className="h-8 w-8 fill-ember text-transparent" />
            <blockquote className="mt-6 text-[1.6rem] leading-[1.2] tracking-[-0.025em] text-ink md:text-[2.35rem]">
              I built Spark Academy because students deserve more than memorization.
              They deserve concepts that click, teachers who care, and technology
              that opens doors — for board exams, competitive exams, engineering,
              and beyond.
            </blockquote>
            <ul className="mt-8 space-y-1.5 text-[15px] text-ink-soft">
              {points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="min-h-10 flex-1" />
            <div className="flex items-end justify-between gap-6 border-t border-line pt-6">
              <div>
                <div className="font-display text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">{site.founder}</div>
                <div className="mt-1 text-sm text-ink-soft">Founder, Spark Academy</div>
              </div>
              <div className="hidden text-right text-[12px] uppercase tracking-[0.12em] text-ink-soft sm:block">
                Learn · Ignite · Launch
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4">
          <div className="h-full overflow-hidden rounded-2xl bg-card">
            <img
              src="/Ziyauddin.png"
              alt={`${site.founder}, founder of Spark Academy`}
              loading="lazy"
              className="aspect-[4/5] h-full w-full object-cover object-top lg:aspect-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
