import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.byalance.in"),
  title: {
    default: "Byalance: Accounting, GST, ITR & TDS Services",
    template: "%s | Byalance",
  },
  description:
    "Expert accounting, GST, ITR, and TDS filing services from Byalance. We simplify financial compliance for small and medium businesses across India.",
  openGraph: {
    title: "Byalance: Accounting, GST, ITR & TDS Services",
    description:
      "Expert accounting, GST, ITR, and TDS filing services from Byalance. We simplify financial compliance for small and medium businesses across India.",
    url: "https://www.byalance.in",
    siteName: "Byalance",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Byalance" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Byalance: Accounting, GST, ITR & TDS Services",
    description:
      "Expert accounting, GST, ITR, and TDS filing services from Byalance. We simplify financial compliance for small and medium businesses across India.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: { url: "/favicon_logo.svg", sizes: "any" },
    apple: { url: "/favicon_logo.svg", sizes: "180x180" },
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Byalance",
  description:
    "Virtual accounting firm offering GST, TDS, ITR, Payroll and full Accounting & Bookkeeping services for startups and SMBs across India.",
  url: "https://www.byalance.in",
  logo: "https://www.byalance.in/brandlogo-converted-from-png.svg",
  telephone: "+91-74062-96116",
  email: "info@byalance.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dollars Colony, 4th Phase, JP Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560078",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/byalance",
    "https://www.linkedin.com/company/byalance",
    "https://www.instagram.com/byalance",
  ],
  areaServed: "IN",
  priceRange: "₹₹",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LC2DSK5J0G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LC2DSK5J0G');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
