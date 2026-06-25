import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tread Spark — Coming Soon",
  description:
    "The all-in-one tire sales solution to power your business. Show your interest and be first to know when we launch.",
  openGraph: {
    title: "Tread Spark — Coming Soon",
    description:
      "The all-in-one tire sales solution to power your business.",
    url: siteUrl,
    siteName: "Tread Spark",
    images: [
      {
        url: "/logos/treadspark-wordmark-transparent.png",
        width: 1200,
        height: 630,
        alt: "Tread Spark logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tread Spark — Coming Soon",
    description:
      "The all-in-one tire sales solution to power your business.",
    images: ["/logos/treadspark-wordmark-transparent.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
