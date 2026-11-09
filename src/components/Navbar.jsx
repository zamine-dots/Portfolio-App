import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.webp';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Combined click handler for smooth scroll and collapse
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    
    // Collapse the navbar after clicking
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" onClick={handleNavClick}>
          <img src={logo} alt="Amine Zobaa home" width="50" height="50" className="d-inline-block align-top" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleNavClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleNavClick}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
