import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import React, { useRef } from 'react';
import RevealSection from '../components/RevealSection';

// 3D Card Component
function Card3D({ children, highlight }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        x,
        y,
        rotateX,
        rotateY,
        z: 100,
        cursor: 'grab',
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ cursor: 'grabbing' }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        background: 'var(--bg-color)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: highlight ? '1px solid var(--accent-cyan)' : '1px solid rgba(255,255,255,0.1)',
        boxShadow: highlight ? '0 0 30px rgba(0, 243, 255, 0.2)' : '0 10px 20px rgba(0,0,0,0.5)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transformStyle: 'preserve-3d',
        position: 'relative' // Important for child 3d
      }}>
        {children}
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const projects = [
    {
      title: "Smart Bag Tracker",
      description: "A GPS-based safety system ensuring luggage security. Features live tracking, safe-zone alerts, and emergency modes.",
      tags: ["React", "Node.js", "Google Maps API", "Safety System"],
      links: { demo: "#", github: "#" },
      highlight: true
    },
    {
      title: "Booqup",
      description: "A comprehensive booking platform for scheduling appointments at local shops and services. Streamlines queue management.",
      tags: ["MERN Stack", "Real-time Booking", "User Management"],
      links: { demo: "#", github: "#" },
      highlight: false
    },
    {
      title: "Personal ChatGPT",
      description: "A custom AI chat interface built seamlessly using the OpenAI API. Mimics the core functionality of ChatGPT with a personalized UI.",
      tags: ["React", "OpenAI API", "AI Integration"],
      links: { demo: "#", github: "#" },
      highlight: false
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', perspective: '1500px' }}>
      <div className="container">
        <RevealSection>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ perspective: '1000px' }}>
                <Card3D highlight={project.highlight}>
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0f 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    transform: 'translateZ(20px)'
                  }}>
                    <span style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      opacity: 0.5
                    }}>
                      {project.title.toUpperCase()}
                    </span>
                  </div>

                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', transform: 'translateZ(30px)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                        {project.title}
                      </h3>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}><ExternalLink size={20} /></a>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', flex: 1 }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: '0.8rem',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '50px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--accent-cyan)'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Projects;
