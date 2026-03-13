"use client";

import { useRef } from "react";
import { Home, Key, Shield, Sparkles, Building2, Users, TrendingUp, Award, FileText, Briefcase, Globe, Target } from "lucide-react";
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
    desc: "Hand-selected architectural masterpieces that transcend conventional luxury. Each property is meticulously vetted to meet our exacting standards of excellence.",
    features: ["Off-market access", "Exclusive listings", "Premium locations"],
  },
  {
    icon: Key,
    title: "Private Viewings",
    desc: "Exclusive access to premier estates before they reach the public market. Discretion and privacy guaranteed for all our distinguished clients.",
    features: ["VIP scheduling", "Personal tours", "Confidential access"],
  },
  {
    icon: Shield,
    title: "Confidential Transactions",
    desc: "Complete confidentiality for high-profile clients and sensitive transactions. Your privacy is our paramount concern throughout the entire process.",
    features: ["NDA protection", "Secure dealings", "Anonymous bidding"],
  },
  {
    icon: Sparkles,
    title: "Lifetime Concierge",
    desc: "24/7 white-glove service extending beyond acquisition. From property management to lifestyle services, we're here for you.",
    features: ["24/7 support", "Lifestyle services", "Property care"],
  },
  {
    icon: Building2,
    title: "Investment Advisory",
    desc: "Strategic guidance on luxury real estate investments with comprehensive market analysis and portfolio optimization strategies.",
    features: ["Market analysis", "ROI optimization", "Portfolio growth"],
  },
  {
    icon: Users,
    title: "Estate Management",
    desc: "Full-service property management including staff coordination, maintenance, and operational excellence for your peace of mind.",
    features: ["Staff management", "Maintenance", "Operations"],
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    desc: "Proprietary insights into luxury market trends, valuations, and emerging opportunities in prime locations worldwide.",
    features: ["Trend analysis", "Valuation reports", "Market forecasts"],
  },
  {
    icon: Award,
    title: "Legacy Planning",
    desc: "Multigenerational wealth preservation through strategic real estate holdings and comprehensive estate planning services.",
    features: ["Wealth preservation", "Estate planning", "Family legacy"],
  },
  {
    icon: FileText,
    title: "Legal Advisory",
    desc: "Expert legal guidance for complex real estate transactions, ensuring compliance and protecting your interests at every step.",
    features: ["Contract review", "Due diligence", "Legal protection"],
  },
  {
    icon: Briefcase,
    title: "Commercial Services",
    desc: "Specialized services for commercial real estate including office spaces, retail properties, and mixed-use developments.",
    features: ["Commercial sales", "Lease advisory", "Development"],
  },
  {
    icon: Globe,
    title: "International Properties",
    desc: "Global reach with local expertise. Access to luxury properties in major cities and exclusive destinations worldwide.",
    features: ["Global network", "Local experts", "International deals"],
  },
  {
    icon: Target,
    title: "Bespoke Solutions",
    desc: "Customized services tailored to your unique requirements. We create personalized strategies for exceptional results.",
    features: ["Custom approach", "Flexible terms", "Unique solutions"],
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".service-detail-card",
      { y: 80, opacity: 0, rotateX: -10 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="service-detail-card group">
                <div className="relative bg-background/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-display text-foreground mb-4 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-foreground/50 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
