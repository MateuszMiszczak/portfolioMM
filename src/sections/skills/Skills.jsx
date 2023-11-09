import { useState } from 'react';
import { motion } from 'framer-motion';

import AnimatedChar from '../../utils/components/AnimatedChar';
import MagneticSkills from '../../utils/components/MagneticSkills';

import html from '../../assets/html5.svg';
import css from '../../assets/css3-alt.svg';
import sass from '../../assets/sass.svg';
import tailwind from '../../assets/tailwind-css.svg';
import js from '../../assets/square-js.svg';
import react from '../../assets/react.svg';

const skills = [
  {
    skill: 'HTML5',
    img: html,
    alt: 'html',
    colorClass: 'text-html',
    id: 0,
  },
  {
    skill: 'CSS3',
    img: css,
    alt: 'css',
    colorClass: 'text-css',
    id: 1,
  },
  {
    skill: 'SASS',
    img: sass,
    alt: 'sass',
    colorClass: 'text-sass',
    id: 2,
  },
  {
    skill: 'Tailwind CSS',
    img: tailwind,
    alt: 'tailwind-css',
    colorClass: 'text-tailwind',
    id: 3,
  },
  {
    skill: 'JavaScript',
    img: js,
    alt: 'javascript',
    colorClass: 'text-js',
    id: 4,
  },
  {
    skill: 'React',
    img: react,
    alt: 'react',
    colorClass: 'text-react',
    id: 5,
  },
];

const fadeInAnimationVariants = {
  initial: i => ({
    opacity: 0,
    x: 30 * (skills.length - i),
    y: 30,
  }),
  animate: i => ({
    opacity: 1,
    x: 0,
    y: 0,

    transition: {
      delay: 0.05 * (skills.length - i),
    },
  }),
};

export default function Skills() {
  const [data, setData] = useState(skills);

  return (
    <section className="flex flex-col items-center justify-center border-b-4 border-b-fourthMainColor/20 relative">
      <h2>
        <AnimatedChar
          text={`Tech skills`}
          textStyle={`p-6 md:text-3xl lg:text-4xl text-2xl`}
          onceOnly={false}
          stagg={0.035}
        />
      </h2>

      <div className="z-0 gradient-02" />

      <div className="z-10 grid grid-cols-1 gap-12 p-24 text-center ss:gap-14 sm:gap-16 ss:grid-cols-2 md:grid-cols-3 md:gap-24 lg:gap-32 lg:p-32">
        {data.map((skill, i) => (
          <MagneticSkills key={skill.id}>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.1 }}
              custom={i}
              className="flex flex-col items-center gap-2"
            >
              <motion.p className="text-xl text-white lg:text-gray-300 lg:text-2xl lg:group-hover:text-white">
                {skill.skill}
              </motion.p>
              <div className="w-16 h-16 lg:w-32 lg:h-32 md:w-18 md:h-18">
                <motion.img
                  src={skill.img}
                  alt={skill.alt}
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 md:w-18 md:h-18 lg:w-32 lg:h-32 lg:opacity-60 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          </MagneticSkills>
        ))}
      </div>
    </section>
  );
}
