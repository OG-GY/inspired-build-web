import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Package, Zap, Building2, Mountain, Container, Cable, Drum } from 'lucide-react';
import heroMetal from '@/assets/metal/hero-metal.jpg';

const metalDomains = [
  {
    icon: Package,
    title: 'Comprehensive Scrap & Recyclables Trading',
    summary: 'Complete scrap trading solutions covering ferrous, non-ferrous, plastic, wood, e-waste, rubber, and mixed industrial materials.',
    path: '/metal/scrap'
  },
  {
    icon: Zap,
    title: 'Non-Ferrous Metal Trading',
    summary: 'Premium trading of aluminium, copper, specialty alloys, and automotive components for aerospace and electronics industries.',
    path: '/metal/non-ferrous'
  },
  {
    icon: Building2,
    title: 'Steel & Basic Steel Products Trading',
    summary: 'Comprehensive ferrous materials including structural steel, sheets, plates, stainless steel, and pipes for global infrastructure.',
    path: '/metal/steel'
  },
  {
    icon: Mountain,
    title: 'Metal Ores & Raw Materials Trading',
    summary: 'Primary feedstocks including iron ore, bauxite, alumina, ferroalloys, and industrial minerals for metal production worldwide.',
    path: '/metal/ores'
  },
  {
    icon: Container,
    title: 'Cargo Containers Trading',
    summary: 'New, used, and specialized shipping containers with modifications, accessories, and comprehensive logistics services.',
    path: '/metal/containers'
  },
  {
    icon: Cable,
    title: 'Metal Wires Trading',
    summary: 'Conductive and structural wire products including copper, aluminium conductors, steel wire, specialty cables, and mesh.',
    path: '/metal/wires'
  },
  {
    icon: Drum,
    title: 'Metal Cans & Industrial Containers Trading',
    summary: 'Industrial packaging solutions including steel drums, tinplate cans, storage tanks, and custom metal packaging.',
    path: '/metal/packaging'
  }
];

const Metal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroMetal})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/90 to-deep-navy/70"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase">
              Global Trade Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-light mt-4 mb-6 text-warm-cream">
              Metals & Products Trading
            </h1>
            <p className="text-xl text-warm-cream/80 max-w-3xl mx-auto leading-relaxed">
              Forging global trade with quality and integrity. Your trusted partner for metals, industrial materials, and comprehensive scrap trading solutions.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">About Green Hills Metals</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
                International Trading Excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Green Hills Metals & Its Products Trading L.L.C. is a UAE-headquartered international trading company specializing in metals, industrial materials, and comprehensive scrap trading. With a strong operational presence in Dubai – a global commodities hub – we partner with leading manufacturers, smelters, recyclers, and suppliers to deliver high-quality metals and industrial inputs worldwide.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our portfolio includes ferrous and non-ferrous metals, steel products, metal ores, cargo containers, industrial packaging, and a complete range of scrap and recycled materials. By combining transparent sourcing, technical expertise, and sustainable practices, we ensure reliable supply chains and long-term value for clients across global markets.
              </p>
            </div>
          </div>
        </section>

        {/* Trading Domains Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Trading Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
                Comprehensive Metal Trading Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                From raw materials to finished products, we deliver excellence across all aspects of metal and industrial trading.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metalDomains.map((domain, index) => {
                const Icon = domain.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-accent/50"
                    onClick={() => navigate(domain.path)}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-serif font-light group-hover:text-accent transition-colors">
                        {domain.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{domain.summary}</p>
                      <Button variant="ghost" className="w-full group-hover:bg-accent/10">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Commitment</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
                  Sustainability & Responsible Trading
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-light text-foreground">Environmental Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We prioritize recycled and reusable materials, reducing environmental impact while ensuring supply chain resilience. Non-ferrous metals can be recycled indefinitely without losing quality, and recycling aluminium saves about 95% of the energy compared to producing new metal.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-light text-foreground">Quality Assurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We adhere to international quality management standards including ISO 9001 to ensure consistency and customer satisfaction. All products are inspected and certified to meet ASTM, DIN or other applicable industry specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-24 bg-gradient-to-br from-deep-navy to-deep-navy/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-warm-cream">
              Ready to Partner With Us?
            </h2>
            <p className="text-warm-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact our trading team to discuss your metal and industrial material requirements.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-warm-cream border-luxury-gold hover:bg-luxury-gold hover:text-deep-navy"
              onClick={() => navigate('/contactus')}
            >
              Get In Touch
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Metal;
