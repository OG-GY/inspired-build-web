import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';

const Packaging = () => {
  return (
    <ServiceDetailLayout 
      title="Metal Cans & Industrial Containers Trading" 
      subtitle="Industrial Packaging Solutions"
    >
      <AlternatingSection
        title="Steel Drums & Barrels"
        description="Manufacture and supply of robust steel drums including open-head and tight-head designs for chemicals, petroleum, and hazardous materials. Our drums adhere to international safety and transportation standards for secure industrial storage and shipping."
        imageSrc={metalFabrication}
        imageAlt="Steel drums and barrels"
        reverse={false}
      />

      <AlternatingSection
        title="Tinplate Cans for Food & Paint"
        description="Trading of tin-coated steel cans and pails for food and beverage packaging, as well as paint, lacquer, and powder coatings. Our tinplate packaging offers excellent protection, preservation, and recyclability for consumer and industrial products."
        imageSrc={structuralSteel}
        imageAlt="Tinplate cans and pails"
        reverse={true}
      />

      <AlternatingSection
        title="Industrial Storage Tanks & IBCs"
        description="Larger metal containers and intermediate bulk containers (IBCs) for storage of oils, lubricants, and industrial fluids. These high-capacity containers are designed for efficient handling and storage in industrial and manufacturing facilities."
        imageSrc={metalCladding}
        imageAlt="Industrial storage tanks and IBCs"
        reverse={false}
      />

      <AlternatingSection
        title="Custom Metal Packaging"
        description="Specialized metal containers including gas cylinders, custom crates, and OEM packaging solutions for niche applications. We work with clients to develop tailored metal packaging that meets specific product protection and handling requirements."
        imageSrc={architecturalMetal}
        imageAlt="Custom metal packaging solutions"
        reverse={true}
      />

      <AlternatingSection
        title="Packaging Services"
        description="Quality inspection, reconditioning, and recycling programs for metal packaging supporting clients' sustainability goals. Our comprehensive services extend the lifecycle of metal containers and promote circular economy practices in industrial packaging."
        imageSrc={customMetalwork}
        imageAlt="Metal packaging reconditioning services"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Packaging;
