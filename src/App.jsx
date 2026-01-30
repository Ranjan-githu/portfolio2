import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './styles/index.css';

import DiamondBackground from './components/DiamondBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        background: 'var(--bg-color)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--accent-cyan)',
        fontFamily: 'var(--font-heading)',
        fontSize: '2rem'
      }}>
        Loading System...
      </div>
    );
  }

  return (
    <div className="app">
      <DiamondBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
