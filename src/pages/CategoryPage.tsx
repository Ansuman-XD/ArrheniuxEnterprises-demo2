import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory, getProductsByCategory } from "@/data/catalog";
import { ChevronRight } from "lucide-react";

const CategoryPage = () => {
  const { slug = "" } = useParams();
  const cat = getCategory(slug);
  const all = getProductsByCategory(slug);
  const fabrics = useMemo(() => Array.from(new Set(all.map(p => p.fabric))), [all]);
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? all.filter(p => p.fabric === filter) : all;

  if (!cat) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container-x py-32 text-center">
          <h1 className="font-display text-4xl font-bold">Category not found</h1>
          <Link to="/" className="mt-4 inline-block underline">Back home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-secondary border-b border-border">
          <div className="container-x py-12 md:py-16">
            <nav className="flex items-center gap-1 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-ink">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span>Categories</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-ink">{cat.name}</span>
            </nav>
            <div className="mt-6 grid md:grid-cols-2 gap-6 items-end">
              <div>
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">{cat.name}</h1>
                <p className="mt-3 text-muted-foreground">{cat.tagline} · MOQ from 20 pieces</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                <button onClick={() => setFilter(null)}
                  className={`pill ${!filter ? "bg-ink text-paper" : "bg-card !text-ink border border-border"}`}>
                  All ({all.length})
                </button>
                {fabrics.map(f => (
                  <button key={f} onClick={() => setFilter(f)}
                    className={`pill ${filter === f ? "bg-ink text-paper" : "bg-card !text-ink border border-border"}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-x py-12 md:py-16">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No products yet — chat with us on WhatsApp for custom requests.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </section>

        <section className="container-x pb-16">
          <h3 className="font-display text-2xl font-bold mb-4">Other categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.filter(c => c.slug !== slug).map(c => (
              <Link key={c.slug} to={`/category/${c.slug}`} className="pill bg-card !text-ink border border-border hover:bg-ink hover:!text-paper transition">
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CategoryPage;
