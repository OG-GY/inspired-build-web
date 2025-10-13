import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import waterproofing from '@/assets/services/waterproofing.jpg';

const Waterproofing = () => {
  return (
    <ServiceDetailLayout title="Waterproofing & Insulation" subtitle="Protection Systems">
      <AlternatingSection title="Advanced Waterproofing" description="Protect your investment with advanced waterproofing solutions for roofs, basements, bathrooms, and external walls using premium membrane systems and liquid-applied coatings." imageSrc={waterproofing} imageAlt="Waterproofing application" reverse={false} />
      <AlternatingSection title="Thermal Insulation" description="Our thermal insulation services improve energy efficiency through wall, roof, and acoustic insulation using materials designed to withstand UAE's harsh climate conditions." imageSrc={waterproofing} imageAlt="Building insulation" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default Waterproofing;
