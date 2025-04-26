import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import About from "./About"
import Contact from "./Contact"
function Home() {
  const text = "I'm a passionate developer building modern, responsive web experiences. Scroll down to see my work or learn more about me.";
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);
  const typingTimeout = useRef(null);
  const restartTimeout = useRef(null);

  useEffect(() => {
    let index = 0;

    function typeCharacter() {
      if (index < text.length && typedTextRef.current) {
        typedTextRef.current.textContent += text.charAt(index++);
        typingTimeout.current = setTimeout(typeCharacter, 30);
      } else {
        if (cursorRef.current) {
          cursorRef.current.style.display = "none";
        }
        restartTimeout.current = setTimeout(() => {
          if (typedTextRef.current) typedTextRef.current.textContent = "";
          if (cursorRef.current) cursorRef.current.style.display = "inline";
          index = 0;
          typeCharacter();
        }, 2000);
      }
    }

    typeCharacter();

    return () => {
      clearTimeout(typingTimeout.current);
      clearTimeout(restartTimeout.current);
    };
  }, []);

  return (
    <div>
      <section id="home" className="vh-100 d-flex align-items-center justify-content-center text-center bg-white">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Welcome to My Portfolio</h1>
          <p className="lead mb-5">
            <span ref={typedTextRef}></span>
            <span ref={cursorRef} className="blinking-cursor">|</span>
          </p>
          <a href="#about" className="btn btn-primary btn-lg">Learn More</a>
        </div>
      </section>

      <section id="about" className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="container text-center">
          <About />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="container text-center">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default Home;
