"use client";

import { useRef } from "react";
import { Award, Users, TrendingUp, Globe } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  { year: "1845", title: "Foundation", desc: "S. Kershaw & Sons established in London" },
  { year: "1920", title: "Expansion", desc: "Opened offices across major European cities" },
  { year: "1985", title: "Global Reach", desc: "Established presence in North America and Asia" },
  { year: "2024", title: "Digital Era", desc: "Leading luxury real estate with cutting-edge technology" },
];

export default function AboutTimeline() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".timeline-item",
      { x: -100, opacity: 0 },
      {
        x: 0,
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

    gsap.fromTo(".timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.08),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            Our <span className="text-secondary italic">Legacy</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Nearly two centuries of excellence in luxury real estate
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary origin-top" />
          
          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <div key={i} className="timeline-item relative pl-24">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm border-4 border-surface">
                  {milestone.year}
                </div>
                <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-secondary/30 transition-all">
                  <h3 className="text-2xl font-display text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-foreground/60">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
