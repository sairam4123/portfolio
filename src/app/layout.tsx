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
  title: "Sairam Mangeshkar - Portfolio",
  description:
    "Full Stack Developer · Backend Engineer · Mobile Application Developer. Building production systems with TypeScript, Python, React Native, FastAPI, and PostgreSQL.",
  abstract: `
  Sairam Mangeshkar's portfolio showcases his expertise as a Full Stack Developer, Backend Engineer, and Mobile Application Developer. With a strong focus on building production systems, Sairam excels in technologies such as TypeScript, Python, React Native, FastAPI, and PostgreSQL. His projects demonstrate a commitment to creating efficient and scalable solutions across various domains.`,
  keywords: [
    "Sairam Mangeshkar",
    "Full Stack Developer",
    "Backend Engineer",
    "Mobile Application Developer",
    "TypeScript",
    "Python",
    "React Native",
    "FastAPI",
    "PostgreSQL",
    "Portfolio",
    "Projects",
  ],
  authors: [{ name: "Sairam Mangeshkar" }],
  openGraph: {
    title: "Sairam Mangeshkar - Portfolio",
    description:
      "Full Stack Developer · Backend Engineer · Mobile Application Developer. Building production systems with TypeScript, Python, React Native, FastAPI, and PostgreSQL.",
    url: "https://sairamthedev.vercel.app",
    siteName: "Sairam Mangeshkar Portfolio",
    emails: ["sairam.m.2005.65@gmail.com", "sairamkumar2022@gmail.com"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
