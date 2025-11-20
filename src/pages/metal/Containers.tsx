import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';

const Containers = () => {
  return (
    <ServiceDetailLayout 
      title="Cargo Containers Trading" 
      subtitle="Shipping & Logistics Solutions"
    >
      <AlternatingSection
        title="New & Standard Containers"
        description="Supply of factory-fresh shipping containers including 20ft and 40ft dry containers and high-cubes for export, warehousing, and infrastructure. New containers meet ISO standards and are ideal for international shipping and long-term storage applications."
        imageSrc={metalFabrication}
        imageAlt="New shipping containers"
        reverse={false}
      />

      <AlternatingSection
        title="Used & Refurbished Containers"
        description="Trading pre-owned containers that have been thoroughly inspected and reconditioned, providing cost-effective solutions for shipping and storage. Our refurbished containers offer excellent value while maintaining structural integrity and weather resistance."
        imageSrc={structuralSteel}
        imageAlt="Used and refurbished containers"
        reverse={true}
      />

      <AlternatingSection
        title="Refrigerated & Specialized Containers"
        description="Reefer containers for cold-chain logistics and specialty units including open-top, flat-rack, and tank containers for non-standard cargo. These specialized containers enable safe transport of temperature-sensitive and oversized goods."
        imageSrc={metalCladding}
        imageAlt="Refrigerated and specialized containers"
        reverse={false}
      />

      <AlternatingSection
        title="Container Modifications & Accessories"
        description="Services and products for container repurposing including office conversions, insulation installations, plus accessories like CSC plates and generator sets. We help transform containers into functional spaces for various commercial applications."
        imageSrc={customMetalwork}
        imageAlt="Container modifications and accessories"
        reverse={true}
      />

      <AlternatingSection
        title="Container Logistics & Leasing"
        description="Coordination of container leasing, positioning, and transportation to ensure timely availability for shippers. Our logistics services streamline container supply chains and provide flexible leasing options for short and long-term needs."
        imageSrc={architecturalMetal}
        imageAlt="Container logistics and leasing services"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Containers;
