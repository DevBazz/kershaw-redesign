"use client";

import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Victoria Ashford",
    role: "Estate Owner, Beverly Hills",
    text: "S. Kershaw & Sons found us the perfect estate with complete discretion. Their expertise in luxury properties is unmatched.",
    rating: 5,
  },
  {
    name: "James Wellington",
    role: "Property Investor",
    text: "The market insights and exclusive access to off-market properties have been invaluable to my portfolio growth.",
    rating: 5,
  },
  {
    name: "Isabella Chen",
    role: "International Buyer",
    text: "From acquisition to lifestyle management, their white-glove service exceeded all expectations. Truly exceptional.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".testimonial-card",
      { y: 80, opacity: 0, rotateX: -15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
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
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-surface to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,197,24,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            Trusted by <span className="text-secondary italic">Discerning Clients</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Hear from our distinguished clientele about their experience with S. Kershaw & Sons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card relative bg-surface/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-500">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-foreground/80 text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div>
                  <p className="text-foreground font-bold">{testimonial.name}</p>
                  <p className="text-foreground/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
