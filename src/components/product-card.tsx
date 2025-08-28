import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ title, price, description, image, className, style }: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-gradient-card backdrop-blur-md",
        "transition-all duration-500 hover:scale-105",
        "shadow-[var(--glass-shadow)] hover:shadow-xl",
        "animate-scale-in",
        className
      )}
      style={style}
    >
      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-pink-300 text-2xl font-bold mb-2">
          {price}
        </p>
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Button 
          className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300"
        >
          Customize Now
        </Button>
      </div>
    </div>
  );
};