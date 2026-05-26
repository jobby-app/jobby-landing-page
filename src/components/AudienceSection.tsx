import { AUDIENCE_CARDS } from "../data/content";
import { AnimatedSection } from "./AnimatedSection";
import { Icon } from "./Icon";
import { Stagger, StaggerItem } from "./scroll/Stagger";

const CARD_VARIANTS = ["slideLeft", "slideRight"] as const;

export function AudienceSection() {
  return (
    <AnimatedSection className="bg-surface py-section px-margin">
      <Stagger className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        {AUDIENCE_CARDS.map((card, index) => {
          const isLime = card.accent === "lime";
          return (
            <StaggerItem
              key={card.title}
              variant={CARD_VARIANTS[index] ?? "scaleUp"}
            >
              <div className="ghost-border group relative flex flex-col items-start overflow-hidden rounded-[2rem] bg-surface-container p-10 transition-colors hover:bg-surface-container-high">
                <div
                  className={`pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 rounded-full blur-[100px] transition-all duration-500 ${
                    isLime
                      ? "bg-primary-fixed/35 group-hover:bg-primary-fixed/45"
                      : "bg-electric-purple/35 group-hover:bg-electric-purple/45"
                  }`}
                />
                <div
                  className={`pointer-events-none absolute -right-8 -bottom-8 h-48 w-48 rounded-full blur-[60px] ${
                    isLime ? "bg-neon-glow/20" : "bg-electric-purple/25"
                  }`}
                />
                <Icon
                  name={card.icon}
                  className={`relative mb-6 text-5xl ${
                    isLime ? "text-primary-fixed" : "text-electric-purple"
                  }`}
                />
                <h2 className="relative mb-4 font-headline-lg-mobile text-primary md:font-headline-lg">
                  {card.title}
                </h2>
                <p className="relative mb-8 max-w-md font-body-lg text-on-surface-variant">
                  {card.description}
                </p>
                <ul className="relative mt-auto space-y-4 font-body-lg">
                  {card.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <Icon
                        name="check_circle"
                        className={
                          isLime ? "text-primary-fixed" : "text-electric-purple"
                        }
                      />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </AnimatedSection>
  );
}
