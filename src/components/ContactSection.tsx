import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,15}$/.test(form.phone))
      newErrors.phone = "Valid phone number is required";
    if (!form.country.trim()) newErrors.country = "Country is required";
    if (!form.message.trim() || form.message.trim().length < 10)
      newErrors.message = "Please provide more details (min 10 chars)";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--gradient-section)" }}>
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Contact Us</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-green mb-4">
            Start Your{" "}
            <span className="text-brand-gold">Export Journey</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Ready to source premium Indian rice? Our export team is standing by to provide quotes, samples, and all trade documentation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white border border-border p-7 shadow-brand">
              <h3 className="font-display text-xl font-bold text-brand-green mb-6">
                Get In Touch
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center flex-shrink-0 shadow-green">
                    <MapPin className="w-4 h-4 text-brand-ivory" />
                  </div>
                  <div>
                    <div className="font-body text-xs font-semibold text-brand-gold uppercase tracking-wide mb-1">Address</div>
                    <div className="font-body text-sm text-foreground leading-relaxed">
                      Plot No. 47, Industrial Area Phase-II,<br />
                      Karnal, Haryana – 132001, India
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center flex-shrink-0 shadow-green">
                    <Phone className="w-4 h-4 text-brand-ivory" />
                  </div>
                  <div>
                    <div className="font-body text-xs font-semibold text-brand-gold uppercase tracking-wide mb-1">Phone</div>
                    <div className="font-body text-sm text-foreground">+91 98765 43210</div>
                    <div className="font-body text-sm text-foreground">+91 11 4567 8900</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center flex-shrink-0 shadow-green">
                    <Mail className="w-4 h-4 text-brand-ivory" />
                  </div>
                  <div>
                    <div className="font-body text-xs font-semibold text-brand-gold uppercase tracking-wide mb-1">Email</div>
                    <div className="font-body text-sm text-foreground">exports@grainvista.in</div>
                    <div className="font-body text-sm text-foreground">info@grainvista.in</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl gradient-green p-7 shadow-green">
              <h4 className="font-display text-lg font-bold text-brand-ivory mb-3">
                Business Hours
              </h4>
              <div className="space-y-2">
                {[
                  { day: "Mon – Fri", time: "9:00 AM – 6:00 PM IST" },
                  { day: "Saturday", time: "9:00 AM – 2:00 PM IST" },
                  { day: "Sunday", time: "Closed" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between font-body text-sm text-white/80">
                    <span>{h.day}</span>
                    <span className="text-brand-gold font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white border border-border p-8 shadow-brand">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-brand-green mb-4" />
                  <h3 className="font-display text-2xl font-bold text-brand-green mb-3">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="font-body text-muted-foreground max-w-sm">
                    Thank you for reaching out. Our export team will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ fullName: "", companyName: "", email: "", phone: "", country: "", message: "" }); }}
                    className="mt-6 font-body text-sm font-semibold px-6 py-2.5 rounded-full gradient-green text-brand-ivory"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-xl font-bold text-brand-green mb-6">
                    Send an Inquiry
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="font-body text-xs font-semibold text-foreground/70 uppercase tracking-wide block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        maxLength={100}
                        className={`w-full font-body text-sm px-4 py-3 rounded-xl border bg-brand-ivory outline-none transition-colors focus:border-brand-green focus:bg-white ${errors.fullName ? "border-destructive" : "border-border"}`}
                      />
                      {errors.fullName && <p className="font-body text-xs text-destructive mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="font-body text-xs font-semibold text-foreground/70 uppercase tracking-wide block mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="ABC Trading Co."
                        maxLength={100}
                        className="w-full font-body text-sm px-4 py-3 rounded-xl border border-border bg-brand-ivory outline-none focus:border-brand-green focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="font-body text-xs font-semibold text-foreground/70 uppercase tracking-wide block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        maxLength={255}
                        className={`w-full font-body text-sm px-4 py-3 rounded-xl border bg-brand-ivory outline-none transition-colors focus:border-brand-green focus:bg-white ${errors.email ? "border-destructive" : "border-border"}`}
                      />
                      {errors.email && <p className="font-body text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="font-body text-xs font-semibold text-foreground/70 uppercase tracking-wide block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        maxLength={20}
                        className={`w-full font-body text-sm px-4 py-3 rounded-xl border bg-brand-ivory outline-none transition-colors focus:border-brand-green focus:bg-white ${errors.phone ? "border-destructive" : "border-border"}`}
                      />
                      {errors.phone && <p className="font-body text-xs text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="font-body text-xs font-semibold text-foreground/70 uppercase tracking-wide block mb-1.5">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className={`w-full font-body text-sm px-4 py-3 rounded-xl border bg-brand-ivory outline-none transition-colors focus:border-brand-green focus:bg-white ${errors.country ? "border-destructive" : "border-border"}`}
                    >
                      <option value="">Select your country</option>
                      {["UAE", "Saudi Arabia", "USA", "UK", "Germany", "France", "Nigeria", "Kenya", "Malaysia", "Singapore", "Australia", "Canada", "Other"].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.country && <p className="font-body text-xs text-destructive mt-1">{errors.country}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="font-body text-xs font-semibold text-foreground/70 uppercase tracking-wide block mb-1.5">
                      Message / Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe the rice variety, quantity required, and any specific quality requirements..."
                      rows={4}
                      maxLength={1000}
                      className={`w-full font-body text-sm px-4 py-3 rounded-xl border bg-brand-ivory outline-none transition-colors focus:border-brand-green focus:bg-white resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? <p className="font-body text-xs text-destructive">{errors.message}</p> : <span />}
                      <span className="font-body text-xs text-muted-foreground">{form.message.length}/1000</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-body font-semibold py-3.5 rounded-xl gradient-green text-brand-ivory hover:opacity-90 transition-opacity shadow-green flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>
                  <p className="font-body text-xs text-muted-foreground text-center mt-3">
                    We respond to all inquiries within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
