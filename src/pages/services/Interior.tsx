import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import AlternatingSection from '@/components/AlternatingSection';
import interiorFitout from '@/assets/services/interior-fitout.jpg';
import luxuryVilla from '@/assets/services/luxury-villa.jpg';
import commercialBuilding from '@/assets/services/commercial-building.jpg';

const Interior = () => {
  return (
    <ServiceDetailLayout 
      title="Interior Fit-Out & Finishes" 
      subtitle="Luxury Interiors"
    >
      <AlternatingSection
        title="Corporate & Commercial Fit-Out"
        description="We transform commercial spaces into functional and inspiring environments. From corporate offices to retail spaces, our fit-out services include partition systems, ceiling designs, premium flooring, and custom joinery that reflects your brand identity."
        imageSrc={interiorFitout}
        imageAlt="Luxury corporate interior"
        reverse={false}
      />

      <AlternatingSection
        title="Residential Interiors"
        description="Our residential fit-out services create luxurious living spaces with attention to every detail. We provide complete interior solutions including flooring, wall finishes, custom cabinetry, lighting design, and furniture procurement for villas and apartments."
        imageSrc={luxuryVilla}
        imageAlt="Luxury residential interior"
        reverse={true}
      />

      <AlternatingSection
        title="Premium Finishes"
        description="We specialize in high-end finishes including marble flooring, hardwood installations, designer wall coverings, and bespoke carpentry. Our craftsmanship ensures the highest standards of finish quality, creating spaces that exude elegance and sophistication."
        imageSrc={commercialBuilding}
        imageAlt="Premium interior finishes"
        reverse={false}
      />
    </ServiceDetailLayout>
  );
};

export default Interior;
