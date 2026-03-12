"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (!buttonRef.current) return;

    if (isVisible) {
      gsap.to(buttonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    } else {
      gsap.to(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-tertiary text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_20px_40px_rgba(44,95,124,0.4)] transition-all duration-500 z-50 group"
      style={{ scale: 0, opacity: 0 }}
      aria-label="Back to top"
    >
      <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
}
