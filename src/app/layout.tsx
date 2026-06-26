import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sıla Karahan — Full Stack & Frontend Developer",
  description:
    "Next.js, Django ve React ile web uygulamaları geliştiren yazılım mühendisi. Projelerimi ve çalışmalarımı keşfedin.",
  keywords: [
    "Sıla Karahan",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js",
    "Django",
    "React",
    "TypeScript",
    "Web Developer",
  ],
  authors: [{ name: "Sıla Karahan", url: "https://silakarahan.com.tr" }],
  creator: "Sıla Karahan",
  metadataBase: new URL("https://silakarahan.com.tr"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://silakarahan.com.tr",
    title: "Sıla Karahan — Full Stack & Frontend Developer",
    description:
      "Next.js, Django ve React ile web uygulamaları geliştiren yazılım mühendisi.",
    siteName: "Sıla Karahan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sıla Karahan — Full Stack & Frontend Developer",
    description:
      "Next.js, Django ve React ile web uygulamaları geliştiren yazılım mühendisi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712]">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
