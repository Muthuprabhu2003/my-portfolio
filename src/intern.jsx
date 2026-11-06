import React from 'react';
import './App.css';

const experiences = [
  {
    id: 1,
    company: 'Mitrahsoft Technology Private Limited',
    role: '.NET Developer',
    duration: 'April 2026 – Present',
    icon: '⚙️',
    desc: 'Working with C#, ASP.NET Core, MVC, Web API, Entity Framework Core, and SQL Server in application development.',
    current: true,
  },
  {
    id: 2,
    company: 'ClearQuote Technologies',
    role: 'Automotive Data Analyst',
    duration: 'January 2025 – September 2025',
    icon: '🚗',
    desc: 'Performed automotive data analysis and related data processing activities.',
  },
  {
    id: 3,
    company: 'SHIASH Info Private Limited',
    role: 'Data Analyst',
    duration: 'July 2024 – December 2024',
    icon: '📊',
    desc: 'Handled data analysis tasks and reporting responsibilities.',
  },
  {
    id: 4,
    company: 'Lumina Datamatics',
    role: 'Data Conversion',
    duration: '3 Months',
    icon: '🔄',
    desc: 'Performed data conversion and processing tasks.',
  },
  {
    id: 5,
    company: 'Code Bind Technologies',
    role: 'Embedded Systems Intern',
    duration: 'July 2023',
    icon: '🔌',
    desc: 'Worked on sensor-based embedded systems concepts using Arduino and IoT technologies.',
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience__container">
        {experiences.map((exp) => (
          <div className={`experience__card${exp.current ? ' experience__card--current' : ''}`} key={exp.id}>
            <div className="experience__icon">{exp.icon}</div>
            <h3 className="experience__role">{exp.role}</h3>
            <p className="experience__company">{exp.company}</p>
            <span className="experience__duration">{exp.duration}</span>
            {exp.desc && <p className="experience__desc">{exp.desc}</p>}
            {exp.current && <span className="experience__badge-current">● Currently Working</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
