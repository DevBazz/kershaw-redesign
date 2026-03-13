"use client";

import { useRef } from "react";
import { Award } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutTimeline from "@/components/AboutTimeline";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
import StatsSection from "@/components/StatsSection";

export default function AboutPage() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(".about-badge", { y: 30, opacity: 0, duration: 0.8 })
      .from(".about-title", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
      .from(".about-text", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.6");
  }, { scope: heroRef });

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(217,119,6,0.1),transparent_60%)]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="about-badge inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 px-6 py-3 rounded-full mb-8">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-xs font-bold uppercase tracking-wider">Our Legacy Since 1845</span>
          </div>
          
          <h1 className="about-title text-5xl md:text-8xl font-display text-foreground mb-12 leading-tight">
            Heritage & <span className="text-secondary italic">Excellence</span>
          </h1>
          
          <div className="space-y-8 text-lg text-foreground/70 leading-relaxed max-w-4xl mx-auto">
            <p className="about-text">
              S. Kershaw & Sons stands as a premier firm of Chartered Surveyors and Property Consultants. With a heritage spanning over 180 years, we have meticulously built a reputation for integrity, unparalleled expertise, and delivering exceptional results for our discerning clients.
            </p>
            <p className="about-text">
              Our team harmoniously combines traditional values with modern innovation, providing strategic advice across all sectors of the global property market. Whether you are an investor, developer, landlord, or tenant, we are dedicated to maximizing the value of your assets through bespoke solutions.
            </p>
            <p className="about-text">
              From the heart of London to international markets, our legacy is built on the trust of generations and a commitment to defining the future of luxury real estate and consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline Section */}
      <AboutTimeline />

      {/* Team Section */}
      <TeamSection />

      {/* Stats Section */}
      <StatsSection />
    </main>
  );
}
