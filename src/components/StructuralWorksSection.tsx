import { Pickaxe, Layers, Box, Hammer, Home, Wrench } from 'lucide-react';

const structuralWorks = [
  {
    icon: Pickaxe,
    title: 'Site Preparation',
    items: [
      '<em>Excavation, grading, leveling</em>, and <strong>dewatering</strong>',
      '<em>Shoring</em> and foundation works to ensure safe and efficient construction environments',
      'Advanced <em>soil stabilization</em> and <em>environmental impact mitigation</em> strategies'
    ]
  },
  {
    icon: Layers,
    title: 'Foundations & Substructure',
    items: [
      '<em>Raft</em>, <strong>strip</strong>, and <strong>pile foundations</strong> designed to withstand the specific requirements of the building\'s load and location',
      '<em>Retaining walls</em> to ensure stability on sloped or water-prone sites'
    ]
  },
  {
    icon: Box,
    title: 'Concrete Works',
    items: [
      '<em>High-strength concrete</em>, <strong>columns, beams, slabs</strong>, and <strong>formwork</strong> that meet stringent quality standards',
      'Use of <em>self-compacting concrete (SCC)</em> and <em>pre-stressed beams</em> for greater load capacity and durability'
    ]
  },
  {
    icon: Hammer,
    title: 'Masonry & Blockwork',
    items: [
      '<em>Load-bearing walls</em> and <em>partition walls</em> for thermal insulation, acoustic performance, and fire resistance',
      '<em>Non-combustible masonry materials</em> for heightened fire safety in urban environments'
    ]
  },
  {
    icon: Home,
    title: 'Roofing Systems',
    items: [
      '<em>Flat and pitched roofs</em> with <em>insulation</em> and <em>waterproofing</em> systems that adhere to <em>climatic and sustainability standards</em>',
      'Innovative <em>green roofs</em> that enhance building performance and aesthetic appeal'
    ]
  },
  {
    icon: Wrench,
    title: 'Demolition & Repairs',
    items: [
      '<em>Controlled demolition</em> techniques to safely remove structures without damaging neighboring areas',
      '<em>Crack injections</em> and <em>structural strengthening</em> to extend the lifespan of existing buildings'
    ]
  }
];

const StructuralWorksSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">⚒ Foundation to Finish</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Structural & Civil Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {structuralWorks.map((work, index) => {
            const Icon = work.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-sm border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">{work.title}</h3>
                <ul className="space-y-2.5">
                  {work.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
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

export default StructuralWorksSection;
