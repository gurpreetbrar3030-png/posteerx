import { ImageResponse } from "next/og";
import { getProductBySlug } from "@/lib/catalog";

export const runtime = "edge";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#09090b",
          color: "#fafafa",
          padding: "60px"
        }}
      >
        <div style={{ fontSize: 34 }}>PosterX Product</div>
        <div style={{ fontSize: 72, fontWeight: 700 }}>{product?.title ?? "Poster"}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
