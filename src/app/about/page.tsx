export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Our Legacy Since 1845</span>
        <h1 className="text-5xl md:text-7xl font-display text-foreground mb-12">Heritage & Excellence</h1>
        
        <div className="space-y-8 text-lg text-foreground/70 leading-relaxed text-left font-medium">
          <p>
            S. Kershaw & Sons stands as a premier firm of Chartered Surveyors and Property Consultants. With a heritage spanning over 180 years, we have meticulously built a reputation for integrity, unparalleled expertise, and delivering exceptional results for our discerning clients.
          </p>
          <p>
            Our team harmoniously combines traditional values with modern innovation, providing strategic advice across all sectors of the global property market. Whether you are an investor, developer, landlord, or tenant, we are dedicated to maximizing the value of your assets through bespoke solutions.
          </p>
          <p>
            From the heart of London to international markets, our legacy is built on the trust of generations and a commitment to defining the future of luxury real estate and consultancy.
          </p>
        </div>

        <div className="mt-20 p-12 bg-white border border-black/5 rounded-[3rem] shadow-sm">
           <p className="text-foreground/40 italic font-medium">"Defining the standard of property excellence for nearly two centuries."</p>
        </div>
      </div>
    </main>
  );
}
