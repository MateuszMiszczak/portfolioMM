export const fadeInAnimationVariants1 = del => ({
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: del * i,
    },
  }),
});
