import tshirt from "@/assets/cat-tshirt.jpg";
import hoodie from "@/assets/cat-hoodie.jpg";
import polo from "@/assets/cat-polo.jpg";
import jacket from "@/assets/cat-jacket.jpg";
import pants from "@/assets/cat-pants.jpg";
import sweatshirt from "@/assets/cat-sweatshirt.jpg";
import cap from "@/assets/cat-cap.jpg";
import tote from "@/assets/cat-tote.jpg";
import apron from "@/assets/cat-apron.jpg";
import shorts from "@/assets/cat-shorts.jpg";
import corporate from "@/assets/cat-corporate.jpg";
import uniform from "@/assets/cat-uniform.jpg";

export const WHATSAPP_NUMBER = "918260368742";

export const buildWaLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export type Category = {
  slug: string;
  name: string;
  image: string;
  tagline: string;
};

export const categories: Category[] = [
  { slug: "t-shirts", name: "T-Shirts", image: tshirt, tagline: "Oversized · Roundneck · Corporate · Event" },
  { slug: "polos", name: "Polo Shirts", image: polo, tagline: "Cotton · Drifit · Event · Conference" },
  { slug: "jerseys", name: "Jerseys", image: sweatshirt, tagline: "All-Over Print · Front · Jersifit" },
  { slug: "hoodies", name: "Hoodies", image: hoodie, tagline: "Blended · American Fleece · Cotton" },
  { slug: "sweatshirts", name: "Sweatshirts", image: sweatshirt, tagline: "Crewneck · Loop knit" },
  { slug: "jackets", name: "Jackets", image: jacket, tagline: "Bomber · Windcheater" },
  { slug: "pants", name: "Pants & Trousers", image: pants, tagline: "Cargo · Chinos · Joggers" },
  { slug: "shorts", name: "Shorts", image: shorts, tagline: "Cotton · Dri-fit · Athletic" },
  { slug: "safety", name: "Safety & Workwear", image: uniform, tagline: "Safety Jacket · Goggles" },
  { slug: "bags", name: "Bags", image: tote, tagline: "Conference Backpack · Canvas Tote" },
  { slug: "aprons", name: "Aprons", image: apron, tagline: "University · Nurse · Medical" },
  { slug: "caps", name: "Caps & Headwear", image: cap, tagline: "Baseball · Snapback · Bucket" },
  { slug: "corporate", name: "Corporate Wear", image: corporate, tagline: "Polo · Shirt · Embroidery" },
  { slug: "uniforms", name: "School & Institutional", image: uniform, tagline: "School · Hospital · Hotel" },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  fabric: string;
  gsm: string;
  moq: number;
  colors: string[];
  sizes: string[];
  image: string;
  isNew?: boolean;
};

