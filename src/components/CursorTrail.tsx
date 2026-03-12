"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Bubble {
  x: number;
  y: number;
  size: number;
  element: HTMLDivElement;
  hue: number;
}

export default function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const hueRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Only run on desktop
    if (window.innerWidth < 768) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create bubble pool
    const bubblePool: Bubble[] = [];
    const maxBubbles = 30;

    // Animation loop for rainbow hue
    const animateHue = () => {
      hueRef.current = (hueRef.current + 1) % 360;
      requestAnimationFrame(animateHue);
    };
    animateHue();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Animate main cursor
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });

      // Create bubbles on move
      if (Math.random() > 0.3) { // 70% chance to create bubble
        createBubble(e.clientX, e.clientY);
      }
    };

    // Create bubble function
    const createBubble = (x: number, y: number) => {
      if (bubblePool.length >= maxBubbles) {
        // Remove oldest bubble
        const oldBubble = bubblePool.shift();
        if (oldBubble && document.body.contains(oldBubble.element)) {
          document.body.removeChild(oldBubble.element);
        }
      }

      const bubble = document.createElement("div");
      const size = Math.random() * 30 + 15; // 15-45px
      const hue = hueRef.current;
      const saturation = 70 + Math.random() * 30; // 70-100%
      const lightness = 50 + Math.random() * 20; // 50-70%
      
      bubble.className = "cursor-bubble";
      bubble.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle at 30% 30%, 
          hsla(${hue}, ${saturation}%, ${lightness + 20}%, 0.8),
          hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)
        );
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%) scale(0);
        box-shadow: 
          0 0 ${size}px hsla(${hue}, ${saturation}%, ${lightness}%, 0.4),
          inset 0 0 ${size / 2}px hsla(${hue + 30}, ${saturation}%, ${lightness + 10}%, 0.3);
        will-change: transform, opacity;
      `;

      document.body.appendChild(bubble);

      const bubbleData: Bubble = {
        x,
        y,
        size,
        element: bubble,
        hue
      };

      bubblePool.push(bubbleData);

      // Animate bubble
      const tl = gsap.timeline();
      
      // Pop in
      tl.to(bubble, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)"
      });

      // Float up and fade
      tl.to(bubble, {
        y: `-=${Math.random() * 100 + 50}`,
        x: `+=${(Math.random() - 0.5) * 60}`,
        scale: 0.5,
        opacity: 0,
        duration: 1.5 + Math.random(),
        ease: "power1.out",
        onComplete: () => {
          if (document.body.contains(bubble)) {
            document.body.removeChild(bubble);
          }
          const index = bubblePool.indexOf(bubbleData);
          if (index > -1) {
            bubblePool.splice(index, 1);
          }
        }
      }, "-=0.2");
    };

    // Hover effects for interactive elements
    const handleMouseEnter = () => {
      isHovering.current = true;
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: "back.out(2)"
      });
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Click effect - burst of bubbles
    const handleClick = (e: MouseEvent) => {
      // Create burst of bubbles
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const angle = (Math.PI * 2 * i) / 8;
          const distance = 30;
          const x = e.clientX + Math.cos(angle) * distance;
          const y = e.clientY + Math.sin(angle) * distance;
          createBubble(x, y);
        }, i * 30);
      }

      // Cursor pop animation
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(cursor, {
            scale: isHovering.current ? 1.5 : 1,
            duration: 0.3,
            ease: "back.out(2)"
          });
        }
      });
    };

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], .cursor-hover, img'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Hide cursor when leaving window
    const handleMouseLeaveWindow = () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.2
      });
    };

    const handleMouseEnterWindow = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.2
      });
    };

    // Event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    document.addEventListener("click", handleClick);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", checkMobile);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });

      bubblePool.forEach((bubble) => {
        if (document.body.contains(bubble.element)) {
          document.body.removeChild(bubble.element);
        }
      });
    };
  }, []);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor - Rainbow gradient ring */}
      <div
        ref={cursorRef}
        className="cursor-main"
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          background: `conic-gradient(
            from 0deg,
            hsl(0, 100%, 60%),
            hsl(60, 100%, 60%),
            hsl(120, 100%, 60%),
            hsl(180, 100%, 60%),
            hsl(240, 100%, 60%),
            hsl(300, 100%, 60%),
            hsl(360, 100%, 60%)
          )`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "screen",
          opacity: 0.8,
          willChange: "transform",
          animation: "rainbow-spin 3s linear infinite",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Inner white circle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30px",
            height: "30px",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }

        @keyframes rainbow-spin {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }

        @keyframes bubble-float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
