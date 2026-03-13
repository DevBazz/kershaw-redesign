"use client";

export default function PlatformSection() {
  return (
    <section className="relative py-24 px-6 bg-[#131210]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-white font-bold text-[42px] md:text-[48px] text-center mb-16 leading-tight">
          Introducing The Platform<br />That Delivers More
        </h2>

        {/* Mockup Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Dark Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0c0a] p-8 shadow-2xl">
            {/* Placeholder Dashboard UI */}
            <div className="aspect-video bg-gradient-to-br from-[#1a1816] to-[#0d0c0a] rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              
              {/* Notification Card */}
              <div className="relative z-10 bg-[#1a1816] border border-[#d97706]/30 rounded-xl p-6 max-w-md shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d97706]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#f5c518]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Ibrahim, you've just unlocked a reward</h3>
                    <p className="text-white/60 text-sm">Your property search just earned you 500 points. Keep exploring!</p>
                    <button className="mt-4 px-4 py-2 bg-[#f5c518] text-[#0a0900] rounded-lg text-sm font-bold hover:brightness-110 transition-all">
                      View Rewards
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
