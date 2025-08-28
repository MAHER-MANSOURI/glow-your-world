export const CTASection = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Could link to a design page or modal
  };

  return (
    <section 
      id="contact"
      style={{
        padding: '100px 20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="floating-container">
        <h2 style={{
          fontSize: '3rem',
          marginBottom: '20px',
          color: '#fff'
        }}>
          Create Your Stellar Memory Today
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '30px',
          opacity: 0.9,
          color: '#fff'
        }}>
          Design a personalized lightbox that captures your special moment among the stars
        </p>
        <a
          href="#"
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
          Start Designing
        </a>
      </div>
    </section>
  );
};