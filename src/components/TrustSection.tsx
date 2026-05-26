import { TRUST_BADGES } from "../data/content";
import { AnimatedSection } from "./AnimatedSection";
import { Icon } from "./Icon";
import { ScrollReveal } from "./scroll/ScrollReveal";
import { Stagger, StaggerItem } from "./scroll/Stagger";

export function TrustSection() {
  return (
    <AnimatedSection
      id="trust"
      className="bg-surface-deep py-section px-margin text-center"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal variant="scaleIn">
          <Icon name="verified_user" className="mb-6 text-5xl text-primary-fixed" />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <h2 className="mb-6 font-display-md text-headline-lg-mobile text-primary md:text-[36px] md:leading-[44px]">
            Zaufanie od pierwszego zlecenia.
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUpSubtle" delay={0.15}>
          <p className="mb-12 font-body-lg text-on-surface-variant">
            System profili, realnych opinii po zakończonym zleceniu oraz bezpieczny czat
            wewnątrz aplikacji. Budujemy społeczność opartą na lokalnym zaufaniu.
          </p>
        </ScrollReveal>

        <Stagger className="flex flex-wrap justify-center gap-4">
          {TRUST_BADGES.map((badge) => (
            <StaggerItem key={badge.label} variant="scaleUp">
              <div className="ghost-border flex items-center gap-2 rounded-full bg-surface px-6 py-3">
                <Icon name={badge.icon} className="text-primary-fixed" />
                <span className="font-title-lg text-sm text-primary">{badge.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </AnimatedSection>
  );
}
