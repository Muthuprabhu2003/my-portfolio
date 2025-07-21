import React from 'react';
import './App.css'; 
import aboutImg from './assets/images/about.jpg'; 

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutImg} alt="About Muthu Prabhu" />
        </div>

        <div>
          <h2 className="about__subtitle">I'm Muthu Prabhu</h2>
          <p className="about__text">
            I'm a passionate web designer and front-end developer focused on building responsive, user-friendly websites. With a love for design and an eye for detail, I transform concepts into interactive digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
