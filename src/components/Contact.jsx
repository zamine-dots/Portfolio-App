import React from 'react';

function Contact() {
  return (
    <div className="container text-center py-5">
      <h2 className="display-5 mb-4">Let's discuss your project</h2>
      <p className="lead mx-auto" style={{ maxWidth: '650px' }}>
        Need a business website, a React interface, or help with a frontend issue?
        Send me a short brief, an example you like, and your target date.
      </p>
      <p>Based in Monastir, Tunisia. Available for freelance projects in Arabic, French, and English.</p>
      <a
        className="btn btn-primary btn-lg mt-3"
        href="https://tunisiefreelance.tn/fr/profile/zobaa-a-b65c97"
      >
        Discuss your project
      </a>
      <p className="mt-4 mb-0">
        <a href="https://github.com/zamine-dots">Explore my GitHub projects</a>
        {' · '}
        <a href="https://www.linkedin.com/in/amine-zbaa-0750872a1/">Connect on LinkedIn</a>
      </p>
    </div>
  );
}

export default Contact;
