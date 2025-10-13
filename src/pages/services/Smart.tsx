import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import smartSolutions from '@/assets/services/smart-solutions.jpg';

const Smart = () => {
  return (
    <ServiceDetailLayout title="Smart & Sustainable Solutions" subtitle="Innovation & Sustainability">
      <AlternatingSection title="Smart Building Technologies" description="Cutting-edge smart building technologies including automation systems, IoT sensors, and integrated control platforms for optimal building performance and user comfort." imageSrc={smartSolutions} imageAlt="Smart building control system" reverse={false} />
      <AlternatingSection title="Sustainable Practices" description="We implement sustainable construction practices including energy-efficient systems, renewable energy integration, and green building certifications to reduce environmental impact." imageSrc={smartSolutions} imageAlt="Sustainable building solutions" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default Smart;
