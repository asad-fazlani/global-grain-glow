import {
  ShieldCheck,
  Globe2,
  BadgeDollarSign,
  Truck,
  Droplets,
  Sprout,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Premium Quality Control",
    desc: "Every batch undergoes multi-stage quality checks — from farm to port — ensuring flawless grains reach your market.",
  },
  {
    icon: Globe2,
    title: "International Export Standards",
    desc: "Fully compliant with EU, US, Middle Eastern, and African import regulations. Documents ready, zero delays.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    desc: "Direct farm-to-export supply chain eliminates middlemen, passing maximum value to our buyers worldwide.",
  },
  {
    icon: Truck,
    title: "Timely Global Delivery",
    desc: "Reliable shipping partnerships with top freight lines ensure on-time delivery across every major port globally.",
  },
  {
    icon: Droplets,
    title: "Hygienic Processing",
    desc: "Our HACCP-certified mills operate in controlled environments ensuring every grain is safe, clean, and market-ready.",
  },
  {
    icon: Sprout,
    title: "Sustainable Farming",
    desc: "We partner with eco-conscious farmers using responsible water usage, low-chemical cultivation, and ethical labor practices.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Why Choose Us</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green mb-4">
            The GrainVista Advantage
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We are more than exporters — we are your long-term partners in rice procurement, built on transparency, quality, and trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-7 rounded-2xl border border-border bg-brand-ivory hover:border-brand-green hover:bg-white transition-all duration-300 card-hover"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-green flex items-center justify-center mb-5 shadow-green group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-brand-ivory" />
                </div>
                <div className="w-8 h-0.5 bg-brand-gold mb-4 group-hover:w-14 transition-all duration-500" />
                <h3 className="font-display text-xl font-bold text-brand-green mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
