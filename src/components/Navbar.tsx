import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/arrheniux-logo.png";
import { buildWaLink, categories } from "@/data/catalog";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  const wa = buildWaLink("Hi Arrheniux! I'd like to place a bulk order.");

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Arrheniux" className="h-9 w-auto" />
          <span className="font-display text-lg font-bold tracking-tight">ARRHENIUX</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-ink" : "text-muted-foreground hover:text-ink"}>Home</NavLink>
          <div className="relative group">
            <button className="text-muted-foreground hover:text-ink">Categories</button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block">
              <div className="grid grid-cols-2 gap-1 w-[420px] rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)]">
                {categories.map(c => (
                  <Link key={c.slug} to={`/category/${c.slug}`} className="rounded-xl px-3 py-2 text-sm hover:bg-secondary">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <a href="/#how" className="text-muted-foreground hover:text-ink">How it Works</a>
          <a href="/#factory" className="text-muted-foreground hover:text-ink">Factory</a>
          <a href="/#gallery" className="text-muted-foreground hover:text-ink">Our Work</a>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-ink" : "text-muted-foreground hover:text-ink"}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-ink/90 transition">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button className="lg:hidden rounded-full border border-border p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-paper">
          <div className="container-x py-4 grid gap-1">
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-secondary">Home</Link>
            <details className="group">
              <summary className="px-3 py-2 rounded-lg hover:bg-secondary list-none cursor-pointer flex items-center justify-between">
                Categories <span className="text-xs">+</span>
              </summary>
              <div className="pl-4 grid">
                {categories.map(c => (
                  <Link key={c.slug} to={`/category/${c.slug}`} className="px-3 py-2 text-sm text-muted-foreground hover:text-ink">{c.name}</Link>
                ))}
              </div>
            </details>
            <a href="/#how" className="px-3 py-2 rounded-lg hover:bg-secondary">How it Works</a>
            <a href="/#factory" className="px-3 py-2 rounded-lg hover:bg-secondary">Factory</a>
            <a href="/#gallery" className="px-3 py-2 rounded-lg hover:bg-secondary">Our Work</a>
            <Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-secondary">Contact</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer"
               className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-white">
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
