import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import metalFabrication from '@/assets/metal/metal-fabrication.jpg';
import structuralSteel from '@/assets/metal/structural-steel.jpg';
import metalCladding from '@/assets/metal/metal-cladding.jpg';
import metalExcellence from '@/assets/metal-excellence.jpg';

const Wires = () => {
  return (
    <ServiceDetailLayout 
      title="Metal Wires Trading" 
      subtitle="Conductors & Industrial Wires"
    >
      <AlternatingSection
        title="Copper & Aluminium Conductors"
        description="Power cables, busbars, and wiring products for electrical utilities, construction, and electronics. Copper and aluminium conductors are essential for electrical grids, building wiring, and electronic devices, offering excellent conductivity and reliability."
        imageSrc={metalFabrication}
        imageAlt="Copper and aluminium electrical conductors"
        reverse={false}
      />

      <AlternatingSection
        title="Steel Wire & Rods"
        description="High-carbon and stainless steel wires for construction reinforcing mesh, barbed wire, automotive springs and cables, and various industrial applications. Our steel wire products meet stringent quality standards for strength and durability."
        imageSrc={structuralSteel}
        imageAlt="Steel wire and rod products"
        reverse={true}
      />

      <AlternatingSection
        title="Specialty Cables"
        description="Fiber-strand composites, overhead conductor wires, and custom multi-core cables for telecom, automotive, and aerospace applications. These specialized cables are engineered for demanding environments and critical infrastructure."
        imageSrc={metalCladding}
        imageAlt="Specialty cables and conductors"
        reverse={false}
      />

      <AlternatingSection
        title="Wire Mesh & Fencing"
        description="Metal mesh panels and fencing wire products for security, agriculture, and infrastructure projects. Available in various specifications and materials to meet diverse application requirements from perimeter security to industrial screening."
        imageSrc={metalExcellence}
        imageAlt="Wire mesh and fencing products"
        reverse={true}
      />
    </ServiceDetailLayout>
  );
};

export default Wires;
