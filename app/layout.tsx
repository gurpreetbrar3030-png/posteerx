import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PosterX",
  description: "Premium poster commerce with cinematic 3D experiences"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
