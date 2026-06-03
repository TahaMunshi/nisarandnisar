import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/practice-areas", label: "Practice" },
  { to: "/clientele", label: "Clientele" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs tracking-wider">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>+9221-35315171-72</span>
          </div>
          <a href="mailto:info@nisarandnisar.com" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-3 h-3" />
            info@nisarandnisar.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 border-b border-border">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Nisar & Nisar Logo" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors ${
                    active ? "text-accent" : "text-foreground/80 hover:text-accent"
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-accent" />}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm uppercase tracking-wider rounded transition-colors ${
                  location.pathname === link.to
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80 hover:bg-secondary hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
