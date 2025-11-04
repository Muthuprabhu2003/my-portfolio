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
    ScrollReveal().reveal('.home__data', { delay: 200, distance: '40px', origin: 'left' });
    ScrollReveal().reveal('.home__img', { delay: 600, origin: 'right' });
  }, []);

  return (
    <section className="home" id="home">
      
      <div className="home__data">
        <h1 className="home__title">
          Hi,<br />I'm <span className="home__title-color">Muthu Prabhu</span><br />
          <span style={{ color: '#007bff' }}>
            <Typewriter
              words={['Web Designer', 'Data Analyst','Network Engineer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <a href="#contact" className="button">Contact</a>

        <div className="home__social">
          <p>Follow me:</p>

          <a
            href="https://www.linkedin.com/in/muthu-prabhu"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-icon"
          >
            <FiLinkedin /> LinkedIn
          </a>

          <a
            href="mailto:muthuprabhu2003mp@gmail.com"
            className="home__social-icon"
          >
            <BiLogoGmail /> Mail
          </a>

          <a
            href="https://github.com/Muthuprabhu2003"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-icon"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="home__img">
        <img 
          src={profileImg} 
          alt="Muthu Prabhu" 
          className="profile-img" 
        />
      </div>
    </section>
  );
}

export default Home;
