import { Star } from "lucide-react";

const reviews = [
  { name: "Aman Patel", role: "Owner, Kafeyna Cafe", text: "Got 80 aprons & polos for our staff. Stitching quality is genuinely premium and turnaround was just 9 days. Highly recommended for any cafe owner.", rating: 5 },
  { name: "Priya Mohanty", role: "HR, PSAG Corp.", text: "Ordered 200+ embroidered polos for our annual event. Crisp embroidery, zero defects on inspection. Will definitely repeat.", rating: 5 },
  { name: "Rohit Behera", role: "Founder, Speh Clims", text: "Arrheniux helped us launch our streetwear drop with 240 GSM heavyweight tees. The fabric hand-feel rivals international brands.", rating: 5 },
  { name: "Shalini Das", role: "Principal, Sai Public School", text: "We've been getting our school uniforms made here for 2 years. Consistent fits, on-time delivery every single batch.", rating: 5 },
  { name: "Vikram S.", role: "Captain, Madras FC", text: "Custom jerseys with sublimation print — looks exactly like the digital mockup. Team loved them.", rating: 5 },
  { name: "Neha R.", role: "Brand Manager", text: "MOQ of just 20 was a lifesaver for our small launch. Professional, communicative, and the WhatsApp ordering flow is so easy.", rating: 5 },
];

export const Reviews = () => (
  <section className="container-x py-20 md:py-28">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div>
        <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Client Reactions</span>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter">
          What clients<br/> say about us.
        </h2>
      </div>
      <div className="flex items-center gap-4 rounded-3xl bg-card border border-border p-5">
        <div className="flex flex-col items-center">
          <p className="font-display text-4xl font-bold">4.9</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-neon text-neon" />)}
          </div>
        </div>
        <div>
          <p className="font-medium">Google Verified Reviews</p>
          <p className="text-xs text-muted-foreground">Based on 320+ ratings</p>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((r, i) => (
        <div key={i} className="rounded-3xl bg-card border border-border p-6 hover:shadow-[var(--shadow-soft)] transition">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-neon text-neon" />)}
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
          <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
            <div className="h-10 w-10 rounded-full bg-ink text-paper flex items-center justify-center font-display font-bold">
              {r.name[0]}
            </div>
            <div>
              <p className="font-medium text-sm">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
            <svg className="ml-auto h-5 w-5" viewBox="0 0 24 24" aria-label="Google">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </section>
);
