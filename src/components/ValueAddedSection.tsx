const ValueAddedSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">💡 Beyond Construction</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Value-Added Client Services
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-card p-12 rounded-sm border border-border">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong>Project Management & Consultancy:</strong> Expert guidance throughout the project lifecycle including <em>feasibility studies</em>, cost estimation, procurement support, and project coordination.
            </p>
            <p>
              <strong>Regulatory Approvals:</strong> Complete support for <em>municipality approvals</em>, civil defense clearances, DEWA connections, and all required <strong>building permits and NOCs</strong>.
            </p>
            <p>
              <strong>Quality Assurance:</strong> Rigorous quality control, <em>third-party inspections</em>, material testing, and compliance verification ensuring the highest standards.
            </p>
            <p>
              <strong>Post-Handover Support:</strong> <em>Defect liability services</em>, warranty support, maintenance training, and ongoing technical assistance for complete client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueAddedSection;
