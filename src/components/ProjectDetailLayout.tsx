import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectDetailLayoutProps {
  children: ReactNode;
  title: string;
  category: string;
  location: string;
  heroImage: string;
}

const ProjectDetailLayout = ({ children, title, category, location, heroImage }: ProjectDetailLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <Button 
                variant="ghost" 
                className="mb-8 text-primary-foreground hover:text-accent"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <div className="max-w-4xl">
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">{category}</span>
                <h1 className="text-4xl md:text-6xl font-serif font-light mt-4 mb-4 text-primary-foreground">
                  {title}
                </h1>
                <p className="text-primary-foreground/80 text-lg">{location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailLayout;
