const services = [
  {
    category: "Projektų valdymas",
    items: [
      {
        title: "Galimybių studija ir kaštų analizė",
        description:
          "Preliminarus biudžeto modeliavimas, sklypo vertinimas ir pradiniai pasiūlymai projekto gyvybingumo patvirtinimui.",
      },
      {
        title: "Projektavimo koordinavimas",
        description:
          "Techninių sąlygų rengimas, architektų ir inžinierių koordinavimas bei darbo brėžinių priežiūra.",
      },
      {
        title: "Leidimai ir atitiktis",
        description:
          "Visapusiškas statybos leidimų tvarkymas, ekspertiniai vertinimai ir reglamentiniai teikimai.",
      },
      {
        title: "Statybų priežiūra",
        description:
          "Statybvietės priežiūra, pažangos ataskaitos ir kokybės užtikrinimas visuose statybos etapuose.",
      },
    ],
  },
  {
    category: "Statybų valdymas",
    items: [
      {
        title: "Pasirengimas statyboms",
        description:
          "Pirkimų strategija, rangovų atranka ir kaštų optimizavimas prieš pradedant darbus.",
      },
      {
        title: "Statybvietės valdymas",
        description:
          "Kasdieninis darbų vykdymo valdymas, subrangovų koordinavimas ir darbuotojų saugos užtikrinimas.",
      },
      {
        title: "Kokybės kontrolė",
        description:
          "Sistemingi patikrinimai ir defektų valdymas siekiant užtikrinti, kad darbai atitiktų specifikacijas kiekviename etape.",
      },
      {
        title: "Projekto užbaigimas",
        description:
          "Defektų šalinimas, perdavimo dokumentacija, galutinės atsiskaitymai ir pagalba po perdavimo.",
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
            Ką mes darome
          </p>
          <h2 className="text-3xl md:text-4xl font-light">Mūsų paslaugos</h2>
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
