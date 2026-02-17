import { motion } from 'framer-motion';
import RevealSection from '../components/RevealSection';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Development (MERN)',
      company: 'Self-Learning & Projects',
      period: '2024 - Present',
      description: 'Building full-stack applications like the Smart Bag Tracker. Mastering React, Node.js, and MongoDB.',
    },
    {
      role: 'B.Tech in Computer Science',
      company: 'Sage University',
      period: '2024 - 2028 (Expected)',
      description: 'Focusing on Core CS subjects: DSA, OOPs, DBMS, Operating Systems. Engaging in tech fests and coding hackathons.',
    },
    {
      role: 'Python & AI/ML',
      company: 'Learning Journey',
      period: '2025 - Present',
      description: 'Started exploring Machine Learning capabilities to integrate intelligence into software applications.',
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <RevealSection>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
            My <span className="gradient-text">Journey</span>
          </h2>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.1)' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ paddingLeft: '50px', position: 'relative' }}
                >
                  {/* Timeline Dot */}
                  <span style={{
                    position: 'absolute',
                    left: '11px',
                    top: '5px',
                    width: '20px',
                    height: '20px',
                    background: 'var(--accent-violet)',
                    borderRadius: '50%',
                    border: '4px solid var(--bg-color)'
                  }}></span>

                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                  <h4 style={{ fontSize: '1rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{exp.company} <span style={{ color: 'var(--text-secondary)' }}>| {exp.period}</span></h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Experience;
