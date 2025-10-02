// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jack Rumpf",
    template: "%s · Jack Rumpf",
  },
  description:
    "Founder • Builder • Hacker. Propulsive landers, AI tools, and products that ship.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      // include these if you added the pngs:
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Jack Rumpf",
    description:
      "Founder • Builder • Hacker. Propulsive landers, AI tools, and products that ship.",
    url: "https://jackrumpf.com",
    siteName: "Jack Rumpf",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jack Rumpf" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Rumpf",
    description:
      "Founder • Builder • Hacker. Propulsive landers, AI tools, and products that ship.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}