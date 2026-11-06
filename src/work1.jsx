import React from 'react';
import './App.css';

import work1 from './assets/images/project1.jpg';
import work2 from './assets/images/project2.jpg';
import work3 from './assets/images/project3.jpg';
import work4 from './assets/images/project4.png';
import work5 from './assets/images/project5.jpg';
import work6 from './assets/images/project6.png';

const projects = [
  {
    id: 1,
    title: 'Attendance Tracker',
    desc: 'ReactJS app with Employee/Admin roles, real-time clock, check-in/out, break tracking & CSV export.',
    tags: ['ReactJS', 'JavaScript', 'Lucide React', 'CSV'],
    image: work1,
    link: 'https://github.com/Muthuprabhu2003',
    demo: true,
  },
  {
    id: 2,
    title: 'Employee Management System',
    desc: 'Full-featured employee management app built with .NET technologies and Microsoft SQL Server.',
    tags: ['C#', 'ASP.NET Core', 'SQL Server', 'MVC'],
    image: work2,
    link: 'https://github.com/Muthuprabhu2003',
  },
  {
    id: 3,
    title: 'News API Integration',
    desc: 'Integrated news search, top headlines, category & source-based news using a third-party API.',
    tags: ['ASP.NET Core', 'C#', 'HttpClient', 'Web API'],
    image: work3,
    link: 'https://github.com/Muthuprabhu2003',
  },
  {
    id: 4,
    title: 'Crypto Price Dashboard',
    desc: 'React-based dashboard displaying live cryptocurrency price info with dynamic charts.',
    tags: ['ReactJS', 'JavaScript', 'API', 'CSS'],
    image: work4,
    link: 'https://github.com/Muthuprabhu2003',
    demo: true,
  },
  {
    id: 5,
    title: 'Madurai Mandi Price Dashboard',
    desc: 'Real-time commodity price visualization using Power BI for Madurai market data.',
    tags: ['Power BI', 'Data Analytics', 'Excel'],
    image: work5,
    link: 'https://github.com/Muthuprabhu2003/commodity-price-analysis-powerbi',
  },
  {
    id: 6,
    title: 'Tamil Nadu Rainfall Dashboard',
    desc: 'Data analytics (2021–2025) with interactive Power BI visuals.',
    tags: ['Power BI', 'Python', 'Data Analysis'],
    image: work6,
    link: 'https://github.com/Muthuprabhu2003/rainfall-data-analytics',
  },
];

const Project = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Projects</h2>
      <div className="work__container">
        {projects.map((project) => (
          <div className="flip-card" key={project.id}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flip-card-inner"
            >
              <div className="flip-card-front">
                <img src={project.image} alt={project.title} />
                {project.demo && <span className="flip-card-demo-badge">🔗 Live Demo</span>}
              </div>
              <div className="flip-card-back">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="flip-card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="flip-card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
