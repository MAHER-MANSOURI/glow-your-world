import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    icon: "⭐",
    title: "Personalized Design",
    description: "Each lightbox is custom-made with your special dates, locations, and photos.",
  },
  {
    icon: "💎",
    title: "Premium Quality",
    description: "Crafted with high-quality materials and LED lighting for a stunning display.",
  },
  {
    icon: "🚀",
    title: "Fast Shipping",
    description: "Quick production and delivery times so you can enjoy your lightbox sooner.",
  },
  {
    icon: "💝",
    title: "Meaningful Gift",
    description: "The perfect present for weddings, anniversaries, birthdays, and special occasions.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="hover:z-10 relative"
              style={{
                animationDelay: `${index * 0.1}s`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};