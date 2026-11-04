import type { Metadata } from "next";
import { Silkscreen, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const pixel = Silkscreen({ variable: "--font-pixel", subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const sans = Space_Grotesk({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const mono = Space_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "Syed Abrar Fiaz — Software Engineer", template: "%s · Syed Abrar Fiaz" },
  description: "Software engineer in Dhaka, Bangladesh building SaaS products, backend systems, and practical AI-powered applications.",
  alternates: { canonical: "/" },
  keywords: ["Syed Abrar Fiaz", "Software Engineer", "AI Engineer", "FastAPI", "Next.js", "Bangladesh"],
  authors: [{ name: "Syed Abrar Fiaz" }],
  icons: { icon: "/assets/logo.webp" },
  openGraph: {
    title: "Syed Abrar Fiaz — Software Engineer",
    description: "Explore selected projects, engineering experience, and ways to work together.",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image", title: "Syed Abrar Fiaz — Software Engineer", description: "SaaS, backend systems, and practical AI-powered software." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pixel.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
