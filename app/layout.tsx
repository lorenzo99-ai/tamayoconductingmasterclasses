import type { Metadata } from "next";
import { Hanken_Grotesk, Spectral } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tamayoconductingmasterclass.com"),
  title: "Conducting Masterclass — Arturo Tamayo & the Berliner Symphoniker",
  description:
    "International conducting masterclass with Prof. Arturo Tamayo and the Berliner Symphoniker. Berlin, October 5–8, 2026. Only 8 active participants — apply now.",
  openGraph: {
    title: "Conducting Masterclass — Arturo Tamayo & the Berliner Symphoniker",
    description:
      "International conducting masterclass with Prof. Arturo Tamayo and the Berliner Symphoniker. Berlin, October 5–8, 2026. Only 8 active participants.",
    type: "website",
    images: ["/images/IMG_0853.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hanken.variable} ${spectral.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
