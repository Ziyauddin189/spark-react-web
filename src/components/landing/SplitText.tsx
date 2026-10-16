import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Reveals text word-by-word (or letter-by-letter) as it scrolls into view,
// each piece rising out of its own mask. Screen readers get the plain text.
export default function SplitText({
  text,
  by = "word",
  delay = 0,
  stagger,
}: {
  text: string;
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
}) {
  const pieces = by === "word" ? text.split(" ") : [...text];
  const step = stagger ?? (by === "word" ? 0.06 : 0.035);

  // The in-view trigger lives on the outer wrapper: each piece starts hidden
  // inside its own clipping mask, where the browser may never report it as visible.
  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {pieces.map((p, i) => (
          <span key={i}>
            <span className="inline-block overflow-hidden pb-[0.24em] align-bottom -mb-[0.24em]">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "110%", rotate: 4 },
                  show: { y: 0, rotate: 0, transition: { duration: 0.8, delay: delay + i * step, ease } },
                }}
              >
                {p === " " ? "\u00a0" : p}
              </motion.span>
            </span>
            {by === "word" && i < pieces.length - 1 ? " " : null}
          </span>
        ))}
      </motion.span>
    </>
  );
}
