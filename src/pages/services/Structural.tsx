import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import sitePreparation from '@/assets/services/site-preparation.jpg';
import structuralEngineering from '@/assets/services/structural-engineering.jpg';
import mepSystems from '@/assets/services/mep-systems.jpg';

const Structural = () => {
  return (
    <ServiceDetailLayout 
      title="Structural & Civil Works" 
      subtitle="Foundation to Finish"
    >
      <AlternatingSection
        title="Site Preparation"
        description="We provide comprehensive excavation, grading, leveling, and dewatering services to prepare your site for construction. Our advanced soil stabilization techniques and environmental impact mitigation strategies ensure safe and efficient construction environments."
        imageSrc={sitePreparation}
        imageAlt="Construction site excavation"
        reverse={false}
      />

      <AlternatingSection
        title="Foundations & Substructure"
        description="Our foundation solutions include raft, strip, and pile foundations designed to withstand specific load requirements. We construct retaining walls to ensure stability on sloped or water-prone sites, providing a solid base for your building project."
        imageSrc={structuralEngineering}
        imageAlt="Foundation and structural work"
        reverse={true}
      />

      <AlternatingSection
        title="Concrete & Masonry Works"
        description="We deliver high-strength concrete columns, beams, slabs, and formwork meeting stringent quality standards. Our expertise includes self-compacting concrete and pre-stressed beams for enhanced load capacity, durability, and fire safety compliance."
        imageSrc={mepSystems}
        imageAlt="Concrete construction work"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Structural;
