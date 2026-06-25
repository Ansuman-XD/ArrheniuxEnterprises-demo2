import { useState } from "react";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { buildWaLink, categories } from "@/data/catalog";
import { MessageCircle, Package, Palette, Ruler, Sparkles } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  productType: z.string().min(1, "Select a product"),
  fabric: z.string().max(80).optional().or(z.literal("")),
  gsm: z.string().max(20).optional().or(z.literal("")),
  colors: z.string().max(120).optional().or(z.literal("")),
  sizes: z.string().max(120).optional().or(z.literal("")),
  quantity: z.coerce.number().min(20, "Minimum order is 20 pieces").max(100000),
  printing: z.array(z.string()).optional(),
  deadline: z.string().max(40).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  notes: z.string().max(800).optional().or(z.literal("")),
});

const printingOptions = [
  "Screen Printing",
  "DTF Printing",
  "Sublimation",
  "Embroidery",
  "Heat Transfer",
  "Custom Tags & Labels",
  "Custom Packaging",
];

const fabricOptions = ["Cotton", "Polycotton", "Polyester", "Drifit / Sports", "Fleece", "Canvas", "Other"];

const CustomOrdersPage = () => {
  const [printing, setPrinting] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const togglePrint = (p: string) =>
    setPrinting((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, printing };

    const result = schema.safeParse(payload);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const v = result.data;
    const lines = [
      "*Custom Order Quote Request — Arrheniux*",
      "",
      `*Name:* ${v.name}`,
      v.organization ? `*Organization:* ${v.organization}` : null,
      `*Phone:* ${v.phone}`,
      v.email ? `*Email:* ${v.email}` : null,
      v.city ? `*City:* ${v.city}` : null,
      "",
      "*Order Details*",
      `• Product: ${v.productType}`,
      v.fabric ? `• Fabric: ${v.fabric}` : null,
      v.gsm ? `• GSM: ${v.gsm}` : null,
      v.colors ? `• Colors: ${v.colors}` : null,
      v.sizes ? `• Sizes: ${v.sizes}` : null,
      `• Quantity: ${v.quantity} pcs`,
      printing.length ? `• Printing/Branding: ${printing.join(", ")}` : null,
      v.deadline ? `• Deadline: ${v.deadline}` : null,
      v.budget ? `• Budget: ${v.budget}` : null,
      "",
      v.notes ? `*Additional Notes:*\n${v.notes}` : null,
      "",
      "Please share a quote. Thank you!",
    ].filter(Boolean);

    const url = buildWaLink(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your quote request");
    setTimeout(() => setSubmitting(false), 600);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ink text-paper">
          <div className="container-x py-20 md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1 text-xs uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Custom Orders
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
              Build your own <span className="text-neon">custom apparel</span> order.
            </h1>
            <p className="mt-5 text-paper/70 max-w-2xl">
              Tell us what you need — fabric, fits, prints, branding. Hit send and your full
              brief lands in our WhatsApp with a quote on the way. Minimum 20 pieces.
            </p>
            <div className="mt-8 grid sm:grid-cols-4 gap-3 max-w-3xl">
              {[
                { icon: Package, label: "Min 20 pcs" },
                { icon: Palette, label: "Any color" },
                { icon: Ruler, label: "All sizes" },
                { icon: Sparkles, label: "Logo + branding" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-paper/15 bg-paper/5 px-3 py-2 text-sm">
                  <Icon className="h-4 w-4 text-neon" /> {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="container-x py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Your details</h2>
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                <Field label="Full Name *" name="name" placeholder="John Doe" />
                <Field label="Organization" name="organization" placeholder="Company / Club / NGO" />
                <Field label="Phone / WhatsApp *" name="phone" placeholder="+91 9XXXXXXXXX" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                <Field label="City" name="city" placeholder="Bhubaneswar" />
              </div>

              <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">Order details</h2>
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                <Select label="Product Type *" name="productType" options={["Select a product", ...categories.map(c => c.name), "Other"]} />
                <Select label="Fabric" name="fabric" options={["Select fabric", ...fabricOptions]} />
                <Field label="GSM" name="gsm" placeholder="e.g. 180" />
                <Field label="Colors" name="colors" placeholder="e.g. Black, White, Maroon" />
                <Field label="Size Breakdown" name="sizes" placeholder="e.g. S-10, M-20, L-15, XL-5" />
                <Field label="Quantity *" name="quantity" type="number" min={20} placeholder="20" />
                <Field label="Deadline" name="deadline" placeholder="e.g. 12 July 2026" />
                <Field label="Budget (₹ per piece)" name="budget" placeholder="Optional" />
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium mb-3">Printing & Branding</p>
                <div className="flex flex-wrap gap-2">
                  {printingOptions.map((p) => {
                    const active = printing.includes(p);
                    return (
                      <button
                        type="button"
                        key={p}
                        onClick={() => togglePrint(p)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          active
                            ? "bg-ink text-paper border-ink"
                            : "border-border text-muted-foreground hover:text-ink hover:border-ink/40"
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                <label className="text-sm font-medium">Additional Notes</label>
                <textarea
                  name="notes"
                  rows={4}
                  maxLength={800}
                  placeholder="Anything else we should know? Reference designs, special requests, packaging..."
                  className="mt-2 w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white hover:bg-whatsapp/90 transition disabled:opacity-60"
              >
                <MessageCircle className="h-4 w-4" />
                {submitting ? "Opening WhatsApp..." : "Send Quote Request"}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Clicking send opens WhatsApp with your full order details pre-filled.
              </p>
            </form>

            <aside className="space-y-4">
              <div className="rounded-3xl border border-border bg-secondary p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">How it works</p>
                <ol className="mt-4 space-y-4 text-sm">
                  {[
                    "Fill the form with your requirements.",
                    "Click Send Quote Request — opens WhatsApp.",
                    "We share a quote, samples & timelines.",
                    "Approve, pay advance, we produce & ship.",
                  ].map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="h-6 w-6 shrink-0 rounded-full bg-ink text-paper text-xs flex items-center justify-center font-semibold">{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6">
                <p className="font-display text-xl font-bold">Need help?</p>
                <p className="mt-2 text-sm text-muted-foreground">Chat with us directly — we usually reply within minutes.</p>
                <a
                  href={buildWaLink("Hi Arrheniux! I need help with a custom order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

const Field = ({ label, name, type = "text", placeholder, min }: { label: string; name: string; type?: string; placeholder?: string; min?: number }) => (
  <label className="block">
    <span className="text-sm font-medium">{label}</span>
    <input
      name={name}
      type={type}
      min={min}
      placeholder={placeholder}
      className="mt-2 w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
    />
  </label>
);

const Select = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
  <label className="block">
    <span className="text-sm font-medium">{label}</span>
    <select
      name={name}
      defaultValue={options[0]}
      className="mt-2 w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
    >
      {options.map((o, i) => (
        <option key={o} value={i === 0 ? "" : o} disabled={i === 0}>{o}</option>
      ))}
    </select>
  </label>
);

export default CustomOrdersPage;
