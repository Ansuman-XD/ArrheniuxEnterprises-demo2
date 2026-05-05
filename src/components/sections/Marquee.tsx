const logos = ["HSBC", "TATA", "Reliance", "Infosys", "Wipro", "Zomato", "Swiggy", "Paytm"];

export const Marquee = () => (
  <section className="bg-ink text-paper py-5 overflow-hidden border-y border-ink">
    <div className="flex w-max animate-marquee gap-16 px-8">
      {[...logos, ...logos, ...logos].map((l, i) => (
        <span key={i} className="font-display text-xl font-bold opacity-70 whitespace-nowrap">
          {l} <span className="text-neon mx-2">●</span>
        </span>
      ))}
    </div>
  </section>
);
