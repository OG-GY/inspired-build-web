const MaintenanceSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">🔧 Ongoing Support</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Maintenance, Renovation & AMC
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-sm border border-border">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Preventive Maintenance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Scheduled inspections and maintenance of <strong>HVAC systems</strong>, <em>electrical installations</em>, plumbing, façades, and building equipment to prevent breakdowns and extend asset life.
            </p>
          </div>

          <div className="bg-card p-8 rounded-sm border border-border">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Corrective Maintenance</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>24/7 emergency response</strong> for repairs and breakdowns including plumbing leaks, electrical faults, <em>HVAC failures</em>, and structural issues with rapid mobilization.
            </p>
          </div>

          <div className="bg-card p-8 rounded-sm border border-border">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Annual Maintenance Contracts (AMC)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive <strong>AMC packages</strong> covering all building systems with <em>regular inspections</em>, priority service, discounted repairs, and detailed reporting for facility management.
            </p>
          </div>

          <div className="bg-card p-8 rounded-sm border border-border">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Renovation & Remodeling</h3>
            <p className="text-muted-foreground leading-relaxed">
              Complete <em>renovation services</em> to modernize existing facilities, improve functionality, enhance aesthetics, and <strong>increase property value</strong> while minimizing disruption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
