import ProjectDetailLayout from '@/components/ProjectDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import penthouseExterior from '@/assets/projects/penthouse-exterior.jpg';
import penthouseInterior from '@/assets/projects/penthouse-interior.jpg';

const PremiumPenthouse = () => {
  return (
    <ProjectDetailLayout 
      title="Premium Penthouse" 
      category="Residential" 
      location="Waterfront"
      heroImage={penthouseExterior}
    >
      {/* Project Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              An exclusive waterfront penthouse that redefines luxury living. This stunning residence features panoramic views, bespoke interiors, and premium finishes throughout. Every detail was meticulously crafted to create an exceptional living environment that combines elegance with modern comfort.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Completion</h3>
                <p className="text-foreground text-xl font-serif">2024</p>
              </div>
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Size</h3>
                <p className="text-foreground text-xl font-serif">8,500 sq ft</p>
              </div>
              <div>
                <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Bedrooms</h3>
                <p className="text-foreground text-xl font-serif">4 + Maid's</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AlternatingSection 
        title="Spectacular Outdoor Living" 
        description="The expansive terrace offers breathtaking waterfront views with custom outdoor furniture, integrated lighting, and landscaped gardens. Our construction team installed premium decking, glass railings, and outdoor kitchen facilities. The space seamlessly connects indoor and outdoor living areas through floor-to-ceiling sliding doors." 
        imageSrc={penthouseExterior} 
        imageAlt="Penthouse terrace with waterfront views" 
        reverse={false} 
      />

      <AlternatingSection 
        title="Exquisite Interior Design" 
        description="The interior showcases the finest materials including imported marble, custom millwork, and designer lighting fixtures. The open-plan living areas feature double-height ceilings and panoramic windows. Master suite includes walk-in closets, spa-like bathroom, and private balcony. Smart home automation controls lighting, climate, security, and entertainment systems." 
        imageSrc={penthouseInterior} 
        imageAlt="Luxury penthouse living room" 
        reverse={true} 
      />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-foreground">Services Delivered</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This exclusive project highlighted our luxury residential expertise:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Interior Design & Fit-Out</h3>
                <p className="text-muted-foreground">Bespoke interior design with premium materials, custom furniture, and artisan craftsmanship. Every detail tailored to client specifications.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Architectural Design</h3>
                <p className="text-muted-foreground">Custom architectural modifications and enhancements to maximize views, natural light, and spatial flow throughout the residence.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Smart Home Integration</h3>
                <p className="text-muted-foreground">Comprehensive home automation system including lighting, climate control, security, audio-visual, and shade management with mobile app control.</p>
              </div>
              <div className="bg-background p-6 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-foreground">Facade & Glazing</h3>
                <p className="text-muted-foreground">Floor-to-ceiling glass installations with advanced thermal performance, UV protection, and acoustic insulation for optimal comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectDetailLayout>
  );
};

export default PremiumPenthouse;
