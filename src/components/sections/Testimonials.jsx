import React from 'react';
import Container from '../layout/Container';
import TestimonialCard from '../TestimonialCard';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <aside id="testimonials" className="testimonials section">
      <Container>
        <h2>Nuestros viajeros favoritos</h2>
        <p className="testimonials-intro">
          Aquí algunos testimonios de clientes que nos han aprobado por sus 
          mismas experiencias al probar nuestra plataforma.
        </p>
        
        <div className="testimonial-grid">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </aside>
  );
};

export default Testimonials;