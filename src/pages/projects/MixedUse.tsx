import ProjectDetailLayout from '@/components/ProjectDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import mixedUseExterior from '@/assets/projects/mixed-use-exterior.jpg';
import mixedUseInterior from '@/assets/projects/mixed-use-interior.jpg';

const MixedUse = () => {
  return (
    <ProjectDetailLayout 
      title="Mixed-Use Development" 
      category="Mixed-Use" 
      location="City Center"
      heroImage={mixedUseExterior}
    >
      {/* Project Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A vibrant mixed-use complex combining retail, residential, and commercial spaces in the heart of the city. This transformative development creates a live-work-play environment with ground-floor retail, mid-level offices, and upper residential units, all designed to foster a thriving urban community.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Completion</h3>
                <p className="text-foreground text-xl font-serif">2023</p>
              </div>
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Size</h3>
                <p className="text-foreground text-xl font-serif">180,000 sq ft</p>
              </div>
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Composition</h3>
                <p className="text-foreground text-xl font-serif">Retail + Office + Residential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AlternatingSection 
        title="Urban Integration" 
        description="The building's contemporary facade integrates seamlessly with the urban landscape while creating a distinctive architectural presence. Our construction approach balanced complex multi-use requirements, including separate service access, parking facilities, and vertical circulation systems. Green terraces and retail frontage activate the street level." 
        imageSrc={mixedUseExterior} 
        imageAlt="Mixed-use development exterior" 
        reverse={false} 
      />

      <AlternatingSection 
        title="Multi-Functional Spaces" 
        description="The interior showcases premium retail spaces with high ceilings and modern finishes, attracting international brands. Office floors feature flexible layouts with natural light and contemporary amenities. Residential units offer modern living spaces with quality finishes and building amenities. Central atrium provides natural light and creates visual connectivity between levels." 
        imageSrc={mixedUseInterior} 
        imageAlt="Mixed-use development interior retail space" 
        reverse={true} 
      />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">Services Delivered</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This complex project showcased our ability to manage diverse construction requirements:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Commercial Construction</h3>
                <p className="text-muted-foreground">Complete structural and architectural construction integrating retail, office, and residential components with separate systems and access points.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Structural Engineering</h3>
                <p className="text-muted-foreground">Complex structural design accommodating varying floor loads, large retail spans, and residential requirements within a unified building system.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">MEP Systems</h3>
                <p className="text-muted-foreground">Separate mechanical, electrical, and plumbing systems for each use type with central building management and energy-efficient operations.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Design Coordination</h3>
                <p className="text-muted-foreground">Comprehensive design coordination managing multiple stakeholders, building codes, and functional requirements across all development phases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectDetailLayout>
  );
};

export default MixedUse;
