"use client";

import Image from "next/image";
import Link from "next/link";
import SearchFilter from "./SearchFilter";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate floating orbs
    gsap.to(".floating-orb", {
      y: "random(-30, 30)",
      x: "random(-20, 20)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.3,
        from: "random"
      }
    });

    // Hero content animations
    tl.from(".hero-badge", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2
    });

    tl.from(".hero-btns", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1
    }, "-=0.6");

    tl.from(".hero-search", {
      y: 50,
      opacity: 0,
      duration: 1.2,
    }, "-=0.8");

    tl.from(".hero-img-container", {
      scale: 0.95,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.5");

    // Parallax effect on images
    gsap.to(imgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Stats counter animation
    gsap.from(".stat-number", {
      textContent: 0,
      duration: 2,
      ease: "power1.inOut",
      snap: { textContent: 1 },
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".hero-stats",
        start: "top 80%"
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Modern Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="floating-orb absolute top-20 right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="floating-orb absolute bottom-20 left-[15%] w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        <div className="floating-orb absolute top-1/2 right-[30%] w-64 h-64 bg-tertiary/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,95,124,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,95,124,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col">
          <div className="hero-badge inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 bg-secondary/10 px-6 py-3 rounded-full border border-secondary/30 w-fit">
            <Sparkles size={14} className="animate-pulse" />
            <span>Est. 1845 • Luxury Real Estate</span>
          </div>
          
          <TextReveal 
            text="Defining The Art Of Luxury Living" 
            className="text-6xl md:text-8xl font-display text-foreground mb-8 leading-[1.05] tracking-tighter"
          />
          
          <TextReveal 
            text="Experience a legacy of excellence with S. Kershaw & Sons. We curate the world's most exceptional properties for a life well-lived."
            className="text-foreground/60 text-lg md:text-xl mb-12 max-w-lg leading-relaxed"
            delay={0.5}
          />

          <div className="flex flex-wrap gap-4">
            <Link href="/listings" className="hero-btns bg-primary hover:bg-tertiary text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-2 group shadow-[0_20px_40px_rgba(44,95,124,0.3)] hover:shadow-[0_20px_50px_rgba(139,69,19,0.4)] hover:scale-105">
              <span>Explore Portfolio</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="hero-btns border-2 border-black/10 hover:border-secondary hover:bg-secondary/10 text-foreground px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 hover:scale-105">
              Private Consultation
            </Link>
          </div>

          <div className="hero-search mt-16 w-full lg:w-[140%] relative z-20">
             <SearchFilter />
          </div>

          {/* Stats Section */}
          <div className="hero-stats mt-12 grid grid-cols-3 gap-8 lg:w-[140%]">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-display text-foreground mb-2">
                <span className="stat-number">500</span>+
              </div>
              <p className="text-foreground/40 text-xs uppercase tracking-wider font-bold">Properties Sold</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-display text-foreground mb-2">
                <span className="stat-number">1200</span>+
              </div>
              <p className="text-foreground/40 text-xs uppercase tracking-wider font-bold">Happy Clients</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-display text-foreground mb-2">
                <span className="stat-number">178</span>
              </div>
              <p className="text-foreground/40 text-xs uppercase tracking-wider font-bold">Years Legacy</p>
            </div>
          </div>
        </div>

        <div className="hero-img-container relative h-[650px] w-full hidden lg:block">
          {/* Floating Badge */}
          <div className="absolute -top-6 -left-6 bg-white border border-black/5 rounded-2xl px-6 py-4 shadow-xl z-20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
              <div>
                <p className="text-xs font-bold text-foreground">Available Now</p>
                <p className="text-[10px] text-foreground/40 uppercase tracking-wider">Premium Listings</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-12 -right-12 w-full h-full overflow-hidden rounded-[3rem] border border-secondary/10 z-0 opacity-20">
            <Image 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
              alt="Luxury Estate" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="hero-img-inner relative h-full w-full overflow-hidden rounded-[3rem] border border-black/5 shadow-2xl z-10 bg-white">
            <Image 
              ref={imgRef}
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
              alt="Premier Property" 
              fill 
              className="object-cover scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Price Badge */}
          <div className="absolute -bottom-6 -right-6 bg-secondary text-white rounded-2xl px-8 py-6 shadow-2xl z-20">
            <p className="text-xs uppercase tracking-wider font-bold mb-1 opacity-90">Starting From</p>
            <p className="text-3xl font-display">$2.5M</p>
          </div>
        </div>
      </div>
    </section>
  );
}
