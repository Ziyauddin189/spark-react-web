import { motion } from "framer-motion";

// A field of short strokes that all lean toward one point — a "spark" bursting
// at the right, echoing the reference site's dashed backdrop.
const COLS = 32;
const ROWS = 9;
const focus = { x: COLS * 0.78, y: ROWS * 0.95 };
const strokes = Array.from({ length: COLS * ROWS }, (_, i) => {
  const x = i % COLS;
  const y = Math.floor(i / COLS);
  const angle = (Math.atan2(focus.y - y, focus.x - x) * 180) / Math.PI;
  const dist = Math.hypot(focus.x - x, focus.y - y);
  return { x, y, angle, hidden: dist < 1.6 };
});

function StrokeField() {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${COLS} ${ROWS}`}
      preserveAspectRatio="none"
      className="absolute inset-x-0 top-0 h-[55%] w-full text-ink/25"
    >
      {strokes.map((s, i) =>
        s.hidden ? null : (
          <line
            key={i}
            x1={s.x + 0.5 - 0.28}
            y1={s.y + 0.5}
            x2={s.x + 0.5 + 0.28}
            y2={s.y + 0.5}
            transform={`rotate(${s.angle} ${s.x + 0.5} ${s.y + 0.5})`}
            stroke="currentColor"
            strokeWidth={1.25}
            vectorEffect="non-scaling-stroke"
          />
        ),
      )}
    </svg>
  );
}

const lines = ["Rote learning out.", "Concepts in."];

export default function StatementScreen() {
  return (
    <section className="relative overflow-hidden bg-deep px-4 pt-40 pb-16 md:px-8 md:pt-64 md:pb-24">
      <StrokeField />
      <div className="relative mx-auto max-w-[1400px] text-right">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-[clamp(2.75rem,11vw,9.5rem)] font-medium leading-[0.95] tracking-[-0.025em] text-ink"
        >
          {lines.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                variants={{
                  hidden: { y: "105%" },
                  show: { y: 0, transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {i === 0 ? (
                  <>
                    Rote learning <span className="text-destructive line-through decoration-[0.06em]">out</span>.
                  </>
                ) : (
                  l
                )}
              </motion.span>
            </span>
          ))}
        </motion.p>
        <p className="ml-auto mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
          Making education engaging, practical and impactful — preparing students
          for the future, not just the next exam.
        </p>
      </div>
    </section>
  );
}
