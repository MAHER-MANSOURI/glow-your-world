import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Floating glass container */}
          <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-12 shadow-[var(--glass-shadow)] max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Celestial Memories in
              <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Light
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Personalized star maps and special moments captured in beautiful lightboxes
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Create Your Lightbox
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};