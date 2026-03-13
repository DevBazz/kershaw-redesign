"use client";

import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const team = [
  {
    name: "Victoria Ashford",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "James Wellington",
    role: "Head of Luxury Sales",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Isabella Chen",
    role: "Investment Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Alexander Hunt",
    role: "Chief Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".team-card",
      { y: 100, opacity: 0, rotateY: -15 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,197,24,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,197,24,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            Meet Our <span className="text-secondary italic">Experts</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A distinguished team of professionals dedicated to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: "1000px" }}>
          {team.map((member, i) => (
            <div key={i} className="team-card group">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-background hover:bg-secondary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-background hover:bg-secondary transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-display text-foreground mb-2">{member.name}</h3>
              <p className="text-foreground/60 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
