import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useMemo } from "react";
import { revealVariants, VIEWPORT, type RevealVariant } from "../../lib/motion";

type ScrollRevealProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "children">;

const motionCache = new Map<ElementType, ReturnType<typeof motion.create>>();

function getMotionComponent(Component: ElementType) {
  let cached = motionCache.get(Component);
  if (!cached) {
    cached = motion.create(Component);
    motionCache.set(Component, cached);
  }
  return cached;
}

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
  const MotionComponent = useMemo(() => getMotionComponent(Component), [Component]);

  if (reduced) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={revealVariants[variant]}
      transition={{ delay }}
      layout={false}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
