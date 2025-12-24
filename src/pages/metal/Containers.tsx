import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import newShippingContainers from '@/assets/metal/containers/new-shipping-containers.jpg';
import usedRefurbishedContainers from '@/assets/metal/containers/used-refurbished-containers.jpg';
import reeferContainers from '@/assets/metal/containers/reefer-containers.jpg';
import specializedContainers from '@/assets/metal/containers/specialized-containers.jpg';
import containerModifications from '@/assets/metal/containers/container-modifications.jpg';
import containerAccessories from '@/assets/metal/containers/container-accessories.jpg';
import containerLeasingLogistics from '@/assets/metal/containers/container-leasing-logistics.jpg';

const Containers = () => {
  return (
    <ServiceDetailLayout 
      title="Cargo Containers Trading" 
      subtitle="Global Logistics Solutions"
    >
      <AlternatingSection
        title="New Shipping Containers"
        description="Factory-new 20ft, 40ft, and high-cube dry containers."
        imageSrc={newShippingContainers}
        imageAlt="New shipping containers"
        reverse={false}
      />

      <AlternatingSection
        title="Used & Refurbished Containers"
        description="Pre-owned containers inspected, repaired, and certified for reuse."
        imageSrc={usedRefurbishedContainers}
        imageAlt="Used and refurbished containers"
        reverse={true}
      />

      <AlternatingSection
        title="Refrigerated (Reefer) Containers"
        description="Temperature-controlled containers for food, pharmaceuticals, and cold-chain logistics."
        imageSrc={reeferContainers}
        imageAlt="Refrigerated reefer containers"
        reverse={false}
      />

      <AlternatingSection
        title="Specialized Containers"
        description="Open-top, flat-rack, tank containers, and custom cargo units."
        imageSrc={specializedContainers}
        imageAlt="Specialized containers"
        reverse={true}
      />

      <AlternatingSection
        title="Container Modifications"
        description="Office containers, storage units, accommodation modules, and custom conversions."
        imageSrc={containerModifications}
        imageAlt="Container modifications"
        reverse={false}
      />

      <AlternatingSection
        title="Container Accessories & Parts"
        description="CSC plates, locking systems, generator sets, and fittings."
        imageSrc={containerAccessories}
        imageAlt="Container accessories and parts"
        reverse={true}
      />

      <AlternatingSection
        title="Container Leasing & Logistics"
        description="Leasing, positioning, transportation, and fleet management services."
        imageSrc={containerLeasingLogistics}
        imageAlt="Container leasing and logistics"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Containers;
