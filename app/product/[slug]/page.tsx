import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/catalog";
import Link from "next/link";

export default async function ProductPage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">{product.title}</h1>
      <p className="mt-2 text-zinc-400">3D preview and mockup environments for Gaming Den / Gallery can be mounted here.</p>
      <div className="mt-6 rounded-xl border border-zinc-800 p-4">
        <p>Model Path: {product.modelPath}</p>
        <p>Base price: ₹{product.basePriceInr}</p>
      </div>
      <Link href="/checkout" className="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 font-semibold">
        Checkout
      </Link>
    </main>
  );
}
