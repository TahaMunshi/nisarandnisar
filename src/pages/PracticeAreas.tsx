import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { practiceAreas } from "@/data/practiceAreas";
import {
  Anchor, Scale, Handshake, Gavel, Plane, Landmark, Building2, Briefcase,
  FileText, Globe, ShieldCheck, Cpu, DollarSign, Users, HeartPulse,
  BookOpen, Shield, Truck, Factory, Home, Zap, ScrollText, Building, Receipt
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "admiralty-maritime-law": Anchor,
  "arbitration-mediation": Handshake,
  "alternate-dispute-resolution": Scale,
  "appellate-practice": Gavel,
  "aviation-law": Plane,
  "banking-finance-law": Landmark,
  "bankruptcy": Receipt,
  "business-company-law": Building2,
  "civil-law": ScrollText,
  "corporate-law": Briefcase,
  "commercial-contract-law": FileText,
  "constitutional-administrative": Building,
  "customs-taxation": DollarSign,
  "e-commerce-it-laws": Cpu,
  "foreign-investment": Globe,
  "hr-development": Users,
  "human-rights": HeartPulse,
  "immigration-laws": BookOpen,
  "insurance": ShieldCheck,
  "intellectual-property-rights": Shield,
  "international-trade-wto": Truck,
  "litigation": Gavel,
  "mergers-acquisitions": Factory,
  "privatization": Building2,
  "probate": ScrollText,
  "project-financing": Landmark,
  "property-real-estate": Home,
  "torts-personal-injury": HeartPulse,
  "telecommunication-laws": Zap,
  "trust": Shield,
};

const PracticeAreas = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-3">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Areas of Practice</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Nisar & Nisar offers comprehensive legal services across a wide spectrum of practice areas, providing expert counsel to both domestic and international clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {practiceAreas.map((area) => {
              const Icon = iconMap[area.slug] || Scale;
              return (
                <Link
                  key={area.slug}
                  to={`/practice-areas/${area.slug}`}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-accent/50 transition-all group"
                >
                  <Icon className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-card-foreground">{area.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
