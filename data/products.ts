export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  stripePriceId: string;
  features: string[];
  inStock: boolean;
}

export const exampleProducts: Product[] = [
  {
    id: "nws-organic-soil-1",
    name: "Premium Organic Soil Mix",
    description: "A rich, nutrient-dense soil blend perfect for vegetables, herbs, and flowers. Made from composted organic matter and natural minerals.",
    price: 24.99,
    currency: "USD",
    image: "/images/organic-soil-mix.jpg",
    category: "Soil",
    stripePriceId: "price_1234567890abcdef", // Replace with actual Stripe Price ID
    features: [
      "100% Organic certified",
      "Rich in nutrients",
      "Excellent drainage",
      "pH balanced",
      "Contains beneficial microorganisms"
    ],
    inStock: true
  },
  {
    id: "nws-compost-blend-1",
    name: "Premium Compost Blend",
    description: "High-quality compost made from organic waste, perfect for enriching garden soil and improving plant growth.",
    price: 19.99,
    currency: "USD",
    image: "/images/compost-blend.jpg",
    category: "Compost",
    stripePriceId: "price_abcdef1234567890", // Replace with actual Stripe Price ID
    features: [
      "Fully composted organic matter",
      "Improves soil structure",
      "Increases water retention",
      "Adds beneficial nutrients",
      "Environmentally sustainable"
    ],
    inStock: true
  }
];

export default exampleProducts;