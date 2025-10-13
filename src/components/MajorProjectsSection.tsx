import { Building2, Home, Factory, Wrench, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    icon: Home,
    title: 'Luxury Villas & Residences',
    items: [
      'Bespoke villa designs with <em>premium interiors</em>',
      'Integration of <em>smart home systems</em>, automated controls, and energy-saving solutions',
      'Full-service <em>landscaping</em> and <em>swimming pools</em>, enhancing both aesthetic and utility',
      '<strong>Sustainability Focus:</strong> Solar energy solutions, <em>rainwater harvesting</em>, and <strong>sustainable materials</strong>'
    ]
  },
  {
    icon: Building2,
    title: 'Commercial & Office Buildings (G+1)',
    items: [
      'Offices, showrooms, retail spaces, clinics, and <em>boutique hotels</em> designed for efficiency and functionality',
      'Focus on <em>flexible workspaces</em>, high energy efficiency, and optimized space utilization',
      '<strong>Green Building</strong> Certifications: LEED, Estidama, and other <em>environmentally responsible</em> design frameworks'
    ]
  },
  {
    icon: Factory,
    title: 'Light Industrial Facilities',
    items: [
      '<em>Warehouses</em>, logistics units, and pre-engineered buildings (PEBs) for diverse sectors',
      'Advanced <em>climate control</em>, <strong>security systems</strong>, and efficient <strong>storage solutions</strong>',
      '<em>Modular options</em> to facilitate easy expansions or modifications based on business needs'
    ]
  },
  {
    icon: Wrench,
    title: 'Extensions & Renovations',
    items: [
      'Structural upgrades, conversions, and <em>G+1 extensions</em> to adapt existing spaces for new requirements',
      'Historical building preservation, including integration of modern design with <em>heritage elements</em>'
    ]
  },
  {
    icon: Package,
    title: 'Design–Build Packages',
    items: [
      'Offering <em>one-stop solutions</em> from <em>concept to project handover</em>, ensuring cost control, compliance, and quality',
      'Full <em>project lifecycle management</em>, including <strong>feasibility</strong>, <strong>design approvals</strong>, <strong>construction</strong>, and <strong>post-construction care</strong>'
    ]
  }
];

const MajorProjectsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">🏗 Turnkey Solutions</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Major Building Projects (Turnkey G+1 Construction)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="group hover:border-accent transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                      <Icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl font-serif">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MajorProjectsSection;
