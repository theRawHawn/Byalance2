
"use client"

import { Suspense, lazy } from 'react';
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WhatsAppFloat from "@/components/whatsapp-float";

const WhyChooseUs = lazy(() => import("@/components/why-choose-us"));
const AboutSection = lazy(() => import("@/components/about-section"));
const ServicesOverview = lazy(() => import("@/components/services-overview"));
const PricingSection = lazy(() => import("@/components/pricing-section"));
const ContactSection = lazy(() => import("@/components/contact-section"));
const Footer = lazy(() => import("@/components/footer"));


// SEO Tip: Add a descriptive title for your homepage.
// This is the most important piece of text for SEO.
// Example: <title>Byalance | Expert Accounting and Financial Services</title>

// SEO Tip: Add a meta description that summarizes your page content.
// This description is shown in search engine results.
// Example: <meta name="description" content="Byalance offers expert accounting, bookkeeping, GST, and ITR services for businesses. Contact us for reliable financial solutions." />

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <section id="about">
          <AboutSection />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <section id="services">
          <ServicesOverview />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <section id="pricing">
          <PricingSection />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <section id="contact">
          <ContactSection />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
      
      <WhatsAppFloat />
    </div>
  );
}
