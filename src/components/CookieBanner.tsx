import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getCookieConsent, loadGoogleFonts, loadMaterialSymbols, type CookieConsent } from "../lib/cookies";

const CONSENT_KEY = "jobby-cookie-consent";

export function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent | null>(() => getCookieConsent());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() !== null) return;
    setVisible(true);
  }, []);

  const saveConsent = (value: CookieConsent) => {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    setVisible(false);
    if (value === "all") loadGoogleFonts();
    else loadMaterialSymbols();
  };

  if (consent !== null || !visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-surface-container-high bg-surface-deep/95 p-5 shadow-2xl backdrop-blur-xl md:inset-x-auto md:px-6 md:py-5"
        role="dialog"
        aria-label="Ustawienia cookies"
      >
        <p className="font-body-lg text-on-surface-variant">
          Używamy plików cookies, m.in. do ładowania czcionek Google Fonts. Możesz zaakceptować
          wszystkie lub wybrać tylko niezbędne.{" "}
          <Link to="/cookie-policy" className="text-primary-fixed hover:underline">
            Polityka cookies
          </Link>
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => saveConsent("essential")}
            className="rounded-full border border-surface-container-high px-5 py-2.5 font-title-md text-on-surface-muted transition-colors hover:border-primary-fixed hover:text-primary-fixed"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={() => saveConsent("all")}
            className="rounded-full bg-primary-fixed px-5 py-2.5 font-title-md text-on-primary-fixed"
          >
            Akceptuję wszystkie
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
