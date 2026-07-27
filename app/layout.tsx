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
    "Shubham Singla is a Staff Software Engineer at Indeed building agentic AI systems, distributed platforms, and reliable product infrastructure.",
  applicationName: "Shubham Singla",
  authors: [{ name: "Shubham Singla" }],
  alternates: { canonical: siteUrl },
  keywords: [
    "Shubham Singla",
    "backend engineer",
    "AI engineer",
    "Staff Software Engineer",
    "AI agents",
    "LangGraph",
    "LLM orchestration",
    "multi-agent systems",
    "recommender systems",
    "engineering leader",
    "distributed systems",
    "Java",
    "Golang",
    "AWS",
  ],
  openGraph: {
    title: "Shubham Singla · Staff Software Engineer",
    description: "Agentic AI, distributed platforms, and 10+ years of production engineering across India and Singapore.",
    type: "profile",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}og-2026.png`,
        width: 1536,
        height: 1024,
        alt: "Shubham Singla, Staff Software Engineer building AI systems and distributed platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Singla · Staff Software Engineer",
    description: "Agentic AI, distributed platforms, and 10+ years of production engineering across India and Singapore.",
    images: [`${siteUrl}og-2026.png`],
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
