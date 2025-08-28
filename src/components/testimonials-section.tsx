const testimonials = [
  {
    quote: "The wedding lightbox we ordered exceeded all expectations! The star map was accurate and the quality is outstanding. It's now the centerpiece of our living room.",
    author: "Sarah Johnson",
    role: "Newlywed",
    avatar: "https://picsum.photos/seed/customer1/100/100.jpg",
  },
  {
    quote: "I gifted the birth night sky lightbox to my sister for her baby shower, and she cried tears of joy. It's such a unique and thoughtful present.",
    author: "Michael Chen",
    role: "Proud Uncle",
    avatar: "https://picsum.photos/seed/customer2/100/100.jpg",
  },
  {
    quote: "Our 25th anniversary lightbox is absolutely beautiful. The attention to detail and craftsmanship is evident. Highly recommend for anyone wanting a special keepsake.",
    author: "Robert & Linda",
    role: "Celebrating 25 Years",
    avatar: "https://picsum.photos/seed/customer3/100/100.jpg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials"
      style={{
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}
    >
      <h2 style={{
        textAlign: 'center',
        fontSize: '3rem',
        marginBottom: '50px',
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        color: '#fff'
      }}>
        What Our Customers Say
        <div style={{
          content: '',
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '3px',
          background: 'linear-gradient(45deg, #ff9a9e, #fad0c4)',
          borderRadius: '5px'
        }} />
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginTop: '50px'
      }}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.author}
            className={`floating-container ${index === 1 ? 'reverse delay-1' : index === 2 ? 'delay-2' : ''}`}
            style={{ padding: '30px' }}
          >
            <p style={{
              fontStyle: 'italic',
              marginBottom: '20px',
              position: 'relative',
              color: '#fff'
            }}>
              <span style={{
                fontSize: '4rem',
                position: 'absolute',
                top: '-20px',
                left: '-10px',
                opacity: 0.2
              }}>
                "
              </span>
              {testimonial.quote}
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <img 
                src={testimonial.avatar}
                alt={testimonial.author}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginRight: '15px',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h4 style={{
                  marginBottom: '5px',
                  color: '#fff'
                }}>
                  {testimonial.author}
                </h4>
                <p style={{
                  opacity: 0.7,
                  fontSize: '0.9rem',
                  color: '#fff'
                }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};