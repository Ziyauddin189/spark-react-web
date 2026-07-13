import { motion } from "framer-motion"

const sections = ["hero", "about", "academics", "batches", "approach", "founder", "contact"]

interface ScrollDotsProps {
  activeSection: string
}

export default function ScrollDots({ activeSection }: ScrollDotsProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {sections.map((section) => {
        const isActive = activeSection === section
        return (
          <a
            key={section}
            href={`#${section}`}
            aria-label={`Scroll to ${section}`}
            className="w-3 h-3 rounded-full relative flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-accent' : 'bg-foreground/20 group-hover:bg-foreground/40'}`} />
            {isActive && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 rounded-full border border-accent"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        )
      })}
    </div>
  )
}
