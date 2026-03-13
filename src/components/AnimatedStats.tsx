"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Award, Users, Building } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    icon: <Building size={32} />,
    value: 500,
    suffix: "+",
    label: "Properties Sold",
    color: "from-primary to-secondary"
  },
  {
    icon: <Users size={32} />,
    value: 1200,
    suffix: "+",
    label: "Happy Clients",
    color: "from-secondary to-tertiary"
  },
  {
    icon: <Award size={32} />,
    value: 178,
    suffix: "",
    label: "Years Legacy",
    color: "from-tertiary to-primary"
  },
  {
    icon: <TrendingUp size={32} />,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    color: "from-primary to-secondary"
  }
];

export default function AnimatedStats() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate stat cards
    gsap.from(".stat-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Animate numbers
    gsap.from(".stat-value", {
      textContent: 0,
      duration: 2.5,
      ease: "power2.out",
      snap: { textContent: 1 },
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // Floating animation for icons
    gsap.to(".stat-icon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(44,95,124,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card group relative bg-white border border-black/5 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="stat-icon text-secondary mb-6 inline-block">
                  {stat.icon}
                </div>
                
                <div className="mb-4">
                  <span className="stat-value text-5xl font-display text-foreground block">
                    {stat.value}
                  </span>
                  <span className="text-5xl font-display text-secondary">{stat.suffix}</span>
                </div>
                
                <p className="text-foreground/40 text-sm uppercase tracking-wider font-bold">
                  {stat.label}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-secondary/10 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
