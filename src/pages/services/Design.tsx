import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import architecturalDesign from '@/assets/services/architectural-design.jpg';
import structuralEngineering from '@/assets/services/structural-engineering.jpg';
import mepSystems from '@/assets/services/mep-systems.jpg';
import bimVisualization from '@/assets/services/bim-visualization.jpg';

const Design = () => {
  return (
    <ServiceDetailLayout 
      title="Architectural & Engineering Design" 
      subtitle="Innovative Design"
    >
      <AlternatingSection
        title="Architectural Design"
        description="Our architectural services prioritize aesthetics and functionality through innovative concept layouts, elevations, and space planning. We utilize BIM-integrated designs to ensure clear coordination with all stakeholders, creating spaces that reflect brand identity and enhance user experience."
        imageSrc={architecturalDesign}
        imageAlt="Modern architectural design concept"
        reverse={false}
      />

      <AlternatingSection
        title="Structural Engineering"
        description="We provide cutting-edge structural design including foundations, frames, slabs, and load-bearing systems optimized for the UAE's unique conditions. Our engineers employ advanced seismic design and geotechnical analysis, utilizing high-quality and eco-friendly building solutions."
        imageSrc={structuralEngineering}
        imageAlt="Structural engineering framework"
        reverse={true}
      />

      <AlternatingSection
        title="MEP Engineering"
        description="Our MEP services encompass HVAC, electrical, plumbing, fire safety, and low-voltage systems designed for maximum energy efficiency. We integrate smart building solutions for automated environmental control, complemented by comprehensive energy audits for long-term sustainability."
        imageSrc={mepSystems}
        imageAlt="MEP systems installation"
        reverse={false}
      />

      <AlternatingSection
        title="BIM & 3D Visualization"
        description="We leverage BIM models for clash detection, coordination, and cost control throughout the project lifecycle. Our realistic 3D renders and virtual tours provide clients with a clear vision of their projects before execution, utilizing augmented reality for enhanced visualization."
        imageSrc={bimVisualization}
        imageAlt="BIM and 3D visualization"
        reverse={true}
      />
    </ServiceDetailLayout>
  );
};

export default Design;
