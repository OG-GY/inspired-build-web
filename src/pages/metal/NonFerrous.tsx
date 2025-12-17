import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import nonFerrousMetals from '@/assets/metal/non-ferrous-metals.jpg';
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
        title="Aluminium & Aluminium Alloys"
        description="Ingots, billets, sheets, plates, coils, extrusions, and scrap aluminium for construction, packaging, transportation, and manufacturing."
        imageSrc={nonFerrousMetals}
        imageAlt="Aluminium products and alloys"
        reverse={false}
      />

      <AlternatingSection
        title="Copper & Copper Alloys"
        description="Copper cathodes, rods, wires, strips, and brass/bronze alloys for electrical, plumbing, electronics, and industrial applications."
        imageSrc={structuralSteel}
        imageAlt="Copper and copper alloy products"
        reverse={true}
      />

      <AlternatingSection
        title="Zinc, Lead & Nickel"
        description="Primary and secondary metals used in galvanizing, batteries, alloys, and industrial manufacturing."
        imageSrc={metalCladding}
        imageAlt="Zinc, lead and nickel metals"
        reverse={false}
      />

      <AlternatingSection
        title="Specialty & High-Performance Alloys"
        description="Titanium, magnesium, nickel-based alloys, and specialty metals for aerospace, medical, marine, energy, and advanced engineering sectors."
        imageSrc={architecturalMetal}
        imageAlt="Specialty metals and high-performance alloys"
        reverse={true}
      />

      <AlternatingSection
        title="Automotive Non-Ferrous Metals & Components"
        description="Aluminium body panels, engine components, copper radiators, heat exchangers, and reusable automotive parts."
        imageSrc={customMetalwork}
        imageAlt="Automotive non-ferrous components"
        reverse={false}
      />

      <AlternatingSection
        title="Electronic-Grade Metals"
        description="High-purity non-ferrous metals and scrap used in electronics, electrical systems, and precision manufacturing."
        imageSrc={metalExcellence}
        imageAlt="Electronic-grade metals"
        reverse={true}
      />
    </ServiceDetailLayout>
  );
};

export default NonFerrous;
