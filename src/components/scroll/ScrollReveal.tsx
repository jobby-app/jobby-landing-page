import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { revealVariants, VIEWPORT, type RevealVariant } from "../../lib/motion";

type ScrollRevealProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "children">;

export function ScrollReveal<T extends ElementType = "div">({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  as,
  ...rest
}: ScrollRevealProps<T>) {
  const reduced = useReducedMotion();
  const Component = (as ?? "div") as ElementType;

  if (reduced) {
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={revealVariants[variant]}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
