import { Leaf, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Export Markets", href: "#export" },
  { label: "Quality & Certifications", href: "#quality" },
  { label: "Contact Us", href: "#contact" },
];

const products = [
  "Premium Basmati Rice",
  "Non-Basmati Rice",
  "Long Grain White Rice",
  "Short Grain Rice",
  "Custom Packaging",
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "hsl(var(--charcoal))" }} className="text-white">
      {/* Main footer content */}
      <div className="container-max px-4 md:px-8 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full gradient-green flex items-center justify-center shadow-green">
                <Leaf className="w-5 h-5 text-brand-ivory" />
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-tight text-white">GrainVista</div>
                <div className="font-body text-[9px] tracking-[0.2em] uppercase text-brand-gold leading-none">
                  Premium Rice Exports
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              India's trusted rice exporter since 1998. Delivering premium quality rice
              to 40+ countries with integrity, sustainability, and world-class standards.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => scrollTo("#products")}
                    className="font-body text-sm text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <div className="font-body text-xs text-brand-gold uppercase tracking-wide mb-1">Address</div>
                <div className="font-body text-sm text-white/60 leading-relaxed">
                  Plot No. 47, Industrial Area Phase-II,<br />
                  Karnal, Haryana – 132001, India
                </div>
              </div>
              <div>
                <div className="font-body text-xs text-brand-gold uppercase tracking-wide mb-1">Phone</div>
                <div className="font-body text-sm text-white/60">+91 98765 43210</div>
              </div>
              <div>
                <div className="font-body text-xs text-brand-gold uppercase tracking-wide mb-1">Email</div>
                <div className="font-body text-sm text-white/60">exports@grainvista.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications strip */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 lg:px-16 py-4 flex flex-wrap items-center justify-center gap-4">
          {["ISO 9001:2015", "FSSAI Certified", "APEDA Registered", "HACCP Compliant", "Halal Certified"].map((c) => (
            <span key={c} className="font-body text-[10px] text-white/40 uppercase tracking-widest">
              ✓ {c}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} GrainVista Exports Pvt. Ltd. All rights reserved. Made in India 🇮🇳
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-brand-charcoal" />
          </button>
        </div>
      </div>
    </footer>
  );
}
