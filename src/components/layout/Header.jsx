import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Horizon</span>
        </div>
        
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('recommendations')}>Oportunidades</button></li>
            <li><button onClick={() => scrollToSection('program-detail')}>Programa</button></li>
            <li><button onClick={() => scrollToSection('testimonials')}>Testimonios</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;