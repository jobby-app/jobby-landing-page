import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/company";
import { signupWaitlist } from "../lib/waitlist";
import { AnimatedSection } from "./AnimatedSection";
import { ScrollReveal } from "./scroll/ScrollReveal";

type FormState = "idle" | "submitting" | "success" | "error";

const ERROR_MESSAGES = {
  duplicate: "Ten adres e-mail jest już na liście oczekujących.",
  invalid: "Podaj prawidłowy adres e-mail.",
  network: "Brak połączenia. Sprawdź internet i spróbuj ponownie.",
  server: "Coś poszło nie tak. Spróbuj za chwilę lub napisz na support@getjobby.pl.",
  consent: "Zaznacz zgodę na przetwarzanie danych, aby dołączyć do waitlisty.",
} as const;

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [errorKey, setErrorKey] = useState<keyof typeof ERROR_MESSAGES | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    setState("submitting");
    setErrorKey(null);

    const result = await signupWaitlist(email, consent);

    if (result.ok) {
      setState("success");
      setEmail("");
      setConsent(false);
      return;
    }

    setErrorKey(result.error);
    setState("error");
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
                Sprawdź skrzynkę — wysłaliśmy potwierdzenie na podany adres e-mail.
              </p>
            </motion.div>
          ) : (
            <form className="space-y-4 text-left" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 sm:flex-row">
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
                  disabled={state === "submitting" || !consent}
                  className="rounded-full bg-primary-fixed px-8 py-4 font-title-lg whitespace-nowrap text-on-primary-fixed disabled:opacity-70"
                  whileHover={{ scale: 0.97 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {state === "submitting" ? "Zapisuję…" : "Dołącz do waitlisty"}
                </motion.button>
              </div>

              <label className="flex cursor-pointer items-start gap-3 px-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  disabled={state === "submitting"}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-surface-container-high accent-primary-fixed"
                />
                <span className="font-body-md text-on-surface-muted">
                  Wyrażam zgodę na przetwarzanie mojego adresu e-mail w celu zapisu na waitlistę
                  oraz otrzymywania informacji o starcie {COMPANY.brand}, w tym zaproszenia do beta testów.
                  Zapoznałem/am się z{" "}
                  <Link to="/privacy-policy" className="text-primary-fixed hover:underline">
                    Polityką prywatności
                  </Link>{" "}
                  i{" "}
                  <Link to="/terms-of-service" className="text-primary-fixed hover:underline">
                    Regulaminem
                  </Link>
                  . Zgodę mogę wycofać w dowolnym momencie.
                </span>
              </label>

              {state === "error" && errorKey && (
                <p className="px-2 font-body-md text-error" role="alert">
                  {ERROR_MESSAGES[errorKey]}
                </p>
              )}
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
