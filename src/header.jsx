import React, { useState } from 'react';
import './App.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div className="nav-logo">MP</div>

        <div className={`nav-menu ${isOpen ? 'show-menu' : ''}`}>
          <ul className="nav_list">
            <li className="nav__item"><a href="#home" className="nav__link" onClick={closeMenu}>Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link" onClick={closeMenu}>About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link" onClick={closeMenu}>Skills</a></li>
            <li className="nav__item"><a href="#work" className="nav__link" onClick={closeMenu}>Projects</a></li>
            <li className="nav__item"><a href="#experience" className="nav__link" onClick={closeMenu}>Experience</a></li>
            <li className="nav__item"><a href="#certificates" className="nav__link" onClick={closeMenu}>Certifications</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>

        <button className="nav__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>
      </nav>
    </header>
  );
}

export default Header;
