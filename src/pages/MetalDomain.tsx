import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const MetalDomain = () => {
  return (
    <ServiceDetailLayout 
      title="Metals & Products Trading" 
      subtitle="Global Trade Solutions"
    >
      <AlternatingSection
        title="Comprehensive Scrap & Recyclables Trading"
        description="We manage ferrous, non-ferrous, and mixed scrap materials under strict environmental and compliance standards. Our comprehensive scrap operations include ferrous scrap (steel, cast iron), non-ferrous scrap (aluminium, copper, brass, stainless steel), plastic scrap and polymers (PET, HDPE, PVC), wood and timber scrap, wire and cable scrap, electronic and e-waste, rubber and tyre scrap, and mixed industrial scrap. All materials are handled with professional compliance and environmental standards, ensuring safe and efficient recycling for reuse in the market."
        imageSrc={metalFabrication}
        imageAlt="Comprehensive scrap and recyclables trading"
        reverse={false}
      />

      <AlternatingSection
        title="Non-Ferrous Metal Trading"
        description="Non-ferrous metals play a critical role in aerospace, electronics, automotive, and construction industries. We trade automotive metals and components including aluminium body parts and copper radiators, aluminium and alloy products (ingots, sheets, coils, custom alloys), copper and copper alloy products (cathodes, wires, rods, brass and bronze), specialty metals and alloys (titanium, nickel, magnesium, high-performance alloys), and electronic and electrical scrap containing high-grade copper wiring and circuit board metals. Our non-ferrous division supports the circular economy and sustainable manufacturing."
        imageSrc={structuralSteel}
        imageAlt="Non-ferrous metal trading and distribution"
        reverse={true}
      />

      <AlternatingSection
        title="Steel & Basic Steel Products Trading"
        description="We supply a full range of ferrous materials essential to infrastructure, construction, and manufacturing. Our steel portfolio includes automotive steel components (body parts, chassis, ferrous scrap), structural steel and sections (beams, channels, angles, columns, rebar), steel sheets, plates and coils (hot-rolled and cold-rolled), stainless and alloy steel for specialized applications, and steel pipes and tubes (welded and seamless) for oil, gas, plumbing, and mechanical systems. Quality steel products delivered globally to meet construction and industrial specifications."
        imageSrc={metalCladding}
        imageAlt="Steel and basic steel products"
        reverse={false}
      />

      <AlternatingSection
        title="Metal Ores & Raw Materials Trading"
        description="Supply of primary and secondary raw materials essential for metal production worldwide. We trade iron ore and pellets (lumps, fines, pellets for steel mills), bauxite, alumina and non-ferrous ores (copper concentrate, base metal ores), ferrous and non-ferrous scrap as secondary raw materials for smelters and foundries, ferroalloys and pig iron (ferrochrome, ferromanganese, steelmaking additives), and industrial minerals and fluxes (silica, limestone) used in smelting and refining. Supporting global metal supply chains with quality raw materials."
        imageSrc={architecturalMetal}
        imageAlt="Metal ores and raw materials"
        reverse={true}
      />

      <AlternatingSection
        title="Cargo Containers Trading"
        description="Supporting shipping, logistics, and storage with a diverse container portfolio. We supply new and standard containers (20ft/40ft dry and high-cube ISO containers), used and refurbished containers (pre-owned units inspected and reconditioned), refrigerated and specialized containers (reefer, open-top, flat-rack, tank containers), container modifications and accessories (custom conversions, insulation, CSC plates, generator sets), and provide container logistics and leasing services including positioning and transport coordination. Complete container solutions for global trade."
        imageSrc={customMetalwork}
        imageAlt="Cargo containers and logistics"
        reverse={false}
      />

      <AlternatingSection
        title="Metal Wires Trading"
        description="Supply of conductive, structural, and industrial wire products meeting international standards. Our wire trading includes copper and aluminium conductors (electrical cables, busbars, wiring for utilities, construction, and electronics), steel wire and rods (high-carbon, alloy, and stainless wires for construction and automotive), specialty cables (telecom, aerospace, multi-core industrial cables), and wire mesh and fencing (mesh panels and fencing wires for security and infrastructure). Quality metal wires for electrical, construction, and industrial applications."
        imageSrc={metalExcellence}
        imageAlt="Metal wires and conductors"
        reverse={true}
      />

      <AlternatingSection
        title="Metal Cans & Industrial Containers Trading"
        description="Industrial packaging solutions for chemicals, food, paints, and logistics meeting international safety standards. We trade steel drums and barrels (open-head and tight-head drums for chemicals and petroleum), tinplate cans for food and paint (tin-coated steel cans for food, beverage, paint, coatings), industrial storage tanks and IBCs (large-capacity containers for industrial fluids and lubricants), custom metal packaging (gas cylinders, OEM containers, specialized metal packaging), and provide packaging services including inspection, reconditioning, and recycling programs supporting clients' sustainability goals."
        imageSrc={metalFabrication}
        imageAlt="Metal cans and industrial containers"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default MetalDomain;
