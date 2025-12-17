import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalPackaging from '@/assets/metal/metal-packaging.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const Packaging = () => {
  return (
    <ServiceDetailLayout 
      title="Metal Cans & Industrial Containers Trading" 
      subtitle="Industrial Packaging Solutions"
    >
      <AlternatingSection
        title="Steel Drums & Barrels"
        description="Open-head and tight-head drums for chemicals, petroleum, lubricants, and hazardous materials."
        imageSrc={metalPackaging}
        imageAlt="Steel drums and barrels"
        reverse={false}
      />

      <AlternatingSection
        title="Tinplate Cans & Pails"
        description="Food-grade and industrial tin-coated steel cans for food, beverages, paints, and coatings."
        imageSrc={structuralSteel}
        imageAlt="Tinplate cans and pails"
        reverse={true}
      />

      <AlternatingSection
        title="Industrial Storage Tanks & IBCs"
        description="Large tanks and intermediate bulk containers for oils, chemicals, and industrial fluids."
        imageSrc={metalCladding}
        imageAlt="Industrial storage tanks and IBCs"
        reverse={false}
      />

      <AlternatingSection
        title="Gas Cylinders & Pressure Containers"
        description="Specialized containers for industrial gases and pressurized materials."
        imageSrc={architecturalMetal}
        imageAlt="Gas cylinders and pressure containers"
        reverse={true}
      />

      <AlternatingSection
        title="Custom Metal Packaging Solutions"
        description="OEM containers, crates, and application-specific metal packaging."
        imageSrc={customMetalwork}
        imageAlt="Custom metal packaging solutions"
        reverse={false}
      />

      <AlternatingSection
        title="Packaging Inspection & Recycling Services"
        description="Reconditioning, quality checks, reuse, and recycling programs supporting sustainability."
        imageSrc={metalExcellence}
        imageAlt="Packaging inspection and recycling"
        reverse={true}
      />
    </ServiceDetailLayout>
  );
};

export default Packaging;
