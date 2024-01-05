import { motion } from 'framer-motion';

import useMediaQuery from '../../hooks/useMediaQuery';

export default function ProjectBg() {
  const isAboveXsScreens = useMediaQuery('(min-width: 480px)');

  return (
    <div>
      {isAboveXsScreens ? (
        <motion.svg
          width="600"
          height="650"
          viewBox="0 0 250 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-0"
          variants={{
            hover: {
              scale: 2,
              y: 35,
            },
          }}
          transition={{
            duration: 0.8,
            ease: 'backInOut',
          }}
        >
          <motion.circle
            variants={{
              hover: {
                scale: 2,
                fill: 'rgba(60, 1, 172, 0.6)',
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              delay: 0.2,
            }}
            cx="160.5"
            cy="114.5"
            r="90.5"
            fill="#2c243b"
          />
        </motion.svg>
      ) : (
        <motion.svg
          width="700"
          height="1050"
          viewBox="0 0 350 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-0"
          variants={{
            hover: {
              scale: 1.5,
            },
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
          }}
        >
          <motion.circle
            variants={{
              hover: {
                scale: 0.5,
                y: 35,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              delay: 0.2,
            }}
            cx="160.5"
            cy="114.5"
            r="90.5"
            fill="#2c243b"
          />
        </motion.svg>
      )}
    </div>
  );
}
