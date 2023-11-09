import { useState } from 'react';
import { motion } from 'framer-motion';

import useMediaQuery from '../hooks/useMediaQuery';

import NavLinks from './NavLinks';

import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';

export default function Nav({ visibleSection }) {
  const isAboveLgScreens = useMediaQuery('(min-width: 1200px)');

  const [isExpanded, setIsExpanded] = useState(false);

  const handleHoverStart = () => {
    setIsExpanded(true);
  };

  const handleHoverEnd = () => {
    setIsExpanded(false);
  };

  if (isAboveLgScreens) {
    return (
      <motion.div
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '60px',
          height: '100%',
        }}
        initial={{ width: '88px', background: '#1b1b1e' }}
        whileHover={{
          width: '220px',
          background: '#3c01ac',
          zIndex: 50,
          transition: { ease: 'easeIn', duration: 0.3 },
        }}
        animate={{
          width: '88px',
          background: '#1b1b1e',
          zIndex: 50,
          transition: { ease: 'easeOut', duration: 0.3 },
        }}
        className="group"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <div className="flex gap-1 p-2 mt-6 transition-all animate-pulse group-hover:animate-none group-hover:scale-125">
          <div className="w-8 h-8">
            <img src={logo1} alt="logo" />
          </div>
          <div className="w-8 h-8">
            <img src={logo2} alt="logo" />
          </div>
        </div>

        <NavLinks isExpanded={isExpanded} visibleSection={visibleSection} />
      </motion.div>
    );
  }

  if (!isAboveLgScreens && isAboveLgScreens !== null) {
    return (
      <div className="fixed bottom-0 z-50 flex items-center justify-center w-full h-20 gap-16 bg-secondMainColor">
        <NavLinks visibleSection={visibleSection} />
      </div>
    );
  }
}
