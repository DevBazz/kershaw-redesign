"use client";

import { useEffect, useRef } from "react";
import { Award, Star, Trophy, ArrowRight } from "lucide-react";

export default function DwellioHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fadeInUp');
      }, index * 150);
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0c0a]">
      {/* Background Radial Glow */}
      <div 
        className="glow-halo absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217,119,6,0.55) 0%, rgba(180,83,9,0.25) 35%, transparent 70%)',
        }}
      />

      {/* Optional Subtle Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="fade-in-up opacity-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-secondary/30 bg-secondary/10 mb-8" style={{ animationDelay: '0ms' }}>
          <Award className="w-4 h-4 text-secondary" />
          <span className="text-secondary text-xs font-bold uppercase tracking-wider">Est. 1845 • Luxury Real Estate</span>
        </div>

        {/* Headline */}
        <h1 className="fade-in-up opacity-0 text-[56px] md:text-[72px] font-display text-white leading-[1.1] mb-6 tracking-tight" style={{ animationDelay: '150ms' }}>
          Defining The Art Of<br /><span className="text-secondary italic">Luxury Living</span>
        </h1>

        {/* Subtitle */}
        <p className="fade-in-up opacity-0 text-[17px] text-[rgba(255,255,255,0.6)] max-w-[600px] mx-auto mb-10 leading-relaxed" style={{ animationDelay: '300ms' }}>
          Experience a legacy of excellence with S. Kershaw & Sons. We curate the world's most exceptional properties for discerning clients seeking a life well-lived.
        </p>

        {/* Primary CTA */}
        <div className="fade-in-up opacity-0 flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '450ms' }}>
          <button className="group bg-primary hover:bg-secondary text-white px-10 h-14 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
            Explore Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white/20 hover:border-secondary hover:bg-secondary/10 text-white px-10 h-14 rounded-full font-bold text-sm uppercase tracking-wider transition-all">
            Private Consultation
          </button>
        </div>

        {/* Stats */}
        <div className="fade-in-up opacity-0 grid grid-cols-3 gap-8 max-w-3xl mx-auto" style={{ animationDelay: '600ms' }}>
          <div className="text-center">
            <div className="text-4xl font-display text-white mb-2">500+</div>
            <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Properties Sold</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display text-white mb-2">$2.5B+</div>
            <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Total Value</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display text-white mb-2">178</div>
            <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Years Legacy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
