import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import maintenance from '@/assets/services/maintenance.jpg';

const Maintenance = () => {
  return (
    <ServiceDetailLayout title="Maintenance & AMC" subtitle="Ongoing Support">
      <AlternatingSection title="Preventive Maintenance" description="Scheduled inspections and maintenance of HVAC systems, electrical installations, plumbing, and building equipment to prevent breakdowns and extend asset life." imageSrc={maintenance} imageAlt="Building maintenance service" reverse={false} />
      <AlternatingSection title="AMC Packages" description="Comprehensive annual maintenance contracts covering all building systems with regular inspections, priority service, discounted repairs, and detailed reporting for facility management." imageSrc={maintenance} imageAlt="Maintenance contract services" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default Maintenance;
