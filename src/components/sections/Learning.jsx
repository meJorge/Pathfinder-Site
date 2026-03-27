import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import './Learning.css';

const Learning = () => {
  const learningItems = [
    'Desarrollar soluciones para optimizar la interacción y administración de información entre sistemas y procesos.',
    'Probar los procesos automatizados según las reglas de negocio para garantizar calidad y desempeño en ambiente productivo.',
    'Documentar detalladamente los procesos automatizados para asegurar claridad y seguimiento en la Dirección de Negocios.',
    'Identificar oportunidades de mejora en procesos manuales para implementar automatizaciones que reduzcan errores humanos y tiempos.',
    'Configurar y probar robots para automatizar procesos manuales y recurrentes que consumen tiempo en Negocios Financieros.'
  ];

  const handleWantEnter = () => {
    alert('¡Gracias por tu interés! Pronto nos pondremos en contacto contigo.');
  };

  return (
    <section className="learning section">
      <Container>
        <div className="learning-grid">
          <div className="learning-image">
            <img 
              src="/src/assets/images/learning-image.jpg" 
              alt="Equipo de trabajo"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Nuestro+Equipo';
              }}
            />
            <h3 className="learning-subtext">Nuestro Equipo Te Está Esperando</h3>
          </div>
          
          <div className="learning-text">
            <h2>Aprenderás</h2>
            <ul className="learning-list">
              {learningItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <div className="contact-info">
              <p className="more-details">
                <strong>Más Detalles</strong>
              </p>
              <p className="phone-numbers">
                (222) 905 5349<br />
                (222) 858 4870
              </p>
            </div>
          </div>
        </div>
        
        <div className="learning-action">
          <Button variant="outline" onClick={handleWantEnter} className="btn-want-enter">
            QUIERO ENTRAR
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Learning;