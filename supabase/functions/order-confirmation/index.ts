interface OrderConfirmationPayload {
  orderId: string;
  trackingId: string;
  email: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const payload = (await req.json()) as OrderConfirmationPayload;

  // Integrate with email provider in production.
  return new Response(
    JSON.stringify({
      ok: true,
      message: `Order ${payload.orderId} confirmed with tracking ${payload.trackingId}.`
    }),
    { headers: { "Content-Type": "application/json" } }
  );
});
