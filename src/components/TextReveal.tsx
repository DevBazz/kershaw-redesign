"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function TextReveal({ text, className = "", delay = 0, once = true }: TextRevealProps) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const words = text.split(" ");
    
    gsap.from(".reveal-word", {
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      delay: delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        toggleActions: once ? "play none none none" : "play none none reverse",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden flex flex-wrap gap-x-[0.2em] gap-y-0 ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <span className="reveal-word inline-block">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
