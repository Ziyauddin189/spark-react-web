import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Counts a leading number up from 0 when it scrolls into view ("100%" → 0…100%).
// Values without a leading number ("Live", "1:1") render as-is.
export default function CountUp({ value }: { value: string }) {
  const match = /^(\d+)(?!\d*:)(.*)$/.exec(value);
  const hasNumber = match !== null;
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!hasNumber || !inView || reduce) return;
    const controls = animate(0, target, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, target, hasNumber]);

  if (!hasNumber) return <span>{value}</span>;
  return (
    <span ref={ref} className="tabular-nums">
      {reduce ? target : n}
      {suffix}
    </span>
  );
}
