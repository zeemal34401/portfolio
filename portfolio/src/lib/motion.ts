import type { Transition, Variants } from "framer-motion";

/** Shared easing — premium easeOut feel */
export const easeOut = [0.16, 1, 0.3, 1] as const;

export const duration = {
  fast: 0.2,
  base: 0.45,
  slow: 0.7,
} as const;

export const stagger = 0.1;

export const transitionBase: Transition = {
  duration: duration.base,
  ease: easeOut,
};

export const transitionSlow: Transition = {
  duration: duration.slow,
  ease: easeOut,
};

export const transitionHover: Transition = {
  duration: duration.fast,
  ease: easeOut,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSlow,
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionBase,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.05,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.4, ease: easeOut },
};
