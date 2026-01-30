import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ButterflyBackground = () => {
  // Random flight path logic could be complex, but we'll use a simple repeating pattern with random variations or just keyframes
  const [windowSize, setWindowSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1000, height: typeof window !== 'undefined' ? window.innerHeight : 800 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Butterfly SVG path (simplified)
  const butterflyPath = "M12 2C12 2 10 0 8 2C6 4 2 8 2 12C2 16 6 20 8 22C10 24 12 22 12 22C12 22 14 24 16 22C18 20 22 16 22 12C22 8 18 4 16 2C14 0 12 2 12 2Z";

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <motion.div
        animate={{
          x: [0, windowSize.width * 0.2, windowSize.width * 0.8, windowSize.width * 0.5, windowSize.width * 0.1, 0],
          y: [windowSize.height * 0.2, windowSize.height * 0.5, windowSize.height * 0.1, windowSize.height * 0.8, windowSize.height * 0.4, windowSize.height * 0.2],
          rotate: [0, 45, 90, 180, 270, 360],
          scale: [1, 1.2, 1, 0.8, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "mirror"
        }}
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          filter: 'drop-shadow(0 0 10px var(--accent-cyan))'
        }}
      >
        {/* Creating a more visual butterfly using 2 wings */}
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Wing */}
          <motion.path
            d="M12 12C12 12 2 2 2 12C2 22 12 12 12 12Z"
            fill="var(--accent-cyan)"
            style={{ opacity: 0.6 }}
            animate={{ scaleX: [1, 0.2, 1] }}
            transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
          />
          {/* Right Wing */}
          <motion.path
            d="M12 12C12 12 22 2 22 12C22 22 12 12 12 12Z"
            fill="var(--accent-violet)"
            style={{ opacity: 0.6 }}
            animate={{ scaleX: [1, 0.2, 1] }}
            transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse", delay: 0.1 }} // Slight offset for flapping realism
          />
          {/* Body */}
          <path d="M12 4V20" stroke="white" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Adding a second smaller butterfly for more life */}
      <motion.div
        animate={{
          x: [windowSize.width, windowSize.width * 0.7, windowSize.width * 0.3, windowSize.width * 0.9, windowSize.width],
          y: [windowSize.height * 0.8, windowSize.height * 0.2, windowSize.height * 0.6, windowSize.height * 0.9, windowSize.height * 0.8],
          rotate: [0, -45, -90, -180, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          filter: 'drop-shadow(0 0 8px var(--accent-violet))'
        }}
      >
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M12 12C12 12 2 2 2 12C2 22 12 12 12 12Z"
            fill="var(--accent-violet)"
            style={{ opacity: 0.5 }}
            animate={{ scaleX: [1, 0.2, 1] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M12 12C12 12 22 2 22 12C22 22 12 12 12 12Z"
            fill="var(--accent-cyan)"
            style={{ opacity: 0.5 }}
            animate={{ scaleX: [1, 0.2, 1] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse", delay: 0.05 }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default ButterflyBackground;
