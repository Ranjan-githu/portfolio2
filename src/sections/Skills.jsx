import { motion } from 'framer-motion';
import RevealSection from '../components/RevealSection';

const Skills = () => {
  const skills = {
    Frontend: ['React', 'JavaScript', 'HTML5', 'CSS3/Vanilla', 'Tailwind (familiar)'],
    Backend: ['Node.js', 'Express', 'API Design'],
    Database: ['MongoDB', 'SQL Basics'],
    'CS Core': ['Data Structures', 'Algorithms', 'OOP', 'DBMS'],
    'Learning': ['Python', 'AI/ML Concepts']
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <RevealSection>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(5px)'
                }}
                whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>{category}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--accent-violet)', borderRadius: '50%' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Skills;
