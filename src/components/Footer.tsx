import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-accent text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Nisar & Nisar" className="h-14 w-auto mb-5" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              One of the leading law firms of Pakistan with offices in Karachi, Lahore, and Islamabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-accent mb-5">Explore</h4>
            <div className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/team", label: "Our Team" },
                { to: "/practice-areas", label: "Areas of Practice" },
                { to: "/clientele", label: "Our Clientele" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block text-foreground/70 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-accent mb-5">Information</h4>
            <div className="space-y-2.5 text-sm">
              {[
                { to: "/sitemap", label: "Sitemap" },
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/terms-conditions", label: "Terms & Conditions" },
                { to: "/feedback", label: "Feedback" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block text-foreground/70 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-accent mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>+9221-35315171-72</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <a href="mailto:info@nisarandnisar.com" className="hover:text-accent transition-colors break-all">info@nisarandnisar.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>Karachi · Lahore · Islamabad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground tracking-wide">
          <p>© 2003–{new Date().getFullYear()} NISAR & NISAR. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
