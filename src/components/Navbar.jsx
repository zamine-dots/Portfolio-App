import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../img/logo.png';


function Navbar() {
  // Handle smooth scrolling for anchor links
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" onClick={handleClick}>
          <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-top" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;