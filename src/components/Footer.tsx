import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { buildWaLink, categories } from "@/data/catalog";
import logo from "@/assets/arrheniux-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Arrheniux" className="h-10 w-auto invert" />
            <span className="font-display text-xl font-bold">ARRHENIUX</span>
          </div>
          <p className="mt-4 text-sm text-paper/70 max-w-xs">
            Factory-direct custom apparel for brands, teams & businesses across India. Min. 20 pieces.
          </p>
          <a href={buildWaLink("Hi Arrheniux!")} target="_blank" rel="noopener noreferrer"
             className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-paper/60">Categories</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {categories.map(c => (
              <li key={c.slug}><Link to={`/category/${c.slug}`} className="text-paper/80 hover:text-neon">{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-paper/60">Support</h4>
          <ul className="mt-4 grid gap-2 text-sm text-paper/80">
            <li><a href="#" className="hover:text-neon">FAQs</a></li>
            <li><a href="#" className="hover:text-neon">Return Policy</a></li>
            <li><a href="#" className="hover:text-neon">Track Order</a></li>
            <li><a href="#" className="hover:text-neon">Privacy Policy</a></li>
            <li><Link to="/contact" className="hover:text-neon">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-paper/60">Reach Us</h4>
          <ul className="mt-4 grid gap-3 text-sm text-paper/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-neon" /> Niladri Vihar, Bhubaneswar, Odisha</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-neon" /> +91 82603 68742</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-neon" /> hello@arrheniux.com</li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-paper/20 p-2 hover:bg-paper/10"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-paper/20 p-2 hover:bg-paper/10"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-paper/20 p-2 hover:bg-paper/10"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-paper/50">
          <p>© 2026 Arrheniux Apparel. All rights reserved.</p>
          <p>Made in Bhubaneswar · Delivered Pan India</p>
        </div>
      </div>
      <div className="overflow-hidden">
        <h2 className="font-display font-bold text-[18vw] leading-[0.85] text-paper/5 text-center -mb-6 select-none">ARRHENIUX</h2>
      </div>
    </footer>
  );
};
