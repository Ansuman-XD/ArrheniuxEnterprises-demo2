import { MousePointerClick, Palette, CheckCircle2, Truck } from "lucide-react";

const steps = [
  { i: "01", icon: MousePointerClick, title: "Choose", desc: "Pick a product from our catalog or share your own design idea." },
  { i: "02", icon: Palette, title: "Customize", desc: "Select fabric, color, sizes & branding (logo, print, embroidery)." },
  { i: "03", icon: CheckCircle2, title: "Confirm", desc: "Approve sample / mock-up & confirm order on WhatsApp." },
  { i: "04", icon: Truck, title: "Deliver", desc: "Production in 7–14 days, delivered pan-India to your doorstep." },
];

export const HowItWorks = () => (
  <section id="how" className="container-x py-20 md:py-28">
    <div className="text-center mb-14">
      <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Process</span>
      <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter">How it works.</h2>
      <p className="mt-3 text-muted-foreground max-w-xl mx-auto">From idea to doorstep in 4 simple steps. No middlemen, no markup.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <div key={s.i} className="relative rounded-3xl border border-border bg-card p-6 hover:bg-ink hover:text-paper transition group">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-muted-foreground group-hover:text-paper/60">{s.i} / 04</span>
              <Icon className="h-6 w-6 text-ink group-hover:text-neon transition" />
            </div>
            <h3 className="mt-12 font-display text-2xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground group-hover:text-paper/70">{s.desc}</p>
          </div>
        );
      })}
    </div>
  </section>
);
