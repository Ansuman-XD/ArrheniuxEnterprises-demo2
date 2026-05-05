import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Product, buildWaLink } from "@/data/catalog";

export const ProductCard = ({ product }: { product: Product }) => {
  const wa = buildWaLink(`Hi Arrheniux! I'm interested in: ${product.name} (${product.fabric}, MOQ ${product.moq}). Please share details.`);
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-[var(--shadow-card)]">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-secondary">
        <img src={product.image} alt={product.name} loading="lazy"
             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {product.isNew && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-neon px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
            ● New
          </span>
        )}
        <span className="absolute top-3 right-3 rounded-full bg-ink/90 backdrop-blur px-2.5 py-1 text-[10px] font-medium text-paper">
          MOQ {product.moq}
        </span>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link to={`/product/${product.id}`} className="font-display font-semibold leading-tight hover:underline">{product.name}</Link>
            <p className="mt-0.5 text-xs text-muted-foreground">{product.fabric} · {product.gsm}</p>
          </div>
          <Link to={`/product/${product.id}`} aria-label="View"
                className="rounded-full bg-secondary p-2 text-ink hover:bg-ink hover:text-paper transition">
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex -space-x-1">
            {product.colors.slice(0, 5).map((c, i) => (
              <span key={i} className="h-4 w-4 rounded-full border-2 border-card" style={{ background: c }} />
            ))}
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp/10 px-3 py-1.5 text-xs font-medium text-whatsapp hover:bg-whatsapp hover:text-white transition">
            <MessageCircle className="h-3.5 w-3.5" /> Order
          </a>
        </div>
      </div>
    </div>
  );
};
