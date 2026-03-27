import React from 'react';
import Container from '../layout/Container';
import './ProgramDetail.css';

const ProgramDetail = () => {
  const requirements = [
    'Estudiantes en Ingeniería Industrial, Sistemas Computacionales o a fin (Obligatorio)',
    'Disponibilidad Lunes a Viernes de 7:00 a 13:00 hrs.',
    'Vivir cerca de Santa Fe (Preferentemente)',
    'Disposición de aprender',
    'Conocimientos básicos en lenguajes de programación (preferentemente Python)',
    'Comunicación efectiva',
    'Habilidad para la autocapacitación y resolución de problemas técnicos',
    'Pensamiento analítico',
    'Nivel de inglés básico o intermedio'
  ];

  return (
    <section id="program-detail" className="program-detail section">
      <Container>
        <div className="program-detail-content">
          <div className="program-text">
            <h2>Bienvenido(a) al Programa</h2>
            <h3>Acerca del Programa</h3>
            <p>
              Desarrolla tu potencial mientras te preparas para futuras posiciones. 
              Te ofrecemos formación especializada, mentoría y oportunidades reales 
              de crecimiento en un ambiente innovador y dinámico.
            </p>
          </div>
          
          <div className="program-grid">
            <div className="program-image">
              <img 
                src="/src/assets/images/program-image.jpg" 
                alt="Programa de formación"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x400?text=Programa';
                }}
              />
            </div>
            
            <div className="requirements-section">
              <h3>Requisitos</h3>
              <ul>
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <p className="schedule">
                <strong>Horario:</strong><br />
                Lunes a Viernes de 7:00 a 13:00 hrs
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProgramDetail;