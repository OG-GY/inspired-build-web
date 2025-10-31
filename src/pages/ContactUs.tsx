import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-4">Contact Us</h1>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">
              Have Questions or Need a Quote?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We're just a call or message away! Reach out to us anytime, and our team will assist you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-sm shadow-lg">
              <h3 className="text-2xl font-serif mb-6">Send Us A Message</h3>
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-background"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="bg-background resize-none"
                    required
                  />
                </div>
                <Button className="w-full" variant="luxury" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl font-serif mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  {/* Call Us */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Call Us</h4>
                      <p className="text-muted-foreground">+971 55 334 4874</p>
                      <p className="text-muted-foreground">+971 50 496 7289</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Our Email</h4>
                      <p className="text-muted-foreground break-all">info@premierconstruction.com</p>
                      <p className="text-muted-foreground break-all">operations@premierconstruction.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Our Location</h4>
                      <p className="text-muted-foreground">
                        123 Construction Avenue<br />
                        Building District, City 12345
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Working Hours</h4>
                      <p className="text-muted-foreground">Mon-Sun: 10AM-5PM</p>
                      <p className="text-muted-foreground">Friday off</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;