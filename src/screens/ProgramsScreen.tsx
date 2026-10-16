import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLink } from "@/components/ui/arrow-link";
import SplitText from "@/components/landing/SplitText";
import Reveal from "@/components/landing/Reveal";
import SectionLabel from "@/components/landing/SectionLabel";

const programs = [
  {
    n: "01",
    title: "Boards",
    points: ["10th Grade — SSC & CBSE", "Concept-first foundations", "Live Sunday doubt-solving"],
    cta: "See 10th batch",
  },
  {
    n: "02",
    title: "Entrance",
    points: ["Jr. & Sr. Intermediate (MPC)", "AP EAPCET preparation", "IIT / JEE Mains track"],
    cta: "See entrance batches",
  },
  {
    n: "03",
    title: "Skills",
    points: ["Software Training", "Taleem-e-Hunar", "Real projects, values & craft"],
    cta: "See skill batches",
  },
];

type Program = (typeof programs)[number];

// One giant numbered row. The title drifts sideways as the row scrolls past,
// alternating direction row by row.
function ProgramRow({ p, index }: { p: Program; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dir = index % 2 === 0 ? 1 : -1;
  const x = useTransform(scrollYProgress, [0, 1], [`${-4 * dir}%`, `${4 * dir}%`]);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-14">
      <motion.h3 style={{ x }} className="flex items-start md:col-span-8">
        <span className="text-[clamp(4rem,17vw,11rem)] font-medium leading-[0.9] tracking-[-0.025em] text-ink">
          <SplitText text={p.title} by="char" />
        </span>
        <span className="ml-2 mt-2 font-sans text-base text-ember md:ml-3 md:mt-4 md:text-lg">({p.n})</span>
      </motion.h3>
      <Reveal delay={0.15} className="md:col-span-4">
        <ul className="space-y-1.5 text-[15px] text-ink-soft">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-2">
              <span aria-hidden="true" className="text-ember">✦</span>
              {pt}
            </li>
          ))}
        </ul>
        <ArrowLink href="#batches" className="mt-5 w-full sm:w-auto sm:min-w-60">
          {p.cta}
        </ArrowLink>
      </Reveal>
    </div>
  );
}

// Giant numbered rows, mirroring the reference site's services list.
export default function ProgramsScreen() {
  return (
    <section id="programs" className="overflow-hidden bg-paper px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel aside="Three tracks, one concept-first spine">Our Programs</SectionLabel>

        <div className="divide-y divide-line">
          {programs.map((p, i) => (
            <ProgramRow key={p.n} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
