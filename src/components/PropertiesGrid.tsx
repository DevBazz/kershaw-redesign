"use client";

import { useRef, useState } from "react";
import { MapPin, Bed, Bath, Square, Heart, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    title: "Beverly Hills Estate",
    location: "Beverly Hills, CA",
    price: "$12,500,000",
    beds: 6,
    baths: 8,
    sqft: "12,500",
    type: "Estate",
    status: "For Sale",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    title: "Malibu Oceanfront Villa",
    location: "Malibu, CA",
    price: "$18,900,000",
    beds: 5,
    baths: 7,
    sqft: "9,800",
    type: "Villa",
    status: "For Sale",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    title: "Manhattan Penthouse",
    location: "New York, NY",
    price: "$25,300,000",
    beds: 4,
    baths: 5,
    sqft: "8,200",
    type: "Penthouse",
    status: "Exclusive",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    title: "Miami Beach Residence",
    location: "Miami Beach, FL",
    price: "$9,750,000",
    beds: 5,
    baths: 6,
    sqft: "7,500",
    type: "Residence",
    status: "For Sale",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    title: "Aspen Mountain Chalet",
    location: "Aspen, CO",
    price: "$15,200,000",
    beds: 7,
    baths: 9,
    sqft: "11,000",
    type: "Chalet",
    status: "For Sale",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop",
    title: "San Francisco Victorian",
    location: "San Francisco, CA",
    price: "$8,500,000",
    beds: 4,
    baths: 5,
    sqft: "6,200",
    type: "Victorian",
    status: "For Sale",
  },
];

const filters = ["All", "Estate", "Villa", "Penthouse", "Residence", "Chalet"];

export default function PropertiesGrid() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useGSAP(() => {
    gsap.fromTo(".property-grid-card",
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".filter-btn",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef, dependencies: [activeFilter] });

  const filteredProperties = activeFilter === "All" 
    ? properties 
    : properties.filter(p => p.type === activeFilter);

  return (
    <section ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,197,24,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,197,24,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-surface border border-white/10 text-foreground/60 hover:border-secondary/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="property-grid-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-secondary text-background px-4 py-2 rounded-full text-xs font-bold uppercase">
                    {property.status}
                  </span>
                </div>

                {/* Favorite Button */}
                <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-secondary transition-all group/fav">
                  <Heart className="w-5 h-5 text-background group-hover/fav:fill-white group-hover/fav:text-white transition-all" />
                </button>

                {/* Property Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="text-white text-2xl font-display mb-3">{property.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl font-bold">{property.price}</span>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-secondary transition-all group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Property Details */}
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

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="bg-surface border border-white/10 hover:border-secondary/30 text-foreground px-10 py-5 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  );
}
