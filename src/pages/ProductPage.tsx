import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { buildWaLink, getProductById, getCategory } from "@/data/catalog";
import { ChevronRight, MessageCircle, Minus, Plus, Truck, ShieldCheck, Factory } from "lucide-react";

const customizations = [
  "Logo Print (Front)",
  "Logo Print (Back)",
  "Embroidery",
  "Sleeve Branding",
  "Custom Tag / Label",
  "Custom Packaging",
];

const ProductPage = () => {
  const { id = "" } = useParams();
  const product = getProductById(id);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(0);
  const [qty, setQty] = useState(product?.moq ?? 20);
  const [opts, setOpts] = useState<string[]>([]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container-x py-32 text-center">
          <h1 className="font-display text-4xl font-bold">Product not found</h1>
          <Link to="/" className="mt-4 inline-block underline">Back home</Link>
        </main>
        <Footer />
      </div>
    );
  }
  const cat = getCategory(product.category);
  const toggle = (o: string) => setOpts(opts.includes(o) ? opts.filter(x => x !== o) : [...opts, o]);

  const message = `Hi Arrheniux! I'd like to order:
*${product.name}*
- Fabric: ${product.fabric} (${product.gsm})
- Color: ${product.colors[color]}
- Size: ${product.sizes[size]}
- Quantity: ${qty} pieces
${opts.length ? `- Customization: ${opts.join(", ")}` : ""}

Please share the quote.`;
  const wa = buildWaLink(message);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <div className="container-x py-8">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/category/${product.category}`} className="hover:text-ink">{cat?.name}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        <section className="container-x grid lg:grid-cols-2 gap-10 pb-16">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-secondary border border-border">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div>
            {product.isNew && <span className="chip bg-neon !text-ink border-transparent">● New Arrival</span>}
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">{product.name}</h1>
            <p className="mt-2 text-muted-foreground">
              {product.fabric} · <span className="font-mono text-foreground">{product.gsm}</span> · MOQ {product.moq} pcs
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium mb-2">Color · <span className="text-muted-foreground">{product.colors[color]}</span></p>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <button key={i} onClick={() => setColor(i)}
                      className={`h-9 w-9 rounded-full border-2 transition ${color === i ? "border-ink scale-110" : "border-border"}`}
                      style={{ background: c }} aria-label={c} />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s, i) => (
                    <button key={s} onClick={() => setSize(i)}
                      className={`min-w-[3rem] rounded-xl border px-4 py-2 text-sm font-medium transition ${size === i ? "bg-ink text-paper border-ink" : "border-border hover:border-ink"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Quantity <span className="text-muted-foreground">(min {product.moq})</span></p>
                <div className="inline-flex items-center rounded-2xl border border-border overflow-hidden">
                  <button onClick={() => setQty(Math.max(product.moq, qty - 5))} className="p-3 hover:bg-secondary"><Minus className="h-4 w-4" /></button>
                  <input type="number" value={qty} min={product.moq}
                    onChange={(e) => setQty(Math.max(product.moq, +e.target.value || product.moq))}
                    className="w-20 text-center font-display text-lg font-bold bg-transparent outline-none" />
                  <button onClick={() => setQty(qty + 5)} className="p-3 hover:bg-secondary"><Plus className="h-4 w-4" /></button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Customization <span className="text-muted-foreground">(optional)</span></p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {customizations.map(o => (
                    <label key={o} className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm cursor-pointer transition ${opts.includes(o) ? "border-ink bg-secondary" : "border-border"}`}>
                      <input type="checkbox" checked={opts.includes(o)} onChange={() => toggle(o)} className="accent-ink" />
                      {o}
                    </label>
                  ))}
                </div>
              </div>

              <a href={wa} target="_blank" rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-medium text-white hover:opacity-90 transition">
                <MessageCircle className="h-5 w-5" /> Order on WhatsApp
              </a>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                <div className="flex flex-col items-center text-center gap-1"><Truck className="h-5 w-5 text-neon" /><p className="text-xs text-muted-foreground">Pan-India</p></div>
                <div className="flex flex-col items-center text-center gap-1"><Factory className="h-5 w-5 text-neon" /><p className="text-xs text-muted-foreground">Factory Direct</p></div>
                <div className="flex flex-col items-center text-center gap-1"><ShieldCheck className="h-5 w-5 text-neon" /><p className="text-xs text-muted-foreground">QC Approved</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductPage;
