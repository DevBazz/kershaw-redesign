export default function ListingsPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display text-foreground mb-8">Property Portfolio</h1>
        <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mb-16 font-medium">
          Explore our meticulously curated portfolio of exclusive residential and commercial properties.
        </p>
        
        <div className="p-12 border border-black/5 rounded-2xl text-center bg-white shadow-sm">
          <p className="text-foreground/40 font-medium">Detailed property filtering and grid system coming soon.</p>
        </div>
      </div>
    </main>
  );
}
