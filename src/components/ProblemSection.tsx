import { PROBLEM_CARDS } from "../data/content";
import { AnimatedSection } from "./AnimatedSection";
import { Icon } from "./Icon";
import { ScrollReveal } from "./scroll/ScrollReveal";
import { Stagger, StaggerItem } from "./scroll/Stagger";

export function ProblemSection() {
  return (
    <AnimatedSection className="relative bg-surface-deep py-section px-margin">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal variant="slideLeft" className="mb-16 md:w-2/3">
          <h2 className="mb-4 font-display-md text-headline-lg-mobile text-primary md:text-[36px] md:leading-[44px]">
            Dorywcza praca nadal jest zbyt{" "}
            <span className="text-on-surface-muted line-through decoration-error decoration-2">
              chaotyczna
            </span>
            .
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Przedzieranie się przez setki postów to przeszłość.
          </p>
        </ScrollReveal>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROBLEM_CARDS.map((card, index) => (
            <StaggerItem
              key={card.title}
              variant={index === 0 ? "scaleUp" : "slideRight"}
              className={card.wide ? "md:col-span-2" : ""}
            >
              <div className="ghost-border group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl bg-surface p-8">
                {card.wide && (
                  <>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface to-transparent" />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] transition-transform duration-700 group-hover:scale-105" />
                  </>
                )}
                <div className="relative z-20">
                  <Icon name={card.icon} className="mb-6 text-6xl text-error md:text-7xl" />
                  <h3 className="mb-2 font-headline-lg text-primary">{card.title}</h3>
                  <p className="font-body-lg text-on-surface-variant">{card.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </AnimatedSection>
  );
}
