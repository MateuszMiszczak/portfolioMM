import { useState, useRef } from 'react';

import { motion } from 'framer-motion';

export default function MagneticSkills({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const mouseMove = e => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => setPosition({ x: 0, y: 0 });

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="text-xl group"
    >
      {children}
    </motion.div>
  );
}
