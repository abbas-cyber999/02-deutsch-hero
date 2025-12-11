import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deutsch Hero",
  description: "Sprachlern-App für Deutsch mit mehrsprachiger Oberfläche.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Deutsch Hero",
    description: "Sprachlern-App für Deutsch mit mehrsprachiger Oberfläche.",
    url: "https://deutsch-hero.netlify.app",
    images: [{ url: "https://deutsch-hero.netlify.app/icon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deutsch Hero",
    description: "Sprachlern-App für Deutsch mit mehrsprachiger Oberfläche.",
    images: ["https://deutsch-hero.netlify.app/icon.png"],
  },
  icons: {
    icon: [
      { url: "/icon/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon/icon-180.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script
          data-goatcounter="https://learn-german.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
