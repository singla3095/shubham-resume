import type { Metadata } from "next";
import { Barlow_Condensed, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const siteUrl = "https://singla3095.github.io/shubham-resume/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shubham Singla · Backend & AI Engineer",
  description:
    "Engineering portfolio of Shubham Singla: 10+ years building backend platforms, payment systems, applied AI products, and strong engineering teams.",
  applicationName: "Shubham Singla",
  authors: [{ name: "Shubham Singla" }],
  alternates: { canonical: siteUrl },
  keywords: [
    "Shubham Singla",
    "backend engineer",
    "AI engineer",
    "engineering leader",
    "distributed systems",
    "Java",
    "Golang",
    "AWS",
  ],
  openGraph: {
    title: "Shubham Singla · Backend Systems, Applied AI & Leadership",
    description: "10+ years shipping across India and Singapore.",
    type: "profile",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}og.png`,
        width: 1659,
        height: 948,
        alt: "Shubham Singla — Backend Systems, Applied AI, Engineering Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Singla · Backend Systems, Applied AI & Leadership",
    description: "10+ years shipping across India and Singapore.",
    images: [`${siteUrl}og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
