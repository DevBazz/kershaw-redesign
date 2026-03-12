"use client";

import { MapPin, Bed, Bath, Move, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PropertyProps {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  area: string;
}

export default function PropertyCard({ id, title, location, price, image, beds, baths, area }: PropertyProps) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    // Parallax effect on image
    gsap.to(imgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Hover animation for card
    const card = cardRef.current;
    
    card?.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    card?.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    });

  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="group bg-white border border-black/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:border-secondary/30">
      <div className="relative h-72 overflow-hidden">
        <Image 
          ref={imgRef}
          src={image} 
          alt={title} 
          fill 
          className="object-cover scale-125 transition-all duration-700 group-hover:scale-[1.35] group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-6 left-6 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
          Exclusive
        </div>
        <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer">
          <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-baseline justify-between mb-3">
          <div className="text-3xl font-display text-foreground group-hover:text-primary transition-colors duration-300">{price}</div>
          <div className="text-xs text-foreground/40 uppercase tracking-wider font-bold">ID: {id}</div>
        </div>
        <h3 className="text-foreground font-bold text-xl mb-3 line-clamp-1 group-hover:text-secondary transition-colors duration-300">{title}</h3>
        
        <div className="flex items-center gap-2 text-foreground/40 text-sm mb-8">
          <MapPin size={16} className="text-secondary" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between border-y border-black/5 py-5 mb-8">
          <div className="flex items-center gap-2 text-foreground/60 text-xs font-bold uppercase tracking-wider">
            <Bed size={16} className="text-secondary" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/60 text-xs font-bold uppercase tracking-wider">
            <Bath size={16} className="text-secondary" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/60 text-xs font-bold uppercase tracking-wider">
            <Move size={16} className="text-secondary" />
            <span>{area}</span>
          </div>
        </div>

        <Link 
          href={`/listings/${id}`} 
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border-2 border-black/10 text-foreground text-xs font-bold uppercase tracking-widest transition-all duration-500 hover:bg-primary hover:border-primary hover:text-white hover:shadow-[0_10px_30px_rgba(44,95,124,0.3)] group/btn"
        >
          <span>View Details</span>
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
