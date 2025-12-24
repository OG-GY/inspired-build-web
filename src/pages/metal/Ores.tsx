import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import ironOrePellets from '@/assets/metal/ores/iron-ore-pellets.jpg';
import bauxiteAlumina from '@/assets/metal/ores/bauxite-alumina.jpg';
import copperBaseMetalConcentrates from '@/assets/metal/ores/copper-base-metal-concentrates.jpg';
import scrapFeedstock from '@/assets/metal/ores/scrap-feedstock.jpg';
import ferroalloysPigIron from '@/assets/metal/ores/ferroalloys-pig-iron.jpg';
import industrialMineralsFluxes from '@/assets/metal/ores/industrial-minerals-fluxes.jpg';

const Ores = () => {
  return (
    <ServiceDetailLayout 
      title="Metal Ores & Raw Materials Trading" 
      subtitle="Primary Feedstocks"
    >
      <AlternatingSection
        title="Iron Ore & Pellets"
        description="Iron ore lumps, fines, and pellets supplied to steel mills and foundries."
        imageSrc={ironOrePellets}
        imageAlt="Iron ore and pellets"
        reverse={false}
      />

      <AlternatingSection
        title="Bauxite and Alumina"
        description="Aluminium ore and refined alumina for smelters and metal producers."
        imageSrc={bauxiteAlumina}
        imageAlt="Bauxite and alumina"
        reverse={true}
      />

      <AlternatingSection
        title="Copper & Base-Metal Concentrates"
        description="Concentrates and ores used in refining and smelting operations."
        imageSrc={copperBaseMetalConcentrates}
        imageAlt="Copper and base-metal concentrates"
        reverse={false}
      />

      <AlternatingSection
        title="Ferrous & Non-Ferrous Scrap as Feedstock"
        description="Secondary raw materials supplementing primary ore supply."
        imageSrc={scrapFeedstock}
        imageAlt="Scrap metal feedstock"
        reverse={true}
      />

      <AlternatingSection
        title="Ferroalloys & Pig Iron"
        description="Ferrochrome, ferromanganese, ferrosilicon, pig iron, and foundry alloys."
        imageSrc={ferroalloysPigIron}
        imageAlt="Ferroalloys and pig iron"
        reverse={false}
      />

      <AlternatingSection
        title="Industrial Minerals & Fluxes"
        description="Silica, limestone, and other additives used in metallurgical and industrial processes."
        imageSrc={industrialMineralsFluxes}
        imageAlt="Industrial minerals and fluxes"
        reverse={true}
      />
    </ServiceDetailLayout>
  );
};

export default Ores;
