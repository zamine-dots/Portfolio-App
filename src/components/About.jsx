import React from 'react';
import gitlogo from '../img/github-logo.png';
import linkedlogo from '../img/pngwing.com.png';
import cvlogo from '../img/cvlogo.png';
import 'bootstrap/dist/css/bootstrap.css';

function About() {
  return (
    <section id="about" className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container text-center">
        <h1 className="display-4 mb-4">About Me</h1>
        <p className="lead">
          I am a passionate web developer with experience in building modern, responsive web applications.
          I specialize in front-end development using the latest technologies like HTML5, CSS3, JavaScript, and React.
          I am always eager to learn new skills and stay up to date with the ever-evolving world of web development.
        </p>
        <p>
          When I am not coding, you can find me exploring new music genres, or reading books.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <a href="https://github.com/zamine-dots" target="_blank" rel="noopener noreferrer">
              <img src={gitlogo} width="60" height="60" alt="GitHub icon" />
            </a>
            <p>GitHub</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://www.linkedin.com/in/amin-zobaa-0750872a1/" target="_blank" rel="noopener noreferrer">
              <img src={linkedlogo} width="60" height="60" alt="LinkedIn icon" />
            </a>
            <p>LinkedIn</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://aminezobaa-cv.tiiny.site/" target="_blank" rel="noopener noreferrer">
              <img src={cvlogo} width="70"height="70"alt="CV icon" />
            </a>
            <p>CV</p>
          </div>
        </div>

        <a href="#contact" className="btn btn-primary btn-lg mt-4">Contact Me</a>
      </div>
    </section>
  );
}

export default About;
