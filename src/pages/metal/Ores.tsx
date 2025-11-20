import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const Ores = () => {
  return (
    <ServiceDetailLayout 
      title="Metal Ores & Raw Materials Trading" 
      subtitle="Primary Feedstocks & Minerals"
    >
      <AlternatingSection
        title="Iron Ore & Pellets"
        description="Sourcing of iron ore lumps, fines, and pellets for steel mills worldwide. Iron ore serves as the foundation of the global steel industry, essential for infrastructure and construction development across all markets."
        imageSrc={metalFabrication}
        imageAlt="Iron ore and pellets"
        reverse={false}
      />

      <AlternatingSection
        title="Bauxite, Alumina & Non-Ferrous Ores"
        description="Trade of aluminium ore (bauxite), alumina, copper concentrate, and other base metal ores serving smelters and refineries. These primary raw materials support the production of non-ferrous metals for aerospace, construction, and electronics."
        imageSrc={structuralSteel}
        imageAlt="Bauxite and alumina raw materials"
        reverse={true}
      />

      <AlternatingSection
        title="Ferrous & Non-Ferrous Scrap"
        description="Collection and trading of scrap metal including steel, cast iron, and aluminium scrap as secondary raw material. This boosts circularity in the metals economy, reducing reliance on virgin mining and lowering environmental impact."
        imageSrc={architecturalMetal}
        imageAlt="Metal scrap as secondary raw material"
        reverse={false}
      />

      <AlternatingSection
        title="Ferroalloys & Pig Iron"
        description="Supply of ferrochrome, ferromanganese, pig iron, and other alloys used in steelmaking and foundries. These essential additives improve steel properties and enable production of specialized steel grades."
        imageSrc={customMetalwork}
        imageAlt="Ferroalloys and pig iron"
        reverse={true}
      />

      <AlternatingSection
        title="Industrial Minerals & Fluxes"
        description="Trading of raw minerals including silica, limestone, and other materials used as fluxes or fillers in metal processing. These industrial minerals are essential for smelting operations and metal refining processes."
        imageSrc={metalExcellence}
        imageAlt="Industrial minerals and fluxes"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Ores;
