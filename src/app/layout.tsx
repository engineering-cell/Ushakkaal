import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ushakkaal.com"),
  title: {
    default: "Ushakkaal | A legacy in persuasion. A future in intelligence.",
    template: "%s | Ushakkaal",
  },
  description:
    "Ushakkaal brings together advertising memory, technical craft, and emerging intelligence to explore what communication becomes next.",
  keywords: [
    "AI strategy",
    "intelligent products",
    "AI integration",
    "advertising",
    "communication design",
    "software prototypes",
    "automation systems",
  ],
  authors: [{ name: "Ushakkaal", url: "https://www.ushakkaal.com" }],
  creator: "Ushakkaal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ushakkaal.com",
    siteName: "Ushakkaal",
    title: "Ushakkaal | A legacy in persuasion. A future in intelligence.",
    description:
      "Ushakkaal brings together advertising memory, technical craft, and emerging intelligence to explore what communication becomes next.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ushakkaal | A legacy in persuasion. A future in intelligence.",
    description:
      "Ushakkaal brings together advertising memory, technical craft, and emerging intelligence to explore what communication becomes next.",
    creator: "@ushakkaal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.ushakkaal.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
