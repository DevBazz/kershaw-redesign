"use client";

import { useRef } from "react";
import { Home, Key, Shield, Sparkles, Building2, Users, TrendingUp, Award } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Home,
    title: "Property Curation",
    desc: "Hand-selected architectural masterpieces that transcend conventional luxury. Each property is meticulously vetted to meet our exacting standards.",
  },
  {
    icon: Key,
    title: "Private Viewings",
    desc: "Exclusive access to off-market properties and premier estates before they reach the public market. Discretion guaranteed.",
  },
  {
    icon: Shield,
    title: "Confidential Transactions",
    desc: "Complete confidentiality for high-profile clients and sensitive transactions. Your privacy is our paramount concern.",
  },
  {
    icon: Sparkles,
    title: "Lifetime Concierge",
    desc: "24/7 white-glove service extending beyond acquisition. From property management to lifestyle services.",
  },
  {
    icon: Building2,
    title: "Investment Advisory",
    desc: "Strategic guidance on luxury real estate investments with comprehensive market analysis and portfolio optimization.",
  },
  {
    icon: Users,
    title: "Estate Management",
    desc: "Full-service property management including staff coordination, maintenance, and operational excellence.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    desc: "Proprietary insights into luxury market trends, valuations, and emerging opportunities in prime locations.",
  },
  {
    icon: Award,
    title: "Legacy Planning",
    desc: "Multigenerational wealth preservation through strategic real estate holdings and estate planning services.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".service-item",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".services-header",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-background via-surface to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="services-header text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 px-6 py-3 rounded-full mb-6">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-xs font-bold uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            Comprehensive <span className="text-secondary italic">Luxury Services</span>
          </h2>
          
          <p className="text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed">
            From acquisition to lifestyle management, we provide an unparalleled suite of services designed to exceed the expectations of the world's most discerning clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="service-item group relative bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-display text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
