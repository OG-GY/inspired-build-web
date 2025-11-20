import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const NonFerrous = () => {
  return (
    <ServiceDetailLayout 
      title="Non-Ferrous Metal Trading" 
      subtitle="Premium Metals & Alloys"
    >
      <AlternatingSection
        title="Automotive Metals & Components"
        description="Specialized trading of non-ferrous automotive scrap and reusable parts including aluminium body panels, door components, and copper radiators. We support the circular economy in the automotive sector by facilitating efficient material recovery and reuse."
        imageSrc={structuralSteel}
        imageAlt="Automotive non-ferrous components"
        reverse={false}
      />

      <AlternatingSection
        title="Aluminium & Alloy Products"
        description="Supply of commercial and high-purity aluminium including ingots, sheets, coils, and custom alloys for construction, packaging, and manufacturing. Our aluminium products meet international standards and support diverse industrial applications."
        imageSrc={metalCladding}
        imageAlt="Aluminium products and alloys"
        reverse={true}
      />

      <AlternatingSection
        title="Copper & Copper Alloys"
        description="Comprehensive trading of copper cathodes, rods, wires, and brass/bronze alloys for electrical, plumbing, and industrial applications. Copper's excellent conductivity and corrosion resistance make it essential for modern infrastructure."
        imageSrc={architecturalMetal}
        imageAlt="Copper and copper alloy products"
        reverse={false}
      />

      <AlternatingSection
        title="Specialty Metals & Alloys"
        description="Trade in titanium, nickel, magnesium, and other specialty non-ferrous alloys for aerospace, medical, and engineering applications. These high-performance materials meet demanding specifications for critical applications."
        imageSrc={customMetalwork}
        imageAlt="Specialty metals and high-performance alloys"
        reverse={true}
      />

      <AlternatingSection
        title="Electronic & Electrical Scrap"
        description="Sourcing of electronic-grade metal scrap including high-grade copper wiring and circuit board metals for recycling and reuse. We leverage the high recyclability of non-ferrous metals to support sustainable electronics manufacturing."
        imageSrc={metalExcellence}
        imageAlt="Electronic scrap and circuit board metals"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default NonFerrous;
