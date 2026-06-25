import { ProductCard } from "@/components/ProductCard";
import { newProducts } from "@/data/catalog";
import { CustomOrdersCTA } from "@/components/sections/CustomOrdersCTA";

export const Releases = () => (
  <>
    <section className="bg-ink text-paper py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1 text-xs uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" /> New Releases
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter">
              Just dropped<br/>
              <span className="text-neon">this season.</span>
            </h2>
          </div>
          <p className="text-paper/70 max-w-sm">Fresh fabrics, fresh fits — slide through the latest additions to our blank canvas.</p>
        </div>
        <div className="-mx-5 px-5 md:mx-0 md:px-0 overflow-x-auto pb-4 scroll-smooth snap-x">
          <div className="flex gap-4 md:grid md:grid-cols-4 md:gap-6">
            {newProducts.slice(0, 8).map(p => (
              <div key={p.id} className="w-72 md:w-auto shrink-0 snap-start [&>div]:bg-paper [&>div]:border-paper/10">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="container-x py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Latest Collection</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter">Newly featured.</h2>
        </div>
        <p className="text-muted-foreground max-w-sm">Hand-picked best sellers across all our production lines.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  </>
);
