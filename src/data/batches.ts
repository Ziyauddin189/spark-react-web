import type { LucideIcon } from "lucide-react";
import { BookOpen, Brain, Code2, GraduationCap, Rocket, Sparkles, Target } from "lucide-react";

export type Batch = {
  code: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  featured?: boolean;
  // Optional practical details shown as chips on the card once filled in,
  // e.g. [{ label: "Timing", value: "Sun 10–12 AM" }, { label: "Fee", value: "₹—/month" }]
  details?: { label: string; value: string }[];
};

export const batches: Batch[] = [
  { code: "SSC / CBSE", title: "10th Grade Batch", desc: "Board mastery with concept-first foundations for SSC and CBSE learners.", icon: BookOpen },
  { code: "Skill-first", title: "Taleem-e-Hunar", desc: "Skills, values and craft — education that prepares life, not just marks.", icon: Sparkles },
  { code: "Jr. Inter", title: "Jr. Intermediate (MPC)", desc: "Rigorous MPC groundwork mapped to Board + competitive milestones.", icon: GraduationCap },
  { code: "Sr. Inter", title: "Sr. Intermediate (MPC)", desc: "Advanced MPC with EAPCET & JEE integration from day one.", icon: Target },
  { code: "EAPCET", title: "AP EAPCET Batch", desc: "Focused, timed, tactical preparation for the AP EAPCET.", icon: Rocket },
  { code: "JEE Mains", title: "IIT / JEE Mains", desc: "Engineering-track coaching with elite problem-solving frameworks.", icon: Brain },
  { code: "Career", title: "Software Training", desc: "Modern developer skills — real projects, real tools, real deployment.", icon: Code2, featured: true },
];
