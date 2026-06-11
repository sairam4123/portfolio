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
    images: [
      {
        url: "https://sairamthedev.vercel.app/og-image.png",
        alt: "Sairam Mangeshkar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sairam Mangeshkar - Portfolio",
    description:
      "Full Stack Developer · Backend Engineer · Mobile Application Developer. Building production systems with TypeScript, Python, React Native, FastAPI, and PostgreSQL.",
    creator: "@sairamthedev",
    images: [
      {
        url: "https://sairamthedev.vercel.app/og-image.png",
        alt: "Sairam Mangeshkar Portfolio",
      },
    ],
  },

  alternates: {
    canonical: "https://sairamthedev.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sairam Mangeshkar",
    url: "https://sairamthedev.vercel.app",
    email: "mailto:sairam.m.2005.65@gmail.com",
    jobTitle: "Full Stack Developer",
    knowsAbout: [
      "TypeScript",
      "Python",
      "FastAPI",
      "React Native",
      "PostgreSQL",
      "Backend Development",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Mookambigai College of Engineering",
    },
    sameAs: [
      "https://github.com/sairam4123",
      "https://linkedin.com/in/sairam4123",
    ],
  };
  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
