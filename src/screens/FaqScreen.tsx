import { Plus } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import SplitText from "@/components/landing/SplitText";
import SectionLabel from "@/components/landing/SectionLabel";
import { faqs } from "@/data/faqs";
import { whatsappLink } from "@/lib/site";

export default function FaqScreen() {
  return (
    <section id="faq" className="bg-paper px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>FAQ</SectionLabel>
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.025em] text-ink">
              <SplitText text="Questions parents ask." />
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              Still unsure?{" "}
              <a
                href={whatsappLink("Hi Spark Academy, I have a question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-ember decoration-2 underline-offset-4 hover:text-ember-deep"
              >
                Message us on WhatsApp
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-7">
            <div className="border-t border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium tracking-[-0.01em] text-ink md:text-xl [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus className="h-5 w-5 flex-none transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="-mt-1 max-w-2xl pb-6 pr-10 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
