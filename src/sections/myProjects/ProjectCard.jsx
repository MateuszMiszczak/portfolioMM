import { motion, useAnimate } from 'framer-motion';
import { fadeInAnimationVariants1 } from '../../utils/motion';

import ProjectBg from './ProjectBg';

import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import Newest from '../../utils/components/Newest';
import InProgress from '../../utils/components/InProgress';

export default function ProjectCard({
  title,
  description,
  addressWebsite,
  addressGitHub,
  techUsed,
  id,
  newest,
  inProgress,
  i,
}) {
  const [scope, animate] = useAnimate();

  const handleAnimateTitleInView = async () => {
    await animate(
      '#title',
      { x: [50, 0], opacity: [0, 1] },
      { duration: 0.3, delay: 0.1 * i }
    );
  };

  const handleAnimateDescriptionInView = async () => {
    await animate(
      '#description',
      { x: [-50, 0], opacity: [0, 1] },
      { duration: 0.4, delay: 0.1 * i }
    );
  };

  return (
    <motion.div
      ref={scope}
      whileHover="hover"
      variants={{
        hover: { scale: 1.05 },
      }}
      transition={{
        duration: 0.3,
        ease: 'backInOut',
      }}
      className={`h-[400px]
      w-[250px] xs:h-[350px] xs:w-[350px] bg-mainColor grid place-content-start border-4 rounded-md shadow-md shadow-gray-400 border-gray-300 hover:border-white relative overflow-hidden text-white lg:hover:text-white lg:text-gray-200 group m-2 ${
        inProgress ? 'pointer-events-none' : ''
      }`}
    >
      {newest ? <Newest /> : ''}
      {inProgress ? <InProgress /> : ''}
      {console.log(InProgress)}
      <motion.h2
        whileInView={handleAnimateTitleInView}
        id="title"
        className="z-20 m-4 text-xl"
      >
        <motion.span
          initial={{ scale: 0.9 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          className="block px-3 mb-3 origin-top-left rounded-md bg-white/30 w-fit"
        >
          {title}
        </motion.span>
      </motion.h2>

      <motion.p
        whileInView={handleAnimateDescriptionInView}
        initial={{ opacity: 0 }}
        id="description"
        className="z-20 m-4 text-lg"
      >
        {description}
      </motion.p>

      <div className="z-20 flex gap-2 my-2 ml-4">
        {techUsed.map((img, index) => (
          <motion.div
            variants={fadeInAnimationVariants1(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            custom={i}
            key={index}
          >
            <img
              src={img}
              alt="Skill"
              className="w-10 h-10 p-1 rounded-md bg-white/30"
            />
          </motion.div>
        ))}
      </div>

      <div className="z-20 flex gap-2 m-4">
        <motion.a
          href={addressWebsite}
          target="_blank"
          className="text-lg bg-css/70 px-2 py-1 border-2 rounded-md  transition delay-[10ms] hover:scale-[1.05] hover:bg-css outline-none focus:border-redOne focus:shadow-redOne focus:scale-[0.95] w-fit flex flex-col xs:flex-row gap-2 items-center"
        >
          <p>Website</p>
          <span className="text-[15px]">
            <FaArrowUpRightFromSquare />
          </span>
        </motion.a>
        <motion.a
          href={addressGitHub}
          target="_blank"
          className="text-lg px-2 py-1 border-2 rounded-md transition delay-[10ms] hover:scale-[1.05] focus:scale-[0.95] outline-none focus:border-redOne focus:shadow-redOne w-fit hover:bg-white/40 flex flex-col xs:flex-row items-center gap-2"
        >
          <p>Source code</p>
          <span>
            <FaGithub />
          </span>
        </motion.a>
      </div>
      <ProjectBg />
    </motion.div>
  );
}
