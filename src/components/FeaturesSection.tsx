import { FEATURES } from "../data/content";
import { AnimatedSection } from "./AnimatedSection";
import { Icon } from "./Icon";
import { ScrollReveal } from "./scroll/ScrollReveal";
import { Stagger, StaggerItem } from "./scroll/Stagger";

const FEATURE_VARIANTS = ["slideLeft", "fadeUp", "slideRight"] as const;

export function FeaturesSection() {
  return (
    <AnimatedSection
      id="features"
      className="relative overflow-hidden bg-surface py-section px-margin"
    >
      <div className="pointer-events-none absolute -right-[20%] top-[20%] h-[600px] w-[600px] rounded-full bg-electric-purple/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal variant="blurIn" className="mb-20 text-center">
          <h2 className="font-display-md text-headline-lg-mobile text-primary md:text-[36px] md:leading-[44px]">
            Jobby zamienia szukanie zleceń w prosty{" "}
            <span className="text-neon-glow">feed</span>.
          </h2>
        </ScrollReveal>

        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <StaggerItem
              key={feature.title}
              variant={FEATURE_VARIANTS[index] ?? "fadeUp"}
            >
              <div
                className={`ghost-border rounded-3xl bg-surface-container p-8 transition-colors hover:bg-surface-container-high ${
                  feature.offset ? "md:-translate-y-8" : ""
                }`}
              >
                <div className="ghost-border mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-deep">
                  <Icon name={feature.icon} className="text-3xl text-primary-fixed" />
                </div>
                <h3 className="mb-4 font-title-lg text-primary">{feature.title}</h3>
                <p className="font-body-lg text-on-surface-variant">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </AnimatedSection>
  );
}
