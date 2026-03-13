"use client";

import { useRef } from "react";
import { Shield, Award, Heart, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "Unwavering commitment to honesty, transparency, and ethical practices in every transaction.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Pursuing the highest standards of quality and professionalism in all our services.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    desc: "Your goals and satisfaction are at the heart of everything we do.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "Embracing modern technology while honoring traditional values and expertise.",
  },
];

export default function ValuesSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".value-card",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-surface to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,119,6,0.1),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            Our Core <span className="text-secondary italic">Values</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            The principles that guide our legacy of excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div key={i} className="value-card group">
                <div className="relative bg-surface/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-display text-foreground mb-4">{value.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
