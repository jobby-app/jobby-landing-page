import { FOOTER_LINKS } from "../data/content";
import { Icon } from "./Icon";
import { ScrollReveal } from "./scroll/ScrollReveal";
import { Stagger, StaggerItem } from "./scroll/Stagger";

export function Footer() {
  return (
    <ScrollReveal
      variant="fadeUp"
      as="footer"
      className="flex w-full flex-col items-center justify-between gap-4 rounded-t-[2rem] border-t border-surface-container-low bg-surface-deep px-margin py-[var(--spacing-section-gap)] md:flex-row"
    >
        <div className="flex flex-col items-center gap-4 md:items-start">
          <img
            src="/assets/logo.png"
            alt="Jobby"
            className="h-8 opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
          <p className="text-on-surface-muted">© 2026 Jobby. Wszelkie prawa zastrzeżone.</p>
        </div>

        <Stagger className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <StaggerItem key={link.label} variant="fadeIn">
              <a
                href={link.href}
                className="text-on-surface-muted transition-colors hover:text-primary-fixed"
              >
                {link.label}
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="flex gap-4">
          {[
            {
              icon: "share",
              href: "https://www.instagram.com/get_jobby/",
              label: "Instagram",
            },
            {
              icon: "mail",
              href: "mailto:support@getjobby.pl",
              label: "Contact Us",
            },
          ].map((link) => (
            <StaggerItem key={link.label} variant="scaleIn">
              <a
                href={link.href}
                className="ghost-border flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface-muted transition-all hover:bg-surface-container-high hover:text-primary"
                aria-label={link.label}
              >
                <Icon name={link.icon} />
              </a>
            </StaggerItem>
          ))}
        </Stagger>
    </ScrollReveal>
  );
}
