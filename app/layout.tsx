import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Auto detailing Split | Motorsport Stričević",
    template: "%s | Motorsport Stričević",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    siteName: siteConfig.name,
    title: "Auto detailing Split | Motorsport Stričević",
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 908,
        alt: "Motorsport Stričević — auto detailing u Splitu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto detailing Split | Motorsport Stričević",
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: siteConfig.name,
  url: process.env.SITE_URL ?? "http://localhost:3000",
  telephone: siteConfig.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Antuna Mihanovića 38",
    postalCode: "21000",
    addressLocality: "Split",
    addressCountry: "HR",
  },
  areaServed: { "@type": "City", name: "Split" },
  sameAs: [siteConfig.instagramHref, siteConfig.facebookHref],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">Preskoči na sadržaj</a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
