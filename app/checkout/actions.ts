"use server";

import { calculateTotalInr } from "@/lib/pricing";
import { getProductBySlug } from "@/lib/catalog";
import type { CheckoutInput } from "@/lib/types";

export async function checkoutAction(input: CheckoutInput): Promise<{ totalInr: number }> {
  const product = await getProductBySlug(input.productSlug);
  if (!product) {
    throw new Error("Product unavailable");
  }

  const totalInr = calculateTotalInr(input, product.basePriceInr);
  // Place payment intent creation calls for Stripe/Razorpay and order insert here.
  return { totalInr };
}
