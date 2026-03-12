"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Scale and fade in the CTA box
    gsap.from(".cta-box", {
      scale: 0.95,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });

    // Animate decorative circles
    gsap.from(".cta-circle", {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".cta-box",
        start: "top 75%",
      }
    });

    gsap.from(".cta-desc", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-box",
        start: "top 75%",
      }
    });

    gsap.from(".cta-btn-wrapper", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-box",
        start: "top 75%",
      }
    });

    // Floating animation for decorative elements
    gsap.to(".cta-circle", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-gradient-to-b from-background to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
      
      <div className="cta-box max-w-5xl mx-auto bg-gradient-to-br from-white to-secondary/5 border border-black/5 p-12 md:p-24 rounded-[3.5rem] text-center relative z-10 shadow-2xl overflow-hidden">
        {/* Decorative animated circles */}
        <div className="cta-circle absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="cta-circle absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-secondary/20 to-tertiary/20 rounded-full blur-3xl" />
        <div className="cta-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="cta-content relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 bg-secondary/10 px-6 py-3 rounded-full border border-secondary/20">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span>Limited Time Offer</span>
          </div>
          
          <TextReveal 
            text="Ready to find your dream home?" 
            className="text-4xl md:text-6xl font-display text-foreground mb-8 leading-tight justify-center"
          />
          
          <p className="cta-desc text-foreground/40 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            Join thousands of satisfied homeowners who found their perfect place through S. Kershaw & Sons. Your journey begins with a single click.
          </p>
          
          <div className="cta-btn-wrapper flex flex-col sm:flex-row gap-4">
            <Link 
              href="/listings" 
              className="bg-primary hover:bg-tertiary text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 inline-flex items-center justify-center gap-2 group shadow-[0_20px_40px_rgba(44,95,124,0.3)] hover:shadow-[0_20px_50px_rgba(139,69,19,0.4)] hover:scale-105 active:scale-95"
            >
              <span>Browse Properties</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-black/10 hover:border-secondary hover:bg-secondary/10 text-foreground px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Schedule Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
