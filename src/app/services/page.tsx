import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
