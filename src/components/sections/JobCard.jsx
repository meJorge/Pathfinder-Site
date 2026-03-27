import React from 'react';
import Button from '../ui/Button';
import './JobCard.css';

const JobCard = ({ job, index }) => {
  const getGradientVariant = () => {
    const gradients = ['gold', 'purple', 'pink'];
    return gradients[index % gradients.length];
  };

  const getBackgroundColor = () => {
    const colors = ['#e94337', '#012c74', '#e80d97'];
    return colors[index % colors.length];
  };

  const handleKnowMore = () => {
    if (job.link && job.link !== '#') {
      const element = document.querySelector(job.link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <article className="job-card" style={{ backgroundColor: getBackgroundColor() }}>
      <div 
        className="job-header"
        style={{ backgroundImage: `url(${job.image})` }}
      >
        <h3><br /></h3>
        <p className="job-position">{job.position}</p>
        <p className="job-company">{job.company}</p>
      </div>
      
      <div className="job-requirements">
        <h4>REQUISITOS</h4>
        <ul>
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>
      
      <Button 
        variant={getGradientVariant()} 
        onClick={handleKnowMore}
        className="job-button"
      >
        CONOCE MÁS
      </Button>
    </article>
  );
};

export default JobCard;