import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Package, Palette, Ruler, Sparkles } from "lucide-react";
import { buildWaLink } from "@/data/catalog";

export const CustomOrdersCTA = () => {
  const wa = buildWaLink("Hi Arrheniux! I'd like a custom order quote.");
  return (
    <section className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-ink text-paper p-8 md:p-14">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-neon/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1 text-xs uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Custom Orders
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter">
              Your brand,<br />
              <span className="text-neon">stitched to spec.</span>
            </h2>
            <p className="mt-5 text-paper/70 max-w-lg">
              Pick the fabric, the fit, the print and the packaging. Fill our quick brief and
              get a quote on WhatsApp in minutes. Minimum order 20 pieces.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/custom-orders"
                className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-ink hover:opacity-90 transition"
              >
                Start Custom Order <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-medium hover:bg-paper/5 transition"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Package, title: "Min 20 pcs", sub: "Bulk-only production" },
              { icon: Palette, title: "Any color", sub: "Pantone matching" },
              { icon: Ruler, title: "All sizes", sub: "XS to 5XL" },
              { icon: Sparkles, title: "Full branding", sub: "Print + tags + pack" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="rounded-2xl border border-paper/15 bg-paper/5 p-5">
                <Icon className="h-6 w-6 text-neon" />
                <p className="mt-4 font-semibold">{title}</p>
                <p className="text-xs text-paper/60">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
