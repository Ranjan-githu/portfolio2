import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MagicButton = ({ children, onClick, href, style = {}, className = '' }) => {
  const [clicked, setClicked] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const handleClick = (e) => {
    setClicked(true);
    setShowEmoji(true);

    // Reset emoji state after animation
    setTimeout(() => setShowEmoji(false), 2000);
    setTimeout(() => setClicked(false), 500); // Reset color state faster

    if (onClick) onClick(e);
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <AnimatePresence>
        {showEmoji && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.5 }}
            animate={{ opacity: 1, y: -40, scale: 1.2 }}
            exit={{ opacity: 0, y: -60, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              x: '-50%',
              pointerEvents: 'none',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              zIndex: 10,
              color: '#FFD700', // Gold color for NAMASTE text feels premium
              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
            }}
          >
            🙏 Namaste!
          </motion.div>
        )}
      </AnimatePresence>

      <Component
        {...props}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          ...style,
          position: 'relative',
          overflow: 'hidden',
          background: clicked
            ? 'linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc)' // Colorful burst
            : style.background || 'var(--accent-gradient)', // Default
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1,
          transition: 'background 0.3s ease',
          boxShadow: clicked ? '0 0 20px rgba(255, 0, 204, 0.6)' : 'none'
        }}
        className={className}
      >
        {children}
      </Component>
    </div>
  );
};

export default MagicButton;
