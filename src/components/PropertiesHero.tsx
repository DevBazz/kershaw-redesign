"use client";

import { useRef } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PropertiesHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(".properties-hero-content", { y: 60, opacity: 0, duration: 1 })
      .from(".properties-search", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5");
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 pt-32 pb-20">
        <div className="properties-hero-content">
          <h1 className="text-5xl md:text-8xl font-display text-foreground mb-6 leading-tight">
            Exceptional <span className="text-secondary italic">Properties</span>
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Discover our curated collection of luxury estates, penthouses, and architectural masterpieces in the world's most prestigious locations.
          </p>
        </div>

        <div className="properties-search max-w-4xl mx-auto">
          <div className="bg-surface/80 backdrop-blur-sm border border-white/10 rounded-full p-3 flex items-center gap-4">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search by location, property type, or price..."
                className="flex-1 bg-transparent text-foreground placeholder:text-foreground/40 focus:outline-none"
              />
            </div>
            <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
