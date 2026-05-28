const projects = [
  {
    title: "Logistikos centras, Kaunas",
    category: "Statybų valdymas",
    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=75",
  },
  {
    title: "Sporto kompleksas, Vilnius",
    category: "Projektų valdymas",
    img: "https://images.unsplash.com/photo-1580710624567-9e1a6e0a0c8a?w=800&q=75",
  },
  {
    title: "Prekybos parkas, Klaipėda",
    category: "Statybų valdymas",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=75",
  },
  {
    title: "Gyvenamųjų namų kompleksas, Vilnius",
    category: "Projektų valdymas",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=75",
  },
  {
    title: "Biurų būstinė, Kaunas",
    category: "Statybų valdymas",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
  },
  {
    title: "Pramoninis objektas, Panevėžys",
    category: "Projektų valdymas",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-4">
            Mūsų darbai
          </p>
          <h2 className="text-3xl md:text-4xl font-light">Atrinkti projektai</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden bg-[#0a0a0a] aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${p.img}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0e0e0e]/50 group-hover:bg-[#0e0e0e]/30 transition-colors duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#c8a96e] mb-1">
                  {p.category}
                </p>
                <h3 className="text-sm font-medium">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
