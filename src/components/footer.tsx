import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer style={{
      padding: '50px 20px',
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(5px)',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px'
      }}>
        <div>
          <h3 style={{
            marginBottom: '20px',
            fontSize: '1.3rem',
            color: '#fff'
          }}>
            Stellar Lightboxes
          </h3>
          <p style={{ color: '#fff', opacity: 0.8 }}>
            Capturing your special moments among the stars with personalized lightbox creations.
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            marginTop: '20px'
          }}>
            {[
              { icon: faFacebookF, href: '#' },
              { icon: faInstagram, href: '#' },
              { icon: faPinterest, href: '#' },
              { icon: faTwitter, href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                style={{
                  color: '#fff',
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease, transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#ff9a9e';
                  (e.target as HTMLElement).style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = '#fff';
                  (e.target as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h3 style={{
            marginBottom: '20px',
            fontSize: '1.3rem',
            color: '#fff'
          }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Home', 'Products', 'Customization', 'About Us'].map(link => (
              <li key={link} style={{ marginBottom: '10px' }}>
                <a
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ff9a9e'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 style={{
            marginBottom: '20px',
            fontSize: '1.3rem',
            color: '#fff'
          }}>
            Support
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['FAQs', 'Shipping Policy', 'Returns & Exchanges', 'Contact Us'].map(link => (
              <li key={link} style={{ marginBottom: '10px' }}>
                <a
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ff9a9e'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 style={{
            marginBottom: '20px',
            fontSize: '1.3rem',
            color: '#fff'
          }}>
            Contact Info
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { icon: faEnvelope, text: 'info@stellarlightboxes.com' },
              { icon: faPhone, text: '+1 (555) 123-4567' },
              { icon: faMapMarkerAlt, text: '123 Star Street, Galaxy City' }
            ].map((contact, index) => (
              <li key={index} style={{
                marginBottom: '10px',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                <FontAwesomeIcon icon={contact.icon} style={{ marginRight: '8px' }} />
                {contact.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        opacity: 0.7,
        color: '#fff'
      }}>
        <p>&copy; 2023 Stellar Lightboxes. All rights reserved.</p>
      </div>
    </footer>
  );
};