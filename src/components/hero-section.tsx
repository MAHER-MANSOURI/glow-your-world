export const HeroSection = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div style={{ maxWidth: '800px' }}>
        <div className="floating-container" style={{ maxWidth: '800px' }}>
          <h1 style={{
            fontSize: '4rem',
            marginBottom: '20px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            color: '#fff'
          }}>
            Celestial Memories in Light
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '30px',
            opacity: 0.9,
            color: '#fff'
          }}>
            Personalized star maps and special moments captured in beautiful lightboxes
          </p>
          <a
            href="#products"
            onClick={handleClick}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #ff9a9e, #fad0c4)',
              color: '#333',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 5px 15px rgba(255, 154, 158, 0.4)'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-5px)';
              (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(255, 154, 158, 0.6)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 5px 15px rgba(255, 154, 158, 0.4)';
            }}
          >
            Create Your Lightbox
          </a>
        </div>
      </div>
    </section>
  );
};