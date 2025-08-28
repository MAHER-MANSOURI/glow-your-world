import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      padding: '20px 50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(5px)'
    }}>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center'
      }}>
        <FontAwesomeIcon icon={faStar} style={{ marginRight: '10px', color: '#ff9a9e' }} />
        Stellar Lightboxes
      </div>
      
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {[
            { href: '#home', label: 'Home' },
            { href: '#products', label: 'Products' },
            { href: '#features', label: 'Features' },
            { href: '#testimonials', label: 'Reviews' },
            { href: '#contact', label: 'Contact' }
          ].map(({ href, label }) => (
            <li key={href} style={{ marginLeft: '30px' }}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                style={{
                  color: activeSection === href.slice(1) ? '#ff9a9e' : '#fff',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.3s ease'
                }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ff9a9e'}
          onMouseLeave={(e) => {
            if (activeSection !== href.slice(1)) {
              (e.target as HTMLElement).style.color = '#fff';
            }
          }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};