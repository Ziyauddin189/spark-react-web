import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

const curtain = [0.76, 0, 0.24, 1] as [number, number, number, number];

// Brand intro: logo + 0→100 counter, then the panel wipes up to reveal the hero.
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.3,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => window.setTimeout(onDone, 180),
    });
    return () => controls.stop();
  }, [onDone]);

  return (
    <motion.div
      role="status"
      aria-label="Loading Spark Academy"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: curtain }}
      className="fixed inset-0 z-[100] flex flex-col bg-deep px-6 py-8 text-ink md:px-10"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-28 w-28 md:h-36 md:w-36"
        >
          <div className="absolute -inset-4 animate-[spin_6s_linear_infinite] rounded-full bg-gradient-to-tr from-ember/60 via-transparent to-azure/60 blur-xl" />
          <div className="relative h-full w-full rounded-full bg-white p-3">
            <img src="/Logowithoutbg.png" alt="" className="h-full w-full object-contain" />
          </div>
        </motion.div>
        <div className="mt-8 overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-ink-soft"
          >
            Learn · Ignite · Launch
          </motion.div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-6">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">Spark Academy</span>
        <span className="font-display text-6xl font-semibold leading-none tracking-[-0.03em] tabular-nums md:text-8xl">
          {count}
          <span className="text-ember">%</span>
        </span>
      </div>
      <div className="mt-6 h-[2px] w-full bg-line">
        <div className="h-full bg-gradient-to-r from-ember via-gold to-azure" style={{ width: `${count}%` }} />
      </div>
    </motion.div>
  );
}
