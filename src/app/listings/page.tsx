import PropertiesHero from "@/components/PropertiesHero";
import PropertiesGrid from "@/components/PropertiesGrid";
import CTASection from "@/components/CTASection";

export default function ListingsPage() {
  return (
    <main className="bg-background min-h-screen">
      <PropertiesHero />
      <PropertiesGrid />
      <CTASection />
    </main>
  );
}
