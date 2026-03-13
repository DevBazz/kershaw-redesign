"use client";

import { useRef } from "react";
import { ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const properties = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    title: "Beverly Hills Estate",
    location: "Beverly Hills, CA",
    price: "$12.5M",
    beds: 6,
    baths: 8,
    sqft: "12,500",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    title: "Malibu Oceanfront Villa",
    location: "Malibu, CA",
    price: "$18.9M",
    beds: 5,
    baths: 7,
    sqft: "9,800",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    title: "Manhattan Penthouse",
    location: "New York, NY",
    price: "$25.3M",
    beds: 4,
    baths: 5,
    sqft: "8,200",
  },
];

export default function PropertiesShowcase() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".showcase-header",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".property-card",
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="showcase-header flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-display text-foreground mb-4">
              Featured <span className="text-secondary italic">Properties</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Explore our curated collection of exceptional estates, each representing the pinnacle of luxury living.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-foreground hover:text-secondary transition-colors">
            <span className="text-sm font-bold uppercase tracking-wider">View All</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <div key={i} className="property-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-background font-bold text-sm">{property.price}</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-display mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-foreground/60 text-sm">
                  <Bed className="w-4 h-4" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 text-sm">
                  <Bath className="w-4 h-4" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 text-sm">
                  <Square className="w-4 h-4" />
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
