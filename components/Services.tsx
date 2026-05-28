const AnimatedBackground = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 560"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="svcSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#040912">
          <animate attributeName="stop-color" values="#040912;#050f0a;#040912" dur="10s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#0b1220">
          <animate attributeName="stop-color" values="#0b1220;#0b1a10;#0b1220" dur="10s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>

    {/* Sky */}
    <rect width="1440" height="560" fill="url(#svcSky)" />

    {/* Stars */}
    {([
      [90, 38], [210, 72], [370, 44], [510, 88], [660, 52], [810, 30],
      [950, 66], [1090, 48], [1240, 78], [1390, 42], [155, 118],
      [335, 96], [495, 112], [715, 102], [910, 88], [1070, 116], [1380, 82],
    ] as [number, number][]).map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.2 : 0.9} fill="white" opacity="0.45">
        <animate attributeName="opacity" values="0.2;0.65;0.2" dur={`${3.2 + i * 0.38}s`} repeatCount="indefinite" />
      </circle>
    ))}

    {/* ── LEFT BUILDINGS ── */}

    {/* B1 – tall, solar */}
    <rect x="0" y="195" width="78" height="365" fill="#181818" />
    <rect x="6" y="195" width="66" height="10" fill="#1e3a5f" opacity="0.9" />
    <rect x="6" y="207" width="66" height="10" fill="#1e3a5f" opacity="0.9" />
    <line x1="22" y1="195" x2="22" y2="217" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="38" y1="195" x2="38" y2="217" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="54" y1="195" x2="54" y2="217" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="6" y1="206" x2="72" y2="206" stroke="#0a0a0a" strokeWidth="0.8" />
    <rect x="6" y="195" width="66" height="22" fill="#c8a96e" opacity="0">
      <animate attributeName="opacity" values="0;0.22;0" dur="4.2s" repeatCount="indefinite" />
    </rect>

    {/* B2 */}
    <rect x="88" y="292" width="54" height="268" fill="#1c1c1c" />

    {/* B3 – solar */}
    <rect x="152" y="242" width="84" height="318" fill="#191919" />
    <rect x="158" y="242" width="72" height="9" fill="#1e3a5f" opacity="0.9" />
    <rect x="158" y="253" width="72" height="9" fill="#1e3a5f" opacity="0.9" />
    <line x1="176" y1="242" x2="176" y2="262" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="194" y1="242" x2="194" y2="262" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="212" y1="242" x2="212" y2="262" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="158" y1="252" x2="230" y2="252" stroke="#0a0a0a" strokeWidth="0.8" />
    <rect x="158" y="242" width="72" height="20" fill="#c8a96e" opacity="0">
      <animate attributeName="opacity" values="0;0.2;0" dur="5.8s" repeatCount="indefinite" />
    </rect>

    {/* B4 */}
    <rect x="246" y="328" width="48" height="232" fill="#1e1e1e" />

    {/* B5 – tallest left */}
    <rect x="304" y="172" width="106" height="388" fill="#171717" />

    {/* B6 */}
    <rect x="420" y="278" width="62" height="282" fill="#1b1b1b" />

    {/* B7 – solar */}
    <rect x="492" y="252" width="60" height="308" fill="#181818" />
    <rect x="498" y="252" width="48" height="8" fill="#1e3a5f" opacity="0.9" />
    <rect x="498" y="262" width="48" height="8" fill="#1e3a5f" opacity="0.9" />
    <line x1="514" y1="252" x2="514" y2="270" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="530" y1="252" x2="530" y2="270" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="498" y1="261" x2="546" y2="261" stroke="#0a0a0a" strokeWidth="0.8" />
    <rect x="498" y="252" width="48" height="18" fill="#c8a96e" opacity="0">
      <animate attributeName="opacity" values="0;0.22;0" dur="3.6s" repeatCount="indefinite" />
    </rect>

    {/* B8 */}
    <rect x="562" y="308" width="66" height="252" fill="#1d1d1d" />

    {/* ── WIND TURBINES (center) ── */}

    {/* Turbine 1 */}
    <polygon points="641,262 638,348 644,348" fill="#2c2c2c" />
    <rect x="632" y="348" width="18" height="5" fill="#222" rx="1" />
    <g>
      <animateTransform attributeName="transform" type="rotate" from="0 641 262" to="360 641 262" dur="9s" repeatCount="indefinite" />
      <line x1="641" y1="262" x2="641" y2="226" stroke="#3a3a3a" strokeWidth="3" strokeLinecap="round" />
      <line x1="641" y1="262" x2="672" y2="280" stroke="#3a3a3a" strokeWidth="3" strokeLinecap="round" />
      <line x1="641" y1="262" x2="610" y2="280" stroke="#3a3a3a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="641" cy="262" r="4" fill="#484848" />
    </g>
    <line x1="641" y1="262" x2="641" y2="348" stroke="#c8a96e" strokeWidth="0.8" strokeOpacity="0.2">
      <animate attributeName="stroke-opacity" values="0.08;0.4;0.08" dur="3s" repeatCount="indefinite" />
    </line>

    {/* Turbine 2 */}
    <polygon points="799,248 796,338 802,338" fill="#2c2c2c" />
    <rect x="790" y="338" width="18" height="5" fill="#222" rx="1" />
    <g>
      <animateTransform attributeName="transform" type="rotate" from="120 799 248" to="480 799 248" dur="11s" repeatCount="indefinite" />
      <line x1="799" y1="248" x2="799" y2="216" stroke="#3a3a3a" strokeWidth="3" strokeLinecap="round" />
      <line x1="799" y1="248" x2="827" y2="264" stroke="#3a3a3a" strokeWidth="3" strokeLinecap="round" />
      <line x1="799" y1="248" x2="771" y2="264" stroke="#3a3a3a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="799" cy="248" r="4" fill="#484848" />
    </g>
    <line x1="799" y1="248" x2="799" y2="338" stroke="#c8a96e" strokeWidth="0.8" strokeOpacity="0.2">
      <animate attributeName="stroke-opacity" values="0.1;0.45;0.1" dur="4s" repeatCount="indefinite" />
    </line>

    {/* ── RIGHT BUILDINGS ── */}

    {/* R1 */}
    <rect x="810" y="298" width="52" height="262" fill="#1c1c1c" />

    {/* R2 – solar */}
    <rect x="872" y="222" width="68" height="338" fill="#181818" />
    <rect x="878" y="222" width="56" height="9" fill="#1e3a5f" opacity="0.9" />
    <rect x="878" y="233" width="56" height="9" fill="#1e3a5f" opacity="0.9" />
    <line x1="896" y1="222" x2="896" y2="242" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="914" y1="222" x2="914" y2="242" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="878" y1="232" x2="934" y2="232" stroke="#0a0a0a" strokeWidth="0.8" />
    <rect x="878" y="222" width="56" height="20" fill="#c8a96e" opacity="0">
      <animate attributeName="opacity" values="0;0.2;0" dur="4.9s" repeatCount="indefinite" />
    </rect>

    {/* R3 */}
    <rect x="950" y="268" width="104" height="292" fill="#1b1b1b" />

    {/* R4 */}
    <rect x="1064" y="238" width="62" height="322" fill="#1d1d1d" />

    {/* R5 – tall, solar */}
    <rect x="1136" y="178" width="92" height="382" fill="#171717" />
    <rect x="1142" y="178" width="80" height="11" fill="#1e3a5f" opacity="0.9" />
    <rect x="1142" y="191" width="80" height="11" fill="#1e3a5f" opacity="0.9" />
    <line x1="1162" y1="178" x2="1162" y2="202" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="1182" y1="178" x2="1182" y2="202" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="1202" y1="178" x2="1202" y2="202" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="1142" y1="190" x2="1222" y2="190" stroke="#0a0a0a" strokeWidth="0.8" />
    <rect x="1142" y="178" width="80" height="24" fill="#c8a96e" opacity="0">
      <animate attributeName="opacity" values="0;0.22;0" dur="6.2s" repeatCount="indefinite" />
    </rect>

    {/* R6 */}
    <rect x="1238" y="298" width="58" height="262" fill="#1e1e1e" />

    {/* R7 – solar */}
    <rect x="1306" y="202" width="134" height="358" fill="#181818" />
    <rect x="1312" y="202" width="122" height="10" fill="#1e3a5f" opacity="0.9" />
    <rect x="1312" y="214" width="122" height="10" fill="#1e3a5f" opacity="0.9" />
    <line x1="1342" y1="202" x2="1342" y2="224" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="1372" y1="202" x2="1372" y2="224" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="1402" y1="202" x2="1402" y2="224" stroke="#0a0a0a" strokeWidth="0.8" />
    <line x1="1312" y1="213" x2="1434" y2="213" stroke="#0a0a0a" strokeWidth="0.8" />
    <rect x="1312" y="202" width="122" height="22" fill="#c8a96e" opacity="0">
      <animate attributeName="opacity" values="0;0.2;0" dur="5.1s" repeatCount="indefinite" />
    </rect>

    {/* ── ENERGY FLOW LINES ── */}

    {/* Turbine 1 → left solar buildings */}
    <path d="M641 348 Q590 390 492 308" fill="none" stroke="#c8a96e" strokeWidth="1.2" strokeDasharray="6 5">
      <animate attributeName="stroke-dashoffset" from="44" to="0" dur="3.5s" repeatCount="indefinite" />
      <animate attributeName="stroke-opacity" values="0.08;0.32;0.08" dur="3.5s" repeatCount="indefinite" />
    </path>

    {/* Turbine 1 → Turbine 2 overhead */}
    <path d="M641 262 Q720 195 799 248" fill="none" stroke="#c8a96e" strokeWidth="1" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="36" to="0" dur="5s" repeatCount="indefinite" />
      <animate attributeName="stroke-opacity" values="0.08;0.28;0.08" dur="5s" repeatCount="indefinite" />
    </path>

    {/* Turbine 2 → right solar buildings */}
    <path d="M799 338 Q876 375 872 278" fill="none" stroke="#c8a96e" strokeWidth="1.2" strokeDasharray="6 5">
      <animate attributeName="stroke-dashoffset" from="44" to="0" dur="4s" repeatCount="indefinite" />
      <animate attributeName="stroke-opacity" values="0.08;0.32;0.08" dur="4s" repeatCount="indefinite" />
    </path>

    {/* Turbine 2 → far right */}
    <path d="M799 248 Q970 175 1136 222" fill="none" stroke="#c8a96e" strokeWidth="1" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="36" to="0" dur="6s" repeatCount="indefinite" />
      <animate attributeName="stroke-opacity" values="0.06;0.26;0.06" dur="6s" repeatCount="indefinite" />
    </path>

    {/* Ground */}
    <rect x="0" y="558" width="1440" height="2" fill="#1e1e1e" />
  </svg>
);

