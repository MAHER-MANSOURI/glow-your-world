import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/f2eb53a4-6258-4310-8164-d35f65d114b7.png')`
        }}
      />
      
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/15" />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <CategoriesSection />
      </div>
    </div>
  );
};

export default Index;
