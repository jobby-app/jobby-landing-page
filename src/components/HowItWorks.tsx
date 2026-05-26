import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "../data/content";
import { lineGrow } from "../lib/motion";
import { AnimatedSection } from "./AnimatedSection";
import { ScrollReveal } from "./scroll/ScrollReveal";
import { Stagger, StaggerItem } from "./scroll/Stagger";

export function HowItWorks() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="bg-surface-deep py-section px-margin"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal variant="fadeUp" className="mb-20 text-center">
          <h2 className="font-display-md text-headline-lg-mobile text-primary md:text-[36px] md:leading-[44px]">
            Prościej się nie da.
          </h2>
        </ScrollReveal>

        <div className="relative space-y-16">
          <motion.div
            className="absolute top-0 bottom-0 left-[39px] z-0 w-px origin-top bg-surface-variant md:left-1/2 md:-translate-x-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={lineGrow}
          />

          <Stagger className="space-y-16">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <StaggerItem key={step.number} variant="fadeUpSubtle">
                <div className="relative z-10 grid grid-cols-[auto_1fr] items-center gap-x-8 gap-y-4 md:grid-cols-[1fr_auto_1fr] md:gap-x-16">
                  {step.align === "right" ? (
                    <>
                      <ScrollReveal
                        variant="slideRight"
                        className="col-start-2 row-start-1 md:col-start-1 md:pr-8 md:text-right"
                        delay={0.05}
                      >
                        <h3 className="mb-2 font-headline-lg text-primary">{step.title}</h3>
                        <p className="font-body-lg text-on-surface-variant">
                          {step.description}
                        </p>
                      </ScrollReveal>
                      <StepBadge
                        number={step.number}
                        className="col-start-1 row-start-1 md:col-start-2"
                      />
                    </>
                  ) : (
                    <>
                      <StepBadge
                        number={step.number}
                        className="col-start-1 row-start-1 md:col-start-2"
                      />
                      <ScrollReveal
                        variant="slideLeft"
                        className="col-start-2 row-start-1 md:col-start-3 md:pl-8"
                        delay={0.05}
                      >
                        <h3 className="mb-2 font-headline-lg text-primary">{step.title}</h3>
                        <p className="font-body-lg text-on-surface-variant">
                          {step.description}
                        </p>
                      </ScrollReveal>
                    </>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </AnimatedSection>
  );
}

function StepBadge({ number, className = "" }: { number: number; className?: string }) {
  return (
    <ScrollReveal variant="scaleIn" className={className}>
      <div className="flex h-20 w-20 shrink-0 items-center justify-center justify-self-center rounded-full border-4 border-surface-deep bg-surface-container">
        <span className="font-headline-lg text-primary-fixed">{number}</span>
      </div>
    </ScrollReveal>
  );
}
