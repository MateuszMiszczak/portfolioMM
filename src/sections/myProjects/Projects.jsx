import { motion } from 'framer-motion';
import { fadeInAnimationVariants1 } from '../../utils/motion';
import ProjectCard from './ProjectCard';
import AnimatedChar from '../../utils/components/AnimatedChar';

import html from '../../assets/html5.svg';
import css from '../../assets/css3-alt.svg';
import sass from '../../assets/sass.svg';
import tailwind from '../../assets/tailwind-css.svg';
import js from '../../assets/square-js.svg';
import react from '../../assets/react.svg';

const exploreProjects = [
  {
    id: 0,
    imgUrl: '',
    addressWebsite: 'https://navenscopy.netlify.app/',
    addressGitHub: 'https://github.com/MateuszMiszczak/navenscopy',
    title: 'NavensCopy',
    description: `Fully responsive Website created for a marketing company. I've created custom Routing, animations and used Vite.`,
    techUsed: [tailwind, js, react],
    newest: true,
    inProgress: false,
  },
  {
    id: 1,
    imgUrl: '',
    addressWebsite: 'https://mateuszmiszczak.github.io/giardDesign/',
    addressGitHub: 'https://github.com/MateuszMiszczak/giardDesign',
    title: 'GiardDesign',
    description:
      'Website created as a part of the recruitment process for a company. Done in 5 days total.',
    techUsed: [html, tailwind, js],
    newest: false,
    inProgress: false,
  },
  {
    id: 2,
    imgUrl: '',
    addressWebsite: 'https://mateuszmiszczak.github.io/eatIT/',
    addressGitHub: 'https://github.com/MateuszMiszczak/eatIT',
    title: 'EatIt',
    description:
      'My very first website that allowed me to get a grasp of 2 out of 3 core front-end technologies.',
    techUsed: [html, css],
    newest: false,
    inProgress: false,
  },

  {
    id: 3,
    imgUrl: '',
    addressWebsite: 'https://mateuszmiszczak.github.io/superHeroApiApp/',
    addressGitHub: 'https://github.com/MateuszMiszczak/superHeroApiApp',
    title: 'SuperHeroApiApp',
    description:
      'This is a website that lets you find a superhero or generate a random one. Data has been fetched from outside API.',
    techUsed: [html, css, js],
    newest: false,
    inProgress: false,
  },
  {
    id: 4,
    imgUrl: '',
    addressWebsite: '',
    addressGitHub: '',
    title: 'SwiftBankApp',
    description:
      'Banking app that allows users to log in and out, send money to each other and take loans based on bank requirements.',
    techUsed: [html, sass, js],
    newest: false,
    inProgress: true,
  },
];

export default function Projects() {
  return (
    <section className="relative flex flex-col items-center gap-8 pb-4 border-b-4 md:gap-16 border-b-fourthMainColor/20 md:pb-8">
      <h2>
        <AnimatedChar
          text={`My Projects`}
          textStyle={`p-6 md:text-3xl lg:text-4xl text-2xl w-fit mt-10`}
          onceOnly={false}
          stagg={0.035}
        />
      </h2>

      <div className="z-0 gradient-01" />

      <ul className="grid grid-cols-1 gap-6 p-2 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:flex-row">
        {exploreProjects.map((project, i) => (
          <motion.li
            variants={fadeInAnimationVariants1(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            custom={i}
            key={project.id}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              addressWebsite={project.addressWebsite}
              addressGitHub={project.addressGitHub}
              techUsed={project.techUsed}
              newest={project.newest}
              inProgress={project.inProgress}
              i={i}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
