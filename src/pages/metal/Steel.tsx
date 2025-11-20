import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';

const Steel = () => {
  return (
    <ServiceDetailLayout 
      title="Steel & Basic Steel Products Trading" 
      subtitle="Ferrous Materials Excellence"
    >
      <AlternatingSection
        title="Automotive Steel Components"
        description="Trade in ferrous automotive components and scrap including steel body parts, chassis components, and engine blocks. We export usable steel parts and recycle scrap metal from end-of-life vehicles, supporting sustainable automotive supply chains."
        imageSrc={metalFabrication}
        imageAlt="Automotive steel components and parts"
        reverse={false}
      />

      <AlternatingSection
        title="Structural Steel & Sections"
        description="Supply of beams, columns, angles, channels, and reinforcement bars (rebar) for construction and infrastructure projects. Our structural steel products meet international standards for strength and reliability in building applications."
        imageSrc={structuralSteel}
        imageAlt="Structural steel beams and sections"
        reverse={true}
      />

      <AlternatingSection
        title="Steel Sheets, Plates & Coils"
        description="Trading of hot-rolled and cold-rolled steel coils, sheets, and plates for shipbuilding, machinery, and general fabrication. Available in various grades and thicknesses to meet diverse industrial requirements."
        imageSrc={metalCladding}
        imageAlt="Steel sheets, plates and coils"
        reverse={false}
      />

      <AlternatingSection
        title="Stainless & Alloy Steel"
        description="Provision of stainless steel and alloy grades for food processing, chemical, medical, and energy industry applications. Our specialty steel products offer superior corrosion resistance and performance in demanding environments."
        imageSrc={architecturalMetal}
        imageAlt="Stainless and alloy steel products"
        reverse={true}
      />

      <AlternatingSection
        title="Steel Pipes & Tubes"
        description="Wide range of steel tubes and pipes including welded and seamless options for oil & gas, plumbing, and mechanical systems. Available in various diameters and specifications to meet industry standards."
        imageSrc={customMetalwork}
        imageAlt="Steel pipes and tubes"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Steel;
