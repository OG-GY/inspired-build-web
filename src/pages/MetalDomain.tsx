import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Recycle, 
  Cpu, 
  Factory, 
  Mountain, 
  Container, 
  Cable, 
  Package,
  Leaf,
  Shield,
  Award,
  MapPin,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroMetal from '@/assets/metal/hero-metal.jpg';

const MetalDomain = () => {
  const navigate = useNavigate();

  const domains = [
    {
      id: 'scrap',
      icon: Recycle,
      title: 'Comprehensive Scrap & Recyclables Trading',
      description: 'We manage ferrous, non-ferrous, and mixed scrap materials under strict environmental and compliance standards.',
      subdomains: [
        {
          title: 'Ferrous Scrap',
          description: 'Steel, cast iron and iron-based scrap sourced from construction, vehicles, and manufacturing.'
        },
        {
          title: 'Non-Ferrous Scrap',
          description: 'Aluminium, copper, brass, stainless steel, and other valuable non-ferrous metals.'
        },
        {
          title: 'Plastic Scrap & Polymers',
          description: 'PET, HDPE, PVC and other recyclable plastic materials.'
        },
        {
          title: 'Wood & Timber Scrap',
          description: 'Scrap lumber, pallets, sawdust, and timber residues for recycling and biomass.'
        },
        {
          title: 'Wire & Cable Scrap',
          description: 'Copper and aluminium cables stripped and processed for metal recovery.'
        },
        {
          title: 'Electronic / E-Waste Scrap',
          description: 'Circuit boards, wiring, household electronics and IT equipment for extraction of reusable materials.'
        },
        {
          title: 'Rubber & Tyre Scrap',
          description: 'Used tyres and rubber products recycled into crumb rubber, TDF, and industrial materials.'
        },
        {
          title: 'Mixed Industrial Scrap',
          description: 'Production rejects, machinery parts, and heterogeneous industrial waste.'
        }
      ]
    },
    {
      id: 'non-ferrous',
      icon: Cpu,
      title: 'Non-Ferrous Metal Trading',
      description: 'Non-ferrous metals play a critical role in aerospace, electronics, automotive, and construction.',
      subdomains: [
        {
          title: 'Automotive Metals & Components (Non-Ferrous)',
          description: 'Aluminium body parts, copper radiators, reusable auto components and scrap.'
        },
        {
          title: 'Aluminium & Alloy Products',
          description: 'Ingots, sheets, coils, and high-purity or custom aluminium alloys.'
        },
        {
          title: 'Copper & Copper Alloy Trading',
          description: 'Copper cathodes, wires, rods, and brass/bronze products.'
        },
        {
          title: 'Specialty Metals & Alloys',
          description: 'Titanium, nickel, magnesium, and high-performance alloys.'
        },
        {
          title: 'Electronic & Electrical Scrap (Non-Ferrous)',
          description: 'High-grade copper wiring, circuit board metals, and precision scrap.'
        }
      ]
    },
    {
      id: 'steel',
      icon: Factory,
      title: 'Steel & Basic Steel Products Trading',
      description: 'We supply a full range of ferrous materials essential to infrastructure, construction, and manufacturing.',
      subdomains: [
        {
          title: 'Automotive Metals & Components (Steel)',
          description: 'Steel body parts, chassis components, and ferrous automotive scrap.'
        },
        {
          title: 'Structural Steel & Sections',
          description: 'Beams, channels, angles, columns, and reinforcement bars (rebar).'
        },
        {
          title: 'Steel Sheets, Plates & Coils',
          description: 'Hot-rolled and cold-rolled coils, plates, and sheets for fabrication.'
        },
        {
          title: 'Stainless & Alloy Steel',
          description: 'Grades for food, chemical, medical, and industrial applications.'
        },
        {
          title: 'Steel Pipes & Tubes',
          description: 'Welded and seamless pipes for oil & gas, plumbing, and mechanical systems.'
        }
      ]
    },
    {
      id: 'ores',
      icon: Mountain,
      title: 'Metal Ores & Raw Materials Trading',
      description: 'Supply of primary and secondary raw materials essential for metal production.',
      subdomains: [
        {
          title: 'Iron Ore & Pellets',
          description: 'Lumps, fines, and pellets for global steel mills.'
        },
        {
          title: 'Bauxite, Alumina & Non-Ferrous Ores',
          description: 'Bauxite, alumina, copper concentrate, and other base metal ores.'
        },
        {
          title: 'Ferrous & Non-Ferrous Scrap (Secondary Raw Material)',
          description: 'High-quality recycled feedstock for smelters and foundries.'
        },
        {
          title: 'Ferroalloys & Pig Iron',
          description: 'Ferrochrome, ferromanganese, pig iron, and steelmaking additives.'
        },
        {
          title: 'Industrial Minerals & Fluxes',
          description: 'Silica, limestone, and other minerals used in smelting and refining.'
        }
      ]
    },
    {
      id: 'containers',
      icon: Container,
      title: 'Cargo Containers Trading',
      description: 'Supporting shipping, logistics, and storage with a diverse container portfolio.',
      subdomains: [
        {
          title: 'New & Standard Containers',
          description: '20ft/40ft dry and high-cube ISO containers.'
        },
        {
          title: 'Used & Refurbished Containers',
          description: 'Pre-owned units inspected and reconditioned.'
        },
        {
          title: 'Refrigerated & Specialized Containers',
          description: 'Reefer, open-top, flat-rack, tank, and other specialized containers.'
        },
        {
          title: 'Container Modifications & Accessories',
          description: 'Custom conversions, insulation, CSC plates, and generator sets.'
        },
        {
          title: 'Container Logistics & Leasing',
          description: 'Positioning, leasing, and transport coordination.'
        }
      ]
    },
    {
      id: 'wires',
      icon: Cable,
      title: 'Metal Wires Trading',
      description: 'Supply of conductive, structural, and industrial wire products.',
      subdomains: [
        {
          title: 'Copper & Aluminium Conductors',
          description: 'Electrical cables, busbars, and wiring for utilities and construction.'
        },
        {
          title: 'Steel Wire & Rods',
          description: 'High-carbon, alloy, and stainless wires for construction and automotive applications.'
        },
        {
          title: 'Specialty Cables',
          description: 'Telecom, aerospace, and multi-core industrial cables.'
        },
        {
          title: 'Wire Mesh & Fencing',
          description: 'Mesh panels and fencing wires for security and infrastructure.'
        }
      ]
    },
    {
      id: 'cans',
      icon: Package,
      title: 'Metal Cans & Industrial Containers Trading',
      description: 'Industrial packaging solutions for chemicals, food, paints, and logistics.',
      subdomains: [
        {
          title: 'Steel Drums & Barrels',
          description: 'Open-head and tight-head drums meeting international safety standards.'
        },
        {
          title: 'Tinplate Cans (Food & Paint)',
          description: 'High-quality metal cans for food, beverage, paint, and coatings.'
        },
        {
          title: 'Industrial Storage Tanks & IBCs',
          description: 'Large-capacity containers for industrial fluids and lubricants.'
        },
        {
          title: 'Custom Metal Packaging',
          description: 'Gas cylinders, OEM containers, and specialized metal packaging.'
        },
        {
          title: 'Packaging Services',
          description: 'Inspection, reconditioning, and recycling of industrial containers.'
        }
      ]
    }
  ];

  const advantages = [
    {
      icon: MapPin,
      title: 'Strategic Dubai Location',
      description: 'Access to global markets through world-class ports and logistics.'
    },
    {
      icon: Package,
      title: 'Diverse Product Portfolio',
      description: 'One-stop sourcing across all major metal and scrap categories.'
    },
    {
      icon: Globe,
      title: 'Global Networks & Partnerships',
      description: 'Strong supplier relationships and competitive pricing.'
    },
    {
      icon: Leaf,
      title: 'Sustainability Focus',
      description: 'Support for recycled materials, low-carbon logistics, and ESG compliance.'
    },
    {
      icon: Award,
      title: 'Quality & Reliability',
      description: 'Robust quality control and experienced technical teams.'
    }
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
              alt="Green Hills Metals" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Green Hills Metals & Its Products Trading L.L.C.</span>
              <h1 className="text-5xl md:text-7xl font-serif font-light mt-4 mb-6 text-foreground">
                Forging Global Trade with Quality and Integrity
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A UAE-headquartered international trading company specializing in metals, industrial materials, 
                and comprehensive scrap trading.
              </p>
              <Button 
                size="lg" 
                variant="luxury"
                onClick={() => navigate('/contactus')}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
                Company Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Green Hills Metals & Its Products Trading L.L.C. is a UAE-headquartered international trading company 
                specializing in metals, industrial materials, and comprehensive scrap trading. With a strong operational 
                presence in Dubai – a global commodities hub – the company partners with leading manufacturers, smelters, 
                recyclers, and suppliers to deliver high-quality metals and industrial inputs worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our portfolio includes ferrous and non-ferrous metals, steel products, metal ores, cargo containers, 
                industrial packaging, and a complete range of scrap and recycled materials. Green Hills Metals supports 
                industries such as construction, manufacturing, automotive, engineering, energy, and electronics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By combining transparent sourcing, technical expertise, and sustainable practices, the company ensures 
                reliable supply chains and long-term value for clients across global markets.
              </p>
            </div>
          </div>
        </section>

        {/* Core Domains */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
                Core Domains & Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive trading solutions across all major metal and material categories
              </p>
            </div>

            <div className="grid gap-8 max-w-6xl mx-auto">
              {domains.map((domain) => (
                <Card key={domain.id} className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-sm">
                      <domain.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-light mb-2 text-foreground">
                        {domain.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {domain.description}
                      </p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {domain.subdomains.map((subdomain, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {subdomain.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {subdomain.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-accent/10 rounded-sm">
                  <Leaf className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
                  Sustainability & Responsible Trading
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Green Hills Metals is committed to eco-friendly sourcing and circular economy principles.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Recycled Materials Priority</h3>
                  <p className="text-muted-foreground">
                    Prioritizing recycled and reusable materials in our supply chain
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Energy Efficiency</h3>
                  <p className="text-muted-foreground">
                    Reducing energy use via metal recycling (e.g., recycling aluminium saves 95% energy vs. new production)
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Environmental Compliance</h3>
                  <p className="text-muted-foreground">
                    Ensuring supplier compliance with environmental regulations
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Carbon Footprint Reduction</h3>
                  <p className="text-muted-foreground">
                    Optimizing logistics to lower carbon impact
                  </p>
                </Card>
                <Card className="p-6 md:col-span-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">ESG Standards</h3>
                  <p className="text-muted-foreground">
                    Promoting transparent, ethical trading aligned with global ESG standards
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-accent/10 rounded-sm">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
                  Quality Assurance & Compliance
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We maintain strict quality and regulatory standards to ensure consistency, reliability, 
                and customer confidence in every shipment.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 flex items-start gap-4">
                  <Award className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">ISO Standards</h3>
                    <p className="text-muted-foreground">
                      ISO-aligned quality management systems
                    </p>
                  </div>
                </Card>
                <Card className="p-6 flex items-start gap-4">
                  <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Regulatory Compliance</h3>
                    <p className="text-muted-foreground">
                      Compliance with UAE and international trade regulations
                    </p>
                  </div>
                </Card>
                <Card className="p-6 flex items-start gap-4">
                  <Award className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Certified Products</h3>
                    <p className="text-muted-foreground">
                      ASTM, DIN, and industry-certified product supply
                    </p>
                  </div>
                </Card>
                <Card className="p-6 flex items-start gap-4">
                  <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Documentation & Traceability</h3>
                    <p className="text-muted-foreground">
                      Detailed documentation, traceability, and customs handling
                    </p>
                  </div>
                </Card>
                <Card className="p-6 flex items-start gap-4 md:col-span-2">
                  <Award className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Third-Party Verification</h3>
                    <p className="text-muted-foreground">
                      Third-party testing, inspections, and supplier audits
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
                Competitive Advantages
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Why choose Green Hills Metals for your trading needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-8 text-center">
                  <div className="inline-flex p-4 bg-accent/10 rounded-sm mb-4">
                    <advantage.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground">
                  Reach out to discuss your metal and materials trading requirements
                </p>
              </div>

              <Card className="p-8">
                <h3 className="text-2xl font-serif font-light mb-6 text-foreground">Head Office</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-semibold mb-1">Address</p>
                      <p className="text-muted-foreground">
                        Office OF13-123, Mabrook Real Estate Building<br />
                        Al Muwaileh 2, Dubai, UAE<br />
                        P.O. Box: 111311 – Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Button 
                      size="lg" 
                      variant="luxury"
                      className="w-full"
                      onClick={() => navigate('/contactus')}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MetalDomain;
