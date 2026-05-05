import factory1 from "@/assets/factory-1.jpg";
import factory2 from "@/assets/factory-2.jpg";

const stats = [
  { n: "5,000+", l: "Pieces / day capacity" },
  { n: "7-14", l: "Days turnaround" },
  { n: "100%", l: "QC inspected" },
  { n: "320+", l: "Brands served" },
];

export const FactorySection = () => (
  <section id="factory" className="bg-secondary py-20 md:py-28">
    <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-3 aspect-[4/5] rounded-3xl overflow-hidden">
          <img src={factory1} alt="Factory floor" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="col-span-2 grid gap-3">
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img src={factory2} alt="Sewing machine" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-square rounded-3xl bg-ink text-paper p-5 flex flex-col justify-between">
            <span className="text-xs uppercase tracking-wider text-paper/60">Est. 2026</span>
            <p className="font-display font-bold leading-tight">Our own factory in Bhubaneswar.</p>
          </div>
        </div>
      </div>
      <div>
        <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> The Factory</span>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter">
          Built in-house.<br/> Priced direct.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-md">
          We own the production line — from cutting to printing to packing. That means no middlemen,
          tighter quality control, and faster delivery for every order, big or small.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {stats.map(s => (
            <div key={s.l} className="rounded-2xl bg-card border border-border p-5">
              <p className="font-display text-3xl font-bold">{s.n}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
