import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-attachment-fixed"
        style={{
          backgroundImage: `url('/lovable-uploads/f2eb53a4-6258-4310-8164-d35f65d114b7.png')`
        }}
      />
      
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black/20" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Scrolling Content */}
      <ScrollArea className="relative z-10 h-screen">
        <div className="space-y-0">
          <HeroSection />
          <ProductsSection />
          <FeaturesSection />
          <TestimonialsSection />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Index;
