import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  themeColor: "#020c1b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sairamthe.dev"),
  title: "Sairam Mangeshkar - Portfolio",
  description:
    "Full Stack & Mobile Developer building AI products, mobile apps, and railway simulations. Skilled in  Python, React Native, FastAPI, and PostgreSQL.".slice(
      0,
      160,
    ), // Truncate to 160 chars for meta description
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
      "Full Stack & Mobile Developer building AI products, mobile apps, and railway simulations. Skilled in  Python, React Native, FastAPI, and PostgreSQL.".slice(
        0,
        160,
      ),
    url: "https://sairamthe.dev",
    siteName: "Sairam Mangeshkar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
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
      "Full Stack & Mobile Developer building AI products, mobile apps, and railway simulations. Skilled in  Python, React Native, FastAPI, and PostgreSQL.".slice(
        0,
        160,
      ),
    creator: "@sairamthedev",
    images: [
      {
        url: "/og-image.png",
        alt: "Sairam Mangeshkar Portfolio",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://sairamthe.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sairam Mangeshkar",
    url: "https://sairamthe.dev",
    email: "mailto:sairam.m.2005.65@gmail.com",
    jobTitle: "Full Stack & Mobile Application Developer",
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
      "https://x.com/sairamthedev",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SairamTheDev",
    alternateName: "Sairam Mangeshkar Portfolio",
    url: "https://sairamthe.dev",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <meta
        name="google-site-verification"
        content="p2mObECcwD76yuSTVmUFxTNjas4aarJc-IFxo0L4-r8"
      />

      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
