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
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      interval: 200,
      afterReveal: animateBars,
    });
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div className="skills__content">
          <h3 className="skills__subtitle">Frontend</h3>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bxl-html5'></i> HTML</span>
            <div className="skills__bar skills__html" data-width="95%"></div>
            <span className="skills__percentage">95%</span>
          </div>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bxl-css3'></i> CSS</span>
            <div className="skills__bar skills__css" data-width="90%"></div>
            <span className="skills__percentage">90%</span>
          </div>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bxl-javascript'></i> JavaScript</span>
            <div className="skills__bar skills__js" data-width="80%"></div>
            <span className="skills__percentage">80%</span>
          </div>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bxl-react'></i> React</span>
            <div className="skills__bar skills__react" data-width="85%"></div>
            <span className="skills__percentage">85%</span>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__subtitle">Data & Tools</h3>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bxl-python'></i> Python</span>
            <div className="skills__bar skills__python" data-width="75%"></div>
            <span className="skills__percentage">75%</span>
          </div>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bx-analyse'></i> Data Analysis</span>
            <div className="skills__bar skills__dataanalyst" data-width="70%"></div>
            <span className="skills__percentage">70%</span>
          </div>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bxs-spreadsheet'></i> Excel</span>
            <div className="skills__bar skills__excel" data-width="85%"></div>
            <span className="skills__percentage">85%</span>
          </div>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bxs-bar-chart-square'></i> Power BI</span>
            <div className="skills__bar skills__powerbi" data-width="75%"></div>
            <span className="skills__percentage">75%</span>
          </div>

          <div className="skills__data">
            <span className="skills__name"><i className='bx bx-data'></i> SQL</span>
            <div className="skills__bar skills__sql" data-width="70%"></div>
            <span className="skills__percentage">70%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
