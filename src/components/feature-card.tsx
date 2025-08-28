import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FeatureCard = ({ icon, title, description, className, style }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl p-8",
        "bg-gradient-card backdrop-blur-md",
        "transition-all duration-500 hover:scale-105",
        "shadow-[var(--glass-shadow)] hover:shadow-xl",
        "animate-scale-in text-center",
        className
      )}
      style={style}
    >
      {/* Icon */}
      <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center text-pink-400 text-3xl">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
};