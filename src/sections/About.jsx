import { motion } from 'framer-motion';
import RevealSection from '../components/RevealSection';

const About = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <RevealSection>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '2.5rem',
              marginBottom: '3rem',
              borderLeft: '4px solid var(--accent-cyan)',
              paddingLeft: '1rem'
            }}
          >
            About Me
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                I am a <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Computer Science Engineer</span> with a deep passion for building scalable, intelligent web applications. My journey started with curiosity about how things work, leading me to master the <span style={{ color: 'var(--accent-cyan)' }}>MERN Stack</span> and explore <span style={{ color: 'var(--accent-violet)' }}>Artificial Intelligence</span>.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                I don't just write code; I solve problems. Whether it's designing safe IoT systems like my <span style={{ fontStyle: 'italic' }}>Smart Bag Tracker</span> or optimizing backend performance, I approach every challenge with an engineering mindset.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                Currently looking for internship opportunities where I can contribute and grow as a software engineer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                height: '300px',
                background: 'linear-gradient(45deg, rgba(0, 243, 255, 0.1), rgba(188, 19, 254, 0.1))',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Placeholder for a graphic or photo */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: 900,
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  DEV
                </div>
                <div style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Problem Solver & Builder</div>
              </div>
            </motion.div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default About;
