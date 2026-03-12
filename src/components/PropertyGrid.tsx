"use client";

import PropertyCard from "./PropertyCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const properties = [
  {
    id: 1,
    title: "The Glass Mansion",
    location: "Beverly Hills, CA",
    price: "$12,500,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    beds: 5,
    baths: 6,
    area: "8,500 sqft"
  },
  {
    id: 2,
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$8,200,000",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop",
    beds: 3,
    baths: 4,
    area: "4,200 sqft"
  },
  {
    id: 3,
    title: "Oceanfront Villa",
    location: "Malibu, CA",
    price: "$15,750,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    beds: 6,
    baths: 7,
    area: "9,800 sqft"
  },
  {
    id: 4,
    title: "Modern Forest House",
    location: "Aspen, CO",
    price: "$5,400,000",
    image: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop",
    beds: 4,
    baths: 4,
    area: "3,800 sqft"
  },
  {
    id: 5,
    title: "Industrial Loft",
    location: "Chicago, IL",
    price: "$2,100,000",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop",
    beds: 2,
    baths: 2,
    area: "2,400 sqft"
  },
  {
    id: 6,
    title: "Luxury Hillside Retreat",
    location: "Austin, TX",
    price: "$3,950,000",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    beds: 4,
    baths: 3,
    area: "3,100 sqft"
  }
];

interface PropertyGridProps {
  title?: string;
  limit?: number;
}

export default function PropertyGrid({ title, limit }: PropertyGridProps) {
  const containerRef = useRef(null);
  const displayProperties = limit ? properties.slice(0, limit) : properties;

  useGSAP(() => {
    // Stagger animation with scale and rotation
    gsap.from(".property-card-wrapper", {
      y: 80,
      opacity: 0,
      scale: 0.95,
      rotateX: 10,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // Animate title section
    gsap.from(".grid-title", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-gradient-to-b from-background to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(44,95,124,0.05),transparent_50%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        {title && (
          <div className="grid-title flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Exclusive Portfolio</span>
              <TextReveal text={title} className="text-4xl md:text-5xl text-foreground font-display" />
              <p className="text-foreground/60 mt-4 text-lg">Discover exceptional properties curated for discerning clients</p>
            </div>
            {!limit && (
              <Link 
                href="/listings" 
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 text-sm font-bold uppercase tracking-wider group"
              >
                <span>View All Properties</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProperties.map((prop) => (
            <div key={prop.id} className="property-card-wrapper">
              <PropertyCard {...prop} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
