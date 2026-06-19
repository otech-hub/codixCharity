import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/codixLogo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About CCF", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Codix Academy", to: "/codix-academy" },
  // { label: "Scholarship", to: "/scholarship" },
  { label: "Mentoring", to: "/mentoring" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Codix Charity Foundation"
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium ${
                pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
