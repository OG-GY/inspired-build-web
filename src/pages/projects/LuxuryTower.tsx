import ProjectDetailLayout from '@/components/ProjectDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import luxuryTowerExterior from '@/assets/projects/luxury-tower-exterior.jpg';
import luxuryTowerInterior from '@/assets/projects/luxury-tower-interior.jpg';

const LuxuryTower = () => {
  return (
    <ProjectDetailLayout 
      title="Luxury Residential Tower" 
      category="Residential" 
      location="Downtown District"
      heroImage={luxuryTowerExterior}
    >
      {/* Project Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A prestigious 45-story luxury residential tower featuring state-of-the-art amenities and panoramic city views. This landmark development combines sophisticated design with premium construction quality, offering residents an unparalleled living experience in the heart of the downtown district.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Completion</h3>
                <p className="text-foreground text-xl font-serif">2023</p>
              </div>
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Size</h3>
                <p className="text-foreground text-xl font-serif">120,000 sq ft</p>
              </div>
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Units</h3>
                <p className="text-foreground text-xl font-serif">85 Residences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AlternatingSection 
        title="Architectural Excellence" 
        description="The tower showcases contemporary architecture with floor-to-ceiling glass facades, creating a striking presence in the skyline. Our construction team executed complex structural engineering to ensure both aesthetic appeal and seismic resilience, incorporating advanced building technologies throughout." 
        imageSrc={luxuryTowerExterior} 
        imageAlt="Luxury tower exterior architecture" 
        reverse={false} 
      />

      <AlternatingSection 
        title="Premium Interior Spaces" 
        description="The grand lobby features Italian marble flooring, custom lighting fixtures, and double-height ceilings. Each residence includes premium finishes, smart home technology, and expansive windows. Common areas include a rooftop infinity pool, fitness center, residents' lounge, and 24/7 concierge services." 
        imageSrc={luxuryTowerInterior} 
        imageAlt="Luxury tower interior lobby" 
        reverse={true} 
      />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">Services Delivered</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This project showcased our expertise across multiple disciplines:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Construction & Structure</h3>
                <p className="text-muted-foreground">Complete structural engineering, foundation work, and high-rise construction management ensuring superior quality and safety standards.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Interior Fit-Out</h3>
                <p className="text-muted-foreground">Luxury interior design and execution including custom millwork, premium finishes, and sophisticated lighting systems throughout all residential units.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">MEP Systems</h3>
                <p className="text-muted-foreground">State-of-the-art mechanical, electrical, and plumbing installations with smart building automation and energy-efficient systems.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Facade Engineering</h3>
                <p className="text-muted-foreground">Premium glass curtain wall systems with advanced thermal performance and weather resistance tailored for UAE climate conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectDetailLayout>
  );
};

export default LuxuryTower;
