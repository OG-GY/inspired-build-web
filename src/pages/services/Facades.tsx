import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import facade from '@/assets/services/facade.jpg';

const Facades = () => {
  return (
    <ServiceDetailLayout title="Façades & External Works" subtitle="Architectural Excellence">
      <AlternatingSection title="Curtain Wall Systems" description="Our façade systems combine architectural aesthetics with structural integrity and energy efficiency. We specialize in curtain walls, cladding solutions, and glass systems that meet wind load requirements and thermal performance standards." imageSrc={facade} imageAlt="Modern glass facade" reverse={false} />
      <AlternatingSection title="External Works" description="Complete external works including paving, hardscaping, boundary walls, external lighting, and drainage systems ensuring total project delivery with attention to detail and quality." imageSrc={facade} imageAlt="External building works" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default Facades;
