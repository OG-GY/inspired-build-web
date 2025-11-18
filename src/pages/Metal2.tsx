import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Shield, Leaf, Award, MapPin, Mail, Phone } from "lucide-react";
import metalHero from "@/assets/metal/hero-metal.jpg";

const Metal2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${metalHero})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Green Hills Metals & Its Products Trading L.L.C.</h1>
          <p className="text-xl md:text-2xl">Forging Global Trade with Quality and Integrity</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Company Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Green Hills Metals & Its Products Trading L.L.C. is a UAE-headquartered international trading company specializing in metals, industrial materials, and comprehensive scrap trading. With a strong operational presence in Dubai – a global commodities hub – the company partners with leading manufacturers, smelters, recyclers, and suppliers to deliver high-quality metals and industrial inputs worldwide.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our portfolio includes ferrous and non-ferrous metals, steel products, metal ores, cargo containers, industrial packaging, and a complete range of scrap and recycled materials. Green Hills Metals supports industries such as construction, manufacturing, automotive, engineering, energy, and electronics.
            </p>
            <p className="text-lg leading-relaxed">
              By combining transparent sourcing, technical expertise, and sustainable practices, the company ensures reliable supply chains and long-term value for clients across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Core Domains */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Core Domains & Subdomains</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {/* Comprehensive Scrap & Recyclables Trading */}
            <AccordionItem value="scrap" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-semibold">
                A. Comprehensive Scrap & Recyclables Trading
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                <p className="text-muted-foreground mb-4">
                  We manage ferrous, non-ferrous, and mixed scrap materials under strict environmental and compliance standards.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. Ferrous Scrap</h4>
                    <p className="text-muted-foreground">Steel, cast iron and iron-based scrap sourced from construction, vehicles, and manufacturing.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Non-Ferrous Scrap</h4>
                    <p className="text-muted-foreground">Aluminium, copper, brass, stainless steel, and other valuable non-ferrous metals.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Plastic Scrap & Polymers</h4>
                    <p className="text-muted-foreground">PET, HDPE, PVC and other recyclable plastic materials.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">4. Wood & Timber Scrap</h4>
                    <p className="text-muted-foreground">Scrap lumber, pallets, sawdust, and timber residues for recycling and biomass.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">5. Wire & Cable Scrap</h4>
                    <p className="text-muted-foreground">Copper and aluminium cables stripped and processed for metal recovery.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">6. Electronic / E-Waste Scrap</h4>
                    <p className="text-muted-foreground">Circuit boards, wiring, household electronics and IT equipment for extraction of reusable materials.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">7. Rubber & Tyre Scrap</h4>
                    <p className="text-muted-foreground">Used tyres and rubber products recycled into crumb rubber, TDF, and industrial materials.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">8. Mixed Industrial Scrap</h4>
                    <p className="text-muted-foreground">Production rejects, machinery parts, and heterogeneous industrial waste.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Non-Ferrous Metal Trading */}
            <AccordionItem value="non-ferrous" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-semibold">
                B. Non-Ferrous Metal Trading
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                <p className="text-muted-foreground mb-4">
                  Non-ferrous metals play a critical role in aerospace, electronics, automotive, and construction.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. Automotive Metals & Components (Non-Ferrous)</h4>
                    <p className="text-muted-foreground">Aluminium body parts, copper radiators, reusable auto components and scrap.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Aluminium & Alloy Products</h4>
                    <p className="text-muted-foreground">Ingots, sheets, coils, and high-purity or custom aluminium alloys.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Copper & Copper Alloy Trading</h4>
                    <p className="text-muted-foreground">Copper cathodes, wires, rods, and brass/bronze products.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">4. Specialty Metals & Alloys</h4>
                    <p className="text-muted-foreground">Titanium, nickel, magnesium, and high-performance alloys.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">5. Electronic & Electrical Scrap (Non-Ferrous)</h4>
                    <p className="text-muted-foreground">High-grade copper wiring, circuit board metals, and precision scrap.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Steel & Basic Steel Products Trading */}
            <AccordionItem value="steel" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-semibold">
                C. Steel & Basic Steel Products Trading
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                <p className="text-muted-foreground mb-4">
                  We supply a full range of ferrous materials essential to infrastructure, construction, and manufacturing.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. Automotive Metals & Components (Steel)</h4>
                    <p className="text-muted-foreground">Steel body parts, chassis components, and ferrous automotive scrap.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Structural Steel & Sections</h4>
                    <p className="text-muted-foreground">Beams, channels, angles, columns, and reinforcement bars (rebar).</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Steel Sheets, Plates & Coils</h4>
                    <p className="text-muted-foreground">Hot-rolled and cold-rolled coils, plates, and sheets for fabrication.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">4. Stainless & Alloy Steel</h4>
                    <p className="text-muted-foreground">Grades for food, chemical, medical, and industrial applications.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">5. Steel Pipes & Tubes</h4>
                    <p className="text-muted-foreground">Welded and seamless pipes for oil & gas, plumbing, and mechanical systems.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Metal Ores & Raw Materials Trading */}
            <AccordionItem value="ores" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-semibold">
                D. Metal Ores & Raw Materials Trading
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                <p className="text-muted-foreground mb-4">
                  Supply of primary and secondary raw materials essential for metal production.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. Iron Ore & Pellets</h4>
                    <p className="text-muted-foreground">Lumps, fines, and pellets for global steel mills.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Bauxite, Alumina & Non-Ferrous Ores</h4>
                    <p className="text-muted-foreground">Bauxite, alumina, copper concentrate, and other base metal ores.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Ferrous & Non-Ferrous Scrap (Secondary Raw Material)</h4>
                    <p className="text-muted-foreground">High-quality recycled feedstock for smelters and foundries.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">4. Ferroalloys & Pig Iron</h4>
                    <p className="text-muted-foreground">Ferrochrome, ferromanganese, pig iron, and steelmaking additives.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">5. Industrial Minerals & Fluxes</h4>
                    <p className="text-muted-foreground">Silica, limestone, and other minerals used in smelting and refining.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cargo Containers Trading */}
            <AccordionItem value="containers" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-semibold">
                E. Cargo Containers Trading
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                <p className="text-muted-foreground mb-4">
                  Supporting shipping, logistics, and storage with a diverse container portfolio.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. New & Standard Containers</h4>
                    <p className="text-muted-foreground">20ft/40ft dry and high-cube ISO containers.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Used & Refurbished Containers</h4>
                    <p className="text-muted-foreground">Pre-owned units inspected and reconditioned.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Refrigerated & Specialized Containers</h4>
                    <p className="text-muted-foreground">Reefer, open-top, flat-rack, tank, and other specialized containers.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">4. Container Modifications & Accessories</h4>
                    <p className="text-muted-foreground">Custom conversions, insulation, CSC plates, and generator sets.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">5. Container Logistics & Leasing</h4>
                    <p className="text-muted-foreground">Positioning, leasing, and transport coordination.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Metal Wires Trading */}
            <AccordionItem value="wires" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-semibold">
                F. Metal Wires Trading
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                <p className="text-muted-foreground mb-4">
                  Supply of conductive, structural, and industrial wire products.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. Copper & Aluminium Conductors</h4>
                    <p className="text-muted-foreground">Electrical cables, busbars, and wiring for utilities and construction.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Steel Wire & Rods</h4>
                    <p className="text-muted-foreground">High-carbon, alloy, and stainless wires for construction and automotive applications.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Specialty Cables</h4>
                    <p className="text-muted-foreground">Telecom, aerospace, and multi-core industrial cables.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">4. Wire Mesh & Fencing</h4>
                    <p className="text-muted-foreground">Mesh panels and fencing wires for security and infrastructure.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Metal Cans & Industrial Containers Trading */}
            <AccordionItem value="cans" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-semibold">
                G. Metal Cans & Industrial Containers Trading
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                <p className="text-muted-foreground mb-4">
                  Industrial packaging solutions for chemicals, food, paints, and logistics.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">1. Steel Drums & Barrels</h4>
                    <p className="text-muted-foreground">Open-head and tight-head drums meeting international safety standards.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">2. Tinplate Cans (Food & Paint)</h4>
                    <p className="text-muted-foreground">High-quality metal cans for food, beverage, paint, and coatings.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">3. Industrial Storage Tanks & IBCs</h4>
                    <p className="text-muted-foreground">Large-capacity containers for industrial fluids and lubricants.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">4. Custom Metal Packaging</h4>
                    <p className="text-muted-foreground">Gas cylinders, OEM containers, and specialized metal packaging.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">5. Packaging Services</h4>
                    <p className="text-muted-foreground">Inspection, reconditioning, and recycling of industrial containers.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Leaf className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Sustainability & Responsible Trading</h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Green Hills Metals is committed to eco-friendly sourcing and circular economy principles. Key sustainability practices include:
            </p>
            <ul className="space-y-3 text-lg">
              <li>Prioritizing recycled and reusable materials</li>
              <li>Reducing energy use via metal recycling (e.g., recycling aluminium saves 95% energy vs. new production)</li>
              <li>Ensuring supplier compliance with environmental regulations</li>
              <li>Optimizing logistics to lower carbon impact</li>
              <li>Promoting transparent, ethical trading aligned with global ESG standards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Quality Assurance & Compliance</h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              We maintain strict quality and regulatory standards:
            </p>
            <ul className="space-y-3 text-lg">
              <li>ISO-aligned quality management systems</li>
              <li>Compliance with UAE and international trade regulations</li>
              <li>ASTM, DIN, and industry-certified product supply</li>
              <li>Detailed documentation, traceability, and customs handling</li>
              <li>Third-party testing, inspections, and supplier audits</li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              This ensures consistency, reliability, and customer confidence in every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Competitive Advantages</h2>
            <p className="text-xl text-muted-foreground">Why Choose Green Hills Metals</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg bg-background">
              <Building2 className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Strategic Dubai Location</h3>
              <p className="text-muted-foreground">
                Access to global markets through world-class ports and logistics infrastructure.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg bg-background">
              <h3 className="text-xl font-semibold mb-3">Diverse Product Portfolio</h3>
              <p className="text-muted-foreground">
                One-stop sourcing across all major metal and scrap categories.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg bg-background">
              <h3 className="text-xl font-semibold mb-3">Global Networks & Partnerships</h3>
              <p className="text-muted-foreground">
                Strong supplier relationships and competitive pricing.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg bg-background">
              <Leaf className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Sustainability Focus</h3>
              <p className="text-muted-foreground">
                Support for recycled materials, low-carbon logistics, and ESG compliance.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg bg-background md:col-span-2">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Quality & Reliability</h3>
              <p className="text-muted-foreground">
                Robust quality control and experienced technical teams ensuring on-time delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Contact Information</h2>
          <div className="space-y-6 text-lg">
            <div className="flex items-start justify-center gap-3">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold mb-1">Head Office:</p>
                <p className="text-muted-foreground">Office OF13-123, Mabrook Real Estate Building,</p>
                <p className="text-muted-foreground">Al Muwaileh 2, Dubai, UAE</p>
                <p className="text-muted-foreground">P.O. Box: 111311 – Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Metal2;
