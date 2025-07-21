import React from 'react';
import './App.css';


import work1 from './assets/images/project1.jpg';
import work2 from './assets/images/project2.jpg';
import work3 from './assets/images/project3.jpg';
import work4 from './assets/images/project4.png';
import work5 from './assets/images/project5.jpg';



const projects = [
  {
    id: 1,
    title: 'Pluto - A E-commerce Platform built with Reactjs',
    image: work1,
    link: 'https://github.com/Muthuprabhu2003/E-commerce-Website-Pluto-',
  },
  {
    id: 2,
    title: 'Real_time Madurai Mandi Price Visualization using Power BI',
    image: work2,
    link: 'https://github.com/Muthuprabhu2003/commodity-price-analysis-powerbi',
  },
  {
    id: 3,
    title: 'Tamil Nadu Rainfall Dashboard(2021-2025) Data Analytics using Power BI',
    image: work3,
    link: 'https://github.com/Muthuprabhu2003/rainfall-data-analytics',
  },
  {
    id: 4,
    title: 'FINANCE TRACKER USING PYTHON',
    image: work4,
    link: 'https://github.com/Muthuprabhu2003/Finance_tracker',
  },
  {
    id: 5,
    title: 'Weather App using Reactjs',
    image: work5,
    link: 'https://github.com/Muthuprabhu2003/weather-app',
  }
  
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
              </div>
              <div className="flip-card-back">
                <p>{project.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};  
export default Project;
