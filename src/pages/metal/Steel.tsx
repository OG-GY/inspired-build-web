import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import carbonAlloySteel from '@/assets/metal/steel/carbon-alloy-steel.jpg';
import structuralSteelReinforcement from '@/assets/metal/steel/structural-steel-reinforcement.jpg';
import steelSheetsCoils from '@/assets/metal/steel/steel-sheets-coils.jpg';
import stainlessSteelProducts from '@/assets/metal/steel/stainless-steel-products.jpg';
import steelPipesTubes from '@/assets/metal/steel/steel-pipes-tubes.jpg';
import automotiveSteel from '@/assets/metal/steel/automotive-steel.jpg';
import newSurplusRecycledSteel from '@/assets/metal/steel/new-surplus-recycled-steel.jpg';

const Steel = () => {
  return (
    <ServiceDetailLayout 
      title="Steel & Basic Steel Products Trading" 
      subtitle="Infrastructure & Construction"
    >
      <AlternatingSection
        title="Carbon & Alloy Steel"
        description="Structural, mild, and alloy steel products for fabrication and heavy industry."
        imageSrc={carbonAlloySteel}
        imageAlt="Carbon and alloy steel products"
        reverse={false}
      />

      <AlternatingSection
        title="Structural Steel & Reinforcement"
        description="Beams, columns, angles, channels, joists, and reinforcement bars (rebar) for buildings and infrastructure."
        imageSrc={structuralSteelReinforcement}
        imageAlt="Structural steel and reinforcement"
        reverse={true}
      />

      <AlternatingSection
        title="Steel Sheets, Plates & Coils"
        description="Hot-rolled, cold-rolled, galvanized, and coated sheets and plates for shipbuilding, machinery, and manufacturing."
        imageSrc={steelSheetsCoils}
        imageAlt="Steel sheets plates and coils"
        reverse={false}
      />

      <AlternatingSection
        title="Stainless Steel Products"
        description="Industrial, food-grade, medical, and chemical-grade stainless steel sheets, pipes, and components."
        imageSrc={stainlessSteelProducts}
        imageAlt="Stainless steel products"
        reverse={true}
      />

      <AlternatingSection
        title="Steel Pipes & Tubes"
        description="Seamless and welded pipes and tubes for oil & gas, plumbing, mechanical, and industrial systems."
        imageSrc={steelPipesTubes}
        imageAlt="Steel pipes and tubes"
        reverse={false}
      />

      <AlternatingSection
        title="Automotive Steel Metals & Components"
        description="Steel chassis parts, body panels, engine blocks, surplus components, and scrap from end-of-life vehicles."
        imageSrc={automotiveSteel}
        imageAlt="Automotive steel components"
        reverse={true}
      />

      <AlternatingSection
        title="New, Surplus & Recycled Steel"
        description="Primary steel products, excess inventory, and recycled steel materials."
        imageSrc={newSurplusRecycledSteel}
        imageAlt="New surplus and recycled steel"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Steel;
