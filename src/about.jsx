import React from 'react';
import './App.css';
import aboutNewImg from './assets/images/about-new.jpg';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about__container">
        {/* Photo */}
        <div className="about__photo-wrapper">
          <div className="about__photo-frame">
            <img src={aboutNewImg} alt="Muthu Prabhu" className="about__photo" />
          </div>
        </div>

        {/* Content */}
        <div className="about__content">
          <span className="about__badge">👋 Hello There</span>
          <h2 className="about__subtitle">
            I'm <span>Muthu Prabhu</span>
          </h2>
          <p className="about__text">
            .NET Developer with a B.E. in Electronics and Communication Engineering and experience in
            software development and automotive data analysis. Familiar with C#, ASP.NET Core, MVC,
            Web API, Entity Framework Core, LINQ, and Microsoft SQL Server. Also experienced with
            ReactJS, JavaScript, Python, and data analysis tools.
          </p>

          <div className="about__info-grid">
            <div className="about__info-item">
              <span className="about__info-icon">🎓</span>
              <div>
                <span className="about__info-label">Degree</span>
                <span className="about__info-value">B.E. — ECE (CGPA: 7.95)</span>
              </div>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">📍</span>
              <div>
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Madurai, Tamil Nadu</span>
              </div>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">💼</span>
              <div>
                <span className="about__info-label">Current Role</span>
                <span className="about__info-value">.NET Developer</span>
              </div>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">🏢</span>
              <div>
                <span className="about__info-label">Company</span>
                <span className="about__info-value">Mitrahsoft Technology</span>
              </div>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">📊</span>
              <div>
                <span className="about__info-label">Also Skilled In</span>
                <span className="about__info-value">Data Analytics</span>
              </div>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">🎓</span>
              <div>
                <span className="about__info-label">College</span>
                <span className="about__info-value">Mangayarkarasi College, Madurai</span>
              </div>
            </div>
          </div>

          <a href="#contact" className="button">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default About;
