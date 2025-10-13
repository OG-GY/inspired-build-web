import { Layers, Building, Zap, Box } from 'lucide-react';

const designServices = [
  {
    icon: Layers,
    title: 'Architectural Design',
    items: [
      'Concept layouts, elevations, and <em>space planning</em> that prioritize aesthetics and functionality',
      '<em>BIM-integrated designs</em> ensuring clear coordination with stakeholders',
      'Tailored <em>interior designs</em> reflecting brand identity and user experience'
    ]
  },
  {
    icon: Building,
    title: 'Structural Engineering',
    items: [
      'Cutting-edge <em>structural design</em> including foundations, frames, slabs, and <em>load-bearing systems</em>',
      'Advanced <em>seismic design</em> and <em>geotechnical analysis</em> for UAE\'s unique soil and weather conditions',
      'Use of high-quality materials and <em>eco-friendly building solutions</em>'
    ]
  },
  {
    icon: Zap,
    title: 'MEP Engineering',
    items: [
      'HVAC, electrical, plumbing, <em>fire safety</em>, and <strong>low-voltage systems</strong> designed for energy efficiency and performance',
      '<em>Smart building solutions</em> integrated for automated control of environmental systems',
      '<em>Energy audits</em> and <em>optimization</em> for long-term sustainability and cost savings'
    ]
  },
  {
    icon: Box,
    title: 'BIM & 3D Visualization',
    items: [
      '<em>BIM</em> models for <em>clash detection</em>, coordination, and cost control',
      'Realistic <em>3D renders</em> providing clients with a clear vision of their projects before execution',
      '<em>Virtual tours</em> and <em>augmented reality</em> tools to visualize the entire construction process'
    ]
  }
];

const ArchitecturalDesignSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">🏛 Design Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Architectural & Engineering Design
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {designServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-sm border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300 flex-shrink-0">
                    <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground pt-2">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalDesignSection;
