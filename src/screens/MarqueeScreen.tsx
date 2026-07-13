import { Sparkles } from "lucide-react";

export default function MarqueeScreen() {
  const items = [
    "Board Exams",
    "EAPCET",
    "JEE Mains",
    "Software Training",
    "Live Sundays",
    "Concept First",
    "Engineering Foundation",
    "Taleem-e-Hunar",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink-deep/10 bg-ink-deep py-5 text-cream mt-4">
      <div className="flex animate-[marquee_28s_linear_infinite] gap-12 whitespace-nowrap">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-2xl tracking-tight md:text-3xl">
            <span>{t}</span>
            <Sparkles className="h-4 w-4 text-ember" />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
