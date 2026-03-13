"use client";

import { useRef } from "react";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Legacy", href: "/about#legacy" },
    { name: "Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
  ],
  services: [
    { name: "Buy Property", href: "/listings" },
    { name: "Sell Property", href: "/services#sell" },
    { name: "Property Management", href: "/services#management" },
    { name: "Investment Advisory", href: "/services#advisory" },
  ],
  resources: [
    { name: "Market Insights", href: "/insights" },
    { name: "Luxury Guide", href: "/guide" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".footer-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".footer-divider",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative bg-background border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(217,119,6,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="footer-content lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <div className="font-display text-3xl tracking-tighter text-foreground uppercase">
                S.KERSHAW<span className="text-secondary"> & SONS.</span>
              </div>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-8 max-w-md">
              Since 1845, we have been defining the art of luxury living through exceptional properties and unparalleled service. A legacy of excellence spanning nearly two centuries.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-foreground text-sm font-bold uppercase tracking-wider mb-4">
                Exclusive Updates
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-surface border border-white/10 rounded-full px-6 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-secondary transition-colors"
                />
                <button className="bg-primary hover:bg-secondary text-white p-3 rounded-full transition-all hover:scale-105">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-foreground/60 hover:text-secondary hover:border-secondary/30 transition-all hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-content lg:col-span-2">
            <h4 className="text-foreground text-sm font-bold uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-secondary text-sm transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-content lg:col-span-2">
            <h4 className="text-foreground text-sm font-bold uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-secondary text-sm transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-content lg:col-span-3">
            <h4 className="text-foreground text-sm font-bold uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18445550100"
                  className="flex items-center gap-3 text-foreground/60 hover:text-secondary text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+1 (844) 555-0100</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@skershaw.com"
                  className="flex items-center gap-3 text-foreground/60 hover:text-secondary text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>hello@skershaw.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-foreground/60 text-sm">
                  <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>123 Luxury Boulevard<br />Beverly Hills, CA 90210</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left" />

        {/* Bottom Bar */}
        <div className="footer-content py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} S. Kershaw & Sons. All rights reserved. Est. 1845.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-foreground/40 hover:text-secondary text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-foreground/40 hover:text-secondary text-xs transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-foreground/40 hover:text-secondary text-xs transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
