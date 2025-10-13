import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import specialtyTrades from '@/assets/services/specialty-trades.jpg';

const Specialty = () => {
  return (
    <ServiceDetailLayout title="Specialty Trades & Custom Fabrication" subtitle="Expert Craftsmanship">
      <AlternatingSection title="Custom Metalwork" description="Expert craftsmanship in specialized construction trades including custom metal fabrication, welding, and steel work tailored to project specifications." imageSrc={specialtyTrades} imageAlt="Metal fabrication work" reverse={false} />
      <AlternatingSection title="Specialized Services" description="We provide specialty construction services including custom joinery, architectural metalwork, and specialized installations requiring expert craftsmanship and precision." imageSrc={specialtyTrades} imageAlt="Specialty construction trades" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default Specialty;
