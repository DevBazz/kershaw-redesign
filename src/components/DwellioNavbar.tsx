"use client";

import { Home } from "lucide-react";
import Link from "next/link";

export default function DwellioNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ background: 'rgba(13,12,10,0.85)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Home className="w-5 h-5 text-white" />
          <span className="text-white font-medium text-base">Dwellio</span>
        </Link>
        <div className="flex items-center gap-6">
          <a href="tel:1-844-555-0100" className="text-[rgba(255,255,255,0.7)] text-[13px] font-medium hidden sm:block hover:text-white transition-colors">
            1-(844) 555-0100
          </a>
          <button className="px-6 py-2.5 rounded-full border border-[rgba(255,255,255,0.2)] text-white text-[13px] font-medium hover:bg-white/5 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
