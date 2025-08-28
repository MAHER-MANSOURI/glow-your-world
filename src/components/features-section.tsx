import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPalette, faShippingFast, faHeart } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faStar,
    title: "Personalized Design",
    description: "Each lightbox is custom-made with your special dates, locations, and photos.",
  },
  {
    icon: faPalette,
    title: "Premium Quality", 
    description: "Crafted with high-quality materials and LED lighting for a stunning display.",
  },
  {
    icon: faShippingFast,
    title: "Fast Shipping",
    description: "Quick production and delivery times so you can enjoy your lightbox sooner.",
  },
  {
    icon: faHeart,
    title: "Meaningful Gift",
    description: "The perfect present for weddings, anniversaries, birthdays, and special occasions.",
  },
];

export const FeaturesSection = () => {
  return (
    <section 
      id="features"
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
        Why Choose Our Lightboxes
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginTop: '50px'
      }}>
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className={`floating-container ${index === 1 ? 'reverse delay-1' : index === 2 ? 'delay-2' : ''}`}
            style={{
              textAlign: 'center',
              padding: '30px 20px'
            }}
          >
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px',
              color: '#ff9a9e'
            }}>
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '15px',
              color: '#fff'
            }}>
              {feature.title}
            </h3>
            <p style={{
              opacity: 0.8,
              color: '#fff'
            }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};