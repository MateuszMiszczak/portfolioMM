import { useState, useEffect } from 'react';

import { useScroll, motion, useSpring, useTransform } from 'framer-motion';

import Nav from './sections/Nav';
import Contact from './sections/contact/Contact';
import Hero from './sections/hero/Hero';
import Projects from './sections/myProjects/Projects';
import Skills from './sections/skills/Skills';

export default function App() {
  const [visibleSection, setVisibleSection] = useState(null);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 1000, damping: 100 });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['#5601f5 ', '#ff013c']
  );

  const handleScroll = () => {
    const sections = ['hero', 'projects', 'skills', 'contact'];

    for (const sectionId of sections) {
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setVisibleSection(sectionId);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  return (
    <div className="overflow-hidden text-white bg-mainColor">
      <>
        <Nav visibleSection={visibleSection} />
      </>

      <main className="flex flex-col items-center lg:ml-marginForNav">
        <motion.div
          style={{
            scaleX,
            background: background,
          }}
          className="fixed top-0 z-20 w-full h-2 origin-left"
        />

        <div id="hero">
          <Hero />
        </div>

        <div id="projects" className="z-10 w-full pb-10 md:pb-14 bg-mainColor">
          <Projects />
        </div>

        <div id="skills" className="z-10 w-full pb-10 md:pb-14 bg-mainColor">
          <Skills />
        </div>

        <div
          id="contact"
          className="z-10 w-full h-full pb-10 bg-center bg-no-repeat bg-cover bg-map"
        >
          <Contact />
        </div>
      </main>
    </div>
  );
}
