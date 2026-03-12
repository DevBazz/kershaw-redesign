import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-white border-t border-black/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.05),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <Link href="/" className="font-display text-2xl md:text-3xl tracking-tighter text-foreground uppercase group">
              S.KERSHAW<span className="text-secondary group-hover:animate-pulse"> & SONS.</span>
            </Link>
            <p className="text-foreground/40 text-sm leading-relaxed max-w-xs">
              S.Kershaw & Sons is a leading luxury real estate marketplace. We offer a curated collection of properties tailored to your needs.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-foreground/40 hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Properties', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase() === 'properties' ? 'listings' : item.toLowerCase()}`} 
                    className="text-foreground/40 hover:text-secondary transition-colors text-sm relative inline-block group"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="space-y-8">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Categories</h4>
            <ul className="space-y-4">
              {['Apartments', 'Villas', 'Commercial', 'Land', 'Investments'].map((item) => (
                <li key={item}>
                  <Link 
                    href="/listings" 
                    className="text-foreground/40 hover:text-secondary transition-colors text-sm relative inline-block group"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-8">
            <h4 className="text-foreground font-bold uppercase tracking-widest text-xs">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-foreground/40 text-sm group hover:text-foreground transition-colors duration-300">
                <MapPin size={18} className="text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>123 Luxury Blvd,<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-4 text-foreground/40 text-sm group">
                <Phone size={18} className="text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+13235550123" className="hover:text-foreground transition-colors">+1 (323) 555-0123</a>
              </li>
              <li className="flex items-center gap-4 text-foreground/40 text-sm group">
                <Mail size={18} className="text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:hello@skershaw.com" className="hover:text-foreground transition-colors">hello@skershaw.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-foreground/20 text-xs tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} S. Kershaw & Sons Properties. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-foreground/20 hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
