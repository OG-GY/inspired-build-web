import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import temporaryWorks from '@/assets/services/temporary-works.jpg';

const Temporary = () => {
  return (
    <ServiceDetailLayout title="Temporary Works & Site Services" subtitle="Site Support">
      <AlternatingSection title="Site Establishment" description="Complete site establishment services including temporary fencing, hoarding, site offices, welfare facilities, storage areas, and security systems ensuring safe construction operations." imageSrc={temporaryWorks} imageAlt="Construction site setup" reverse={false} />
      <AlternatingSection title="Construction Support" description="We provide scaffolding systems, formwork, temporary access roads, construction lighting, power distribution, water supply, and waste management solutions." imageSrc={temporaryWorks} imageAlt="Site services and scaffolding" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default Temporary;
