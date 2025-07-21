import React, { useState } from 'react';
import './App.css'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div className="nav-logo">MP</div>

        <div className={`nav-menu ${isOpen ? 'show-menu' : ''}`}>
          <ul className="nav_list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Projects</a></li>
            <li className="nav__item"><a href="#experience" className="nav__link">Experience</a></li>
            <li className="nav__item"> <a href="#certificates" className="nav__link">Certifications</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
