const SpecialtyTradesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">🔨 Expert Craftsmanship</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Specialty Trades & Custom Fabrication
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-card p-12 rounded-sm border border-border">
          <p className="text-muted-foreground leading-relaxed text-center">
            Specialized trades including <strong>custom metalwork</strong>, <em>glass installations</em>, <strong>stonework and masonry</strong>, <em>decorative finishes</em>, custom joinery, signage, and artistic installations delivered by skilled craftsmen with attention to detail and quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyTradesSection;
