"use client";

import { useRef } from "react";
import { Zap, Shield, TrendingUp, Award } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  { icon: Zap, title: "Exclusive Listings", desc: "Access to off-market properties and premier estates before they reach the public." },
  { icon: Shield, title: "Trusted Legacy", desc: "178 years of excellence in luxury real estate with complete discretion guaranteed." },
  { icon: TrendingUp, title: "Market Expertise", desc: "Deep market insights and strategic guidance for optimal investment decisions." },
  { icon: Award, title: "White-Glove Service", desc: "Personalized concierge service extending beyond acquisition to lifestyle management." },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".feature-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-background to-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,119,6,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            The <span className="text-secondary italic">Kershaw</span> Difference
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Experience unparalleled service and expertise in luxury real estate, refined over nearly two centuries of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="feature-card group relative bg-surface/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display text-foreground mb-3">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
