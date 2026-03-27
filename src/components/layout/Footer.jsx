import React from 'react';
import Container from './Container';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} Horizon. <br />
          Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;