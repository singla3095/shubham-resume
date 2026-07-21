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

const siteUrl = "https://singla3095.github.io/shubham-resume/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shubham Singla · Staff Software Engineer",
  description:
    "Shubham Singla is a Staff Software Engineer at Indeed with 10+ years building AI agents, payment systems, and backend platforms.",
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
    title: "Shubham Singla · Staff Software Engineer",
    description: "10+ years building reliable systems across India and Singapore.",
    type: "profile",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}og.png`,
        width: 1536,
        height: 1024,
        alt: "Shubham Singla, Backend and AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Singla · Staff Software Engineer",
    description: "10+ years building reliable systems across India and Singapore.",
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
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
