import type { Metadata } from "next";
import { Bodoni_Moda, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Abrar Fiaz | AI & Backend Engineer",
  description: "Official portfolio of Syed Abrar Fiaz, featuring production LLM-powered SaaS, AI-driven anomaly detection systems, and scalable backend microservices.",
  keywords: ["Syed Abrar Fiaz", "AI Engineer", "Backend Engineer", "Python Developer", "FastAPI", "Next.js", "Machine Learning"],
  authors: [{ name: "Syed Abrar Fiaz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
