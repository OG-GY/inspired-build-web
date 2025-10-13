import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import AboutSection from '@/components/AboutSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
      <HeroCarousel />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
