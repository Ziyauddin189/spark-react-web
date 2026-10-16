import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const canUse = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Desktop-only cursor: an ember dot with a trailing ring that grows over links.
export default function CursorSpark() {
  const [enabled] = useState(canUse);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) =>
      setActive(!!(e.target as Element | null)?.closest?.("a, button, summary, select, input, textarea, [role=button]"));
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: active ? 1.8 : 1, opacity: active ? 0.9 : 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-5 -mt-5 h-10 w-10 rounded-full border border-ember"
      />
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-1 -mt-1 h-2 w-2 rounded-full bg-ember shadow-[0_0_12px_2px_oklch(0.72_0.17_55/0.8)]"
      />
    </>
  );
}
