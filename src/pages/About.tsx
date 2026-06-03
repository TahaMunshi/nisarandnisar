import Layout from "@/components/Layout";
import { Award, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-3">Learn About Us</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">About Nisar & Nisar</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading">Our Firm</h2>
            <div className="gold-underline mb-8" />

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Since its inception almost 2 decades ago, Nisar & Nisar has become one of the leading law firms of Pakistan with its presence in the three major cities of Pakistan besides international associations.
              </p>
              <p>
                The firm has a team of lawyers and consultants who have expertise in various disciplines of law and are amongst acknowledged leaders of their fields.
              </p>
              <p>
                The firm endeavors to provide exceptional legal services tailored to the individual needs of our clients with its acclaimed expertise in corporate, commercial and cross-border transactions. The attorneys at Nisar & Nisar enjoy an immaculate reputation in the market for providing extraordinary legal services with a priority on cost effective and speedy dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, title: "Excellence", desc: "Winner of the Corporate Intl Magazine 2011 Global Award for International Trade Law Firm of the Year in Pakistan." },
              { icon: Target, title: "Client Focus", desc: "Exceptional legal services tailored to individual needs with a priority on cost-effective and speedy dispute resolution." },
              { icon: Eye, title: "Expertise", desc: "A team of lawyers and consultants with expertise across various disciplines, acknowledged as leaders in their fields." },
            ].map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <v.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="section-heading">Our Presence</h2>
          <div className="gold-underline mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Karachi", "Lahore", "Islamabad"].map((city) => (
              <div key={city} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif font-semibold text-lg text-foreground">{city}</h3>
                <p className="text-muted-foreground text-sm mt-1">Office</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
