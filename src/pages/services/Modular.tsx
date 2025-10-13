import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import modular from '@/assets/services/modular.jpg';

const Modular = () => {
  return (
    <ServiceDetailLayout title="Modular & Prefabricated Solutions" subtitle="Fast Track Construction">
      <AlternatingSection title="Modular Construction" description="Accelerate project delivery with modular construction solutions including prefabricated cabins, portable buildings, and permanent modular structures offering up to 50% time reduction." imageSrc={modular} imageAlt="Modular building construction" reverse={false} />
      <AlternatingSection title="Quality & Flexibility" description="Our modular solutions meet all building regulations with full MEP systems, insulation, and finishes, providing cost efficiency and flexibility for future modifications." imageSrc={modular} imageAlt="Prefabricated modules" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default Modular;
