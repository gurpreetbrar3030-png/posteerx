import { NextResponse } from "next/server";
import { checkoutAction } from "@/app/checkout/actions";

export async function POST(request: Request): Promise<NextResponse> {
  const payload = (await request.json()) as Parameters<typeof checkoutAction>[0];
  const result = await checkoutAction(payload);
  return NextResponse.json(result);
}