const IconIdea = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 6a12 12 0 0 1 8.5 20.5c-.6.6-1 1.3-1.2 2L31 32H17l-.3-3.5c-.2-.7-.6-1.4-1.2-2A12 12 0 0 1 24 6z"/>
    <line x1="17" y1="35" x2="31" y2="35"/>
    <line x1="19" y1="38" x2="29" y2="38"/>
    <line x1="24" y1="3" x2="24" y2="1.5"/>
    <line x1="36" y1="8" x2="37.2" y2="6.8"/>
    <line x1="40" y1="20" x2="41.5" y2="20"/>
    <line x1="12" y1="8" x2="10.8" y2="6.8"/>
    <line x1="8" y1="20" x2="6.5" y2="20"/>
  </svg>
);

const IconBlueprint = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="36" height="32" rx="2"/>
    <line x1="6" y1="18" x2="42" y2="18"/>
    <line x1="6" y1="28" x2="42" y2="28"/>
    <line x1="16" y1="8" x2="16" y2="40"/>
    <line x1="32" y1="8" x2="32" y2="40"/>
    <line x1="12" y1="13" x2="20" y2="13"/>
    <line x1="12" y1="23" x2="20" y2="23"/>
  </svg>
);

const IconSearch = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="21" cy="21" r="13"/>
    <line x1="42" y1="42" x2="32" y2="32"/>
    <line x1="17" y1="21" x2="25" y2="21"/>
    <line x1="21" y1="17" x2="21" y2="25"/>
  </svg>
);

