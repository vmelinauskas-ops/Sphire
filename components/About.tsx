const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "80+", label: "Projects Delivered" },
  { value: "€200M+", label: "Construction Value" },
  { value: "100%", label: "On-Time Delivery" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-8 leading-snug">
              Precision management,
              <br />
              <span className="font-semibold">from day one.</span>
            </h2>
            <div className="space-y-5 text-[#a0a0a0] font-light leading-relaxed">
              <p>
                Sphire is an independent project and construction management
                consultancy. We work alongside owners, developers, and investors
                to deliver complex projects on time, within budget, and to the
                highest standards.
              </p>
              <p>
                Our team combines deep technical expertise with rigorous process
                discipline — covering everything from early feasibility through
                design coordination, procurement, site management, and final
                handover.
              </p>
              <p>
                We act as the single point of accountability on your project, so
                you retain full visibility without carrying the operational burden.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#161616] p-10 flex flex-col justify-center"
              >
                <span className="text-4xl font-semibold text-[#c8a96e] mb-2">
                  {s.value}
                </span>
                <span className="text-xs tracking-widest uppercase text-[#6b6b6b]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
