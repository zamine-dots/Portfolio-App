import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import About from './About';
import Contact from './Contact';

const projects = [
  {
    name: 'FSM Navigator',
    description: 'An interactive campus map with classroom search, suggested walking routes, and a personal timetable.',
    stack: 'React · TypeScript · Three.js',
    source: 'https://github.com/zamine-dots/fsm-map',
    demo: 'https://fsm-map.vercel.app',
  },
  {
    name: 'Sector Zero',
    description: 'A guided CTF learning interface with local profiles, challenge tracking, and progress export/import.',
    stack: 'React · TypeScript · Tailwind CSS',
    source: 'https://github.com/zamine-dots/ctf-onboarding',
    demo: 'https://ctf-onboarding-nf87-azure.vercel.app',
  },
  {
    name: 'Business website portfolio',
    description: 'Four visual website projects for a leisure park, a dental practice, and two cafés.',
    stack: 'Responsive layouts · Service pages · Contact journeys',
    portfolio: 'https://tunisiefreelance.tn/fr/profile/zobaa-a-b65c97',
  },
];

function Home() {
  return (
    <main>
      <section id="home" className="d-flex align-items-center justify-content-center text-center bg-white py-5" style={{ minHeight: '65vh' }}>
        <div className="container py-4">
          <p className="text-uppercase text-secondary">Web developer · Monastir, Tunisia</p>
          <h1 className="display-4 fw-bold mb-4">Hi, I'm Amine Zobaa.</h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: '720px' }}>
            I build responsive business websites and practical React applications,
            with clear interfaces and a scope we agree on together.
          </p>
          <a href="#projects" className="btn btn-primary btn-lg me-2 mb-2">View my work</a>
          <a href="#contact" className="btn btn-outline-primary btn-lg mb-2">Work with me</a>
        </div>
      </section>

      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="display-6 text-center mb-4">Selected projects</h2>
          <div className="row g-4">
            {projects.map(project => (
              <div className="col-md-4" key={project.name}>
                <article className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex flex-column p-4">
                    <h3 className="h4">{project.name}</h3>
                    <p>{project.description}</p>
                    <p className="small text-secondary">{project.stack}</p>
                    <div className="mt-auto">
                      {project.demo && <a className="btn btn-primary me-2 mb-2" href={project.demo}>Try {project.name}</a>}
                      {project.source && <a className="btn btn-outline-secondary mb-2" href={project.source}>View source</a>}
                      {project.portfolio && <a className="btn btn-primary mb-2" href={project.portfolio}>See website examples</a>}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-white">
        <About />
      </section>
      <section id="contact" className="bg-light">
        <Contact />
      </section>
    </main>
  );
}

export default Home;
