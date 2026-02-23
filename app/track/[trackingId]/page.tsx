import { notFound } from "next/navigation";
import type { Order } from "@/lib/types";

const fakeOrders: Order[] = [
  {
    id: "ord_1",
    tracking_id: "PX-1001",
    user_id: "demo-user",
    payment_method: "COD",
    status: "Shipped",
    total_inr: 3199
  }
];

export default async function TrackPage({ params }: Readonly<{ params: Promise<{ trackingId: string }> }>) {
  const { trackingId } = await params;
  const order = fakeOrders.find((item) => item.tracking_id === trackingId);
  if (!order) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">Track Order</h1>
      <div className="mt-4 rounded-xl border border-zinc-800 p-4">
        <p>Tracking ID: {order.tracking_id}</p>
        <p>Status: {order.status}</p>
        <p>Payment: {order.payment_method}</p>
      </div>
    </main>
  );
}
