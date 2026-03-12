"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/listings" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Full Page Menu Animation
  useGSAP(() => {
    if (isOpen) {
      // Open animation
      gsap.to(menuOverlayRef.current, { 
        yPercent: 0, 
        duration: 1.2, 
        ease: "expo.inOut",
        pointerEvents: "auto",
        visibility: "visible"
      });
      
      gsap.fromTo(".menu-link", 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 1, 
          ease: "power4.out",
          delay: 0.4
        }
      );

      gsap.fromTo(".menu-footer-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.6
        }
      );
    } else {
      // Close animation
      gsap.to(menuOverlayRef.current, { 
        yPercent: -100, 
        duration: 1, 
        ease: "expo.inOut",
        pointerEvents: "none",
        onComplete: () => {
          gsap.set(menuOverlayRef.current, { visibility: "hidden" });
        }
      });
      
      gsap.to(".menu-link", { 
        y: -50, 
        opacity: 0, 
        duration: 0.5, 
        ease: "power2.in" 
      });
    }
  }, { scope: navRef, dependencies: [isOpen] });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 ${
        scrolled && !isOpen ? "bg-background/80 backdrop-blur-xl py-4 border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-[110]">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="font-display text-2xl md:text-3xl tracking-tighter text-foreground uppercase">
            S.KERSHAW<span className="text-secondary group-hover:animate-pulse"> & SONS.</span>
          </div>
        </Link>
        
        {/* Right - Menu Toggle & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <Magnetic>
              <Link href="/contact" className="bg-primary hover:bg-tertiary text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group shadow-[0_10px_20px_rgba(44,95,124,0.2)]">
                <span>Get Started</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Magnetic>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="group flex items-center gap-3 bg-foreground/5 hover:bg-foreground/10 backdrop-blur-md border border-foreground/10 rounded-full py-2 px-2 pl-6 transition-all active:scale-95"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/70 group-hover:text-foreground transition-colors">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className={`w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full transition-transform group-hover:rotate-90 ${isOpen ? "bg-secondary" : "bg-foreground"}`}>
              <span className={`w-4 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
              <span className={`w-4 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Full Page Menu Overlay */}
      <div 
        ref={menuOverlayRef} 
        className="fixed inset-0 bg-background w-full h-[100dvh] flex flex-col z-[105] overflow-hidden invisible pointer-events-none"
      >
        {/* Background Text - Simplified and positioned better */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display text-foreground/[0.02] pointer-events-none select-none uppercase z-0">
          Menu
        </div>

        <div className="flex-1 flex flex-col justify-center items-center py-12 px-6 relative z-10 min-h-0">
          <span className="text-secondary uppercase tracking-[0.5em] text-[10px] font-bold mb-4">Navigate</span>
          <div className="flex flex-col items-center gap-1 md:gap-2 max-h-full overflow-hidden">
            {navItems.map((item, index) => (
              <div key={item.name} className="overflow-hidden py-0.5">
                <Link 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="menu-link opacity-0 group relative flex items-center gap-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display text-foreground transition-all hover:tracking-tighter"
                >
                  <span className="text-xs md:text-sm font-sans text-secondary opacity-0 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-2 left-0 w-0 h-1 bg-secondary transition-all group-hover:w-full" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-background py-6 md:py-10 px-6 md:px-12 border-t border-foreground/5 relative z-10 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="menu-footer-item opacity-0 flex flex-col gap-3">
              <span className="text-foreground/20 uppercase tracking-[0.3em] text-[10px] font-bold">Follow Our Journey</span>
              <div className="flex gap-5">
                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="text-foreground/40 hover:text-secondary transition-all hover:scale-110">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="menu-footer-item opacity-0 flex flex-col gap-2 md:items-center text-left md:text-center">
              <span className="text-foreground/20 uppercase tracking-[0.3em] text-[10px] font-bold">General Inquiries</span>
              <a href="mailto:hello@skershaw.com" className="text-sm md:text-base font-bold text-foreground hover:text-secondary transition-colors underline underline-offset-4 decoration-black/10 hover:decoration-secondary">
                hello@skershaw.com
              </a>
            </div>

            <div className="menu-footer-item opacity-0 flex flex-col gap-2 md:items-end text-left md:text-right">
              <span className="text-foreground/20 uppercase tracking-[0.3em] text-[10px] font-bold">Headquarters</span>
              <p className="text-foreground/40 text-[10px] md:text-xs font-medium leading-relaxed">
                123 Luxury Blvd, <br />
                Beverly Hills, CA 90210
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
