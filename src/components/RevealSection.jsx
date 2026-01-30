import { motion } from 'framer-motion';

const RevealSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.8, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scaleY: 1, filter: 'blur(0px)' }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a smooth, premium feel
        delay: delay
      }}
      viewport={{ once: true, margin: '-10% 0px' }}
      style={{
        transformOrigin: 'center',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
