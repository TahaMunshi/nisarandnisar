import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Map } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { teamMembers } from "@/data/teamMembers";

const Sitemap = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-accent text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-primary-foreground/70">Sitemap</span>
          </div>
          <div className="flex items-center gap-4">
            <Map className="w-10 h-10 text-accent" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Sitemap</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4 border-b border-gold pb-2">Main Pages</h2>
              <ul className="space-y-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/team", label: "Our Team" },
                  { to: "/practice-areas", label: "Area of Practice" },
                  { to: "/clientele", label: "Our Clientele" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-foreground/70 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4 border-b border-gold pb-2">Legal & Info</h2>
              <ul className="space-y-2">
                {[
                  { to: "/privacy-policy", label: "Privacy Policy" },
                  { to: "/terms-conditions", label: "Terms & Conditions" },
                  { to: "/feedback", label: "Feedback" },
                  { to: "/sitemap", label: "Sitemap" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-foreground/70 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Members */}
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-4 border-b border-gold pb-2">Our Team</h2>
              <ul className="space-y-2">
                {teamMembers
                  .filter((m) => m.hasDetail)
                  .map((member) => (
                    <li key={member.slug}>
                      <Link to={`/team/${member.slug}`} className="text-foreground/70 hover:text-accent transition-colors">
                        {member.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div className="md:col-span-2 lg:col-span-3">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4 border-b border-gold pb-2">Area of Practice</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {practiceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link to={`/practice-areas/${area.slug}`} className="text-foreground/70 hover:text-accent transition-colors">
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
