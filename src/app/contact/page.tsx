export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-display text-foreground mb-8 leading-tight">Connect With Our Team</h1>
          <p className="text-foreground/60 text-lg md:text-xl mb-12 font-medium max-w-lg">
            Whether you are inquiring about a property, a valuation, or a partnership, our expert consultants are here to assist.
          </p>
          
          <div className="space-y-12 text-foreground/80 font-medium">
            <div className="group">
              <h3 className="text-primary uppercase tracking-widest text-xs font-bold mb-3">Headquarters</h3>
              <p className="text-lg">12 Berkeley Square, Mayfair<br/>London, W1J 6BD, UK</p>
            </div>
            <div className="group">
              <h3 className="text-primary uppercase tracking-widest text-xs font-bold mb-3">Direct Contact</h3>
              <p className="text-lg">+44 (0) 20 7123 4567<br/>enquiries@skershaw.co.uk</p>
            </div>
          </div>
        </div>

        <form className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-2xl space-y-8 relative z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 px-1">First Name</label>
              <input type="text" className="w-full bg-background border border-black/5 rounded-2xl p-4 text-foreground focus:border-primary outline-none transition-all placeholder:text-foreground/20" placeholder="John" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 px-1">Last Name</label>
              <input type="text" className="w-full bg-background border border-black/5 rounded-2xl p-4 text-foreground focus:border-primary outline-none transition-all placeholder:text-foreground/20" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 px-1">Email Address</label>
            <input type="email" className="w-full bg-background border border-black/5 rounded-2xl p-4 text-foreground focus:border-primary outline-none transition-all placeholder:text-foreground/20" placeholder="john@example.com" />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 px-1">Message</label>
            <textarea rows={5} className="w-full bg-background border border-black/5 rounded-2xl p-4 text-foreground focus:border-primary outline-none transition-all placeholder:text-foreground/20 resize-none" placeholder="How can we help you?"></textarea>
          </div>

          <button type="submit" className="btn-primary w-full py-5 text-sm tracking-widest">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
