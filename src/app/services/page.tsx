export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display text-foreground mb-8">Our Expertise</h1>
        <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mb-16 font-medium">
          Delivering a comprehensive range of chartered surveying and property consultancy services with precision and legacy for over 180 years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            "Building Consultancy", "Valuation", "Planning & Development", 
            "Property Management", "Residential Agency", "Commercial Agency",
            "Business Rates", "Lease Advisory"
          ].map((service, i) => (
            <div key={i} className="p-8 border border-black/5 rounded-2xl bg-white shadow-sm hover:border-primary/50 transition-colors group">
              <h3 className="text-2xl font-display text-foreground mb-4 group-hover:text-primary transition-colors">{service}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
                Expert advice and professional services delivered by our experienced team. We handle all aspects of {service.toLowerCase()} with a commitment to excellence and high-end results.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
