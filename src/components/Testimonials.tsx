"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    content: "The best experience I've ever had with a real estate agency. They found my dream home in record time!",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    content: "Professional, efficient, and highly transparent. I've closed three deals with them already and won't look elsewhere.",
    rating: 5
  },
  {
    name: "Robert Smith",
    role: "Tech Executive",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    content: "Luxury properties and world-class support. They understand what high-end clients need and deliver every time.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    content: "As an architect, I'm very picky about design. S. Kershaw & Sons represents properties that are truly masterpieces.",
    rating: 5
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.from(".testimonial-card-wrapper", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  const slide = (direction: "next" | "prev") => {
    if (!sliderRef.current) return;
    
    const cardWidth = sliderRef.current.offsetWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    const newIndex = direction === "next" 
      ? Math.min(currentIndex + 1, testimonials.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    setCurrentIndex(newIndex);
    
    gsap.to(sliderRef.current, {
      x: -newIndex * cardWidth,
      duration: 0.8,
      ease: "power3.inOut"
    });
  };

  return (
    <section ref={containerRef} className="py-24 px-6 bg-gradient-to-b from-white to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.05),transparent_50%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Testimonials</span>
            <TextReveal 
              text="What Our Clients Say About Us" 
              className="text-4xl md:text-5xl text-foreground font-display"
            />
            <p className="text-foreground/60 mt-4 text-lg">Trusted by thousands of satisfied homeowners worldwide</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => slide("prev")}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center text-foreground hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => slide("next")}
              disabled={currentIndex === testimonials.length - 1}
              className="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center text-foreground hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{ width: `${(testimonials.length * 100) / 3}%` }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card-wrapper w-full md:w-1/2 lg:w-1/3 shrink-0">
                <div className="bg-white border border-black/5 p-10 rounded-[2.5rem] h-full flex flex-col justify-between hover:border-secondary/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
                  
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-8 text-secondary">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    
                    <p className="text-foreground/60 text-lg md:text-xl italic leading-relaxed mb-10 group-hover:text-foreground/80 transition-colors duration-300">"{t.content}"</p>
                  </div>
                  
                  <div className="flex items-center gap-4 border-t border-black/5 pt-8 relative z-10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/20 group-hover:border-secondary transition-colors duration-300">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold tracking-tight group-hover:text-secondary transition-colors duration-300">{t.name}</h4>
                      <p className="text-foreground/40 text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
