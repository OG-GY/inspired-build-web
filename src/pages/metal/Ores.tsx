import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalOres from '@/assets/metal/ores/metal-ores.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const Ores = () => {
  return (
    <ServiceDetailLayout 
      title="Metal Ores & Raw Materials Trading" 
      subtitle="Primary Feedstocks"
    >
      <AlternatingSection
        title="Iron Ore & Pellets"
        description="Iron ore lumps, fines, and pellets supplied to steel mills and foundries."
        imageSrc={metalOres}
        imageAlt="Iron ore and pellets"
        reverse={false}
      />

      <AlternatingSection
        title="Bauxite and Alumina"
        description="Aluminium ore and refined alumina for smelters and metal producers."
        imageSrc={structuralSteel}
        imageAlt="Bauxite and alumina"
        reverse={true}
      />

      <AlternatingSection
        title="Copper & Base-Metal Concentrates"
        description="Concentrates and ores used in refining and smelting operations."
        imageSrc={metalCladding}
        imageAlt="Copper and base-metal concentrates"
        reverse={false}
      />

      <AlternatingSection
        title="Ferrous & Non-Ferrous Scrap as Feedstock"
        description="Secondary raw materials supplementing primary ore supply."
        imageSrc={architecturalMetal}
        imageAlt="Scrap metal feedstock"
        reverse={true}
      />

      <AlternatingSection
        title="Ferroalloys & Pig Iron"
        description="Ferrochrome, ferromanganese, ferrosilicon, pig iron, and foundry alloys."
        imageSrc={customMetalwork}
        imageAlt="Ferroalloys and pig iron"
        reverse={false}
      />

      <AlternatingSection
        title="Industrial Minerals & Fluxes"
        description="Silica, limestone, and other additives used in metallurgical and industrial processes."
        imageSrc={metalExcellence}
        imageAlt="Industrial minerals and fluxes"
        reverse={true}
      />
    </ServiceDetailLayout>
  );
};

export default Ores;
