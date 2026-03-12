"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset scroll
    window.scrollTo(0, 0);

    // Transition Sequence
    tl.set(".transition-panel", { 
      scaleY: 1, 
      transformOrigin: "bottom" 
    })
    .to(".transition-panel", {
      scaleY: 0,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.1,
      transformOrigin: "top"
    })
    .from(".page-content", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

  }, { scope: containerRef, dependencies: [pathname] });

  return (
    <div ref={containerRef} className="relative">
      {/* Multi-layer Transition Curtain - Adjusted for Bright Theme */}
      <div className="transition-panel fixed inset-0 bg-foreground z-[100] pointer-events-none" />
      <div className="transition-panel fixed inset-0 bg-primary z-[99] pointer-events-none" />
      <div className="transition-panel fixed inset-0 bg-background z-[98] pointer-events-none" />
      
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
