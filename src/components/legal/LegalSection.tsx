import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="font-title-lg text-on-surface">{title}</h2>
      <div className="space-y-3 font-body-lg leading-relaxed">{children}</div>
    </section>
  );
}
