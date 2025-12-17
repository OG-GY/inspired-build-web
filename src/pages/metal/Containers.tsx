import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import cargoContainers from '@/assets/metal/containers/cargo-containers.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const Containers = () => {
  return (
    <ServiceDetailLayout 
      title="Cargo Containers Trading" 
      subtitle="Global Logistics Solutions"
    >
      <AlternatingSection
        title="New Shipping Containers"
        description="Factory-new 20ft, 40ft, and high-cube dry containers."
        imageSrc={cargoContainers}
        imageAlt="New shipping containers"
        reverse={false}
      />

      <AlternatingSection
        title="Used & Refurbished Containers"
        description="Pre-owned containers inspected, repaired, and certified for reuse."
        imageSrc={structuralSteel}
        imageAlt="Used and refurbished containers"
        reverse={true}
      />

      <AlternatingSection
        title="Refrigerated (Reefer) Containers"
        description="Temperature-controlled containers for food, pharmaceuticals, and cold-chain logistics."
        imageSrc={metalCladding}
        imageAlt="Refrigerated reefer containers"
        reverse={false}
      />

      <AlternatingSection
        title="Specialized Containers"
        description="Open-top, flat-rack, tank containers, and custom cargo units."
        imageSrc={architecturalMetal}
        imageAlt="Specialized containers"
        reverse={true}
      />

      <AlternatingSection
        title="Container Modifications"
        description="Office containers, storage units, accommodation modules, and custom conversions."
        imageSrc={customMetalwork}
        imageAlt="Container modifications"
        reverse={false}
      />

      <AlternatingSection
        title="Container Accessories & Parts"
        description="CSC plates, locking systems, generator sets, and fittings."
        imageSrc={metalFabrication}
        imageAlt="Container accessories and parts"
        reverse={true}
      />

      <AlternatingSection
        title="Container Leasing & Logistics"
        description="Leasing, positioning, transportation, and fleet management services."
        imageSrc={metalExcellence}
        imageAlt="Container leasing and logistics"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Containers;
