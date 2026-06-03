import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Scale, Building2, Globe, Shield, Users, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const practiceHighlights = [
  { icon: Scale, title: "Admiralty & Maritime Law", desc: "Expertise in maritime transactions, Bills of Lading, Marine Insurance, and maritime litigation." },
  { icon: Building2, title: "Corporate Law", desc: "Comprehensive corporate advisory, mergers & acquisitions, and business structuring." },
  { icon: Globe, title: "International Trade & WTO", desc: "Cross-border trade compliance, WTO regulations, and international commerce." },
  { icon: Shield, title: "Intellectual Property", desc: "Protection of patents, trademarks, copyrights, and trade secrets." },
  { icon: Users, title: "Arbitration & Mediation", desc: "Alternative dispute resolution with focus on cost-effective outcomes." },
  { icon: Award, title: "Banking & Finance", desc: "Banking regulations, project financing, and financial compliance advisory." },
];

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "3", label: "Major City Offices" },
  { value: "500+", label: "Cases Handled" },
  { value: "1", label: "Global Award Winner" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-white/90 mb-6">Advocates · Legal & Policy Consultants</p>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-8 leading-[1.05] text-white">
              Defending Your Rights with <span className="text-accent italic">Distinction</span>
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
              For nearly two decades, Nisar & Nisar has stood as one of Pakistan's most trusted law firms — offering refined counsel across corporate, commercial, and cross-border matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn-outline">
                Discover Our Firm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Award Banner */}
      <section className="bg-accent text-accent-foreground py-5 border-y border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base tracking-wide flex items-center justify-center gap-3 flex-wrap">
            <Award className="w-5 h-5" />
            <span>Winner — Corporate Intl Magazine 2011 Global Award:</span>
            <strong className="font-serif italic text-lg">"International Trade Law Firm of the Year in Pakistan"</strong>
          </p>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">About the Firm</p>
              <h2 className="section-heading">A Legacy of <em className="text-accent not-italic">Trusted Counsel</em></h2>
              <div className="gold-underline mb-8" />
              <p className="text-foreground/80 leading-relaxed mb-5 text-lg">
                The firm brings together a team of distinguished lawyers and consultants — recognized leaders across diverse disciplines of law.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nisar & Nisar provides exceptional legal services tailored to the individual needs of each client, with acclaimed expertise in corporate, commercial, and cross-border transactions. Our attorneys are known for their immaculate reputation and commitment to cost-effective, timely dispute resolution.
              </p>
              <ul className="space-y-3 mb-8">
                {["Two decades of refined legal practice", "Offices in Karachi, Lahore & Islamabad", "International associations & global reach"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-accent hover:underline font-medium inline-flex items-center gap-2 uppercase text-xs tracking-widest">
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-secondary border border-border p-8 text-center hover:border-accent transition-colors">
                  <div className="font-serif text-5xl text-accent mb-2">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest text-foreground/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Our Expertise</p>
            <h2 className="section-heading">Areas of <em className="text-accent not-italic">Practice</em></h2>
            <div className="gold-underline mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">Comprehensive legal expertise across diverse practice areas, delivered with precision and care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceHighlights.map((item) => (
              <div key={item.title} className="bg-card p-8 border border-border hover:border-accent hover:shadow-xl transition-all group relative">
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
                <item.icon className="w-12 h-12 text-accent mb-5" strokeWidth={1.25} />
                <h3 className="font-serif text-2xl text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/practice-areas" className="btn-primary">
              View All Practice Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-hero py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="eyebrow text-white/80 mb-4">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
            Need <em className="italic">Legal Assistance?</em>
          </h2>
          <p className="text-white/85 mb-10 text-lg leading-relaxed">
            Connect with our experienced attorneys for thoughtful, professional counsel tailored to your unique circumstances.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-accent px-10 py-4 rounded-sm font-medium tracking-wide uppercase text-xs hover:bg-white/90 transition-all shadow-xl">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
