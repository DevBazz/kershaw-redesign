"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/listings" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function ModernMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 1,
        ease: "expo.inOut",
      });

      gsap.fromTo(".menu-item",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(".menu-footer",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.7 }
      );
    } else {
      gsap.to(overlayRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.8,
        ease: "expo.inOut",
      });
    }
  }, { scope: menuRef, dependencies: [isOpen] });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <nav ref={menuRef} className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 ${scrolled && !isOpen ? "bg-background/90 backdrop-blur-xl py-4 border-b border-white/5" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-[110]">
        <Link href="/" className="group flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="font-display text-2xl md:text-3xl tracking-tighter text-foreground uppercase">
            S.KERSHAW<span className="text-secondary"> & SONS.</span>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-3 bg-foreground/5 hover:bg-foreground/10 backdrop-blur-md border border-foreground/10 rounded-full py-2 px-2 pl-6 transition-all active:scale-95"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/70 group-hover:text-foreground">
            {isOpen ? "Close" : "Menu"}
          </span>
          <div className={`w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full transition-all ${isOpen ? "bg-secondary" : "bg-primary"}`}>
            <span className={`w-4 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`w-4 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </div>
        </button>
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-gradient-to-br from-background via-surface to-background w-full h-screen z-[105]"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.1),transparent_50%)]" />
        
        <div className="h-full flex flex-col justify-center items-center px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display text-foreground/[0.02] pointer-events-none select-none">
            MENU
          </div>

          <div className="flex flex-col items-center gap-2 relative z-10">
            {navItems.map((item, i) => (
              <div key={item.name} className="overflow-hidden">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="menu-item group relative flex items-center gap-4 text-4xl md:text-7xl font-display text-foreground hover:text-secondary transition-colors"
                >
                  <span className="text-sm text-secondary/50 group-hover:text-secondary">0{i + 1}</span>
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-2 left-0 w-0 h-1 bg-secondary transition-all group-hover:w-full" />
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="menu-footer absolute bottom-0 left-0 right-0 py-8 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-foreground/30 uppercase tracking-[0.3em] text-[10px] font-bold">Follow</span>
                <div className="flex gap-4">
                  {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="text-foreground/40 hover:text-secondary transition-all hover:scale-110">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 md:items-center">
                <span className="text-foreground/30 uppercase tracking-[0.3em] text-[10px] font-bold">Contact</span>
                <a href="mailto:hello@skershaw.com" className="text-sm text-foreground hover:text-secondary transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  hello@skershaw.com
                </a>
              </div>

              <div className="flex flex-col gap-2 md:items-end">
                <span className="text-foreground/30 uppercase tracking-[0.3em] text-[10px] font-bold">Location</span>
                <p className="text-foreground/40 text-xs flex items-center gap-2">
                  <MapPin size={16} />
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
