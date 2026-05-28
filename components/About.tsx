const stats = [
  { value: "12+", label: "Metų patirties" },
  { value: "80+", label: "Įvykdytų projektų" },
  { value: "€200M+", label: "Statybų vertė" },
  { value: "100%", label: "Laiku pristatyti" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-4">
              Kas mes esame
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-8 leading-snug">
              Tikslus valdymas
              <br />
              <span className="font-semibold">nuo pirmosios dienos.</span>
            </h2>
            <div className="space-y-5 text-[#a0a0a0] font-light leading-relaxed">
              <p>
                Sphire — nepriklausoma projektų ir statybų valdymo konsultacijų
                įmonė. Dirbame kartu su savininkais, vystytojais ir investuotojais,
                kad sudėtingi projektai būtų įvykdyti laiku, neviršijant biudžeto
                ir aukščiausios kokybės standartų.
              </p>
              <p>
                Mūsų komanda jungia gilią techninę kompetenciją su griežta procesų
                disciplina — nuo pirminės galimybių studijos iki projektavimo
                koordinavimo, pirkimų, statybvietės valdymo ir galutinės perdavimo.
              </p>
              <p>
                Esame vienas atsakomybės centras jūsų projekte — turite visapusišką
                matomumą, neperkeldami operacinės naštos sau.
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
