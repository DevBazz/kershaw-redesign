import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-10 bg-white border border-black/5 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:border-secondary/30 hover:-translate-y-2 group relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="feature-icon w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
          {icon}
        </div>
        <h3 className="text-xl font-display text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-foreground/40 text-sm leading-relaxed group-hover:text-foreground/60 transition-colors duration-300">{description}</p>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/10 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
