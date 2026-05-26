import type { ReactNode } from "react";
import { ScrollReveal } from "../../components/scroll/ScrollReveal";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <section className="px-margin pt-28 pb-[var(--spacing-section-gap)]">
      <div className="mx-auto w-full max-w-4xl">
        <ScrollReveal variant="fadeUp" as="div" className="space-y-6">
          <h1 className="font-title-xl text-on-surface">{title}</h1>
          <div className="prose prose-invert max-w-none text-on-surface-muted">{children}</div>
        </ScrollReveal>
      </div>
    </section>
  );
}

