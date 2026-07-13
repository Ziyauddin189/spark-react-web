import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Code2, GraduationCap, Rocket, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const batches = [
  { code: "SSC / CBSE", title: "10th Grade Batch", desc: "Board mastery with concept-first foundations for SSC and CBSE learners.", icon: BookOpen },
  { code: "Skill-first", title: "Taleem-e-Hunar", desc: "Skills, values and craft — education that prepares life, not just marks.", icon: Sparkles },
  { code: "Jr. Inter", title: "Jr. Intermediate (MPC)", desc: "Rigorous MPC groundwork mapped to Board + competitive milestones.", icon: GraduationCap },
  { code: "Sr. Inter", title: "Sr. Intermediate (MPC)", desc: "Advanced MPC with EAPCET & JEE integration from day one.", icon: Target },
  { code: "EAPCET", title: "AP EAPCET Batch", desc: "Focused, timed, tactical preparation for the AP EAPCET.", icon: Rocket },
  { code: "JEE Mains", title: "IIT / JEE Mains", desc: "Engineering-track coaching with elite problem-solving frameworks.", icon: Brain },
  { code: "Career", title: "Software Training", desc: "Modern developer skills — real projects, real tools, real deployment.", icon: Code2 },
];

export default function BatchesScreen() {
  return (
    <section id="batches" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.24em] text-ember">Academics</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Board exams. Competitive exams. Engineering foundation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              One curriculum spine, seven focused batches. Each is designed to
              blend rigor with real understanding.
            </p>
          </div>
          <a href="#contact" className="hidden md:block">
            <Button variant="ghost" className="group rounded-full text-foreground">
              Talk to us
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-ember/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/70">
                    {b.code}
                  </span>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-ember/15 to-azure/15 text-ember transition group-hover:from-ember group-hover:to-azure group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-8 font-display text-2xl font-semibold leading-snug text-foreground">{b.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground">
                  Enroll <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
