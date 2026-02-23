export type VariantSize = "A3" | "A4" | "A5" | "16:9";
export type VariantMaterial = "Matte" | "Canvas" | "Acrylic";

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  basePriceInr: number;
  framePriceInr: number;
  shippingPriceInr: number;
  modelPath: string;
  isTrending: boolean;
  coverUrl: string;
}

export interface Order {
  id: string;
  tracking_id: string;
  user_id: string;
  payment_method: "Stripe" | "Razorpay" | "COD";
  status: "Pending" | "Shipped" | "Delivered";
  total_inr: number;
}

export interface CheckoutInput {
  productSlug: string;
  material: VariantMaterial;
  framePriceInr: number;
  shippingPriceInr: number;
  paymentMethod: "Stripe" | "Razorpay" | "COD";
}
