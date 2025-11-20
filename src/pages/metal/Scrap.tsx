import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';

const Scrap = () => {
  return (
    <ServiceDetailLayout 
      title="Comprehensive Scrap & Recyclables Trading" 
      subtitle="Sustainable Material Recovery"
    >
      <AlternatingSection
        title="Ferrous Scrap Trading"
        description="Steel, cast iron and iron-based scrap sourced from construction, vehicles, and manufacturing. We sort and process ferrous materials for recycling into new steel products, supporting the circular economy in construction and manufacturing sectors."
        imageSrc={metalFabrication}
        imageAlt="Ferrous scrap metal processing"
        reverse={false}
      />

      <AlternatingSection
        title="Non-Ferrous Scrap Trading"
        description="Aluminium, copper, brass, stainless steel, and other valuable non-ferrous metals with high recycling value. These materials are processed and traded for production of new metal products, providing sustainable alternatives to virgin metal mining."
        imageSrc={structuralSteel}
        imageAlt="Non-ferrous scrap materials"
        reverse={true}
      />

      <AlternatingSection
        title="Plastic Scrap & Polymers"
        description="Recyclable plastic materials including PET, HDPE, PVC and other polymers. We collect, grade and trade plastic scrap for processing into new plastic products, reducing environmental impact and supporting sustainable manufacturing."
        imageSrc={metalCladding}
        imageAlt="Plastic scrap and polymer materials"
        reverse={false}
      />

      <AlternatingSection
        title="Wood & Timber Scrap"
        description="Scrap lumber, pallets, sawdust, and timber residues from construction and manufacturing. These materials are reclaimed and recycled into engineered wood materials, biomass fuel, and other wood-based products."
        imageSrc={architecturalMetal}
        imageAlt="Wood and timber scrap materials"
        reverse={true}
      />

      <AlternatingSection
        title="Electronic & E-Waste Scrap"
        description="End-of-life electronic appliances including computers, phones, and household electronics. We manage e-waste dismantling and processing to extract valuable components and metals while ensuring environmentally responsible disposal of hazardous materials."
        imageSrc={customMetalwork}
        imageAlt="Electronic waste and e-scrap"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Scrap;
