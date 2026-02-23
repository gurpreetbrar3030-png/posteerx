import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/catalog";

export async function ProductGrid() {
  const products = await getProducts();

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.slug}`} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
          <Image
            src={product.coverUrl}
            alt={product.title}
            width={1200}
            height={1200}
            quality={100}
            priority={product.isTrending}
            className="h-64 w-full rounded-lg object-cover"
          />
          <h3 className="mt-3 text-xl font-semibold">{product.title}</h3>
          <p className="text-zinc-400">{product.category}</p>
        </Link>
      ))}
    </section>
  );
}
