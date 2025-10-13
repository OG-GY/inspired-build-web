import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import luxuryVilla from '@/assets/services/luxury-villa.jpg';
import commercialBuilding from '@/assets/services/commercial-building.jpg';
import industrialFacility from '@/assets/services/industrial-facility.jpg';
import renovation from '@/assets/services/renovation.jpg';
import designBuild from '@/assets/services/design-build.jpg';

const Construction = () => {
  return (
    <ServiceDetailLayout 
      title="Construction & Turnkey Projects" 
      subtitle="Turnkey Solutions"
    >
      <AlternatingSection
        title="Luxury Villas & Residences"
        description="We specialize in crafting luxurious villas with advanced smart home systems and modern architecture tailored to client lifestyles. From bespoke designs to premium interiors, we integrate cutting-edge technology with sustainable materials to create exceptional living spaces."
        imageSrc={luxuryVilla}
        imageAlt="Luxury villa with modern architecture"
        reverse={false}
      />

      <AlternatingSection
        title="Commercial & Office Buildings"
        description="Our commercial projects focus on functionality and aesthetics, integrating energy-efficient solutions and premium finishing. We deliver flexible workspaces that maximize productivity while maintaining architectural excellence and environmental responsibility."
        imageSrc={commercialBuilding}
        imageAlt="Modern commercial office building"
        reverse={true}
      />

      <AlternatingSection
        title="Light Industrial Facilities"
        description="Designed for strength and efficiency, our industrial units support warehouses, factories, and logistic hubs across the UAE. We incorporate advanced climate control, security systems, and modular options for easy expansion based on evolving business needs."
        imageSrc={industrialFacility}
        imageAlt="Industrial warehouse facility"
        reverse={false}
      />

      <AlternatingSection
        title="Extensions & Renovations"
        description="From structural upgrades to complete refurbishments, we enhance spaces with modern design and sustainable construction practices. We specialize in G+1 extensions and heritage preservation, seamlessly integrating contemporary elements with existing structures."
        imageSrc={renovation}
        imageAlt="Building renovation in progress"
        reverse={true}
      />

      <AlternatingSection
        title="Design–Build Packages"
        description="Offering complete end-to-end solutions, we handle everything from concept to completion under one roof, ensuring cost control and quality. Our integrated approach streamlines project delivery, managing feasibility studies, design approvals, construction, and post-completion care."
        imageSrc={designBuild}
        imageAlt="Architectural design and planning"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Construction;
