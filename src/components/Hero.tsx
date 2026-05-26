import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { APP_SCREENSHOT, FLOATING_JOBS } from "../data/content";
import { EASE_SMOOTH } from "../lib/motion";
import { Icon } from "./Icon";

const textStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[90vh] items-center overflow-hidden px-margin pb-[var(--spacing-section-py)] pt-32"
    >
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-fixed/5 blur-[120px]"
      />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2"
      >
        <motion.div
          style={{ y: contentY }}
          className="flex max-w-xl flex-col gap-6"
          variants={textStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={textItem}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-container px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-neon-glow" />
            <span className="font-label-sm uppercase tracking-widest text-primary">
              Wczesny dostęp
            </span>
          </motion.div>

          <motion.h1
            variants={textItem}
            className="font-display-lg text-headline-lg-mobile leading-tight text-primary md:text-[48px] md:leading-[56px]"
          >
            Zarabiaj na{" "}
            <span className="pr-2 text-neon-glow italic">szybkich</span> zleceniach w
            okolicy.
          </motion.h1>

          <motion.p
            variants={textItem}
            className="font-body-lg text-on-surface-variant md:text-xl md:leading-relaxed"
          >
            Jobby to lokalny feed małych zleceń, prostych prac i szybkich okazji do
            dorobienia. Bez CV, bez formalności.
          </motion.p>

          <motion.div variants={textItem} className="mt-4 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#waitlist"
              className="rounded-full bg-primary-fixed px-8 py-4 text-center font-title-lg text-on-primary-fixed shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
            >
              Zacznij zarabiać
            </motion.a>
            <a
              href="#how-it-works"
              className="ghost-border rounded-full bg-surface-container px-8 py-4 text-center font-title-lg text-primary transition-colors hover:bg-surface-container-high"
            >
              Zobacz jak to działa
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: phoneY }}
          className="relative flex h-[600px] w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.88, rotateY: -8 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE_SMOOTH }}
        >
          <div className="relative mx-auto w-fit">
            <div className="ghost-border ambient-shadow relative z-10 h-[580px] w-[280px] overflow-hidden rounded-[40px] bg-surface-deep p-2 shadow-2xl">
              <img
                src={APP_SCREENSHOT}
                alt="Interfejs aplikacji Jobby"
                className="h-full w-full rounded-[32px] object-cover"
              />
            </div>

            {FLOATING_JOBS.map((job, index) => (
              <motion.div
                key={job.title}
                className={`glass-panel ghost-border absolute z-20 rounded-3xl p-4 shadow-xl ${
                  job.position === "left"
                    ? "-left-6 top-28 sm:-left-10 md:-left-14 md:top-32"
                    : "-right-6 bottom-28 sm:-right-10 md:-right-12 md:bottom-32"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.5 + index * 0.15 },
                  scale: { duration: 0.5, delay: 0.5 + index * 0.15, type: "spring" },
                  y: {
                    duration: 4 + job.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: job.delay,
                  },
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      job.accent === "lime"
                        ? "bg-primary-fixed/20"
                        : "bg-electric-purple/20"
                    }`}
                  >
                    <Icon
                      name={job.icon}
                      className={
                        job.accent === "lime"
                          ? "text-primary-fixed"
                          : "text-electric-purple"
                      }
                    />
                  </div>
                  <div>
                    <p className="m-0 font-title-lg text-sm leading-tight text-primary">
                      {job.title}
                    </p>
                    <p
                      className={`m-0 font-label-sm ${
                        job.accent === "lime" ? "text-neon-glow" : "text-electric-purple"
                      }`}
                    >
                      {job.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
