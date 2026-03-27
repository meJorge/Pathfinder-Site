import React from 'react';
import './Card.css';

const Card = ({ children, className = '', variant = 'default', onClick }) => {
  const cardClass = `card card-${variant} ${className}`;
  
  return (
    <div className={cardClass} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;