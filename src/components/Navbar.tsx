import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-10 sm:top-11 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold text-primary">FinAX</span>
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-foreground hover:text-accent transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-foreground hover:text-accent transition-colors"
          >
            About
          </a>
          <a
            href="#resources"
            className="text-foreground hover:text-accent transition-colors"
          >
            Resources
          </a>
          <a
            href="#blog"
            className="text-foreground hover:text-accent transition-colors"
          >
            Blog
          </a>
          <Link
            to="/contact"
            className="text-foreground hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Get Started button */}
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
    </nav>
  );
};

export default Navbar;
