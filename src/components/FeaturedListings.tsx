"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowRight, Bed, Bath, Move } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const listings = [
  {
    id: 1,
    title: "The Penthouse, Mayfair",
    location: "Berkeley Square, London",
    price: "£12,500,000",
    image: "https://images.unsplash.com/photo-1600596542815-6000c15cbe26?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    specs: { beds: 5, baths: 6, area: "4,500 sqft" }
  },
  {
    id: 2,
    title: "Riverside Estate",
    location: "Richmond, London",
    price: "£8,750,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    category: "Residential",
    specs: { beds: 6, baths: 5, area: "6,200 sqft" }
  },
  {
    id: 3,
    title: "Modern Glass Villa",
    location: "Cambridge, UK",
    price: "£4,200,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    specs: { beds: 4, baths: 4, area: "3,800 sqft" }
  },
  {
    id: 4,
    title: "Historic Townhouse",
    location: "Kensington, London",
    price: "£6,950,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    specs: { beds: 5, baths: 4, area: "5,100 sqft" }
  }
];

export default function FeaturedListings() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const sections = gsap.utils.toArray(".listing-item");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollContainer.offsetWidth,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-background overflow-hidden relative">
      <div className="absolute top-12 left-6 md:left-12 z-10 pointer-events-none">
         <span className="text-primary uppercase tracking-widest text-[10px] font-bold mb-2 block">Exclusive Portfolio</span>
         <h2 className="text-3xl md:text-4xl text-foreground font-display">Featured Properties</h2>
      </div>

      <div ref={scrollContainerRef} className="flex w-[400%] h-screen">
        {listings.map((item, index) => (
          <div key={index} className="listing-item w-screen h-full flex flex-col md:flex-row relative">
            {/* Image Side */}
            <div className="w-full md:w-3/5 h-[50vh] md:h-full relative overflow-hidden">
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                 style={{ backgroundImage: `url(${item.image})` }}
               />
               <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-2/5 h-[50vh] md:h-full bg-white flex flex-col justify-center px-8 md:px-20 border-l border-foreground/5 relative">
              <span className="text-primary text-[10px] uppercase tracking-widest mb-4 border border-primary/30 px-3 py-1 rounded-full w-fit font-bold">
                {item.category}
              </span>
              
              <h3 className="text-3xl md:text-5xl font-display text-foreground mb-4 leading-tight">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-2 text-foreground/60 mb-6">
                <MapPin size={18} className="text-primary" />
                <span className="text-lg">{item.location}</span>
              </div>

              {/* Property Specs */}
              <div className="flex items-center gap-6 mb-8 text-foreground/40 border-y border-foreground/5 py-4">
                <div className="flex items-center gap-2">
                  <Bed size={16} className="text-primary" />
                  <span className="text-sm">{item.specs.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={16} className="text-primary" />
                  <span className="text-sm">{item.specs.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Move size={16} className="text-primary" />
                  <span className="text-sm">{item.specs.area}</span>
                </div>
              </div>

              <div className="text-3xl text-foreground mb-10 font-display">
                {item.price}
              </div>

              <Link href={`/listings/${item.id}`} className="group flex items-center gap-4 text-foreground">
                <span className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </span>
                <span className="uppercase text-[10px] tracking-widest font-bold">View Details</span>
              </Link>
              
              <div className="absolute bottom-8 right-8 text-foreground/[0.03] text-9xl font-display select-none pointer-events-none">
                0{index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
