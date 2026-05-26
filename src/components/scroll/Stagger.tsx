import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { revealVariants, staggerContainer, VIEWPORT, type RevealVariant } from "../../lib/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className = "" }: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
};

export function StaggerItem({
  children,
  className = "",
  variant = "fadeUp",
}: StaggerItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={revealVariants[variant]}>
      {children}
    </motion.div>
  );
}
