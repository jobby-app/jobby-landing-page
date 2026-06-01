import { type FormEvent, memo, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/company";
import { signupWaitlist } from "../lib/waitlist";

type FormState = "idle" | "submitting" | "success" | "error";

const ERROR_MESSAGES = {
  duplicate: "Ten adres e-mail jest już na liście oczekujących.",
  invalid: "Podaj prawidłowy adres e-mail.",
  network: "Brak połączenia. Sprawdź internet i spróbuj ponownie.",
  server: "Coś poszło nie tak. Spróbuj za chwilę lub napisz na support@getjobby.pl.",
  consent: "Zaznacz zgodę na przetwarzanie danych, aby dołączyć do waitlisty.",
  rate_limit: "Zbyt wiele prób. Spróbuj ponownie za chwilę.",
} as const;

function WaitlistFormInner() {
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

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-surface-deep px-6 py-8">
        <p className="font-title-lg text-neon-glow">Dziękujemy! Jesteś na liście.</p>
        <p className="mt-2 font-body-lg text-on-surface-muted">
          Sprawdź skrzynkę — wysłaliśmy potwierdzenie na podany adres e-mail.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4 text-left" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Twój adres e-mail"
          disabled={state === "submitting"}
          className="ghost-border flex-1 rounded-full border-none bg-surface-deep px-6 py-4 font-body-lg text-primary transition-colors placeholder:text-on-surface-muted focus:bg-surface-container focus:ring-1 focus:ring-primary-fixed focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={state === "submitting" || !consent}
          className="rounded-full bg-primary-fixed px-8 py-4 font-title-lg whitespace-nowrap text-on-primary-fixed transition-transform hover:scale-[0.97] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
        >
          {state === "submitting" ? "Zapisuję…" : "Dołącz do waitlisty"}
        </button>
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
          Wyrażam zgodę na przetwarzanie mojego adresu e-mail w celu zapisu na waitlistę oraz
          otrzymywania informacji o starcie {COMPANY.brand}, w tym zaproszenia do beta testów.
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
  );
}

export const WaitlistForm = memo(WaitlistFormInner);
