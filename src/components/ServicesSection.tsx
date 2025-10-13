import { Building2, Hammer, Layers, Zap, Paintbrush, Home, Trees, Shield, Package, Wrench, HardHat, Scissors, Lightbulb, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Building2,
    title: 'Construction & Turnkey Projects',
    summary: 'Complete end-to-end construction solutions for luxury villas, commercial buildings, and industrial facilities.',
    path: '/services/construction'
  },
  {
    icon: Hammer,
    title: 'Architectural & Engineering Design',
    summary: 'Innovative design services combining aesthetics with structural integrity and sustainability.',
    path: '/services/design'
  },
  {
    icon: Layers,
    title: 'Structural & Civil Works',
    summary: 'Comprehensive civil engineering solutions from excavation to roofing systems.',
    path: '/services/structural'
  },
  {
    icon: Zap,
    title: 'MEP Systems',
    summary: 'Advanced mechanical, electrical, and plumbing systems designed for efficiency and reliability.',
    path: '/services/mep'
  },
  {
    icon: Paintbrush,
    title: 'Interior Fit-Out & Finishes',
    summary: 'Premium interior solutions transforming spaces into exceptional experiences.',
    path: '/services/interior'
  },
  {
    icon: Home,
    title: 'Façades & External Works',
    summary: 'Architectural façade systems combining aesthetics with energy efficiency and durability.',
    path: '/services/facades'
  },
  {
    icon: Trees,
    title: 'Landscaping & Outdoor Works',
    summary: 'Creating stunning outdoor environments with sustainable landscaping solutions.',
    path: '/services/landscaping'
  },
  {
    icon: Shield,
    title: 'Waterproofing & Insulation',
    summary: 'Advanced protection systems ensuring long-term durability and energy efficiency.',
    path: '/services/waterproofing'
  },
  {
    icon: Package,
    title: 'Modular & Prefabricated Solutions',
    summary: 'Fast-track construction with quality-controlled modular building systems.',
    path: '/services/modular'
  },
  {
    icon: Wrench,
    title: 'Maintenance & AMC',
    summary: 'Comprehensive maintenance services and annual maintenance contracts for all building systems.',
    path: '/services/maintenance'
  },
  {
    icon: HardHat,
    title: 'Temporary Works & Site Services',
    summary: 'Complete site establishment and temporary infrastructure for safe construction operations.',
    path: '/services/temporary'
  },
  {
    icon: Scissors,
    title: 'Specialty Trades & Custom Fabrication',
    summary: 'Expert craftsmanship in specialized construction trades and custom metalwork.',
    path: '/services/specialty'
  },
  {
    icon: Lightbulb,
    title: 'Smart & Sustainable Solutions',
    summary: 'Cutting-edge smart building technologies and sustainable construction practices.',
    path: '/services/smart'
  },
  {
    icon: HeartHandshake,
    title: 'Value-Added Client Services',
    summary: 'Comprehensive project management, regulatory support, and post-handover services.',
    path: '/services/value-added'
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Comprehensive Construction Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we deliver excellence across all aspects of construction and building services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.summary}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-accent group-hover:text-accent"
                    onClick={() => navigate(service.path)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
