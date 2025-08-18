import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const CategoryCard = ({ title, description, image, className, style, onClick }: CategoryCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        "bg-gradient-card backdrop-blur-md",
        "transition-all duration-500 hover:scale-105 hover:bg-gradient-hover",
        "shadow-[var(--glass-shadow)] hover:shadow-xl",
        "animate-scale-in",
        className
      )}
      style={style}
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};