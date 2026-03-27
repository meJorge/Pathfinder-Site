import React from 'react';
import Container from '../layout/Container';
import JobCard from './JobCard';
import { jobsData } from '../../data/jobsData';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <section id="recommendations" className="recommendations section">
      <Container>
        <h2 className="recommendations-title">
          Nuestra Recomendación de la Semana
        </h2>
        <div className="job-cards-grid">
          {jobsData.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Recommendations;