import { motion } from 'framer-motion';

import { FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function SocialMediaIcons() {
  return (
    <footer className="relative flex gap-4 mb-24 text-4xl lg:text-4xl xl:text-5xl lg:mb-0">
      <div className="z-0 footer-gradient" />

      <motion.a
        initial={{ y: 50 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.2 }}
        href="https://www.linkedin.com/in/mthwmiszczak"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10"
      >
        <FaLinkedin />
      </motion.a>

      <motion.a
        initial={{ y: 50 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.2 }}
        href="https://github.com/MateuszMiszczak"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10"
      >
        <FaGithub />
      </motion.a>
    </footer>
  );
}
