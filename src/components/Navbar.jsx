import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../img/logo.png';

function Navbar() {
  // Initialize Bootstrap JS
  useEffect(() => {
    // This ensures Bootstrap JS is properly loaded
  }, []);

  // Function to collapse the navbar when a link is clicked
  const collapseNavbar = () => {
    if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      
      if (navbarToggler && navbarCollapse.classList.contains('show')) {
        // Trigger click on the toggler to close the menu
        navbarToggler.click();
      }
    }
  };

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
    collapseNavbar();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" onClick={handleNavClick}>
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
              <a className="nav-link" href="#home" onClick={handleNavClick}>Home</a>
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