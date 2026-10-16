import { ArrowUpRight, MessageCircleQuestion } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import Tilt from "@/components/landing/Tilt";
import SectionLabel from "@/components/landing/SectionLabel";
import { arrowClasses } from "@/lib/arrow";
import { cn } from "@/lib/utils";
import { batches } from "@/data/batches";
import { SELECT_BATCH_EVENT } from "@/lib/site";

function selectBatch(title: string) {
  window.dispatchEvent(new CustomEvent(SELECT_BATCH_EVENT, { detail: title }));
}

const cardClass =
  "group flex h-full min-h-56 flex-col rounded-2xl bg-surface p-4 transition hover:bg-card hover:shadow-[0_18px_40px_-24px_oklch(0_0_0/0.35)] md:p-5";

// Card grid, mirroring the reference site's "Areas of Expertise".
export default function BatchesScreen() {
  return (
    <section id="batches" className="bg-deep px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>Our Batches</SectionLabel>
        <p className="mt-4 max-w-2xl text-[15px] text-ink-soft">
          Seven focused batches — board exams, competitive exams, engineering foundation and
          skills. Pick one and we'll share timings and fees on WhatsApp.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {batches.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={(i % 4) * 0.05} className="h-full">
                <Tilt className="h-full">
                <a href="#contact" onClick={() => selectBatch(b.title)} className={cardClass}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft">{b.code}</div>
                      <h3 className="mt-1.5 text-xl font-medium leading-tight tracking-[-0.02em] text-ink">{b.title}</h3>
                    </div>
                    <Icon className="h-6 w-6 flex-none text-ink" strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{b.desc}</p>
                  {b.details?.length ? (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {b.details.map((d) => (
                        <li key={d.label} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-soft">
                          {d.label}: <span className="text-ink">{d.value}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="min-h-5 flex-1" />
                  <span className={arrowClasses("light", "w-full group-hover:bg-peach")}>
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="flex-1 text-center">Enroll</span>
                  </span>
                </a>
                </Tilt>
              </Reveal>
            );
          })}

          {/* 8th card completes the 4×2 grid */}
          <Reveal delay={0.15} className="h-full">
            <Tilt className="h-full">
            <a href="#contact" className={cn(cardClass, "bg-gradient-to-br from-ember to-gold text-on-accent hover:brightness-105")}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-on-accent/70">Not sure?</div>
                  <h3 className="mt-1.5 text-xl font-medium leading-tight tracking-[-0.02em]">Help me choose</h3>
                </div>
                <MessageCircleQuestion className="h-6 w-6 flex-none" strokeWidth={1.5} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-on-accent/80">
                Tell us the student's class and goal — we'll suggest the right batch.
              </p>
              <div className="min-h-5 flex-1" />
              <span className={arrowClasses("navy", "w-full")}>
                <ArrowUpRight className="h-4 w-4" />
                <span className="flex-1 text-center">Talk to us</span>
              </span>
            </a>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
