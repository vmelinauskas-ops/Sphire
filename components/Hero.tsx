export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0e0e0e]/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-6">
          Project &amp; Construction Management
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
          We build what
          <br />
          <span className="font-semibold">others imagine.</span>
        </h1>
        <p className="text-[#a0a0a0] text-base md:text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
          From feasibility to final handover — Sphire manages every phase of
          your project with precision and accountability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3.5 bg-[#c8a96e] text-[#0e0e0e] text-sm tracking-widest uppercase font-medium hover:bg-[#d9ba7f] transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-[#f0f0f0]/30 text-sm tracking-widest uppercase font-light hover:border-[#f0f0f0] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b6b6b]">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#6b6b6b] to-transparent" />
      </div>
    </section>
  );
}
