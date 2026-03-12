"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Home, BarChart3, Ruler, Landmark, Key, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: <Building2 size={28} />,
    title: "Building Consultancy",
    description: "Expert advice on construction, defects, and maintenance for commercial and residential properties."
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Valuation",
    description: "RICS Red Book valuations for loan security, taxation, probate, and financial reporting."
  },
  {
    icon: <Ruler size={28} />,
    title: "Planning & Development",
    description: "Strategic planning advice and development management to maximize asset potential."
  },
  {
    icon: <Landmark size={28} />,
    title: "Property Management",
    description: "Comprehensive management services protecting asset value and tenant relationships."
  },
  {
    icon: <Home size={28} />,
    title: "Residential Agency",
    description: "Sales, lettings, and acquisition services for prime residential properties."
  },
  {
    icon: <Key size={28} />,
    title: "Commercial Agency",
    description: "Office, retail, and industrial agency services for landlords and occupiers."
  }
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".service-card");
    
    gsap.from(cards, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-display leading-tight">
              Comprehensive <br /> <span className="text-foreground/40">Property Solutions</span>
            </h2>
          </div>
          <Link href="/services" className="group flex items-center gap-2 text-foreground border-b border-black/20 pb-1 hover:text-primary hover:border-primary transition-colors">
            <span className="uppercase text-[10px] tracking-widest font-bold">View All Services</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group relative p-10 bg-white hover:shadow-2xl border border-black/5 hover:border-primary/20 transition-all duration-500 rounded-none"
            >
              <div className="mb-8 text-foreground/40 group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-display text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">{service.description}</p>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight size={20} className="text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
