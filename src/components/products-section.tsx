import { useNotification } from "@/hooks/useNotification";

const products = [
  {
    title: "Wedding Star Map",
    price: "$89.99",
    description: "Capture the night sky of your special day with personalized star coordinates and your wedding photo.",
    image: "https://picsum.photos/seed/wedding-lightbox/400/300.jpg",
  },
  {
    title: "Anniversary Constellation", 
    price: "$79.99",
    description: "Commemorate your milestone with a custom constellation map and your favorite memory.",
    image: "https://picsum.photos/seed/anniversary-lightbox/400/300.jpg",
  },
  {
    title: "Birth Night Sky",
    price: "$69.99", 
    description: "The exact star formation from the moment your child entered the world, beautifully displayed.",
    image: "https://picsum.photos/seed/birth-lightbox/400/300.jpg",
  },
];

export const ProductsSection = () => {
  const { showNotification } = useNotification();

  const handleCustomizeClick = (productName: string) => {
    showNotification(`${productName} added to customization queue!`);
  };

  return (
    <section 
      id="products"
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
        Our Lightbox Collection
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
        {products.map((product, index) => (
          <div 
            key={product.title}
            className={`floating-container ${index === 1 ? 'reverse delay-1' : index === 2 ? 'delay-2' : ''}`}
            style={{
              overflow: 'hidden',
              borderRadius: '15px',
              position: 'relative',
              padding: 0
            }}
          >
            <img 
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLImageElement).style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '10px',
                color: '#fff'
              }}>
                {product.title}
              </h3>
              <p style={{
                fontSize: '1.2rem',
                color: '#ff9a9e',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                {product.price}
              </p>
              <p style={{
                opacity: 0.8,
                marginBottom: '20px',
                color: '#fff'
              }}>
                {product.description}
              </p>
              <button
                onClick={() => handleCustomizeClick(product.title)}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.3)';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = 'rgba(255, 255, 255, 0.2)';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                Customize Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};