"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-4">
              Susisiekite
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Pradėkime pokalbį
            </h2>
            <p className="text-[#6b6b6b] font-light leading-relaxed mb-10">
              Papasakokite apie savo projektą. Atsakysime per vieną darbo dieną.
            </p>
            <div className="space-y-4 text-sm text-[#a0a0a0]">
              <p>
                <span className="text-[#6b6b6b] text-xs tracking-widest uppercase block mb-1">El. paštas</span>
                info@sphire.lt
              </p>
              <p>
                <span className="text-[#6b6b6b] text-xs tracking-widest uppercase block mb-1">Telefonas</span>
                +370 600 00000
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">
                  Vardas
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Jūsų vardas"
                  className="w-full bg-[#161616] border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8a96e] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">
                  El. paštas
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jusu@epastas.lt"
                  className="w-full bg-[#161616] border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8a96e] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">
                Projekto tipas
              </label>
              <input
                name="project_type"
                type="text"
                placeholder="pvz. Biurų pastatas, logistikos centras..."
                className="w-full bg-[#161616] border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8a96e] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">
                Žinutė
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Papasakokite apie savo projektą..."
                className="w-full bg-[#161616] border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
              />
            </div>

            <p className="text-[11px] text-[#3a3a3a]">
              Siųsdami žinutę sutinkate su mūsų{" "}
              <a href="#" className="underline hover:text-[#6b6b6b]">
                Privatumo politika
              </a>
              .
            </p>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="px-8 py-3.5 bg-[#c8a96e] text-[#0e0e0e] text-sm tracking-widest uppercase font-medium hover:bg-[#d9ba7f] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Siunčiama…"
                : status === "sent"
                ? "Žinutė išsiųsta"
                : "Siųsti žinutę"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Kažkas nutiko. Bandykite dar kartą arba rašykite mums el. paštu.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
