import { AnimatedSection } from "./AnimatedSection";
import { ScrollReveal } from "./scroll/ScrollReveal";
import { WaitlistForm } from "./WaitlistForm";

export function Waitlist() {
  return (
    <AnimatedSection
      id="waitlist"
      className="relative overflow-hidden bg-surface py-section px-margin"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-surface-container-high via-surface to-surface opacity-30" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <ScrollReveal variant="fadeUpSubtle" className="mb-8 text-center">
          <h2 className="mb-4 font-display-md text-headline-lg-mobile text-primary md:text-[36px] md:leading-[44px]">
            Bądź w pierwszej fali.
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Zapisz się na waitlistę, aby otrzymać wczesny dostęp i bonus powitalny przy
            starcie platformy w Twoim mieście.
          </p>
        </ScrollReveal>

        <div className="ghost-border ambient-shadow rounded-[3rem] bg-surface-container p-10 text-center md:p-16">
          <WaitlistForm />

          <p className="mt-4 font-label-sm uppercase tracking-widest text-on-surface-muted">
            Ograniczona liczba miejsc w beta testach
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
