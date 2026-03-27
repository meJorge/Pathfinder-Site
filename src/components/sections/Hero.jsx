import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const scrollToRecommendations = () => {
    const element = document.getElementById('recommendations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <Container>
        <div className="hero-content">
          <p className="hero-badge">
            <b>Horizon <br /> presenta</b>
          </p>
          <h1>
            Es hora de tu <br />
            <b>próxima aventura</b>
          </h1>
          <p className="hero-subtitle">Únete a la familia</p>
          <Button variant="primary" onClick={scrollToRecommendations}>
            EMPEZAR
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Hero;