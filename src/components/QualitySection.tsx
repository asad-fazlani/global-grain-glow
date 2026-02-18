import facilityImage from "@/assets/quality-facility.jpg";

const steps = [
  { step: "01", title: "Sourcing", desc: "Ethically sourced from certified farms with strict agri-quality checks." },
  { step: "02", title: "Milling", desc: "State-of-the-art mill processes ensure uniform grain and minimal breakage." },
  { step: "03", title: "Sorting", desc: "Optical sorters remove impurities with 99.9% precision before packaging." },
  { step: "04", title: "Testing", desc: "Lab tests for moisture, purity, aroma, and nutrition at every batch." },
  { step: "05", title: "Packaging", desc: "Hygienically sealed in food-grade, export-compliant packaging." },
  { step: "06", title: "Export", desc: "Shipped via certified logistics partners to ports worldwide on schedule." },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "FSSAI", desc: "Food Safety India" },
  { name: "APEDA", desc: "Agricultural Export" },
  { name: "HACCP", desc: "Hazard Analysis" },
  { name: "USDA Organic", desc: "Organic Certified" },
  { name: "Halal", desc: "Halal Certified" },
];

export default function QualitySection() {
  return (
    <section id="quality" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Quality Assurance</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green mb-4">
            Certified for the{" "}
            <span className="text-brand-gold">World's Standards</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Our quality philosophy is simple: if it doesn't meet our standards, it doesn't leave our facility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          {/* Process steps */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-green mb-8">
              Our Quality Process
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {steps.map((s) => (
                <div key={s.step} className="p-4 rounded-xl bg-brand-ivory border border-border hover:border-brand-green transition-colors">
                  <div className="font-display text-2xl font-bold text-brand-gold mb-1">{s.step}</div>
                  <div className="font-display text-sm font-bold text-brand-green mb-1">{s.title}</div>
                  <div className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Facility image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ boxShadow: "var(--shadow-lg)" }}>
              <img
                src={facilityImage}
                alt="Modern rice processing facility"
                className="w-full h-80 lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-body text-white text-sm">
                  ✅ HACCP-certified facility with optical sorting & lab testing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-display text-2xl font-bold text-brand-green text-center mb-8">
            Our Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-brand-ivory border-2 border-border hover:border-brand-gold hover:shadow-gold transition-all duration-300 card-hover"
              >
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center mb-3 shadow-gold">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div className="font-display text-sm font-bold text-brand-green mb-1">{cert.name}</div>
                <div className="font-body text-[10px] text-muted-foreground uppercase tracking-wide">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
