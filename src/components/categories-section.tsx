import { CategoryCard } from "@/components/ui/category-card";
import animeImage from "@/assets/anime-lightbox.jpg";
import carImage from "@/assets/car-lightbox.jpg";
import f1Image from "@/assets/f1-lightbox.jpg";
import movieImage from "@/assets/movie-lightbox.jpg";
import gamingImage from "@/assets/gaming-lightbox.jpg";
import heroImage from "@/assets/hero-lightbox.jpg";

const categories = [
  {
    title: "Romance & Wedding",
    description: "Perfect for couples, engagements, and wedding memories. Create lasting romantic keepsakes.",
    image: heroImage,
  },
  {
    title: "Anime & Manga",
    description: "Bring your favorite anime characters to life with vibrant, colorful lightbox designs.",
    image: animeImage,
  },
  {
    title: "Cars & Automotive",
    description: "Showcase your dream cars and automotive passion with sleek, dynamic lightbox art.",
    image: carImage,
  },
  {
    title: "Formula 1",
    description: "Celebrate racing legends and F1 moments with high-speed inspired lightbox designs.",
    image: f1Image,
  },
  {
    title: "Movies & Series",
    description: "Immortalize iconic movie scenes and TV series moments in stunning lightbox format.",
    image: movieImage,
  },
  {
    title: "Video Games",
    description: "Level up your space with gaming-inspired lightboxes featuring your favorite characters.",
    image: gamingImage,
  },
];

export const CategoriesSection = () => {
  return (
    <section className="relative py-12 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From romantic wedding gifts to epic gaming tributes, discover the perfect lightbox design 
            that speaks to your unique passion and personality.
          </p>
        </div>
        
        {/* Floating Container */}
        <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[var(--glass-shadow)] animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                image={category.image}
                className="hover:z-10 relative"
                style={{
                  animationDelay: `${index * 0.1}s`
                } as React.CSSProperties}
                onClick={() => {
                  // Handle category selection
                  console.log(`Selected category: ${category.title}`);
                }}
              />
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-white/80 mb-6">
              Get started with your custom lightbox design today
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
              Start Custom Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};