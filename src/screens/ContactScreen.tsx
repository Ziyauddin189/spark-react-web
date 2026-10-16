import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { ArrowButton, ArrowLink } from "@/components/ui/arrow-link";
import Reveal from "@/components/landing/Reveal";
import SplitText from "@/components/landing/SplitText";
import { batches } from "@/data/batches";
import { SELECT_BATCH_EVENT, mapsLink, site, whatsappLink } from "@/lib/site";

const fieldClass =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 transition focus:border-ink focus:outline-none focus:ring-2 focus:ring-ember/30";
const labelClass = "mb-2 block text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft";

// "Say hi" finale (from the reference site) + the WhatsApp enquiry form and map.
export default function ContactScreen() {
  const [batch, setBatch] = useState("");

  // Batch cards preselect the batch here.
  useEffect(() => {
    const onSelect = (e: Event) => setBatch((e as CustomEvent<string>).detail);
    window.addEventListener(SELECT_BATCH_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_BATCH_EVENT, onSelect);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      "Hi Spark Academy, I'd like to enquire about a batch.",
      `Name: ${data.get("name")}`,
      `Class: ${data.get("grade")}`,
      `Phone: ${data.get("phone")}`,
      `Batch: ${batch || "Not sure yet"}`,
    ];
    const message = String(data.get("message") ?? "").trim();
    if (message) lines.push(`Message: ${message}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-paper px-4 pt-16 pb-16 md:px-8 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Say hi */}
        <div className="text-center">
          <h2 className="pb-[0.1em] text-[clamp(5rem,24vw,17rem)] font-medium leading-[0.9] tracking-[-0.025em] text-ink">
            <SplitText text="Say hi" by="char" stagger={0.07} />
            <motion.span
              aria-hidden="true"
              className="inline-block text-ember"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.55 }}
            >
              .
            </motion.span>
          </h2>
          <Reveal>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              We're always up for a chat. Send a message and we'll get back to you
              with batch timings and fees.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col justify-center gap-3 sm:flex-row">
              <ArrowLink href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="sm:min-w-52">
                WhatsApp us
              </ArrowLink>
              <ArrowLink href={site.phoneHref} variant="light" className="sm:min-w-52">
                Call {site.phoneDisplay}
              </ArrowLink>
            </div>
          </Reveal>
        </div>

        {/* Form + map */}
        <div className="mt-16 grid grid-cols-1 gap-3 md:mt-24 md:gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="grid h-full grid-cols-1 gap-5 rounded-2xl bg-surface p-5 sm:grid-cols-2 sm:p-8">
              <div className="sm:col-span-2">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-ink md:text-3xl">Enquire about a batch</h3>
                <p className="mt-1 text-[15px] text-ink-soft">Opens WhatsApp with your details filled in — just tap Send.</p>
              </div>
              <div>
                <label htmlFor="enq-name" className={labelClass}>Student name</label>
                <input id="enq-name" name="name" required autoComplete="name" placeholder="Full name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="enq-grade" className={labelClass}>Class</label>
                <input id="enq-grade" name="grade" required placeholder="e.g. 10th, Jr. Inter" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="enq-phone" className={labelClass}>Phone</label>
                <input
                  id="enq-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  pattern="[0-9+\s]{10,14}"
                  title="Enter a 10-digit mobile number"
                  placeholder="10-digit mobile"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="enq-batch" className={labelClass}>Batch</label>
                <select id="enq-batch" name="batch" value={batch} onChange={(e) => setBatch(e.target.value)} className={fieldClass}>
                  <option value="">Not sure yet</option>
                  {batches.map((b) => (
                    <option key={b.title} value={b.title}>{b.title}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="enq-message" className={labelClass}>Message (optional)</label>
                <textarea id="enq-message" name="message" rows={3} placeholder="Anything we should know?" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <ArrowButton type="submit" className="w-full sm:w-auto sm:min-w-64">Send enquiry</ArrowButton>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface">
              <iframe
                title={`Map of ${site.location}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)] lg:h-auto lg:min-h-64 lg:flex-1"
              />
              <ul className="divide-y divide-line px-5 sm:px-6">
                <li>
                  <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center gap-3 py-3 text-ink hover:text-ember-deep">
                    <MapPin className="h-5 w-5 flex-none" strokeWidth={1.5} />
                    <span className="flex-1">{site.location}</span>
                    <span className="text-[12px] uppercase tracking-[0.1em] text-ink-soft">Directions</span>
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="flex min-h-14 items-center gap-3 py-3 text-ink hover:text-ember-deep">
                    <Phone className="h-5 w-5 flex-none" strokeWidth={1.5} />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="flex min-h-14 items-center gap-3 py-3 text-ink hover:text-ember-deep">
                    <Mail className="h-5 w-5 flex-none" strokeWidth={1.5} />
                    <span className="[overflow-wrap:anywhere]">{site.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
