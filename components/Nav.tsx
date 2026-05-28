"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Paslaugos", href: "#services" },
  { label: "Projektai", href: "#portfolio" },
  { label: "Apie mus", href: "#about" },
  { label: "Kontaktai", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0e0e0e]/95 backdrop-blur border-b border-[#1e1e1e]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-xl font-semibold tracking-widest uppercase">
          Sphire
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wider uppercase text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#f0f0f0] transition-transform duration-200 ${menuOpen ? "translate-y-2.5 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0f0f0] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0f0f0] transition-transform duration-200 ${menuOpen ? "-translate-y-2.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-t border-[#1e1e1e] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wider uppercase text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
