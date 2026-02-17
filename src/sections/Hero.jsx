import MagicButton from '../components/MagicButton';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '0 var(--spacing-md)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, perspective: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{
            fontSize: '1.5rem',
            color: 'var(--accent-cyan)',
            marginBottom: '0.5rem',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Ranjan Kumar Gupta
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
          style={{
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            marginBottom: '1rem',
            lineHeight: 1.1,
            transformStyle: 'preserve-3d'
          }}
        >
          Full-Stack <br />
          <span className="gradient-text">Developer </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            maxWidth: '600px',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
          }}
        >
          B.Tech CSE Student passionate about building intelligent systems.
          Specializing in MERN Stack, AI integration, and solving real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '1rem' }}
        >
          <MagicButton
            href="#projects"
            style={{
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontWeight: 600,
            }}
          >
            View Projects
          </MagicButton>

          <MagicButton
            href="#contact"
            style={{
              padding: '1rem 2rem',
              background: 'transparent',
              border: '1px solid var(--text-secondary)',
              borderRadius: '50px',
              fontWeight: 600,
            }}
          >
            Contact Me
          </MagicButton>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-violet)',
        filter: 'blur(150px)',
        opacity: 0.2,
        borderRadius: '50%',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'var(--accent-cyan)',
        filter: 'blur(150px)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 1
      }} />
    </section>
  );
};

export default Hero;
