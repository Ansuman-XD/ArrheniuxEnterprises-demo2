import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { buildWaLink } from "@/data/catalog";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Arrheniux! New enquiry:
- Name: ${name}
- Company: ${company}
- Phone: ${phone}
- Details: ${details}`;
    window.open(buildWaLink(msg), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="container-x py-16 md:py-20">
          <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Contact</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tighter">
            Let's make<br/> something.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Tell us what you need — t-shirts, uniforms, merch — and we'll get back within 24 hours
            with a quote, samples and timeline.
          </p>
        </section>

        <section className="container-x grid lg:grid-cols-2 gap-8 pb-16">
          <div className="space-y-4">
            <a href="https://maps.app.goo.gl/oh4CuRvus1gfH4D49" target="_blank" rel="noopener noreferrer"
               className="block rounded-3xl bg-card border border-border p-6 hover:border-ink transition">
              <MapPin className="h-6 w-6 text-neon" />
              <p className="mt-3 font-display font-bold text-lg">Visit our Factory</p>
              <p className="text-sm text-muted-foreground mt-1">Niladri Vihar, Bhubaneswar, Odisha — India</p>
              <p className="mt-3 text-xs font-medium underline">Open in Google Maps →</p>
            </a>
            <a href={buildWaLink("Hi Arrheniux!")} target="_blank" rel="noopener noreferrer"
               className="block rounded-3xl bg-whatsapp text-white p-6 hover:opacity-90 transition">
              <MessageCircle className="h-6 w-6" />
              <p className="mt-3 font-display font-bold text-lg">WhatsApp · Fastest reply</p>
              <p className="text-sm opacity-90 mt-1">+91 82603 68742</p>
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+918260368742" className="rounded-3xl bg-card border border-border p-6">
                <Phone className="h-5 w-5 text-neon" />
                <p className="mt-3 font-medium">Call</p>
                <p className="text-xs text-muted-foreground">+91 82603 68742</p>
              </a>
              <a href="mailto:hello@arrheniux.com" className="rounded-3xl bg-card border border-border p-6">
                <Mail className="h-5 w-5 text-neon" />
                <p className="mt-3 font-medium">Email</p>
                <p className="text-xs text-muted-foreground">hello@arrheniux.com</p>
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border aspect-video">
              <iframe
                title="Arrheniux Location"
                src="https://www.google.com/maps?q=Niladri+Vihar+Bhubaneswar&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl bg-ink text-paper p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold">Quick inquiry</h2>
            <p className="text-sm text-paper/70 mt-1">We'll send your enquiry over WhatsApp.</p>
            <div className="mt-6 grid gap-4">
              <input required placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}
                className="bg-paper/10 rounded-xl px-4 py-3 outline-none border border-paper/10 focus:border-neon" />
              <input placeholder="Company / Brand" value={company} onChange={e=>setCompany(e.target.value)}
                className="bg-paper/10 rounded-xl px-4 py-3 outline-none border border-paper/10 focus:border-neon" />
              <input required placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)}
                className="bg-paper/10 rounded-xl px-4 py-3 outline-none border border-paper/10 focus:border-neon" />
              <textarea required rows={4} placeholder="Tell us what you need (product, quantity, branding…)"
                value={details} onChange={e=>setDetails(e.target.value)}
                className="bg-paper/10 rounded-xl px-4 py-3 outline-none border border-paper/10 focus:border-neon resize-none" />
              <button type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3.5 text-sm font-bold text-ink hover:opacity-90 transition">
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContactPage;
