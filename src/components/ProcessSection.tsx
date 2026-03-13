"use client";

import { useRef } from "react";
import { Search, Calendar, Key, Award } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    desc: "Share your vision and requirements with our expert consultants who will understand your unique needs.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Curation",
    desc: "We curate a personalized selection of properties that match your criteria and exceed expectations.",
  },
  {
    icon: Key,
    number: "03",
    title: "Private Viewing",
    desc: "Experience exclusive private viewings of hand-selected properties with complete discretion.",
  },
  {
    icon: Award,
    number: "04",
    title: "Acquisition",
    desc: "Seamless transaction management with white-glove service from offer to closing and beyond.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".process-step",
      { y: 80, opacity: 0 },
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

    gsap.fromTo(".process-line",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-background to-surface overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,197,24,0.08),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            How It <span className="text-secondary italic">Works</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Our proven process ensures a seamless journey from discovery to acquisition
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="process-line hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary origin-left" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="process-step relative">
                  <div className="relative bg-surface/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm border-4 border-surface">
                      {step.number}
                    </div>
                    
                    <div className="mt-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-display text-foreground mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
