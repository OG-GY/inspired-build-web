import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Construction from "./pages/services/Construction";
import Design from "./pages/services/Design";
import Structural from "./pages/services/Structural";
import MEP from "./pages/services/MEP";
import Interior from "./pages/services/Interior";
import Facades from "./pages/services/Facades";
import Landscaping from "./pages/services/Landscaping";
import Waterproofing from "./pages/services/Waterproofing";
import Modular from "./pages/services/Modular";
import Maintenance from "./pages/services/Maintenance";
import Temporary from "./pages/services/Temporary";
import Specialty from "./pages/services/Specialty";
import Smart from "./pages/services/Smart";
import ValueAdded from "./pages/services/ValueAdded";
import MetalDomain from "./pages/MetalDomain";
import Metal2 from "./pages/Metal2";
import ContactUs from "./pages/ContactUs";
import ProjectDetail from "./pages/ProjectDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/construction" element={<Index />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/structural" element={<Structural />} />
          <Route path="/services/mep" element={<MEP />} />
          <Route path="/services/interior" element={<Interior />} />
          <Route path="/services/facades" element={<Facades />} />
          <Route path="/services/landscaping" element={<Landscaping />} />
          <Route path="/services/waterproofing" element={<Waterproofing />} />
          <Route path="/services/modular" element={<Modular />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/temporary" element={<Temporary />} />
          <Route path="/services/specialty" element={<Specialty />} />
          <Route path="/services/smart" element={<Smart />} />
          <Route path="/services/value-added" element={<ValueAdded />} />
          <Route path="/metal" element={<MetalDomain />} />
          <Route path="/metal2" element={<Metal2 />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
