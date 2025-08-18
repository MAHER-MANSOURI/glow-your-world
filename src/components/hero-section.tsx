import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lightbox.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Illuminate Your
            <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Perfect Moments
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create personalized lightboxes that bring your favorite memories to life. 
            From romantic gifts to anime adventures, we craft lighting magic for every passion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore Collections
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Custom Design
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="animate-float">
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 shadow-[var(--glass-shadow)]">
              <img 
                src={heroImage} 
                alt="Beautiful custom lightbox" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};