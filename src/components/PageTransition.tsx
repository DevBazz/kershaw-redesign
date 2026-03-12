"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page enter animation
    const tl = gsap.timeline();
    
    tl.to(overlayRef.current, {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.6,
      ease: "power4.inOut"
    });

    tl.to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.6,
      ease: "power4.inOut",
      delay: 0.1
    });

  }, [pathname]);

  return (
    <>
      {/* Page transition overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-gradient-to-br from-primary via-secondary to-tertiary z-[9999] pointer-events-none"
        style={{ scaleY: 0, transformOrigin: "bottom" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter">
            S.Kershaw<span className="text-white/60"> & Sons.</span>
          </div>
        </div>
      </div>
      
      {children}
    </>
  );
}
