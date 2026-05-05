import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Truck, Factory, ShieldCheck, Sparkles } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import heroModel2 from "@/assets/hero-model-2.jpg";
import { buildWaLink } from "@/data/catalog";

export const Hero = () => {
  const wa = buildWaLink("Hi Arrheniux! I'd like to order in bulk. Please share your catalog.");
  return (
    <section className="relative overflow-hidden bg-paper grid-bg pt-6 pb-20 md:pb-28">
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 relative z-10">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Min. 20 Pieces · Factory Direct
            </span>
            <h1 className="mt-5 font-display text-[14vw] sm:text-7xl lg:text-[7.5rem] font-bold leading-[0.9] tracking-tighter text-balance">
              <span className="text-muted-foreground/40">[ ]</span>Custom<br/>
              Apparel,<br/>
              <span className="italic font-light">at scale.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              Arrheniux is your factory-direct partner for custom t-shirts, hoodies, polos, uniforms & more —
              built for brands, teams and businesses who care about quality.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#categories"
                 className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper hover:bg-ink/90 transition">
                Browse Catalog <ArrowRight className="h-4 w-4" />
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-medium text-white hover:opacity-90 transition">
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-neon" /> Pan-India Delivery</div>
              <div className="flex items-center gap-2"><Factory className="h-4 w-4 text-neon" /> Factory Direct</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-neon" /> Quality Assured</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-neon" /> Custom Branding</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary">
              <img src={heroModel} alt="Custom apparel" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block w-44 aspect-square rounded-3xl overflow-hidden border-4 border-paper shadow-[var(--shadow-card)]">
              <img src={heroModel2} alt="Custom jacket" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 flex flex-col items-end">
              <div className="flex gap-2">
                <span className="h-8 w-8 rounded-full bg-neon" />
                <span className="h-8 w-8 rounded-md bg-ink" />
              </div>
              <span className="mt-3 chip bg-paper">★ 320+ brands trust us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
