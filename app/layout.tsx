import type { Metadata } from "next";
import { Barlow_Condensed, Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedProto = requestHeaders.get("x-forwarded-proto")?.split(",")[0] ?? "https";
  const requestHost =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const origin = `${forwardedProto}://${requestHost}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    title: "Shubham Singla · Backend, AI & Engineering Leadership",
    description:
      "Shubham Singla builds dependable AI and backend systems—from high-volume payments to products that help people find work.",
    applicationName: "Shubham Singla",
    authors: [{ name: "Shubham Singla" }],
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
      title: "Shubham Singla · Systems that move people",
      description: "Backend × AI × Leadership",
      type: "profile",
      images: [{ url: socialImage, width: 1792, height: 1024, alt: "Shubham Singla" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Shubham Singla · Systems that move people",
      description: "Backend × AI × Leadership",
      images: [socialImage],
    },
  };
}

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
