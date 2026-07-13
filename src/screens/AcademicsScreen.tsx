import { motion } from "framer-motion";
import { BookOpen, Trophy, Laptop } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AcademicsScreen() {
  const pillars = [
    {
      title: "Board Exams (State)",
      description: "State board curriculum comprehensively covered, keeping ahead in school standards.",
      icon: BookOpen,
    },
    {
      title: "Competitive Exams",
      description: "National level exam standards (JEE/NEET) prepared right from early stages.",
      icon: Trophy,
    },
    {
      title: "Jr. Intermediate (MPC)",
      description: "Rigorous groundwork targeting elite engineering colleges right from Inter.",
      icon: Laptop,
    },
  ];

  return (
    <section id="academics" className="w-full flex flex-col justify-center px-6 md:px-16 relative overflow-hidden py-24 bg-card/20 border-y border-white/5">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: false }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div variants={itemUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-4xl">
            Board exams.<br />
            Competitive exams.<br />
            Engineering foundation.
          </h2>
          <p className="text-base text-foreground/60 max-w-xl font-sans">
            Carefully curated paths that cater to different academic goals while ensuring a solid foundation across all sciences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={itemUp} className="h-full">
              <Card className="h-full bg-card/50 border border-border/20 hover:border-accent/40 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl font-sans font-semibold text-white mb-2">{pillar.title}</CardTitle>
                  <CardDescription className="text-sm text-foreground/60 leading-relaxed font-sans">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
