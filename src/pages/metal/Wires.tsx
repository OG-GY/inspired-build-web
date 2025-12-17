import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalWires from '@/assets/metal/wires/metal-wires.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import architecturalMetal from '@/assets/metal/architectural-metal.jpg';
import customMetalwork from '@/assets/metal/custom-metalwork.jpg';

const Wires = () => {
  return (
    <ServiceDetailLayout 
      title="Metal Wires, Rods & Cables Trading" 
      subtitle="Industrial Connectivity"
    >
      <AlternatingSection
        title="Copper Conductors & Cables"
        description="Electrical wires, power cables, busbars, and grounding systems."
        imageSrc={metalWires}
        imageAlt="Copper conductors and cables"
        reverse={false}
      />

      <AlternatingSection
        title="Aluminium Conductors"
        description="Overhead conductors, power cables, and industrial wiring."
        imageSrc={structuralSteel}
        imageAlt="Aluminium conductors"
        reverse={true}
      />

      <AlternatingSection
        title="Steel Wires & Wire Rods"
        description="High-carbon, galvanized, stainless, and specialty wires for industrial and structural use."
        imageSrc={metalCladding}
        imageAlt="Steel wires and wire rods"
        reverse={false}
      />

      <AlternatingSection
        title="Specialty & Industrial Cables"
        description="Multi-core, control, telecom, automotive, and aerospace cables."
        imageSrc={architecturalMetal}
        imageAlt="Specialty industrial cables"
        reverse={true}
      />

      <AlternatingSection
        title="Wire Mesh & Fencing Products"
        description="Reinforcement mesh, fencing wire, security barriers, and industrial mesh panels."
        imageSrc={customMetalwork}
        imageAlt="Wire mesh and fencing products"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Wires;
