import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scroller } from 'react-scroll'; // Import scroller from react-scroll
import { FaArrowDown } from 'react-icons/fa6';
import { fadeInAnimationVariants1 } from '../../utils/motion';

import useMediaQuery from '../../hooks/useMediaQuery';

import AnimatedChar from '../../utils/components/AnimatedChar';

import bgVideo from '../../assets/bg-universe.mp4';

const heroData = [
  {
    text: `Hi, I'm Matt, front-end web developer.`,
    id: 0,
  },

  {
    text: `Scroll down to get to know me!`,
    id: 1,
  },
];

export default function Hero() {
  const isAboveMdScreens = useMediaQuery('(min-width: 1060px)');

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [1, 0], ['75%', '0%']);
  const imgY = useTransform(scrollYProgress, [1, 0], ['-75%', '0%']);
  const heroAnchorY = useTransform(scrollYProgress, [1, 0], ['75%', '0%']);

  const handleScrollClick = () => {
    scroller.scrollTo('projects', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center border-b-4 border-b-fourthMainColor/20"
      ref={ref}
    >
      <motion.video
        autoPlay
        muted
        loop
        className="object-cover w-screen h-screen opacity-80 mask-vid"
        style={{ y: backgroundY }}
      >
        <source src={bgVideo} type="video/mp4" />
      </motion.video>

      <div className="absolute">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col items-center md:pl-14 md:items-start">
            {heroData.map((obj, i) => (
              <motion.div
                key={obj.id}
                variants={fadeInAnimationVariants1(0.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={i}
              >
                <AnimatedChar
                  text={obj.text}
                  textStyle={`xs:text-2xl lg:text-3xl xl:text-4xl text-xl`}
                  onceOnly={true}
                  stagg={0.045}
                />
              </motion.div>
            ))}

            {isAboveMdScreens ? (
              <motion.a
                onClick={handleScrollClick}
                className="px-[1.2rem] py-[1rem] rounded-lg shadow-2xl shadow-white border-small border-css w-1/4 flex justify-center mt-4 cursor-pointer"
                style={{ y: heroAnchorY }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  background: [
                    'linear-gradient(180deg, #2c243b, rgba(86, 1, 245, .3))',
                    'linear-gradient(180deg, rgba(86, 1, 245, .3), #2c243b)',
                    'linear-gradient(180deg, #2c243b, rgba(86, 1, 245, .3))',
                  ],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                  },
                }}
              >
                <FaArrowDown className="text-css" />
              </motion.a>
            ) : (
              ''
            )}
          </div>

          <motion.p
            className="p-44 xs:p-48 ss:p-52 opacity-95 mask-hero--img glitch md:p-72 xl:p-96"
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              rotate: 0,
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true }}
            style={{ y: imgY }}
          />

          {!isAboveMdScreens ? (
            <motion.a
              onClick={handleScrollClick}
              className="px-[1.2rem] py-[1rem] rounded-lg shadow-2xl shadow-white border-small border-css w-1/4 flex justify-center mt-4 cursor-pointer"
              style={{ y: heroAnchorY }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                background: [
                  'linear-gradient(180deg, #2c243b, rgba(86, 1, 245, .3))',
                  'linear-gradient(180deg, rgba(86, 1, 245, .3), #2c243b)',
                  'linear-gradient(180deg, #2c243b, rgba(86, 1, 245, .3))',
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop',
                },
              }}
            >
              <FaArrowDown className="text-css" />
            </motion.a>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
}
