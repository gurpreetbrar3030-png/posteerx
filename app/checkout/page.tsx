import { COD_FEE } from "@/lib/pricing";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-6 py-12">
      <h1 className="text-4xl font-bold">One-Page Checkout</h1>
      <p className="text-zinc-400">Address, shipping method, and payment selection should be rendered in a single scrollable flow.</p>
      <div className="rounded-xl border border-zinc-800 p-4">
        <h2 className="text-2xl font-semibold">Payment Methods</h2>
        <ul className="mt-2 list-disc pl-6 text-zinc-300">
          <li>Stripe (International)</li>
          <li>Razorpay (India)</li>
          <li>Cash on Delivery (+₹{COD_FEE} handling fee)</li>
        </ul>
      </div>
      <p className="text-sm text-zinc-400">Formula: Total = (Base + Material + Frame + Shipping) * 0.90, then + ₹50 if COD.</p>
    </main>
  );
}
