// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
//
// ⚠️  These are MOCK testimonials, written to show the design. Replace them with
// real words from real parents and students (with their permission) before you
// share the site publicly — parents trust reviews, and invented ones can backfire.
// When they're real, set `testimonialsAreMock` to false.
// ─────────────────────────────────────────────────────────────────────────────

export type Testimonial = {
  name: string;
  role: string; // e.g. "Parent · 10th Grade Batch"
  quote: string;
  photo?: string; // optional, e.g. "/testimonials/name.jpg" placed in /public
};

export const testimonialsAreMock = true;

export const testimonials: Testimonial[] = [
  {
    name: "Sameer R.",
    role: "Parent · 10th Grade Batch",
    quote:
      "My son used to memorize answers the night before exams. A few months of Sunday classes later, he was explaining concepts to us at the dinner table. That change in confidence is exactly what we hoped for.",
  },
  {
    name: "Ayesha F.",
    role: "Student · Jr. Intermediate (MPC)",
    quote:
      "Physics finally makes sense. Sir doesn't move on until everyone actually gets it, and I can ask my doubts live instead of waiting a whole week.",
  },
  {
    name: "Karthik N.",
    role: "Student · AP EAPCET Batch",
    quote:
      "The timed practice sessions changed how I approach the paper. I stopped panicking on tough questions and started managing my time properly.",
  },
  {
    name: "Fathima S.",
    role: "Parent · Taleem-e-Hunar",
    quote:
      "We wanted our daughter to learn values and real skills, not just marks. The programme gives her both, and she looks forward to every single class.",
  },
  {
    name: "Rahul V.",
    role: "Student · Software Training",
    quote:
      "I built and deployed my first real project here. Learning with actual tools instead of just theory made everything click.",
  },
];
