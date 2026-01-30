import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: updatedPadding(scrolled),
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
          Ranjan<span style={{ color: 'var(--accent-cyan)' }}>.</span>
        </a>

        <ul style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

function updatedPadding(scrolled) {
  return scrolled ? '1rem 0' : '2rem 0';
}

export default Navbar;
