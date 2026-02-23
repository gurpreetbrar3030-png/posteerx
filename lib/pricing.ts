import type { CheckoutInput } from "./types";

const COD_FEE = 50;

export function calculateTotalInr({ paymentMethod, framePriceInr, material, shippingPriceInr }: CheckoutInput, basePriceInr: number): number {
  const materialMap = {
    Matte: 0,
    Canvas: 400,
    Acrylic: 700
  } as const;

  const subTotal = basePriceInr + materialMap[material] + framePriceInr + shippingPriceInr;
  const discounted = Math.round(subTotal * 0.9);
  return paymentMethod === "COD" ? discounted + COD_FEE : discounted;
}

export { COD_FEE };
