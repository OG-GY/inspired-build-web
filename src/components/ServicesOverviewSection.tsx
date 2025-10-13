import { Globe } from 'lucide-react';

const ServicesOverviewSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
              Green Hills Building Contracting
            </h2>
          </div>
          
          <h3 className="text-2xl font-serif text-accent mb-6">Complete Services</h3>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At <span className="font-semibold text-foreground">Green Hills Building Contracting L.L.C.</span>, we specialize in delivering <strong>turnkey construction solutions</strong> across the UAE, from luxury residential properties to sophisticated commercial developments and industrial facilities. Established in 2016, we've been at the forefront of the <em>construction, design-build, and facility management</em> industries, using cutting-edge technology, sustainable practices, and world-class craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
