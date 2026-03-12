"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 1845, label: "Established", suffix: "" },
  { value: 120, label: "Properties Managed", suffix: "+" },
  { value: 850, label: "Clients Served", suffix: "+" },
  { value: 2, label: "Bn Property Value", suffix: "B+" }
];

export default function Stats() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".stat-item", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 bg-white border-y border-black/5 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-black/5">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col items-center justify-center p-4">
              <div className="text-4xl md:text-6xl font-display text-primary mb-3 tracking-tighter">
                {stat.value}<span className="text-2xl md:text-3xl text-primary/60 align-top">{stat.suffix}</span>
              </div>
              <div className="text-foreground/40 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
