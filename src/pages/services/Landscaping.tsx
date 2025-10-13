import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import landscaping from '@/assets/services/landscaping.jpg';

const Landscaping = () => {
  return (
    <ServiceDetailLayout title="Landscaping & Outdoor Works" subtitle="Outdoor Excellence">
      <AlternatingSection title="Soft & Hard Landscaping" description="Create stunning outdoor environments with comprehensive landscaping services including planting, turfing, irrigation, paving, decking, and pergolas for residential and commercial properties." imageSrc={landscaping} imageAlt="Luxury landscaped garden" reverse={false} />
      <AlternatingSection title="Sustainable Solutions" description="Our sustainable landscaping incorporates native plants, water-efficient irrigation systems, and eco-friendly materials to create beautiful yet environmentally responsible outdoor spaces." imageSrc={landscaping} imageAlt="Sustainable garden design" reverse={true} />
    </ServiceDetailLayout>
  );
};
export default Landscaping;
