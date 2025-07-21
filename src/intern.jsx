import React from 'react';
import './App.css';

const experiences = [
  {
    id: 1,
    company: 'Shiash Info Private Limited',
    role: 'Data Analyst',
    duration: 'Oct 2024 - Dec 2024',
  },
  {
    id: 2,
    company: 'ClearQuote Technologies',
    role: 'Data Analyst Intern',
    duration: 'Jan 2025 - Till Now',
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience__container">
        {experiences.map((exp) => (
          <div className="experience__card" key={exp.id}>
            <h3 className="experience__role">{exp.role}</h3>
            <p className="experience__company">{exp.company}</p>
            <span className="experience__duration">{exp.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
