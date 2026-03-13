"use client";

import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".cta-content",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    gsap.to(".floating-element", {
      y: "random(-20, 20)",
      x: "random(-15, 15)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      <div className="floating-element absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="floating-element absolute bottom-20 left-[15%] w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="cta-content bg-gradient-to-br from-primary to-secondary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">Exclusive Opportunity</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display text-white mb-6 leading-tight">
              Begin Your Journey to<br /><span className="italic">Exceptional Living</span>
            </h2>

            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a private consultation with our luxury real estate specialists and discover properties that transcend the ordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-primary px-10 py-5 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-primary transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