const seed: Omit<Product, "id">[] = [
  // T-SHIRTS
  { name: "Cotton Oversized Tee", category: "t-shirts", fabric: "100% Cotton", gsm: "240 GSM", moq: 20, colors: ["#000","#fff","#1f2937","#78350f"], sizes: ["S","M","L","XL","XXL"], image: tshirt, isNew: true },
  { name: "Polycotton Oversized Tee", category: "t-shirts", fabric: "Polycotton Blend", gsm: "220 GSM", moq: 20, colors: ["#000","#fff","#737373"], sizes: ["S","M","L","XL","XXL"], image: tshirt },
  { name: "Cotton Roundneck Tee", category: "t-shirts", fabric: "100% Cotton Bio-Wash", gsm: "180 GSM", moq: 20, colors: ["#000","#fff","#dc2626","#1e3a8a","#f59e0b"], sizes: ["S","M","L","XL","XXL"], image: tshirt },
  { name: "Corporate Polyester Roundneck", category: "t-shirts", fabric: "100% Polyester", gsm: "160 GSM", moq: 20, colors: ["#000","#1e3a8a","#fff","#dc2626"], sizes: ["S","M","L","XL","XXL"], image: tshirt },
  { name: "Event White Roundneck", category: "t-shirts", fabric: "Cotton / Polyester", gsm: "160 GSM", moq: 20, colors: ["#fff"], sizes: ["S","M","L","XL","XXL"], image: tshirt },
  { name: "College T-Shirt", category: "t-shirts", fabric: "Combed Cotton", gsm: "180 GSM", moq: 20, colors: ["#000","#fff","#dc2626","#1e3a8a","#16a34a"], sizes: ["S","M","L","XL"], image: tshirt },
  { name: "Gym T-Shirt", category: "t-shirts", fabric: "Polyester Dri-Fit", gsm: "150 GSM", moq: 20, colors: ["#000","#737373","#dc2626"], sizes: ["S","M","L","XL"], image: tshirt, isNew: true },
  { name: "Blended T-Shirt", category: "t-shirts", fabric: "Cotton-Poly Blend", gsm: "180 GSM", moq: 20, colors: ["#000","#fff","#1f2937","#737373"], sizes: ["S","M","L","XL","XXL"], image: tshirt },

  // POLOS
  { name: "Cotton Polo", category: "polos", fabric: "Cotton Pique", gsm: "200 GSM", moq: 20, colors: ["#000","#fff","#1e3a8a","#dc2626"], sizes: ["S","M","L","XL","XXL"], image: polo, isNew: true },
  { name: "Drifit SAP Matty Polo", category: "polos", fabric: "Polyester Matty", gsm: "160 GSM", moq: 20, colors: ["#000","#1e3a8a","#16a34a"], sizes: ["S","M","L","XL","XXL"], image: polo },
  { name: "Blended Polo", category: "polos", fabric: "Cotton-Poly Pique", gsm: "190 GSM", moq: 20, colors: ["#000","#fff","#737373"], sizes: ["S","M","L","XL"], image: polo },
  { name: "Event Polo", category: "polos", fabric: "Honeycomb Pique", gsm: "180 GSM", moq: 20, colors: ["#fff","#000","#dc2626","#1e3a8a"], sizes: ["S","M","L","XL","XXL"], image: polo },
  { name: "Low Budget Polo", category: "polos", fabric: "PC Matty", gsm: "150 GSM", moq: 20, colors: ["#000","#fff","#737373","#1e3a8a"], sizes: ["S","M","L","XL"], image: polo },
  { name: "Petrol Pump Polo", category: "polos", fabric: "Polyester Matty", gsm: "160 GSM", moq: 25, colors: ["#dc2626","#000","#f59e0b"], sizes: ["S","M","L","XL","XXL"], image: polo },
  { name: "Marketing Polo", category: "polos", fabric: "Cotton Pique", gsm: "200 GSM", moq: 25, colors: ["#000","#fff","#1e3a8a"], sizes: ["S","M","L","XL"], image: polo },
  { name: "NGO Polo", category: "polos", fabric: "Cotton Pique", gsm: "180 GSM", moq: 25, colors: ["#16a34a","#fff","#1e3a8a"], sizes: ["S","M","L","XL","XXL"], image: polo },
  { name: "Festival Group Polo", category: "polos", fabric: "Polyester Matty", gsm: "160 GSM", moq: 25, colors: ["#dc2626","#f59e0b","#16a34a","#1e3a8a"], sizes: ["S","M","L","XL"], image: polo },
  { name: "Conference Polo", category: "polos", fabric: "Premium Cotton Pique", gsm: "210 GSM", moq: 25, colors: ["#000","#fff","#1e3a8a","#737373"], sizes: ["S","M","L","XL","XXL"], image: polo, isNew: true },
  { name: "Cut & Sew Polo", category: "polos", fabric: "Cotton Pique", gsm: "200 GSM", moq: 30, colors: ["#000","#fff","#dc2626","#1e3a8a"], sizes: ["S","M","L","XL","XXL"], image: polo },

  // JERSEYS
  { name: "All Over Printed Jersey", category: "jerseys", fabric: "Sublimation Polyester", gsm: "160 GSM", moq: 20, colors: ["#000","#dc2626","#1e3a8a","#16a34a"], sizes: ["S","M","L","XL","XXL"], image: sweatshirt, isNew: true },
  { name: "Front Printed Jersey", category: "jerseys", fabric: "Dri-Fit Polyester", gsm: "150 GSM", moq: 20, colors: ["#000","#fff","#dc2626"], sizes: ["S","M","L","XL","XXL"], image: sweatshirt },
  { name: "Front & Back Printed Jersey", category: "jerseys", fabric: "Dri-Fit Polyester", gsm: "150 GSM", moq: 20, colors: ["#1e3a8a","#000","#16a34a"], sizes: ["S","M","L","XL","XXL"], image: sweatshirt },
  { name: "Jersifit", category: "jerseys", fabric: "Premium Dri-Fit", gsm: "170 GSM", moq: 20, colors: ["#000","#dc2626","#1e3a8a"], sizes: ["S","M","L","XL","XXL"], image: sweatshirt },

  // HOODIES
  { name: "Blended Hoodies", category: "hoodies", fabric: "Cotton-Poly Fleece", gsm: "300 GSM", moq: 25, colors: ["#1f2937","#000","#737373","#78350f"], sizes: ["S","M","L","XL","XXL"], image: hoodie, isNew: true },
  { name: "American Fleece Hoodies", category: "hoodies", fabric: "American Fleece", gsm: "340 GSM", moq: 25, colors: ["#000","#1f2937","#f3f4f6"], sizes: ["M","L","XL","XXL"], image: hoodie },
  { name: "Cotton Hoodies", category: "hoodies", fabric: "100% Cotton Fleece", gsm: "320 GSM", moq: 25, colors: ["#000","#fff","#1e3a8a","#78350f"], sizes: ["S","M","L","XL","XXL"], image: hoodie },

  // SAFETY & WORKWEAR
  { name: "Safety Jacket", category: "safety", fabric: "Polyester + Reflective Tape", gsm: "—", moq: 25, colors: ["#f59e0b","#16a34a","#dc2626"], sizes: ["M","L","XL","XXL"], image: jacket, isNew: true },
  { name: "Safety Goggle", category: "safety", fabric: "Polycarbonate Lens", gsm: "—", moq: 50, colors: ["#000","#fff"], sizes: ["Free"], image: jacket },

  // BAGS
  { name: "Premium Conference Bag Pack", category: "bags", fabric: "Polyester / PU", gsm: "—", moq: 25, colors: ["#000","#1f2937","#1e3a8a"], sizes: ["Std"], image: tote, isNew: true },
  { name: "Canvas Tote", category: "bags", fabric: "12oz Canvas", gsm: "—", moq: 50, colors: ["#fef3c7","#000","#737373"], sizes: ["Std"], image: tote },

  // APRONS
  { name: "University Apron", category: "aprons", fabric: "Cotton Twill", gsm: "220 GSM", moq: 25, colors: ["#fff","#000"], sizes: ["Std"], image: apron },
  { name: "Nurse Apron", category: "aprons", fabric: "Poly-Cotton", gsm: "200 GSM", moq: 25, colors: ["#fff","#dbeafe"], sizes: ["S","M","L","XL"], image: apron },
  { name: "Medical Apron", category: "aprons", fabric: "Poly-Cotton", gsm: "200 GSM", moq: 25, colors: ["#fff","#16a34a","#1e3a8a"], sizes: ["S","M","L","XL"], image: apron, isNew: true },

  // SWEATSHIRTS
  { name: "Classic Crewneck Sweatshirt", category: "sweatshirts", fabric: "Loop Knit", gsm: "300 GSM", moq: 25, colors: ["#fef3c7","#000","#f3f4f6","#1f2937"], sizes: ["S","M","L","XL"], image: sweatshirt },
  { name: "Vintage Wash Sweatshirt", category: "sweatshirts", fabric: "Cotton Fleece", gsm: "280 GSM", moq: 25, colors: ["#737373","#000","#78350f"], sizes: ["M","L","XL"], image: sweatshirt },

  // JACKETS
  { name: "MA-1 Style Bomber Jacket", category: "jackets", fabric: "Nylon + Lining", gsm: "—", moq: 30, colors: ["#000","#1f2937","#16a34a"], sizes: ["M","L","XL"], image: jacket },
  { name: "Windcheater Jacket", category: "jackets", fabric: "Polyester Taffeta", gsm: "—", moq: 30, colors: ["#000","#1e3a8a","#dc2626"], sizes: ["M","L","XL","XXL"], image: jacket },

  // PANTS
  { name: "Tactical Cargo Pants", category: "pants", fabric: "Cotton Twill", gsm: "260 GSM", moq: 20, colors: ["#4d7c0f","#000","#78350f"], sizes: ["28","30","32","34","36"], image: pants },
  { name: "Tapered Joggers", category: "pants", fabric: "Cotton Lycra", gsm: "240 GSM", moq: 20, colors: ["#000","#1f2937","#737373"], sizes: ["S","M","L","XL"], image: pants },

  // SHORTS
  { name: "Cotton Athletic Shorts", category: "shorts", fabric: "Single Jersey", gsm: "180 GSM", moq: 20, colors: ["#000","#fff","#737373"], sizes: ["S","M","L","XL"], image: shorts },
  { name: "Dri-Fit Sport Shorts", category: "shorts", fabric: "Polyester Mesh", gsm: "150 GSM", moq: 20, colors: ["#000","#1e3a8a","#dc2626"], sizes: ["S","M","L","XL"], image: shorts },

  // CAPS
  { name: "6-Panel Baseball Cap", category: "caps", fabric: "Cotton Twill", gsm: "—", moq: 50, colors: ["#000","#fff","#dc2626","#1e3a8a"], sizes: ["Free"], image: cap },
  { name: "Snapback Cap", category: "caps", fabric: "Polyester", gsm: "—", moq: 50, colors: ["#000","#737373"], sizes: ["Free"], image: cap },

  // CORPORATE
  { name: "Embroidered Corporate Polo", category: "corporate", fabric: "Pique Cotton", gsm: "200 GSM", moq: 25, colors: ["#fff","#000","#1e3a8a"], sizes: ["S","M","L","XL","XXL"], image: corporate },
  { name: "Formal Office Shirt", category: "corporate", fabric: "Cotton Blend", gsm: "—", moq: 25, colors: ["#fff","#dbeafe","#737373"], sizes: ["S","M","L","XL","XXL"], image: corporate },

  // UNIFORMS
  { name: "School Uniform Set", category: "uniforms", fabric: "Poly-Cotton", gsm: "—", moq: 50, colors: ["#1e3a8a","#fff"], sizes: ["XS","S","M","L"], image: uniform },
  { name: "Hospital Scrub Set", category: "uniforms", fabric: "Poly-Cotton", gsm: "—", moq: 50, colors: ["#16a34a","#1e3a8a","#fff"], sizes: ["S","M","L","XL"], image: uniform },
];

export const products: Product[] = seed.map((p, i) => ({ ...p, id: `${p.category}-${i+1}` }));

export const getProductsByCategory = (slug: string) =>
  products.filter(p => p.category === slug);

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getCategory = (slug: string) => categories.find(c => c.slug === slug);

export const newProducts = products.filter(p => p.isNew);
