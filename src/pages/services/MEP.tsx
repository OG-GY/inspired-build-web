import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import mepSystems from '@/assets/services/mep-systems.jpg';
import structuralEngineering from '@/assets/services/structural-engineering.jpg';
import bimVisualization from '@/assets/services/bim-visualization.jpg';

const MEP = () => {
  return (
    <ServiceDetailLayout 
      title="MEP Systems" 
      subtitle="Building Systems Excellence"
    >
      <AlternatingSection
        title="Electrical Installations"
        description="We design and install comprehensive electrical systems including power distribution, lighting controls, emergency backup systems, and energy-efficient solutions. Our installations meet all UAE regulations while incorporating smart technologies for optimal performance and safety."
        imageSrc={mepSystems}
        imageAlt="Electrical systems installation"
        reverse={false}
      />

      <AlternatingSection
        title="HVAC Systems"
        description="Our HVAC solutions provide optimal climate control with energy-efficient air conditioning, ventilation, and temperature management systems. We design systems tailored to the UAE's demanding climate while minimizing operational costs and environmental impact."
        imageSrc={structuralEngineering}
        imageAlt="HVAC system components"
        reverse={true}
      />

      <AlternatingSection
        title="Plumbing & Fire Safety"
        description="We install complete plumbing systems including water supply, drainage, and sanitary installations complemented by advanced fire detection, sprinkler systems, and emergency response solutions. All installations comply with UAE fire safety codes and regulations."
        imageSrc={bimVisualization}
        imageAlt="Fire safety and plumbing systems"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default MEP;
