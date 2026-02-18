import { Award, Globe, Sprout } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Quality Certified",
    desc: "ISO, FSSAI, APEDA & HACCP certified processes ensuring world-class standards.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Exporting to 40+ countries across 5 continents with seamless logistics.",
  },
  {
    icon: Sprout,
    title: "Ethical Sourcing",
    desc: "Partnering with certified farmers for sustainable and responsible agriculture.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="section-label mb-4">About Us</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green leading-tight mb-6">
              Rooted in Tradition,
              <span className="block text-brand-gold">Built for the World</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Ganindra International is one of India's most trusted rice exporters, headquartered in the fertile plains
              of Haryana. With over 25 years of industry expertise, we have established an unshakeable reputation
              for delivering premium-quality rice grains to markets spanning the Middle East, Europe, the Americas,
              Africa, and Southeast Asia.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Our state-of-the-art milling facilities, rigorous quality control, and deep relationships with
              farming communities allow us to offer the finest Indian rice varieties—harvested ethically,
              processed hygienically, and delivered on time, every time.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {["ISO 9001:2015", "FSSAI Certified", "APEDA Registered", "HACCP Compliant", "Non-GMO"].map((cert) => (
                <span
                  key={cert}
                  className="font-body text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-earth-light text-brand-green border border-brand-earth-light"
                >
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-2xl bg-brand-ivory border border-border shadow-brand card-hover"
                >
                  <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center flex-shrink-0 shadow-green">
                    <Icon className="w-5 h-5 text-brand-ivory" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-green mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
