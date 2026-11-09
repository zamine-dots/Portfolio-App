import React from 'react';

function About() {
  return (
    <div className="container text-center py-4" style={{ maxWidth: '850px' }}>
      <h2 className="display-6 mb-4">About me</h2>
      <p className="lead">
        I'm a Computer Science student at the Faculté des Sciences de Monastir.
        At OneSpace, I worked on reusable React/TypeScript components and responsive page interfaces.
      </p>
      <p>
        I work with React, Next.js, TypeScript, HTML/CSS, Node.js, and Python/FastAPI.
        My focus is a useful result: a clear page, a working feature, and source code you can maintain.
      </p>
      <a href="#contact" className="btn btn-outline-primary mt-3">Start a conversation</a>
    </div>
  );
}

export default About;
