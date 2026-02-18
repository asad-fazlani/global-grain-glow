const regions = [
  {
    name: "Middle East",
    flag: "🇦🇪",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Bahrain"],
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    name: "Europe",
    flag: "🇪🇺",
    countries: ["UK", "Germany", "France", "Netherlands", "Spain", "Italy"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "North America",
    flag: "🇺🇸",
    countries: ["USA", "Canada", "Mexico"],
    color: "from-red-500/20 to-red-600/10",
  },
  {
    name: "Africa",
    flag: "🌍",
    countries: ["Nigeria", "Kenya", "Ghana", "South Africa", "Egypt", "Tanzania"],
    color: "from-green-500/20 to-green-600/10",
  },
  {
    name: "Southeast Asia",
    flag: "🌏",
    countries: ["Malaysia", "Singapore", "Indonesia", "Philippines", "Vietnam"],
    color: "from-yellow-500/20 to-yellow-600/10",
  },
];

export default function ExportMarketsSection() {
  return (
    <section
      id="export"
      className="section-padding"
      style={{ background: "hsl(var(--green-deep))" }}
    >
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Global Reach
          </p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Exporting to{" "}
            <span className="text-brand-gold">40+ Countries</span>
          </h2>
          <p className="font-body text-white/70 max-w-2xl mx-auto">
            Our rice travels from the heart of India to kitchens and tables around the globe.
            Trusted by importers, distributors, and retailers worldwide.
          </p>
        </div>

        {/* Region cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-14">
          {regions.map((region) => (
            <div
              key={region.name}
              className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-5 hover:border-brand-gold/40 hover:bg-white/12 transition-all duration-300 card-hover"
            >
              <div className="text-3xl mb-3">{region.flag}</div>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                {region.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {region.countries.map((c) => (
                  <span
                    key={c}
                    className="font-body text-[10px] text-white/70 bg-white/10 rounded-full px-2 py-0.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* World map SVG (simplified decorative) */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 bg-white/5 border border-white/15 rounded-2xl px-8 py-6">
            <div className="text-center px-4">
              <div className="font-display text-4xl font-bold text-brand-gold">40+</div>
              <div className="font-body text-xs text-white/60 uppercase tracking-wide mt-1">Countries</div>
            </div>
            <div className="w-px bg-white/15 hidden sm:block" />
            <div className="text-center px-4">
              <div className="font-display text-4xl font-bold text-brand-gold">5</div>
              <div className="font-body text-xs text-white/60 uppercase tracking-wide mt-1">Continents</div>
            </div>
            <div className="w-px bg-white/15 hidden sm:block" />
            <div className="text-center px-4">
              <div className="font-display text-4xl font-bold text-brand-gold">200+</div>
              <div className="font-body text-xs text-white/60 uppercase tracking-wide mt-1">Trade Partners</div>
            </div>
            <div className="w-px bg-white/15 hidden sm:block" />
            <div className="text-center px-4">
              <div className="font-display text-4xl font-bold text-brand-gold">50K+</div>
              <div className="font-body text-xs text-white/60 uppercase tracking-wide mt-1">MT / Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
