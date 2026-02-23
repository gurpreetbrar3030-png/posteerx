import { Suspense } from "react";
import { HeroScene } from "@/components/hero-scene";
import { LenisProvider } from "@/components/lenis-provider";
import { ProductGrid } from "@/components/product-grid";
import { ProductSkeleton } from "@/components/product-skeleton";

export default function HomePage() {
  return (
    <LenisProvider>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-8">
          <p className="text-zinc-400">Premium 3D Poster Commerce</p>
          <h1 className="text-5xl font-bold tracking-tight">PosterX</h1>
        </header>
        <HeroScene />
        <section className="my-12">
          <h2 className="mb-4 text-3xl font-semibold">Trending Bento Gallery</h2>
          <Suspense fallback={<ProductSkeleton />}>
            <ProductGrid />
          </Suspense>
        </section>
      </main>
    </LenisProvider>
  );
}
