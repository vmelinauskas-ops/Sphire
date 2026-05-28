const services = [
  {
    category: "Project Management",
    items: [
      {
        title: "Feasibility & Cost Analysis",
        description:
          "Early-stage budget modelling, site assessments, and preliminary proposals to validate project viability.",
      },
      {
        title: "Design Coordination",
        description:
          "Technical brief development, architect and engineer coordination, and working drawing oversight.",
      },
      {
        title: "Permitting & Compliance",
        description:
          "Full management of planning approvals, expert reviews, and regulatory submissions.",
      },
      {
        title: "Construction Oversight",
        description:
          "On-site supervision, progress reporting, and quality assurance throughout the build phase.",
      },
    ],
  },
  {
    category: "Construction Management",
    items: [
      {
        title: "Pre-Construction Planning",
        description:
          "Procurement strategy, contractor selection, and cost optimisation before breaking ground.",
      },
      {
        title: "Site Management",
        description:
          "Day-to-day execution management, subcontractor coordination, and health &amp; safety compliance.",
      },
      {
        title: "Quality Control",
        description:
          "Systematic inspections and defect management to ensure work meets specification at every stage.",
      },
      {
        title: "Project Completion",
        description:
          "Snagging, handover documentation, final accounts, and post-completion support.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-light">Our Services</h2>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {services.map((col) => (
            <div key={col.category}>
              <h3 className="text-lg font-semibold tracking-wide uppercase mb-8 pb-4 border-b border-[#1e1e1e]">
                {col.category}
              </h3>
              <ul className="space-y-8">
                {col.items.map((item) => (
                  <li key={item.title} className="group">
                    <h4 className="text-sm font-medium tracking-wide text-[#f0f0f0] mb-2 group-hover:text-[#c8a96e] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p
                      className="text-sm text-[#6b6b6b] font-light leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
