import { ProductCard } from "@/components/product-card";

// Using placeholder images for now
const products = [
  {
    title: "Morning Star Map",
    price: "$89.99",
    description: "Capture the night sky of your special day with personalized star coordinates and your wedding photo.",
    image: "/api/placeholder/400/400",
  },
  {
    title: "Constellation",
    price: "$149.99",
    description: "Commemorate your milestone with a custom constellation map and your favorite memory.",
    image: "/api/placeholder/400/400",
  },
  {
    title: "Birth Night Sky",
    price: "$179.99",
    description: "The exact star formation from the moment your child entered the world, beautifully displayed.",
    image: "/api/placeholder/400/400",
  },
];

export const ProductsSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Lightbox Collection
          </h2>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
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