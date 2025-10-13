const LandscapingSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">🌱 Outdoor Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Landscaping & Outdoor Works
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-card p-12 rounded-sm border border-border">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Create stunning outdoor environments with our comprehensive landscaping services. We provide <strong>soft landscaping</strong> (planting, turfing, irrigation), <em>hard landscaping</em> (paving, decking, pergolas), and <strong>water features</strong> including swimming pools and decorative fountains.
            </p>
            <p>
              Our <em>sustainable landscaping</em> approach incorporates <strong>native plants</strong>, <em>water-efficient irrigation systems</em>, and eco-friendly materials to create beautiful yet environmentally responsible outdoor spaces.
            </p>
            <p>
              Services also include <strong>garden lighting</strong>, <em>outdoor furniture installation</em>, maintenance programs, and complete outdoor living space design for residential and commercial properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandscapingSection;
