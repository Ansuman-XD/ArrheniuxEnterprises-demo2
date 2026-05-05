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
  { slug: "t-shirts", name: "T-Shirts", image: tshirt, tagline: "Cotton · Bio-wash · Polyester" },
  { slug: "hoodies", name: "Hoodies", image: hoodie, tagline: "Fleece · French Terry" },
  { slug: "polos", name: "Polo Shirts", image: polo, tagline: "Pique · Honeycomb · Lacoste" },
  { slug: "jackets", name: "Jackets", image: jacket, tagline: "Bomber · Windcheater" },
  { slug: "pants", name: "Pants & Trousers", image: pants, tagline: "Cargo · Chinos · Joggers" },
  { slug: "sweatshirts", name: "Sweatshirts", image: sweatshirt, tagline: "Crewneck · Loop knit" },
  { slug: "caps", name: "Caps & Headwear", image: cap, tagline: "Baseball · Snapback · Bucket" },
  { slug: "bags", name: "Bags & Totes", image: tote, tagline: "Canvas · Jute · Cotton" },
  { slug: "aprons", name: "Aprons", image: apron, tagline: "Cafe · Industrial · Salon" },
  { slug: "shorts", name: "Shorts", image: shorts, tagline: "Cotton · Dri-fit · Athletic" },
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
  { name: "Premium Bio-Wash Tee", category: "t-shirts", fabric: "100% Cotton Bio-Wash", gsm: "180 GSM", moq: 20, colors: ["#000", "#fff", "#1e3a8a", "#dc2626", "#f59e0b"], sizes: ["S","M","L","XL","XXL"], image: tshirt, isNew: true },
  { name: "Heavyweight Drop-Shoulder Tee", category: "t-shirts", fabric: "Combed Cotton", gsm: "240 GSM", moq: 20, colors: ["#000", "#fff", "#737373", "#84cc16"], sizes: ["M","L","XL","XXL"], image: tshirt },
  { name: "Oversized Pullover Hoodie", category: "hoodies", fabric: "Cotton Fleece", gsm: "320 GSM", moq: 25, colors: ["#1f2937", "#000", "#78350f", "#f3f4f6"], sizes: ["S","M","L","XL","XXL"], image: hoodie, isNew: true },
  { name: "Zip-Up French Terry Hoodie", category: "hoodies", fabric: "French Terry", gsm: "280 GSM", moq: 25, colors: ["#000", "#fff", "#7c3aed"], sizes: ["M","L","XL"], image: hoodie },
  { name: "Honeycomb Pique Polo", category: "polos", fabric: "Cotton Pique", gsm: "200 GSM", moq: 20, colors: ["#1e3a8a", "#000", "#fff", "#dc2626"], sizes: ["S","M","L","XL"], image: polo, isNew: true },
  { name: "Performance Dri-Fit Polo", category: "polos", fabric: "Polyester Mesh", gsm: "160 GSM", moq: 20, colors: ["#000", "#fff", "#16a34a"], sizes: ["S","M","L","XL","XXL"], image: polo },
  { name: "MA-1 Style Bomber Jacket", category: "jackets", fabric: "Nylon + Lining", gsm: "—", moq: 30, colors: ["#000", "#1f2937", "#16a34a"], sizes: ["M","L","XL"], image: jacket, isNew: true },
  { name: "Windcheater Jacket", category: "jackets", fabric: "Polyester Taffeta", gsm: "—", moq: 30, colors: ["#000", "#1e3a8a", "#dc2626"], sizes: ["M","L","XL","XXL"], image: jacket },
  { name: "Tactical Cargo Pants", category: "pants", fabric: "Cotton Twill", gsm: "260 GSM", moq: 20, colors: ["#4d7c0f", "#000", "#78350f"], sizes: ["28","30","32","34","36"], image: pants },
  { name: "Tapered Joggers", category: "pants", fabric: "Cotton Lycra", gsm: "240 GSM", moq: 20, colors: ["#000", "#1f2937", "#737373"], sizes: ["S","M","L","XL"], image: pants, isNew: true },
  { name: "Classic Crewneck Sweatshirt", category: "sweatshirts", fabric: "Loop Knit", gsm: "300 GSM", moq: 25, colors: ["#fef3c7", "#000", "#f3f4f6", "#1f2937"], sizes: ["S","M","L","XL"], image: sweatshirt },
  { name: "Vintage Wash Sweatshirt", category: "sweatshirts", fabric: "Cotton Fleece", gsm: "280 GSM", moq: 25, colors: ["#737373", "#000", "#78350f"], sizes: ["M","L","XL"], image: sweatshirt, isNew: true },
  { name: "6-Panel Baseball Cap", category: "caps", fabric: "Cotton Twill", gsm: "—", moq: 50, colors: ["#000", "#fff", "#dc2626", "#1e3a8a"], sizes: ["Free"], image: cap },
  { name: "Snapback Cap", category: "caps", fabric: "Polyester", gsm: "—", moq: 50, colors: ["#000", "#737373"], sizes: ["Free"], image: cap, isNew: true },
  { name: "Heavy Canvas Tote", category: "bags", fabric: "12oz Canvas", gsm: "—", moq: 50, colors: ["#fef3c7", "#000", "#737373"], sizes: ["Std"], image: tote },
  { name: "Jute Shopper Bag", category: "bags", fabric: "Natural Jute", gsm: "—", moq: 50, colors: ["#a16207", "#78350f"], sizes: ["Std"], image: tote, isNew: true },
  { name: "Cafe Bib Apron", category: "aprons", fabric: "Cotton Twill", gsm: "240 GSM", moq: 25, colors: ["#000", "#737373", "#78350f"], sizes: ["Std"], image: apron },
  { name: "Industrial Heavy Apron", category: "aprons", fabric: "Canvas", gsm: "—", moq: 25, colors: ["#000", "#1f2937"], sizes: ["Std"], image: apron },
  { name: "Cotton Athletic Shorts", category: "shorts", fabric: "Single Jersey", gsm: "180 GSM", moq: 20, colors: ["#000", "#fff", "#737373"], sizes: ["S","M","L","XL"], image: shorts },
  { name: "Dri-Fit Sport Shorts", category: "shorts", fabric: "Polyester Mesh", gsm: "150 GSM", moq: 20, colors: ["#000", "#1e3a8a", "#dc2626"], sizes: ["S","M","L","XL"], image: shorts, isNew: true },
  { name: "Embroidered Corporate Polo", category: "corporate", fabric: "Pique Cotton", gsm: "200 GSM", moq: 25, colors: ["#fff", "#000", "#1e3a8a"], sizes: ["S","M","L","XL","XXL"], image: corporate },
  { name: "Formal Office Shirt", category: "corporate", fabric: "Cotton Blend", gsm: "—", moq: 25, colors: ["#fff", "#dbeafe", "#737373"], sizes: ["S","M","L","XL","XXL"], image: corporate, isNew: true },
  { name: "School Uniform Set", category: "uniforms", fabric: "Poly-Cotton", gsm: "—", moq: 50, colors: ["#1e3a8a", "#fff"], sizes: ["XS","S","M","L"], image: uniform },
  { name: "Hospital Scrub Set", category: "uniforms", fabric: "Poly-Cotton", gsm: "—", moq: 50, colors: ["#16a34a", "#1e3a8a", "#fff"], sizes: ["S","M","L","XL"], image: uniform, isNew: true },
];

export const products: Product[] = seed.map((p, i) => ({ ...p, id: `${p.category}-${i+1}` }));

export const getProductsByCategory = (slug: string) =>
  products.filter(p => p.category === slug);

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getCategory = (slug: string) => categories.find(c => c.slug === slug);

export const newProducts = products.filter(p => p.isNew);
