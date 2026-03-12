import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AnimatedStats from "@/components/AnimatedStats";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-primary selection:text-white">
      {/* 1. Navbar is in layout.tsx */}
      
      {/* 2. Hero Section + 3. Property Search / Filters */}
      <Hero />
      
      {/* 3.5 Animated Stats Section */}
      <AnimatedStats />
      
      {/* 4. Featured Properties (Limit to 3) */}
      <PropertyGrid title="Featured Properties" limit={3} />
      
      {/* 4.5 Parallax About Section */}
      <ParallaxSection />
      
      {/* 5. Why Choose Us / Benefits */}
      <WhyChooseUs />
      
      {/* 6. Property Showcase Grid (All or more) */}
      <PropertyGrid title="Browse All Listings" />
      
      {/* 7. Testimonials */}
      <Testimonials />
      
      {/* 8. Call To Action */}
      <CTASection />
      
      {/* 9. Footer is in layout.tsx */}
    </main>
  );
}
