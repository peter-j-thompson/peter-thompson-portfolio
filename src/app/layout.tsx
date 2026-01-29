import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Peter Thompson | Full Stack Developer",
  description:
    "Full stack developer with 8+ years of experience building fast, reliable software. Specializing in automation, API integrations, and modern web applications.",
  keywords: [
    "full stack developer",
    "freelance developer",
    "web development",
    "React",
    "Next.js",
    "Python",
    "automation",
    "API integration",
  ],
  authors: [{ name: "Peter Thompson" }],
  openGraph: {
    title: "Peter Thompson | Full Stack Developer",
    description:
      "Full stack developer with 8+ years of experience. Fast, reliable software that solves real problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Thompson | Full Stack Developer",
    description:
      "Full stack developer with 8+ years of experience. Fast, reliable software that solves real problems.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