const IconDocument = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M28 6H12a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V16z"/>
    <polyline points="28 6 28 16 39 16"/>
    <line x1="16" y1="24" x2="32" y2="24"/>
    <line x1="16" y1="30" x2="26" y2="30"/>
    <circle cx="34" cy="33" r="5"/>
    <line x1="37.5" y1="36.5" x2="40" y2="39"/>
  </svg>
);

const IconBriefcase = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="16" width="40" height="26" rx="3"/>
    <path d="M32 16V12a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v4"/>
    <line x1="24" y1="26" x2="24" y2="33"/>
    <line x1="20" y1="29.5" x2="28" y2="29.5"/>
    <line x1="4" y1="29" x2="44" y2="29"/>
  </svg>
);

const IconEye = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="10" width="32" height="28" rx="2"/>
    <path d="M8 24s6-10 16-10 16 10 16 10-6 10-16 10S8 24 8 24z"/>
    <circle cx="24" cy="24" r="5"/>
    <rect x="14" y="38" width="5" height="4" rx="1"/>
    <rect x="29" y="38" width="5" height="4" rx="1"/>
  </svg>
);

const IconClipboard = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6h-6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-6"/>
    <rect x="18" y="4" width="12" height="5" rx="2"/>
    <polyline points="17 24 21 28 31 20"/>
    <line x1="17" y1="34" x2="31" y2="34"/>
  </svg>
);

const IconCrane = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="4" x2="22" y2="44"/>
    <line x1="22" y1="8" x2="40" y2="18"/>
    <line x1="22" y1="8" x2="10" y2="8"/>
    <line x1="22" y1="18" x2="40" y2="18"/>
    <line x1="40" y1="18" x2="40" y2="34"/>
    <rect x="34" y="34" width="12" height="7" rx="1"/>
    <line x1="40" y1="26" x2="43" y2="26"/>
  </svg>
);

