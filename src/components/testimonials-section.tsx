import { TestimonialCard } from "@/components/testimonial-card";

const testimonials = [
  {
    quote: "The wedding lightbox we ordered exceeded all expectations! The star map was accurate and the quality is outstanding. It's now the centerpiece of our living room.",
    author: "Sarah Johnson",
    role: "Newlywed",
    avatar: "/api/placeholder/100/100",
  },
  {
    quote: "I gifted the birth night sky lightbox to my sister for her baby shower, and she cried tears of joy. It's such a unique and thoughtful present.",
    author: "Michael Chen",
    role: "Proud Uncle",
    avatar: "/api/placeholder/100/100",
  },
  {
    quote: "Our 25th anniversary lightbox is absolutely beautiful. The attention to detail and craftsmanship is evident. Highly recommend for anyone wanting a special keepsake.",
    author: "Robert & Linda",
    role: "Celebrating 25 Years",
    avatar: "/api/placeholder/100/100",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
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