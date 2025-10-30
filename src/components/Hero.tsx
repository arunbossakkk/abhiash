import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
//import heroImage from "@/assets/hero-stock.jpg";
import heroImage from "@/assets/hero-stock.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Stock market visualization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Smart Investment Solutions for
            <span className="text-accent block mt-2">Modern Markets</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Professional stock analysis, Mutual Funds, and financial strategies tailored to your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
          
              className="bg-accent text-accent-foreground hover:bg-accent-glow text-lg px-8 py-6 shadow-[var(--shadow-glow)]"
             
            >
             
              Start Investing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-muted hover:text-muted-foreground text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
