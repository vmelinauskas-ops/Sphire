const services = [
  {
    category: "Projektų valdymas",
    items: [
      {
        title: "Projektiniai pasiūlymai",
        description:
          "projektavimo pasirengimo etapas, kuriame atliekama esamos situacijos analizė, pateikiama projektuojamo statinio architektūros ir kitų pagrindinių sprendinių idėjos, statybos kaštų skaičiavimai",
        bullets: [
          "Projektavimo užduotis",
          "Visuomenės informavimas",
          "Detalaus plano koregavimas",
          "Statybiniai tyrinėjimai",
          "Prisijungimo sąlygos",
          "Specialieji reikalavimai",
        ],
      },
      {
        title: "Techninis projektas",
        description:
          "projekto pirmas etapas, kuriame pateikiami statinio sprendiniai ir kuris skirtas statybą leidžiančiam dokumentui gauti",
        bullets: [
          "Projekto sprendinių optimizavimas",
          "Projektavimo darbų kokybės kontrolė",
          "Statybos kaštų kontrolė",
          "Konsultavimas",
        ],
      },
      {
        title: "Projekto ekspertizė",
        description:
          "įvertinimas, kaip statinio projekte yra įgyvendinti teisės aktų reikalavimai",
        bullets: [],
      },
      {
        title: "Statybą leidžiantis dokumentas",
        description:
          "dokumentas, kuriuo suteikiama teisė įgyvendinti statinio projektą",
        bullets: [],
      },
      {
        title: "Darbo projektas",
        description:
          "projekto antrasis etapas, kuriame detalizuojami techninio projekto sprendiniai ir pagal kurį atliekami statybos darbai",
        bullets: [
          "Projekto sprendinių optimizavimas",
          "Projektavimo darbų kokybės kontrolė",
          "Statybos kaštų kontrolė",
          "Konsultavimas",
        ],
      },
      {
        title: "Projekto vykdymo priežiūra",
        description:
          "kontroliavimas, kad statinys būtų statomas pagal statinio projektą ir kad būtų įgyvendinta statinio projekte sukurta statinio architektūra",
        bullets: [],
      },
    ],
  },
  {
    category: "Statybų valdymas",
    items: [
      {
        title: "Pasirengimo etapas",
        description:
          "statybos pasirengimo etapas, kuriame analizuojami ir optimizuojami projekto sprendiniai, bei vykdomas statybos darbų rangovo parinkimo konkursas",
        bullets: [
          "Projekto analizė ir sprendinių optimizavimas",
          "Statybos darbų rangovo parinkimo konkursas",
        ],
      },
      {
        title: "Statybos darbai",
        description:
          "naujo statinio statyba, esamo statinio rekonstravimas, remontas ar griovimas pagal statinio projektą",
        bullets: [
          "Kalendorinio grafiko kontrolė",
          "Statybos kaštų kontrolė",
          "Statybos darbų kokybės kontrolė",
          "Konsultavimas",
        ],
      },
      {
        title: "Statybos techninė priežiūra",
        description:
          "kontroliavimas, kad statinys būtų statomas pagal statinio projektą, statybos rangos sutarties sąlygas ir teisės aktų reikalavimus",
        bullets: [],
      },
      {
        title: "Statybos užbaigimas",
        description: "statybos užbaigimo procedūros organizavimas",
        bullets: [],
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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {services.map((col) => (
            <div key={col.category}>
              <h3 className="text-base font-semibold tracking-widest uppercase mb-8 pb-4 border-b border-[#2a2a2a] text-[#f0f0f0]">
                {col.category}
              </h3>
              <ul className="divide-y divide-[#1a1a1a]">
                {col.items.map((item) => (
                  <li key={item.title} className="py-6 group">
                    <h4 className="text-sm font-semibold text-[#f0f0f0] mb-2 group-hover:text-[#c8a96e] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#6b6b6b] font-light leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.bullets.length > 0 && (
                      <ul className="space-y-1 mt-3">
                        {item.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-[#888] font-light"
                          >
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-[#c8a96e] shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
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
