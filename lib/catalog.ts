import { cache } from "react";
import type { Product } from "./types";

const products: Product[] = [
  {
    id: "prod_neo_city",
    slug: "neo-city",
    title: "Neo City Nights",
    category: "Cyberpunk",
    basePriceInr: 2499,
    framePriceInr: 799,
    shippingPriceInr: 149,
    modelPath: "/models/neo-city.glb",
    isTrending: true,
    coverUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea"
  },
  {
    id: "prod_retro_void",
    slug: "retro-void",
    title: "Retro Void",
    category: "Synthwave",
    basePriceInr: 2299,
    framePriceInr: 699,
    shippingPriceInr: 149,
    modelPath: "/models/retro-void.glb",
    isTrending: false,
    coverUrl: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee"
  }
];

export const getProducts = cache(async (): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return products;
});

export const getProductBySlug = cache(async (slug: string): Promise<Product | null> => {
  const all = await getProducts();
  return all.find((p) => p.slug === slug) ?? null;
});
