"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  "Curated luxury properties worldwide",
  "Expert market analysis & insights",
  "Personalized property matching",
  "Seamless transaction management",
  "Post-purchase support & services"
];

export default function ParallaxSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Parallax effect on image
    gsap.to(imageRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Content animations
    gsap.from(contentRef.current, {
      x: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    gsap.from(".feature-item", {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".feature-list",
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,var(--primary)_48%,var(--primary)_52%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Our Approach
              </span>
              <h2 className="text-5xl md:text-6xl font-display text-foreground mb-6 leading-tight">
                Redefining Luxury Real Estate
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                With over 178 years of excellence, S. Kershaw & Sons has mastered the art of 
                connecting discerning clients with extraordinary properties. Our legacy is built 
                on trust, expertise, and an unwavering commitment to excellence.
              </p>
            </div>

            <div className="feature-list space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="feature-item flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <CheckCircle size={14} className="text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 bg-primary hover:bg-tertiary text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 group shadow-[0_20px_40px_rgba(44,95,124,0.3)] hover:shadow-[0_20px_50px_rgba(139,69,19,0.4)] hover:scale-105"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image with Parallax */}
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl">
            <div ref={imageRef} className="absolute inset-0 scale-125">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Property"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm border border-black/5 rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-display text-foreground mb-1">$2.5B+</div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-wider font-bold">Total Sales</div>
                </div>
                <div>
                  <div className="text-2xl font-display text-foreground mb-1">50+</div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-wider font-bold">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-display text-foreground mb-1">24/7</div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-wider font-bold">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
