import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Advanced AI-powered market analysis",
  "24/7 portfolio monitoring and alerts",
  "Personalized investment strategies",
  "Secure and compliant platform",
  "Dedicated account management"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose FinAX?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in financial markets, we provide institutional-grade investment tools and insights to individual investors. Our platform combines cutting-edge technolsogy with proven investment strategies.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-glow">
              Discover Our Platform
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] border border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-muted/50 rounded-xl">
                  <span className="text-foreground font-semibold">Total Returns</span>
                  <span className="text-2xl font-bold text-accent">+24.7%</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-muted/50 rounded-xl">
                  <span className="text-foreground font-semibold">Risk Score</span>
                  <span className="text-2xl font-bold text-accent">Low</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-muted/50 rounded-xl">
                  <span className="text-foreground font-semibold">Portfolio Value</span>
                  <span className="text-2xl font-bold text-accent">$487,920</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
