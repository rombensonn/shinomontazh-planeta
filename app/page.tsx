import { ContactSection } from "@/components/ContactSection";
import { ConvenienceBlock } from "@/components/ConvenienceBlock";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainLeadSection } from "@/components/MainLeadSection";
import { Process } from "@/components/Process";
import { QualityBlock } from "@/components/QualityBlock";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { TrustBar } from "@/components/TrustBar";
import { UsedTiresBlock } from "@/components/UsedTiresBlock";
import { business } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  name: business.name,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Московская область",
    addressLocality: "Подольск",
    streetAddress: "Железнодорожная улица",
    addressCountry: "RU",
  },
  openingHours: business.openingHours,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.ratingSchema,
    reviewCount: business.ratingCount,
  },
  url: business.siteUrl,
  areaServed: "Подольск",
  sameAs: business.mapUrl,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <MainLeadSection />
        <TrustBar />
        <Services />
        <Process />
        <QualityBlock />
        <UsedTiresBlock />
        <Reviews />
        <ConvenienceBlock />
        <FAQ />
        <FinalCta />
        <ContactSection />
      </main>
      <StickyMobileCTA />
      <Footer />
    </>
  );
}
