import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const items = [
  { img: w1, client: "Lantiredce", tag: "Startup" },
  { img: w2, client: "Madras FC", tag: "Sports Team" },
  { img: w3, client: "Speh Clims", tag: "Streetwear Brand" },
  { img: w4, client: "Sai Public School", tag: "Education" },
  { img: w5, client: "Kafeyna Cafe", tag: "Hospitality" },
  { img: w6, client: "PSAG Corp.", tag: "Corporate" },
];

export const Gallery = () => (
  <section id="gallery" className="container-x py-20 md:py-28">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
      <div>
        <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Our Work</span>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter">
          Brands we've<br/> dressed.
        </h2>
      </div>
      <p className="text-muted-foreground max-w-sm">A small slice of 320+ orders shipped — from startups to schools, cafes to corporates.</p>
    </div>
    <div className="columns-2 md:columns-3 gap-4 [&>div]:mb-4">
      {items.map((it, i) => (
        <div key={i} className="relative break-inside-avoid overflow-hidden rounded-3xl group border border-border">
          <img src={it.img} alt={it.client} loading="lazy" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-paper opacity-0 group-hover:opacity-100 transition">
            <div>
              <p className="text-xs uppercase tracking-wider text-neon">{it.tag}</p>
              <p className="font-display font-bold">{it.client}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
