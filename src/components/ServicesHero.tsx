"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ServicesHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(".services-hero-badge", { y: 30, opacity: 0, duration: 0.8 })
      .from(".services-hero-title", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
      .from(".services-hero-desc", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".services-hero-cta", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4");

    gsap.to(".floating-shape", {
      y: "random(-30, 30)",
      x: "random(-20, 20)",
      rotation: "random(-15, 15)",
      duration: "random(4, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      <div className="floating-shape absolute top-20 right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="floating-shape absolute bottom-20 left-[15%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pt-32 pb-20">
        <div className="services-hero-badge inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 px-6 py-3 rounded-full mb-8">
          <span className="text-secondary text-xs font-bold uppercase tracking-wider">Comprehensive Services</span>
        </div>

        <h1 className="services-hero-title text-5xl md:text-8xl font-display text-foreground mb-8 leading-tight">
          Luxury Real Estate<br />
          <span className="text-secondary italic">Redefined</span>
        </h1>

        <p className="services-hero-desc text-foreground/60 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          From property curation to lifetime concierge services, we deliver an unparalleled suite of solutions designed to exceed the expectations of the world's most discerning clients.
        </p>

        <button className="services-hero-cta group bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all inline-flex items-center gap-2">
          Schedule Consultation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
