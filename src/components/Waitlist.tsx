import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ScrollReveal } from "./scroll/ScrollReveal";

type FormState = "idle" | "submitting" | "success";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    setState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setState("success");
    setEmail("");
  };

  return (
    <AnimatedSection
      id="waitlist"
      className="relative overflow-hidden bg-surface py-section px-margin"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-surface-container-high via-surface to-surface opacity-30" />

      <ScrollReveal variant="blurIn" className="relative z-10 mx-auto max-w-2xl">
        <div className="ghost-border ambient-shadow rounded-[3rem] bg-surface-container/50 p-10 text-center backdrop-blur-xl md:p-16">
          <h2 className="mb-4 font-display-md text-headline-lg-mobile text-primary md:text-[36px] md:leading-[44px]">
            Bądź w pierwszej fali.
          </h2>
          <p className="mb-8 font-body-lg text-on-surface-variant">
            Zapisz się na waitlistę, aby otrzymać wczesny dostęp i bonus powitalny przy
            starcie platformy w Twoim mieście.
          </p>

          {state === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-2xl bg-surface-deep px-6 py-8"
            >
              <p className="font-title-lg text-neon-glow">Dziękujemy! Jesteś na liście.</p>
              <p className="mt-2 font-body-lg text-on-surface-muted">
                Damy znać, gdy Jobby wystartuje w Twojej okolicy.
              </p>
            </motion.div>
          ) : (
            <form
              className="flex flex-col gap-4 sm:flex-row"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres e-mail"
                disabled={state === "submitting"}
                className="ghost-border flex-1 rounded-full border-none bg-surface-deep px-6 py-4 font-body-lg text-primary transition-all placeholder:text-on-surface-muted focus:bg-surface-container focus:ring-1 focus:ring-primary-fixed focus:outline-none disabled:opacity-60"
              />
              <motion.button
                type="submit"
                disabled={state === "submitting"}
                className="rounded-full bg-primary-fixed px-8 py-4 font-title-lg whitespace-nowrap text-on-primary-fixed disabled:opacity-70"
                whileHover={{ scale: 0.97 }}
                whileTap={{ scale: 0.95 }}
              >
                {state === "submitting" ? "Zapisuję…" : "Dołącz do waitlisty"}
              </motion.button>
            </form>
          )}

          <p className="mt-4 font-label-sm uppercase tracking-widest text-on-surface-muted">
            Ograniczona liczba miejsc w beta testach
          </p>
        </div>
      </ScrollReveal>
    </AnimatedSection>
  );
}
