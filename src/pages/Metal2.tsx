import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const Metal2 = () => {
  return (
    <ServiceDetailLayout 
      title="Metals & Products Trading" 
      subtitle="Global Trade Solutions"
    >
      <AlternatingSection
        title="Comprehensive Scrap & Recyclables Trading"
        description="Green Hills Metals & Its Products Trading L.L.C. is a UAE-headquartered trading company specializing in comprehensive scrap trading. We handle ferrous scrap (steel, cast iron from structures, vehicles, appliances), non-ferrous scrap (aluminium, copper, brass, stainless steel with high recycling value), plastic scrap and polymers (PET, HDPE, PVC recyclables), wood and timber scrap (lumber, pallets, sawdust for engineered wood and biomass), wire and cable scrap (copper and aluminium cables for metal recovery), electronic and e-waste scrap (computers, phones, household electronics for material extraction), rubber and tyre scrap (reclaimed for crumb rubber, TDF, rubberized asphalt), and mixed industrial scrap (production rejects, damaged inventory, obsolete machinery parts). All materials are managed with professional compliance and environmental standards."
        imageSrc={metalFabrication}
        imageAlt="Comprehensive scrap and recyclables trading"
        reverse={false}
      />

      <AlternatingSection
        title="Non-Ferrous Metal Trading"
        description="Non-ferrous metals such as aluminium, copper, zinc, nickel, lead, and specialty alloys are integral to aerospace, automotive, construction, electronics, and packaging industries. We specialize in automotive metals and components (non-ferrous scrap, aluminium panels, copper radiators, reusable auto parts), aluminium and alloy products (commercial and high-purity aluminium ingots, sheets, coils, custom alloys for construction and manufacturing), copper and copper alloy trading (cathodes, rods, wires, brass and bronze alloys for electrical, plumbing, industrial applications), specialty metals and alloys (titanium, nickel, magnesium for aerospace, medical, engineering), and electronic and electrical scrap (electronic-grade metal scrap, copper wiring, circuit boards for recycling). Supporting sustainable automotive supply chains and circular economy principles."
        imageSrc={structuralSteel}
        imageAlt="Non-ferrous metal trading and distribution"
        reverse={true}
      />

      <AlternatingSection
        title="Steel & Basic Steel Products Trading"
        description="Steel and basic steel products form the backbone of construction and infrastructure worldwide. Our ferrous materials portfolio includes automotive metals and components (steel body parts, chassis components, engine blocks, ferrous automotive scrap for sustainable supply chains), structural steel and sections (beams, columns, angles, channels, reinforcement bars for construction and infrastructure projects), steel sheets, plates and coils (hot-rolled and cold-rolled steel for shipbuilding, machinery, general fabrication), stainless and alloy steel (grades for food processing, chemical, medical, and energy industry applications), and steel pipes and tubes (welded and seamless tubes for oil and gas, plumbing, mechanical systems). Quality ferrous materials meeting international construction and fabrication standards."
        imageSrc={metalCladding}
        imageAlt="Steel and basic steel products"
        reverse={false}
      />

      <AlternatingSection
        title="Metal Ores & Raw Materials Trading"
        description="Trading of primary metal feedstocks and raw materials essential for global metal production. Iron ore is the most traded base metal, underpinning the steel industry. We source iron ore and pellets (lumps, fines, pellets for steel mills), bauxite, alumina and non-ferrous ores (aluminium ore, alumina, copper and other base metal ores for smelters and refineries), ferrous and non-ferrous scrap (steel, cast iron, aluminium scrap as secondary raw material boosting circularity in the metals economy), ferroalloys and pig iron (ferrochrome, ferromanganese, pig iron, steelmaking alloys for foundries), and industrial minerals and fluxes (silica, limestone and other minerals used as fluxes or fillers in metal processing). High-quality mineral ores meeting mill specifications."
        imageSrc={architecturalMetal}
        imageAlt="Metal ores and raw materials"
        reverse={true}
      />

      <AlternatingSection
        title="Cargo Containers Trading"
        description="Green Hills Metals trades shipping and industrial containers reflecting Dubai's logistics prominence. The global shipping container market is estimated to reach over $14 billion by 2031. We supply new and standard containers (factory-fresh 20ft, 40ft dry containers and high-cubes for export, warehousing, infrastructure), used and refurbished containers (pre-owned containers inspected and reconditioned for cost-effective shipping and storage solutions), refrigerated and specialized containers (reefer containers for cold-chain logistics, open-top, flat-rack, tank containers for non-standard cargo), container modifications and accessories (office conversions, insulation, CSC plates, generator sets for container repurposing), and container logistics and leasing (coordination of container leasing, positioning, transportation ensuring timely availability for shippers). Complete container solutions supporting global trade and storage."
        imageSrc={customMetalwork}
        imageAlt="Cargo containers and logistics"
        reverse={false}
      />

      <AlternatingSection
        title="Metal Wires Trading"
        description="Metal wires and rods are essential inputs in construction, power distribution, and manufacturing. We trade copper and aluminium conductors (power cables, busbars, wiring for electrical utilities, construction, electronics leveraging copper's role in electrical grids and devices), steel wire and rods (high-carbon and stainless steel wires for construction reinforcing mesh, barbed wire, automotive springs and cables, industrial applications), specialty cables (fiber-strand composites, overhead conductor wires, custom multi-core cables for telecom, automotive, aerospace applications), and wire mesh and fencing (metal mesh panels and fencing wire products for security, agriculture, infrastructure projects). Quality metal wires meeting industry standards and custom specifications."
        imageSrc={metalExcellence}
        imageAlt="Metal wires and conductors"
        reverse={true}
      />

      <AlternatingSection
        title="Metal Cans & Industrial Containers Trading"
        description="Trading metal packaging and storage containers for industrial supply chains. The global industrial drums market is projected to grow from $16 billion in 2024 to $33 billion by 2034. We trade steel drums and barrels (open-head and tight-head drums for chemicals, petroleum, hazardous materials adhering to international safety standards), tinplate cans for food and paint (tin-coated steel cans and pails for food, beverage packaging, paint, lacquer, powder coatings), industrial storage tanks and IBCs (larger metal containers and intermediate bulk containers for storage of oils, lubricants, industrial fluids), custom metal packaging (specialized metal containers, gas cylinders, custom crates, OEM packaging solutions for niche applications), and provide packaging services (quality inspection, reconditioning, recycling programs for metal packaging supporting clients' sustainability goals). High-quality metal containers meeting industry specifications."
        imageSrc={metalFabrication}
        imageAlt="Metal cans and industrial containers"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Metal2;
