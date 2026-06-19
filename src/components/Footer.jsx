import { Link } from "react-router-dom";
import logo from "@/assets/codixLogo-nobg.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <img
              src={logo}
              alt="Codix Charity Foundation"
              className="h-10 w-auto mb-4"
            />
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link
                  to="/about"
                  className="hover:opacity-100 transition-opacity"
                >
                  About CCF
                </Link>
              </li>
              <li>
                <Link
                  to="/our-work"
                  className="hover:opacity-100 transition-opacity"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/codix-academy"
                  className="hover:opacity-100 transition-opacity"
                >
                  Codix Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/scholarship"
                  className="hover:opacity-100 transition-opacity"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  to="/mentoring"
                  className="hover:opacity-100 transition-opacity"
                >
                  Mentoring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link
                  to="/contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="#" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:opacity-100 transition-opacity">
                  Cookies Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:opacity-100 transition-opacity"
                >
                  Board of Trustees
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Subscribe
            </h4>
            <p className="text-sm opacity-80 mb-4">
              Get updates on our latest programs and community impact stories.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-navy-foreground/20 bg-transparent px-3 py-2 text-sm placeholder:opacity-50"
              />
              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Submit
              </button>
            </div>
            <p className="text-xs opacity-60 mt-2">
              By subscribing you agree to our Privacy Policy and consent to
              receive updates from Codix Charity Foundation.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container py-6 text-center text-sm opacity-60">
          Copyright © Codix Charity Foundation 2026. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
