import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './App.css';
import profileImg from './assets/images/profile.jpg';
import { FiLinkedin } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  useEffect(() => {
    ScrollReveal().reveal('.home__data', { delay: 200, distance: '50px', origin: 'left', easing: 'cubic-bezier(0.4,0,0.2,1)' });
    ScrollReveal().reveal('.home__img', { delay: 500, distance: '50px', origin: 'right', easing: 'cubic-bezier(0.4,0,0.2,1)' });
    ScrollReveal().reveal('.home__stat', { delay: 800, distance: '20px', origin: 'bottom', interval: 150 });
  }, []);

  return (
    <section className="home" id="home">

      <div className="home__data">
        <span className="home__greeting">✦ Available for Work</span>

        <h1 className="home__title">
          Hi, I'm<br />
          <span className="home__title-color">Muthu Prabhu</span>
        </h1>

        <div className="home__typewriter">
          <span>
            <Typewriter
              words={['.NET Developer', 'React Developer', 'Data Analyst', 'Web Designer', 'Network Engineer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1600}
            />
          </span>
        </div>

        <div className="home__btn-group">
          <a href="#contact" className="button">Contact Me</a>
          <a href="#work" className="button button-outline">View Projects</a>
        </div>

        <div className="home__social">
          <p>Find me on</p>
          <a href="https://www.linkedin.com/in/muthu-prabhu" target="_blank" rel="noopener noreferrer" className="home__social-icon" title="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:muthuprabhu2003mp@gmail.com" className="home__social-icon" title="Gmail">
            <BiLogoGmail />
          </a>
          <a href="https://github.com/Muthuprabhu2003" target="_blank" rel="noopener noreferrer" className="home__social-icon" title="GitHub">
            <FaGithub />
          </a>
        </div>

        <div className="home__stats">
          <div className="home__stat">
            <div className="home__stat-number">5+</div>
            <div className="home__stat-label">Projects</div>
          </div>
          <div className="home__stat">
            <div className="home__stat-number">5+</div>
            <div className="home__stat-label">Work Exp</div>
          </div>
          <div className="home__stat">
            <div className="home__stat-number">12+</div>
            <div className="home__stat-label">Certifications</div>
          </div>
        </div>
      </div>

      <div className="home__img">
        <div className="profile-img-wrapper">
          <img src={profileImg} alt="Muthu Prabhu" className="profile-img" />
        </div>
      </div>
    </section>
  );
}

export default Home;
