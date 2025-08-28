import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
