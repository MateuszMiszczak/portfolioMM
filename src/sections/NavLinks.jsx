import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, scroller } from 'react-scroll';

import useMediaQuery from '../hooks/useMediaQuery';

import { FaUserTie, FaFolderOpen, FaGear, FaEnvelope } from 'react-icons/fa6';

const menuItems = [
  {
    id: 'hero',
    icon: <FaUserTie className="w-8 h-8" />,
    text: 'About',
  },
  {
    id: 'projects',
    icon: <FaFolderOpen className="w-8 h-8" />,
    text: 'Projects',
  },
  {
    id: 'skills',
    icon: <FaGear className="w-8 h-8" />,
    text: 'Skills',
  },
  {
    id: 'contact',
    icon: <FaEnvelope className="w-8 h-8" />,
    text: 'Contact',
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * i,
    },
  }),
};

export default function NavLinks({ isExpanded, visibleSection }) {
  const [data, setData] = useState(menuItems);
  const isAboveLgScreens = useMediaQuery('(min-width: 1200px)');

  const handleItemClick = id => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuint',
    });
  };

  let navLinks;

  if (isAboveLgScreens) {
    navLinks = (
      <li className="flex flex-col gap-10">
        {data.map((item, i) => (
          <motion.div
            key={item.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ cursor: 'pointer' }}
          >
            <Link
              to={item.id}
              smooth={true}
              duration={800}
              onClick={() => handleItemClick(item.id)}
              className={`lg:hover:text-js transition-all duration-200 transform ${
                visibleSection === item.id ? 'text-js' : ''
              }`}
            >
              <div className={`flex flex-row gap-4 items-center`}>
                <span
                  className={`transition-transform transform ${
                    isExpanded ? '' : 'translate-x-8'
                  }`}
                >
                  {item.icon}
                </span>

                <span
                  className={`flex transition-transform transform ${
                    isExpanded ? 'scale-100' : 'scale-0'
                  } duration-300 ease-in-out`}
                >
                  {item.text}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </li>
    );
  }

  if (!isAboveLgScreens && isAboveLgScreens !== null) {
    navLinks = (
      <div className="flex gap-12 xs:gap-14 ss:gap-16 sm:gap-20">
        {data.map((item, i) => (
          <li key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={800}
              onClick={() => handleItemClick(item.id)}
              className={`transition-all duration-200 transform ${
                visibleSection === item.id ? 'text-js' : ''
              }`}
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </div>
    );
  }

  return <ul className="text-gray-200">{navLinks}</ul>;
}
