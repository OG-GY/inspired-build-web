import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Wrench, Factory, Building2, Hammer, Shield, Award } from 'lucide-react';
import heroMetal from '@/assets/metal/hero-metal.jpg';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';

const MetalDomain = () => {
  const services = [
    {
      icon: Factory,
      title: 'Custom Metal Fabrication',
      description: 'Precision fabrication of steel, stainless steel, and aluminum components for construction and industrial applications.',
    },
    {
      icon: Building2,
      title: 'Structural Steelwork',
      description: 'Design, fabrication, and installation of structural steel frameworks for commercial and residential buildings.',
    },
    {
      icon: Wrench,
      title: 'Architectural Metalwork',
      description: 'Bespoke architectural metal elements including railings, canopies, facades, and decorative features.',
    },
    {
      icon: Shield,
      title: 'Metal Cladding Systems',
      description: 'High-performance metal cladding and facade solutions for modern building envelopes.',
    },
    {
      icon: Hammer,
      title: 'Welding & Joining',
      description: 'Expert welding services including MIG, TIG, and arc welding for all metal types and applications.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'ISO-certified quality control ensuring all metalwork meets international standards and specifications.',
    },
  ];

  const projects = [
    {
      image: metalFabrication,
      title: 'Industrial Fabrication',
      description: 'Custom steel components for manufacturing facilities',
    },
    {
      image: architecturalMetal,
      title: 'Architectural Features',
      description: 'Decorative metalwork for luxury developments',
    },
    {
      image: structuralSteel,
      title: 'Structural Framework',
      description: 'Complete steel framework for commercial towers',
    },
    {
      image: customMetalwork,
      title: 'Custom Staircases',
      description: 'Bespoke metal staircases and railings',
    },
    {
      image: metalCladding,
      title: 'Facade Systems',
      description: 'Modern metal cladding for building exteriors',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src={heroMetal} 
              alt="Metal fabrication workshop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 via-deep-navy/80 to-transparent" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase">Metal Division</span>
              <h1 className="text-5xl md:text-7xl font-serif font-light mt-4 mb-6 text-warm-cream">
                Excellence in Metal Fabrication
              </h1>
              <p className="text-xl text-warm-cream/90 mb-8 leading-relaxed">
                Precision engineering and expert craftsmanship delivering high-quality metal solutions for construction, 
                industrial, and architectural projects across the UAE.
              </p>
              <Button size="lg" className="bg-luxury-gold text-deep-navy hover:bg-luxury-gold/90">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* About Metal Division */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
                Premier Metal Fabrication Specialists
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our metal division combines state-of-the-art fabrication facilities with decades of expertise in 
                metalworking. From structural steelwork to intricate architectural details, we deliver precision-engineered 
                solutions that meet the highest standards of quality and safety.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-luxury-gold mb-2">15,000+</div>
                <div className="text-muted-foreground">Tonnes Fabricated</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-luxury-gold mb-2">ISO 9001</div>
                <div className="text-muted-foreground">Certified Quality</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
                Our Metal Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive metalworking solutions from design to installation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <service.icon className="h-12 w-12 text-luxury-gold mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Carousel */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
                Featured Metal Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Showcasing our expertise in metal fabrication and installation
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden">
                      <div className="aspect-square relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-deep-navy text-warm-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
                  State-of-the-Art Facilities
                </h2>
                <p className="text-warm-cream/90 mb-6 leading-relaxed">
                  Our metal fabrication workshop spans over 50,000 sq ft and is equipped with the latest CNC machinery, 
                  laser cutting systems, and automated welding equipment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">•</span>
                    <span>CNC plasma and laser cutting up to 50mm thickness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">•</span>
                    <span>Automated welding robots for precision joints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">•</span>
                    <span>Heavy-duty press brakes and rolling machines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">•</span>
                    <span>In-house powder coating and galvanizing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">•</span>
                    <span>NDT testing and quality inspection facilities</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src={metalFabrication} 
                  alt="Metal fabrication facility"
                  className="rounded-sm shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-luxury-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-deep-navy">
              Ready to Start Your Metal Project?
            </h2>
            <p className="text-lg text-deep-navy/80 mb-8 max-w-2xl mx-auto">
              Contact our metal division team to discuss your requirements and get a detailed quotation.
            </p>
            <Button size="lg" variant="outline" className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-warm-cream">
              Request a Quote
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MetalDomain;
