"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 500, suffix: "+", label: "Luxury Properties Sold" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 2.5, suffix: "B+", label: "Total Value Transacted", prefix: "$" },
  { value: 178, suffix: "", label: "Years of Excellence" },
];

export default function StatsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    stats.forEach((stat, i) => {
      gsap.fromTo(`.stat-${i}`,
        { textContent: 0 },
        {
          textContent: stat.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: stat.suffix === "B+" ? 0.1 : 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    });

    gsap.fromTo(".stat-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card text-center">
              <div className="text-5xl md:text-6xl font-display text-foreground mb-3">
                {stat.prefix}
                <span className={`stat-${i}`}>0</span>
                {stat.suffix}
              </div>
              <p className="text-foreground/50 text-sm uppercase tracking-wider font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
