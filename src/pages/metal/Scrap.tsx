import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import ferrousScrap from '@/assets/metal/ferrous-scrap.jpg';
import nonFerrousMetals from '@/assets/metal/non-ferrous-metals.jpg';
import metalWires from '@/assets/metal/metal-wires.jpg';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

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
        imageSrc={nonFerrousMetals}
        imageAlt="Non-ferrous scrap materials"
        reverse={true}
      />

      <AlternatingSection
        title="Wire & Cable Scrap"
        description="Insulated, armoured, and unarmoured copper and aluminium cables recovered from electrical systems, power networks, telecom infrastructure, and industrial equipment."
        imageSrc={metalWires}
        imageAlt="Wire and cable scrap"
        reverse={false}
      />

      <AlternatingSection
        title="Electronic & Electrical Scrap (E-Waste)"
        description="End-of-life electronics such as computers, mobile phones, servers, household appliances, circuit boards, transformers, and electronic components containing recoverable metals."
        imageSrc={metalFabrication}
        imageAlt="Electronic waste and e-scrap"
        reverse={true}
      />

      <AlternatingSection
        title="Plastic Scrap & Polymers"
        description="Recyclable plastics including PET, HDPE, LDPE, PVC, PP, ABS, mixed plastics, and industrial polymer waste."
        imageSrc={structuralSteel}
        imageAlt="Plastic scrap and polymer materials"
        reverse={false}
      />

      <AlternatingSection
        title="Rubber & Tyre Scrap"
        description="Used tyres, industrial rubber products, conveyor belts, and rubber waste recycled into crumb rubber, fuel, construction materials, and secondary rubber products."
        imageSrc={metalCladding}
        imageAlt="Rubber and tyre scrap"
        reverse={true}
      />

      <AlternatingSection
        title="Wood & Timber Scrap"
        description="Pallets, lumber waste, sawdust, plywood, MDF, and construction wood reclaimed for reuse, recycling, or energy recovery."
        imageSrc={architecturalMetal}
        imageAlt="Wood and timber scrap materials"
        reverse={false}
      />

      <AlternatingSection
        title="Mixed Industrial Scrap"
        description="Heterogeneous industrial waste such as damaged inventory, obsolete machinery parts, production rejects, factory waste, and construction debris."
        imageSrc={customMetalwork}
        imageAlt="Mixed industrial scrap"
        reverse={true}
      />

      <AlternatingSection
        title="Secondary Raw Materials"
        description="Processed scrap, shredded metals, baled plastics, and sorted recyclables used as feedstock for manufacturing and metal production."
        imageSrc={metalExcellence}
        imageAlt="Secondary raw materials"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Scrap;
