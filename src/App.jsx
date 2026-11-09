import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content" style={{ paddingTop: '80px' }}>
        <Home />
      </div>
    </>
  );
}

export default App;
