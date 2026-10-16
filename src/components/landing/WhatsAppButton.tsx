import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi Spark Academy, I'd like to know more about your batches.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Spark Academy on WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#062b16] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2fe074] md:bottom-6 md:right-6 md:px-5"
    >
      <MessageCircle className="h-6 w-6 md:h-5 md:w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
