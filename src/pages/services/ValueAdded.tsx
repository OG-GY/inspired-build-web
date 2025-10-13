import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import valueAdded from '@/assets/services/value-added.jpg';

const ValueAdded = () => {
  return (
    <ServiceDetailLayout title="Value-Added Client Services" subtitle="Beyond Construction">
      <AlternatingSection title="Project Management" description="Expert guidance throughout the project lifecycle including feasibility studies, cost estimation, procurement support, and comprehensive project coordination ensuring successful delivery." imageSrc={valueAdded} imageAlt="Project management consultation" reverse={false} />
      <AlternatingSection title="Regulatory Support" description="Complete support for municipality approvals, civil defense clearances, DEWA connections, and all required building permits ensuring compliance with UAE regulations." imageSrc={valueAdded} imageAlt="Regulatory approval services" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default ValueAdded;
