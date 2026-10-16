import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const rows = [
  ["SSC Boards", "CBSE", "Jr. Inter MPC", "Sr. Inter MPC", "AP EAPCET", "JEE Mains", "Software Training", "Taleem-e-Hunar"],
  ["Live Sundays", "Concept first", "Small batches", "Doubts answered live", "Engineering foundation", "Future-ready skills"],
];

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// Ticker that drifts on its own, speeds up with scroll speed, flips direction
// with scroll direction and leans (skews) while you scroll fast.
function VelocityRow({ items, baseVelocity }: { items: string[]; baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(velocity, [-2500, 2500], [10, -10]);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);
  const reduce = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * baseVelocity * (delta / 1000);
    if (factor.get() < 0) direction.current = -1;
    else if (factor.get() > 0) direction.current = 1;
    move += direction.current * move * factor.get();
    baseX.set(baseX.get() + move);
  });

  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div style={{ x, skewX }} className="flex w-max gap-10 whitespace-nowrap md:gap-16">
        {doubled.map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-10 font-display text-2xl font-medium tracking-[-0.02em] text-ink/60 transition-colors hover:text-ink md:gap-16 md:text-4xl"
          >
            {t}
            <span className="text-base text-ember md:text-xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeScreen() {
  return (
    <section aria-label="What we teach" className="overflow-hidden border-y border-line bg-paper py-6 md:py-10">
      <VelocityRow items={rows[0]} baseVelocity={-2.2} />
      <div className="mt-4 border-t border-line pt-4 md:mt-8 md:pt-8">
        <VelocityRow items={rows[1]} baseVelocity={2.2} />
      </div>
    </section>
  );
}
