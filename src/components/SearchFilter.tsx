"use client";

import { Search, MapPin, Home, DollarSign, Bed } from "lucide-react";

export default function SearchFilter() {
  return (
    <div className="w-full mt-10">
      <div className="bg-white/95 backdrop-blur-md border border-black/5 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-shadow duration-500">
        {/* Location */}
        <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-black/5 group hover:bg-secondary/5 rounded-xl md:rounded-l-full transition-colors duration-300">
          <MapPin size={18} className="text-secondary group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-foreground/30 font-bold tracking-tighter mb-1">Location</span>
            <input 
              type="text" 
              placeholder="Enter City/Area" 
              className="bg-transparent text-foreground text-sm outline-none placeholder:text-foreground/20 w-full"
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-black/5 group hover:bg-secondary/5 rounded-xl transition-colors duration-300">
          <Home size={18} className="text-secondary group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-foreground/30 font-bold tracking-tighter mb-1">Type</span>
            <select className="bg-transparent text-foreground text-sm outline-none appearance-none cursor-pointer pr-4">
              <option className="bg-white">Apartment</option>
              <option className="bg-white">Villa</option>
              <option className="bg-white">Commercial</option>
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-black/5 group hover:bg-secondary/5 rounded-xl transition-colors duration-300">
          <DollarSign size={18} className="text-secondary group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-foreground/30 font-bold tracking-tighter mb-1">Price</span>
            <select className="bg-transparent text-foreground text-sm outline-none appearance-none cursor-pointer pr-4">
              <option className="bg-white">Any Price</option>
              <option className="bg-white">$100k - $500k</option>
              <option className="bg-white">$500k - $1M</option>
              <option className="bg-white">$1M+</option>
            </select>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 group hover:bg-secondary/5 rounded-xl transition-colors duration-300">
          <Bed size={18} className="text-secondary group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-foreground/30 font-bold tracking-tighter mb-1">Bedrooms</span>
            <select className="bg-transparent text-foreground text-sm outline-none appearance-none cursor-pointer pr-4">
              <option className="bg-white">Any</option>
              <option className="bg-white">2+</option>
              <option className="bg-white">3+</option>
              <option className="bg-white">4+</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-xl md:rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-tertiary transition-all duration-500 group shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
          <Search size={16} className="group-hover:rotate-90 transition-transform duration-300" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}
