import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Export Markets", href: "#export" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-max px-4 md:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="w-9 h-9 rounded-full gradient-green flex items-center justify-center shadow-green">
            <Leaf className="w-5 h-5 text-brand-ivory" />
          </div>
          <div>
            <div
              className={`font-display font-bold text-lg leading-tight ${
                scrolled ? "text-brand-green" : "text-white"
              }`}
            >
              Ganindra International
            </div>
            <div
              className={`font-body text-[9px] tracking-[0.2em] uppercase leading-none ${
                scrolled ? "text-brand-gold" : "text-brand-gold"
              }`}
            >
              India's Premium Rice Exporter
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-brand-gold ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="font-body text-sm font-semibold px-5 py-2.5 rounded-full gradient-green text-brand-ivory hover:opacity-90 transition-opacity shadow-green"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-body text-sm font-medium text-foreground/80 hover:text-brand-green text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="font-body text-sm font-semibold px-5 py-2.5 rounded-full gradient-green text-brand-ivory w-full"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
