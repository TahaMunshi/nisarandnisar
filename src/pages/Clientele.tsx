import Layout from "@/components/Layout";
import { Building2 } from "lucide-react";

const clients = [
  "Dubai Islamic Bank",
  "Corporate Intl Magazine",
  "Pakistan Bar Council",
  "Javedan Corporation",
  "Mybank Limited",
  "Arif Habib Group",
  "Thatta Cement",
  "Pakistan Air Force",
  "National Highway Authority",
  "Entellics",
  "EgyptAir",
];

const Clientele = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-3">Trusted By</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Clientele</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Nisar & Nisar has the privilege of serving a distinguished roster of national and international clients across various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {clients.map((client) => (
              <div key={client} className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-accent/50 transition-all">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-3">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <span className="text-sm font-medium text-card-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clientele;
