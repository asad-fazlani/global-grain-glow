import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-rice-field.jpg";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={heroRef} className="absolute inset-0 scale-110">
          <img
            src={heroImage}
            alt="Lush green paddy rice fields at golden hour"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 gradient-hero z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-max px-4 md:px-8 lg:px-16 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 rounded-full mb-6">
              🌾 Trusted Since 1998 · India's Finest
            </span>
          </div>

          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Premium Quality
            <span className="block text-brand-gold">Rice Exported</span>
            <span className="block">Worldwide</span>
          </h1>

          <p
            className="font-body text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Delivering authentic Indian rice to global markets with unmatched
            quality, trust, and a commitment to sustainable farming practices.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-body font-semibold px-8 py-4 rounded-full gradient-gold text-brand-charcoal hover:opacity-90 transition-all shadow-gold text-base"
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-body font-semibold px-8 py-4 rounded-full border-2 border-white/40 text-white hover:bg-white/10 transition-all text-base"
            >
              Explore Products
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          {[
            { value: "25+", label: "Years of Excellence" },
            { value: "40+", label: "Countries Served" },
            { value: "50,000+", label: "MT Exported Annually" },
            { value: "100%", label: "Quality Assured" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center border border-white/20 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-5"
            >
              <div className="font-display text-3xl font-bold text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs text-white/75 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
        <div className="font-body text-xs text-white/60 uppercase tracking-widest">
          Scroll
        </div>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
