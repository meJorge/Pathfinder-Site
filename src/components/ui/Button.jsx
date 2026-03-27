import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false
}) => {
  const buttonClass = `btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonClass} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;