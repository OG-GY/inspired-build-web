import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import AboutSection from '@/components/AboutSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ServicesOverviewSection from '@/components/ServicesOverviewSection';
import MajorProjectsSection from '@/components/MajorProjectsSection';
import ArchitecturalDesignSection from '@/components/ArchitecturalDesignSection';
import StructuralWorksSection from '@/components/StructuralWorksSection';
import MEPServicesSection from '@/components/MEPServicesSection';
import InteriorFitoutSection from '@/components/InteriorFitoutSection';
import FacadesSection from '@/components/FacadesSection';
import LandscapingSection from '@/components/LandscapingSection';
import WaterproofingSection from '@/components/WaterproofingSection';
import ModularSolutionsSection from '@/components/ModularSolutionsSection';
import MaintenanceSection from '@/components/MaintenanceSection';
import TemporaryWorksSection from '@/components/TemporaryWorksSection';
import SpecialtyTradesSection from '@/components/SpecialtyTradesSection';
import SmartSolutionsSection from '@/components/SmartSolutionsSection';
import ValueAddedSection from '@/components/ValueAddedSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ExpertiseSection />
        <ServicesOverviewSection />
        <MajorProjectsSection />
        <ArchitecturalDesignSection />
        <StructuralWorksSection />
        <MEPServicesSection />
        <InteriorFitoutSection />
        <FacadesSection />
        <LandscapingSection />
        <WaterproofingSection />
        <ModularSolutionsSection />
        <MaintenanceSection />
        <TemporaryWorksSection />
        <SpecialtyTradesSection />
        <SmartSolutionsSection />
        <ValueAddedSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
