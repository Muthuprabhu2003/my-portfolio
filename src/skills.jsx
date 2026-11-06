import React, { useEffect } from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';

function Skills() {
  useEffect(() => {
    const animateBars = () => {
      document.querySelectorAll('.skills__bar').forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) bar.style.width = width;
      });
    };
    ScrollReveal().reveal('.skills__content', {
      delay: 150,
      distance: '50px',
      origin: 'bottom',
      interval: 150,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      afterReveal: animateBars,
    });
  }, []);

  const frontendSkills = [
    { icon: 'bxl-html5',    name: 'HTML',       pct: '95%' },
    { icon: 'bxl-css3',     name: 'CSS',        pct: '90%' },
    { icon: 'bxl-javascript', name: 'JavaScript', pct: '82%' },
    { icon: 'bxl-react',    name: 'ReactJS',    pct: '85%' },
  ];

  const dotnetSkills = [
    { icon: 'bx-code-alt',      name: 'C#',                      pct: '80%' },
    { icon: 'bx-server',        name: 'ASP.NET Core / MVC',      pct: '78%' },
    { icon: 'bx-data',          name: 'Web API & Entity Framework', pct: '75%' },
    { icon: 'bx-code-block',    name: 'LINQ',                    pct: '75%' },
  ];

  const dataSkills = [
    { icon: 'bxl-python',           name: 'Python',         pct: '75%' },
    { icon: 'bx-analyse',           name: 'Data Analysis',  pct: '78%' },
    { icon: 'bxs-bar-chart-square', name: 'Power BI',       pct: '75%' },
    { icon: 'bxs-spreadsheet',      name: 'Excel',          pct: '85%' },
  ];

  const dbSkills = [
    { icon: 'bx-data',         name: 'Microsoft SQL Server', pct: '78%' },
    { icon: 'bx-data',         name: 'MySQL',                pct: '72%' },
    { icon: 'bx-data',         name: 'MongoDB',              pct: '65%' },
    { icon: 'bx-network-chart', name: 'Cisco Packet Tracer', pct: '80%' },
  ];

  const SkillGroup = ({ title, skills }) => (
    <div className="skills__content">
      <h3 className="skills__subtitle">{title}</h3>
      {skills.map(({ icon, name, pct }) => (
        <div className="skills__data" key={name}>
          <span className="skills__name">
            <span><i className={`bx ${icon}`}></i>{name}</span>
            <span className="skills__percentage">{pct}</span>
          </span>
          <div className="skills__bar-track">
            <div className="skills__bar" data-width={pct}></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills__container bd-grid">
        <SkillGroup title="Frontend" skills={frontendSkills} />
        <SkillGroup title=".NET Stack" skills={dotnetSkills} />
        <SkillGroup title="Data & Analytics" skills={dataSkills} />
        <SkillGroup title="Databases & Tools" skills={dbSkills} />
      </div>
    </section>
  );
}

export default Skills;
