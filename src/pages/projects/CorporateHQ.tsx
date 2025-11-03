import ProjectDetailLayout from '@/components/ProjectDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import corporateHQExterior from '@/assets/projects/corporate-hq-exterior.jpg';
import corporateHQInterior from '@/assets/projects/corporate-hq-interior.jpg';

const CorporateHQ = () => {
  return (
    <ProjectDetailLayout 
      title="Corporate Headquarters" 
      category="Commercial" 
      location="Business Park"
      heroImage={corporateHQExterior}
    >
      {/* Project Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A cutting-edge corporate headquarters designed to foster innovation and collaboration. This 6-story commercial complex features modern architecture, flexible workspace design, and advanced building systems, setting a new standard for commercial developments in the region.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Completion</h3>
                <p className="text-foreground text-xl font-serif">2024</p>
              </div>
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Size</h3>
                <p className="text-foreground text-xl font-serif">95,000 sq ft</p>
              </div>
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Capacity</h3>
                <p className="text-foreground text-xl font-serif">800+ Employees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AlternatingSection 
        title="Modern Architecture" 
        description="The building features a sleek glass and steel exterior with strategic sun shading elements. Our construction approach emphasized sustainable building practices, incorporating energy-efficient systems and green building certifications. The design promotes natural light throughout the workspace while maintaining thermal comfort." 
        imageSrc={corporateHQExterior} 
        imageAlt="Corporate headquarters exterior" 
        reverse={false} 
      />

      <AlternatingSection 
        title="Collaborative Workspaces" 
        description="The interior showcases open-plan offices with flexible meeting spaces, executive suites, conference rooms, and collaborative zones. Features include raised flooring for cable management, acoustic ceiling systems, and integrated technology infrastructure. The building includes a cafeteria, fitness center, and outdoor terraces." 
        imageSrc={corporateHQInterior} 
        imageAlt="Corporate office interior spaces" 
        reverse={true} 
      />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">Services Delivered</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This project demonstrated our comprehensive commercial construction capabilities:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Design-Build</h3>
                <p className="text-muted-foreground">Integrated design and construction approach from concept to completion, ensuring seamless coordination and optimized project delivery timelines.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">MEP Engineering</h3>
                <p className="text-muted-foreground">Advanced HVAC systems with zone controls, comprehensive electrical infrastructure, and efficient plumbing systems designed for commercial operations.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Smart Building Solutions</h3>
                <p className="text-muted-foreground">Integrated building management systems, access control, security, and energy monitoring platforms for optimal operational efficiency.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Interior Fit-Out</h3>
                <p className="text-muted-foreground">Complete office interior design and construction including partition systems, flooring, ceiling work, and furniture coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectDetailLayout>
  );
};

export default CorporateHQ;
