import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TestimonialCard = ({ quote, author, role, avatar, className, style }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl p-8",
        "bg-gradient-card backdrop-blur-md",
        "transition-all duration-500 hover:scale-105",
        "shadow-[var(--glass-shadow)] hover:shadow-xl",
        "animate-scale-in",
        className
      )}
      style={style}
    >
      {/* Quote */}
      <p className="text-white/90 leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      
      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-pink-400 to-purple-500 p-0.5">
          <img 
            src={avatar} 
            alt={author}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold">{author}</h4>
          <p className="text-white/60 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};