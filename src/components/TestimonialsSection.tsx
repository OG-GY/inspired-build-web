import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import client1 from '@/assets/clients/client-1.jpg';
import client2 from '@/assets/clients/client-2.jpg';
import client3 from '@/assets/clients/client-3.jpg';
import client4 from '@/assets/clients/client-4.jpg';
import client5 from '@/assets/clients/client-5.jpg';
import client6 from '@/assets/clients/client-6.jpg';

const clients = [
  {
    name: 'Premier Construction Group',
    subtitle: 'Leading Construction & Development Partner',
    logo: client1,
  },
  {
    name: 'Real Estate Holdings',
    subtitle: 'Luxury Property Development',
    logo: client2,
  },
  {
    name: 'Industrial Engineering Solutions',
    subtitle: 'Advanced Manufacturing & Engineering',
    logo: client3,
  },
  {
    name: 'Architecture & Design Studio',
    subtitle: 'Contemporary Design Excellence',
    logo: client4,
  },
  {
    name: 'Smart Technology Partners',
    subtitle: 'Innovative Building Solutions',
    logo: client5,
  },
  {
    name: 'Hospitality Group International',
    subtitle: 'Premium Hotel & Resort Development',
    logo: client6,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're proud to have collaborated with some of the most prestigious companies in the UAE construction and development sector.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {client.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {client.subtitle}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-20 h-20 object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;