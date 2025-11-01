"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-8 sm:top-10 w-full z-[50] bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold text-primary">FinAX</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-accent transition-colors">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-accent transition-colors">
            About
          </a>
          <a href="#resources" className="text-foreground hover:text-accent transition-colors">
            Resources
          </a>
          <a href="#blog" className="text-foreground hover:text-accent transition-colors">
            Blog
          </a>
          <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button
              variant="default"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-glow"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-3 space-y-3">
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block text-foreground hover:text-accent transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block text-foreground hover:text-accent transition-colors"
          >
            About
          </a>
          <a
            href="#resources"
            onClick={() => setMenuOpen(false)}
            className="block text-foreground hover:text-accent transition-colors"
          >
            Resources
          </a>
          <a
            href="#blog"
            onClick={() => setMenuOpen(false)}
            className="block text-foreground hover:text-accent transition-colors"
          >
            Blog
          </a>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-foreground hover:text-accent transition-colors"
          >
            Contact
          </Link>

          <Link to="/contact">
            <Button
              variant="default"
              size="lg"
              className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent-glow"
            >
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
