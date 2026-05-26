import type { Transition, Variants } from "framer-motion";

export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT = {
  once: true,
  amount: 0.25,
  margin: "-60px 0px -80px 0px",
} as const;

const transition: Transition = {
  duration: 0.7,
  ease: EASE_SMOOTH,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition,
  },
};

export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_SMOOTH } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -64 },
  visible: { opacity: 1, x: 0, transition },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 64 },
  visible: { opacity: 1, x: 0, transition },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...transition, duration: 0.75 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 16 },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE_SMOOTH },
  },
};

export const lineGrow: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: EASE_SMOOTH },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export type RevealVariant =
  | "fadeUp"
  | "fadeUpSubtle"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleIn"
  | "blurIn";

export const revealVariants: Record<RevealVariant, Variants> = {
  fadeUp,
  fadeUpSubtle,
  fadeIn,
  slideLeft,
  slideRight,
  scaleUp,
  scaleIn,
  blurIn,
};
