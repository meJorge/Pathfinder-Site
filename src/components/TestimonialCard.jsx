import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-image">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/80x80?text=User';
          }}
        />
      </div>
      <blockquote className="testimonial-text">
        "{testimonial.text}"
      </blockquote>
      <h4>{testimonial.name}</h4>
    </article>
  );
};

export default TestimonialCard;