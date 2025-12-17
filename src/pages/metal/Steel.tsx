import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import steelProducts from '@/assets/metal/steel/steel-products.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const Steel = () => {
  return (
    <ServiceDetailLayout 
      title="Steel & Basic Steel Products Trading" 
      subtitle="Infrastructure & Construction"
    >
      <AlternatingSection
        title="Carbon & Alloy Steel"
        description="Structural, mild, and alloy steel products for fabrication and heavy industry."
        imageSrc={steelProducts}
        imageAlt="Carbon and alloy steel products"
        reverse={false}
      />

      <AlternatingSection
        title="Structural Steel & Reinforcement"
        description="Beams, columns, angles, channels, joists, and reinforcement bars (rebar) for buildings and infrastructure."
        imageSrc={structuralSteel}
        imageAlt="Structural steel and reinforcement"
        reverse={true}
      />

      <AlternatingSection
        title="Steel Sheets, Plates & Coils"
        description="Hot-rolled, cold-rolled, galvanized, and coated sheets and plates for shipbuilding, machinery, and manufacturing."
        imageSrc={metalCladding}
        imageAlt="Steel sheets plates and coils"
        reverse={false}
      />

      <AlternatingSection
        title="Stainless Steel Products"
        description="Industrial, food-grade, medical, and chemical-grade stainless steel sheets, pipes, and components."
        imageSrc={architecturalMetal}
        imageAlt="Stainless steel products"
        reverse={true}
      />

      <AlternatingSection
        title="Steel Pipes & Tubes"
        description="Seamless and welded pipes and tubes for oil & gas, plumbing, mechanical, and industrial systems."
        imageSrc={customMetalwork}
        imageAlt="Steel pipes and tubes"
        reverse={false}
      />

      <AlternatingSection
        title="Automotive Steel Metals & Components"
        description="Steel chassis parts, body panels, engine blocks, surplus components, and scrap from end-of-life vehicles."
        imageSrc={metalFabrication}
        imageAlt="Automotive steel components"
        reverse={true}
      />

      <AlternatingSection
        title="New, Surplus & Recycled Steel"
        description="Primary steel products, excess inventory, and recycled steel materials."
        imageSrc={metalExcellence}
        imageAlt="New surplus and recycled steel"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Steel;
