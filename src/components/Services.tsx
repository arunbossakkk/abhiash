import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, PieChart, Shield, BarChart3, Target, Users } from "lucide-react";

type Service = {
  icon: any;
  title: string;
  description: string;
};
const colors = [
  "bg-blue-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-orange-50",
];


const services: Service[] = [
  {
    icon: TrendingUp,
    title: "Stock Market",
    description: "Stock market analysis and trading strategies to maximize your returns.",
  },
  {
    icon: PieChart,
    title: "Fixed Income",
    description: "Start your investment journey with our expert fixed income solutions.",
  },
  {
    icon: Shield,
    title: "Mutual funds",
    description: "Start your investment journey from leading mutual fund houses with expert guidance.",  
  },
  {
    icon: BarChart3,
    title: "IPO Analysis",
    description: "Apply and bid for upcoming IPOs with our expert analysis and recommendations.",
  },
  {
    icon: Target,
    title: "Insurance Planning",
    description: "Life, Non-Life and health insurance planning to secure your family's future.",
  },
  {
    icon: Users,
    title: "Bonds",
    description: "Explore our range of bond investment options for stable and secure returns.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive investment solutions designed to help you achieve your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
  const Icon = service.icon;
  const color = colors[index % colors.length]; // loop through colors

  return (
    <Card
  key={service.title}
  className="border-border bg-card hover:bg-transparent hover:shadow-[var(--shadow-elegant)] hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
>

      <CardContent className="p-8">
        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
          <Icon className="h-7 w-7 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold text-card-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
      </CardContent>
    </Card>
  );
})}

        </div>
      </div>
    </section>
  );
};

export default Services;
