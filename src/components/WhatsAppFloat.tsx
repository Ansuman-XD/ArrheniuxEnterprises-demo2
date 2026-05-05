import { MessageCircle } from "lucide-react";
import { buildWaLink } from "@/data/catalog";

export const WhatsAppFloat = () => {
  const msg = "Hi Arrheniux! I'd like to enquire about bulk apparel orders.";
  return (
    <a
      href={buildWaLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-pulse-ring" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-5px_hsl(var(--whatsapp)/0.6)] transition-transform group-hover:scale-110">
        <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      </span>
    </a>
  );
};
