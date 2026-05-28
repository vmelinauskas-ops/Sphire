export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#1e1e1e] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-xl font-semibold tracking-widest uppercase mb-4">Sphire</p>
            <p className="text-sm text-[#6b6b6b] font-light leading-relaxed max-w-xs">
              Independent project and construction management consultancy
              delivering precision across every phase.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#6b6b6b] mb-4">Services</p>
            <ul className="space-y-2 text-sm text-[#a0a0a0]">
              <li>Project Management</li>
              <li>Construction Management</li>
              <li>Design Coordination</li>
              <li>Cost Consultancy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#6b6b6b] mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-[#a0a0a0]">
              <li>info@sphire.lt</li>
              <li>+370 600 00000</li>
              <li className="pt-2">
                <a href="#" className="hover:text-[#f0f0f0] transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e1e1e] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#3a3a3a]">
            © {year} Sphire. All rights reserved.
          </p>
          <a href="#" className="text-xs text-[#3a3a3a] hover:text-[#6b6b6b] transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
