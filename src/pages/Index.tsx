import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { CategoriesGrid } from "@/components/sections/CategoriesGrid";
import { Releases } from "@/components/sections/Releases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Gallery } from "@/components/sections/Gallery";
import { FactorySection } from "@/components/sections/FactorySection";
import { Reviews } from "@/components/sections/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CategoriesGrid />
        <Releases />
        <HowItWorks />
        <Gallery />
        <FactorySection />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
