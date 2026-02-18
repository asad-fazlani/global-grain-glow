import basImage from "@/assets/basmati-rice.jpg";
import nonBasImage from "@/assets/non-basmati-rice.jpg";
import longImage from "@/assets/long-grain-rice.jpg";
import shortImage from "@/assets/short-grain-rice.jpg";
import packagingImage from "@/assets/custom-packaging.jpg";

const products = [
  {
    name: "Premium Basmati Rice",
    image: basImage,
    desc: "World-renowned for its extraordinary aroma, extra-long slender grains, and delicate flavor profile. The crown jewel of Indian rice exports.",
    features: [
      { label: "Grain Length", value: "8.4mm+" },
      { label: "Aroma", value: "Exceptional" },
      { label: "Purity", value: "99.9%" },
      { label: "Shelf Life", value: "24 Months" },
    ],
    tag: "Best Seller",
  },
  {
    name: "Non-Basmati Rice",
    image: nonBasImage,
    desc: "Versatile medium-grain varieties ideal for everyday cooking. Consistent quality, high yield, and affordable pricing for bulk export.",
    features: [
      { label: "Grain Type", value: "Medium" },
      { label: "Moisture", value: "≤14%" },
      { label: "Purity", value: "99.5%" },
      { label: "Shelf Life", value: "18 Months" },
    ],
    tag: "High Volume",
  },
  {
    name: "Long Grain White Rice",
    image: longImage,
    desc: "Carefully processed long-grain white rice with a firm texture and fluffy cook. Preferred across African and American markets.",
    features: [
      { label: "Grain Length", value: "6.5–7mm" },
      { label: "Broken %", value: "≤2%" },
      { label: "Whiteness", value: "Premium" },
      { label: "Shelf Life", value: "24 Months" },
    ],
    tag: "Global Choice",
  },
  {
    name: "Short Grain Rice",
    image: shortImage,
    desc: "Tender, slightly sticky short-grain rice — perfect for sushi, risotto, and Asian cuisines. Cultivated in select Indian regions.",
    features: [
      { label: "Grain Type", value: "Round/Short" },
      { label: "Starch", value: "High Amylopectin" },
      { label: "Purity", value: "99.5%" },
      { label: "Texture", value: "Soft & Sticky" },
    ],
    tag: "Specialty",
  },
  {
    name: "Custom Packaging",
    image: packagingImage,
    desc: "We offer white-label and custom-branded packaging from 1kg retail pouches to 50kg bulk sacks, meeting global retail and wholesale standards.",
    features: [
      { label: "Sizes", value: "1kg–50kg" },
      { label: "Branding", value: "Custom OEM" },
      { label: "Material", value: "Food-Grade" },
      { label: "Compliance", value: "Global Standards" },
    ],
    tag: "OEM Available",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding" style={{ background: "var(--gradient-section)" }}>
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Our Products</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green mb-4">
            World-Class Rice Varieties
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            From the fragrant plains of northern India to global markets — every grain we export is a promise of quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl overflow-hidden bg-white border border-border card-hover"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 right-3 font-body text-xs font-semibold px-3 py-1 rounded-full gradient-gold text-brand-charcoal">
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-brand-green mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {product.desc}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {product.features.map((f) => (
                    <div key={f.label} className="bg-brand-ivory rounded-lg px-3 py-2">
                      <div className="font-body text-[10px] text-muted-foreground uppercase tracking-wide">{f.label}</div>
                      <div className="font-body text-xs font-semibold text-brand-green">{f.value}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full font-body text-sm font-semibold py-2.5 rounded-xl border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-ivory transition-all duration-300"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
