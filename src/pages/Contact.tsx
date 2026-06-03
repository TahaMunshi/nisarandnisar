import Layout from "@/components/Layout";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website_homepage: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website_homepage.trim()) {
      return;
    }

    window.location.href = `mailto:info@nisarandnisar.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
  };

  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 text-center">
          
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="section-heading text-2xl mb-2">Office Locations</h2>
              <div className="gold-underline mb-8" />

              <div className="space-y-6">
                {["Karachi", "Lahore", "Islamabad"].map((city) => (
                  <div key={city} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <h3 className="font-serif font-semibold text-foreground">{city} Office</h3>
                      <p className="text-muted-foreground text-sm">{city}, Pakistan</p>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground text-sm">+9221-35315171-72</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@nisarandnisar.com" className="text-accent text-sm hover:underline">info@nisarandnisar.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-heading text-2xl mb-2">Send a Message</h2>
              <div className="gold-underline mb-8" />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  />
                </div>
                <input
                  type="text"
                  name="website_homepage"
                  value={formData.website_homepage}
                  onChange={(e) => setFormData({ ...formData, website_homepage: e.target.value })}
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    top: 0,
                    opacity: 0,
                    pointerEvents: "none",
                    width: 0,
                    height: 0,
                  }}
                />

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-3 rounded font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
