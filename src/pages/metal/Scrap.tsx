import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import ferrousScrap from '@/assets/metal/scrap/ferrous-scrap.jpg';
import nonFerrousScrap from '@/assets/metal/scrap/non-ferrous-scrap.jpg';
import wireCableScrap from '@/assets/metal/scrap/wire-cable-scrap.jpg';
import eWaste from '@/assets/metal/scrap/e-waste.jpg';
import plasticScrap from '@/assets/metal/scrap/plastic-scrap.jpg';
import rubberTyreScrap from '@/assets/metal/scrap/rubber-tyre-scrap.jpg';
import woodTimberScrap from '@/assets/metal/scrap/wood-timber-scrap.jpg';
import mixedIndustrialScrap from '@/assets/metal/scrap/mixed-industrial-scrap.jpg';
import secondaryRawMaterials from '@/assets/metal/scrap/secondary-raw-materials.jpg';

const Scrap = () => {
  return (
    <ServiceDetailLayout 
      title="Comprehensive Scrap & Recyclables Trading" 
      subtitle="Sustainable Material Recovery"
    >
      <AlternatingSection
        title="Ferrous Scrap"
        description="Iron-based scrap including steel, cast iron, structural steel, machinery scrap, demolition scrap, vehicle bodies, and industrial offcuts, recycled into new steel products."
        imageSrc={ferrousScrap}
        imageAlt="Ferrous scrap metal processing"
        reverse={false}
      />

      <AlternatingSection
        title="Non-Ferrous Scrap"
        description="Aluminium, copper, brass, bronze, zinc, nickel, lead, stainless steel, and mixed alloy scrap sourced from industrial, automotive, electrical, and construction sectors."
        imageSrc={nonFerrousScrap}
        imageAlt="Non-ferrous scrap materials"
        reverse={true}
      />

      <AlternatingSection
        title="Wire & Cable Scrap"
        description="Insulated, armoured, and unarmoured copper and aluminium cables recovered from electrical systems, power networks, telecom infrastructure, and industrial equipment."
        imageSrc={wireCableScrap}
        imageAlt="Wire and cable scrap"
        reverse={false}
      />

      <AlternatingSection
        title="Electronic & Electrical Scrap (E-Waste)"
        description="End-of-life electronics such as computers, mobile phones, servers, household appliances, circuit boards, transformers, and electronic components containing recoverable metals."
        imageSrc={eWaste}
        imageAlt="Electronic waste and e-scrap"
        reverse={true}
      />

      <AlternatingSection
        title="Plastic Scrap & Polymers"
        description="Recyclable plastics including PET, HDPE, LDPE, PVC, PP, ABS, mixed plastics, and industrial polymer waste."
        imageSrc={plasticScrap}
        imageAlt="Plastic scrap and polymer materials"
        reverse={false}
      />

      <AlternatingSection
        title="Rubber & Tyre Scrap"
        description="Used tyres, industrial rubber products, conveyor belts, and rubber waste recycled into crumb rubber, fuel, construction materials, and secondary rubber products."
        imageSrc={rubberTyreScrap}
        imageAlt="Rubber and tyre scrap"
        reverse={true}
      />

      <AlternatingSection
        title="Wood & Timber Scrap"
        description="Pallets, lumber waste, sawdust, plywood, MDF, and construction wood reclaimed for reuse, recycling, or energy recovery."
        imageSrc={woodTimberScrap}
        imageAlt="Wood and timber scrap materials"
        reverse={false}
      />

      <AlternatingSection
        title="Mixed Industrial Scrap"
        description="Heterogeneous industrial waste such as damaged inventory, obsolete machinery parts, production rejects, factory waste, and construction debris."
        imageSrc={mixedIndustrialScrap}
        imageAlt="Mixed industrial scrap"
        reverse={true}
      />

      <AlternatingSection
        title="Secondary Raw Materials"
        description="Processed scrap, shredded metals, baled plastics, and sorted recyclables used as feedstock for manufacturing and metal production."
        imageSrc={secondaryRawMaterials}
        imageAlt="Secondary raw materials"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Scrap;