const IconMonitor = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="8" width="40" height="26" rx="2"/>
    <line x1="16" y1="42" x2="32" y2="42"/>
    <line x1="24" y1="34" x2="24" y2="42"/>
    <polyline points="16 22 21 27 32 17"/>
    <circle cx="36" cy="15" r="3"/>
  </svg>
);

const IconShield = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4L8 12v10c0 10 6.8 19.4 16 21 9.2-1.6 16-11 16-21V12L24 4z"/>
    <polyline points="17 24 21 28 31 19"/>
  </svg>
);

const leftItems = [
  {
    title: "Projektiniai pasiūlymai",
    bullets: [
      "Projektavimo užduotis", "Statybiniai tyrinėjimai",
      "Visuomenės informavimas", "Prisijungimo sąlygos",
      "Detalaus plano koregavimas", "Specialieji reikalavimai",
    ],
    Icon: IconIdea,
  },
  {
    title: "Techninis projektas",
    bullets: [
      "Projekto sprendinių optimizavimas", "Statybos kaštų kontrolė",
      "Projektavimo darbų kokybės kontrolė", "Konsultavimas",
    ],
    Icon: IconBlueprint,
  },
  { title: "Projekto ekspertizė", bullets: [], Icon: IconSearch },
  { title: "Statybą leidžiantis dokumentas", bullets: [], Icon: IconDocument },
  {
    title: "Darbo projektas",
    bullets: [
      "Projekto sprendinių optimizavimas", "Statybos kaštų kontrolė",
      "Projektavimo darbų kokybės kontrolė", "Konsultavimas",
    ],
    Icon: IconBriefcase,
  },
  { title: "Projekto vykdymo priežiūra", bullets: [], Icon: IconEye },
];

const rightItems = [
  {
    title: "Pasirengimo etapas",
    bullets: [
      "Projekto analizė ir sprendinių optimizavimas",
      "Statybos darbų rangovo parinkimo konkursas",
    ],
    Icon: IconClipboard,
  },
  {
    title: "Statybos darbai",
    bullets: [
      "Kalendorinio grafiko kontrolė", "Statybos darbų kokybės kontrolė",
      "Statybos kaštų kontrolė", "Konsultavimas",
    ],
    Icon: IconCrane,
  },
  { title: "Statybos techninė priežiūra", bullets: [], Icon: IconMonitor },
  { title: "Statybos užbaigimas", bullets: [], Icon: IconShield },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* Animated city + renewable energy background */}
      <AnimatedBackground />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/62 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center py-16 px-6 border-b border-[#1e1e1e]">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-4">Ką mes darome</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#f0f0f0]">Mūsų paslaugos</h2>
        </div>

        {/* Two-column infographic */}
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Center divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#2a2a2a] -translate-x-px pointer-events-none" />

          {/* ── LEFT: Projektų valdymas ── */}
          <div className="px-8 md:px-14 pt-14 pb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
              Projektų valdymas
            </h3>

            <ul className="space-y-10">
              {leftItems.map(({ title, bullets, Icon }) => (
                <li key={title}>
                  <div className="flex items-center gap-0">
                    <div className="flex-1 text-right pr-3">
                      <span className="text-sm md:text-[15px] font-bold text-[#f0f0f0]">{title}</span>
                    </div>
                    <div className="hidden md:block w-8 shrink-0 border-b border-[#2a2a2a]" />
                    <div className="shrink-0 w-14 flex items-center justify-center">
                      <Icon />
                    </div>
                  </div>
                  {bullets.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 md:pr-[88px]">
                      {bullets.map((b) => (
                        <span key={b} className="text-xs text-[#888] font-light leading-snug md:text-right">
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: Statybų valdymas ── */}
          <div className="px-8 md:px-14 pt-14 pb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-12 md:pl-16">
              Statybų valdymas
            </h3>

            <ul className="space-y-10 md:mt-[260px]">
              {rightItems.map(({ title, bullets, Icon }) => (
                <li key={title}>
                  <div className="flex items-center gap-0">
                    <div className="shrink-0 w-14 flex items-center justify-center">
                      <Icon />
                    </div>
                    <div className="hidden md:block w-8 shrink-0 border-b border-[#2a2a2a]" />
                    <div className="flex-1 pl-3">
                      <span className="text-sm md:text-[15px] font-bold text-[#f0f0f0]">{title}</span>
                    </div>
                  </div>
                  {bullets.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 md:pl-[88px]">
                      {bullets.map((b) => (
                        <span key={b} className="text-xs text-[#888] font-light leading-snug">
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
