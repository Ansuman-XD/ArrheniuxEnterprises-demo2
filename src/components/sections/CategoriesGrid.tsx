import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/catalog";

export const CategoriesGrid = () => (
  <section id="categories" className="container-x py-20 md:py-28">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
      <div>
        <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Browse Categories</span>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter">
          Everything we<br/> stitch & print.
        </h2>
      </div>
      <p className="text-muted-foreground max-w-sm">
        12 production lines. From everyday tees to corporate uniforms — pick a category and explore.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((c, i) => (
        <Link key={c.slug} to={`/category/${c.slug}`}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-secondary border border-border">
          <img src={c.image} alt={c.name} loading="lazy"
               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0" />
          <div className="absolute top-3 left-3 chip bg-paper/90">{String(i+1).padStart(2,'0')}</div>
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-paper">{c.name}</h3>
              <p className="text-xs text-paper/70">{c.tagline}</p>
            </div>
            <span className="rounded-full bg-paper p-2 text-ink translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
