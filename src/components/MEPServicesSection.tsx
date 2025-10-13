const MEPServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">⚙ Advanced Systems</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            MEP – Mechanical, Electrical & Plumbing
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-card p-12 rounded-sm border border-border">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Electrical Installations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complete electrical design, installation, and commissioning services including power distribution, lighting systems, emergency backup, and low-voltage systems for comprehensive building automation.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">HVAC Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Energy-efficient heating, ventilation, and air conditioning solutions designed for optimal climate control, air quality, and operational efficiency across all building types.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Plumbing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced plumbing systems including water supply, drainage, sewage, and water treatment solutions with focus on water conservation and sustainability.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Fire Safety</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive fire detection, alarm, and suppression systems meeting international safety standards and UAE regulations for maximum occupant protection.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">ICT Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrated communication and technology infrastructure including structured cabling, network systems, security, and building management systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MEPServicesSection;
