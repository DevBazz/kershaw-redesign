"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });

  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/5 z-[999] pointer-events-none">
      <div 
        ref={progressRef}
        className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary origin-left"
        style={{ scaleX: 0 }}
      />
    </div>
  );
}
