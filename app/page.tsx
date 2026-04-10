import { HeroSection } from "@/components/hero/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LocationSection } from "@/components/location/LocationSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { StatsStrip } from "@/components/stats/StatsStrip";
import { TeamSection } from "@/components/team/TeamSection";
import { TestimonialsCarousel } from "@/components/testimonials/TestimonialsCarousel";
import { WhyChooseUs } from "@/components/why/WhyChooseUs";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex-1 pb-[4.5rem] md:pb-0"
        tabIndex={-1}
      >
        <HeroSection />
        <StatsStrip />
        <ServicesGrid />
        <WhyChooseUs />
        <TeamSection />
        <TestimonialsCarousel />
        <LocationSection />
      </main>
      <Footer />
      <MobileStickyCta />
      <WhatsAppFloat />
    </>
  );
}
