"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    title: "Buy a Property",
    description: "Find your dream home from our exclusive collection of luxury properties.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    link: "/listings?type=buy"
  },
  {
    title: "Sell a Property",
    description: "Expert guidance and strategic marketing to ensure the best value for your asset.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    link: "/contact?subject=sell"
  },
  {
    title: "Rent a Property",
    description: "Premium rental options in the most sought-after locations.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop",
    link: "/listings?type=rent"
  }
];

export default function Categories() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".category-card", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={cat.link}
              className="category-card group relative h-[500px] overflow-hidden rounded-3xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transform">
                  {cat.description}
                </p>
                <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs">
                  <span>Explore Now</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
