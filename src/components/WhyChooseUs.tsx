"use client";

import FeatureCard from "./FeatureCard";
import { Users, ShieldCheck, Gem, Headphones } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: <Users size={28} />,
    title: "Trusted Agents",
    description: "Our professional agents are committed to providing the best service and guidance."
  },
  {
    icon: <Gem size={28} />,
    title: "Premium Properties",
    description: "Access our curated collection of the most exclusive properties in the market."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Transactions",
    description: "We ensure every step of your property journey is safe, legal and transparent."
  },
  {
    icon: <Headphones size={28} />,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to answer your questions."
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Stagger animation for feature cards with scale
    gsap.from(".feature-card-wrapper", {
      y: 60,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // Floating animation for icons
    gsap.to(".feature-icon", {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-gradient-to-b from-white to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,95,124,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,95,124,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Why Us</span>
          <TextReveal 
            text="The Best Choice For You" 
            className="text-4xl md:text-5xl text-foreground font-display justify-center mb-4"
          />
          <p className="text-foreground/60 text-lg max-w-2xl">Experience unparalleled service and expertise in luxury real estate</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-wrapper">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
