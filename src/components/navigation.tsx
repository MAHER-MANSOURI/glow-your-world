import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">★</span>
            </div>
            <span className="text-white font-bold text-xl">Stellar Lightboxes</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-pink-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-pink-300 transition-colors">Products</a>
            <a href="#" className="text-white hover:text-pink-300 transition-colors">Features</a>
            <a href="#" className="text-white hover:text-pink-300 transition-colors">Reviews</a>
            <a href="#" className="text-white hover:text-pink-300 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};