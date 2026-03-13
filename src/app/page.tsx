import DwellioHero from "@/components/DwellioHero";
import PropertiesShowcase from "@/components/PropertiesShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="bg-[#0d0c0a] min-h-screen">
      <DwellioHero />
      <FeaturesSection />
      <PropertiesShowcase />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
