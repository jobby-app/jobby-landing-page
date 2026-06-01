import { COMPANY } from "../../data/company";
import { LegalSection } from "../../components/legal/LegalSection";
import { LegalPage } from "./LegalPage";

export function CookiePolicy() {
  return (
    <LegalPage title="Polityka cookies">
      <p className="text-on-surface-muted">
        Ostatnia aktualizacja: {COMPANY.lastUpdated}. Niniejsza polityka wyjaśnia, w jaki sposób
        strona {COMPANY.website} wykorzystuje pliki cookies i podobne technologie.
      </p>

      <LegalSection title="1. Czym są cookies">
        <p>
          Cookies to małe pliki tekstowe zapisywane w Twojej przeglądarce. Służą m.in. do
          zapamiętania preferencji, zapewnienia działania strony lub — za Twoją zgodą —
          analizy ruchu.
        </p>
      </LegalSection>

      <LegalSection title="2. Jakie cookies stosujemy">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-surface-container-high">
                <th className="py-3 pr-4 font-title-md text-on-surface">Nazwa / źródło</th>
                <th className="py-3 pr-4 font-title-md text-on-surface">Typ</th>
                <th className="py-3 font-title-md text-on-surface">Cel</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-muted">
              <tr className="border-b border-surface-container-low">
                <td className="py-3 pr-4">jobby-cookie-consent</td>
                <td className="py-3 pr-4">Niezbędne (localStorage)</td>
                <td className="py-3">Zapamiętanie Twojej decyzji w banerze cookies</td>
              </tr>
              <tr className="border-b border-surface-container-low">
                <td className="py-3 pr-4">Material Symbols (Google Fonts)</td>
                <td className="py-3 pr-4">Niezbędne (zewnętrzne)</td>
                <td className="py-3">Ikony interfejsu strony</td>
              </tr>
              <tr className="border-b border-surface-container-low">
                <td className="py-3 pr-4">Inter, Plus Jakarta Sans</td>
                <td className="py-3 pr-4">Funkcjonalne (zewnętrzne)</td>
                <td className="py-3">
                  Czcionki marki — tylko po wyrażeniu zgody w banerze
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Obecnie <strong>nie stosujemy</strong> cookies analitycznych (Google Analytics, Meta
          Pixel itp.). Jeśli je dodamy, zaktualizujemy tę politykę i poprosimy o osobną zgodę.
        </p>
      </LegalSection>

      <LegalSection title="3. Podstawa prawna">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Cookies niezbędne — art. 6 ust. 1 lit. f RODO (uzasadniony interes: działanie
            strony).
          </li>
          <li>
            Cookies zewnętrzne (czcionki) — art. 6 ust. 1 lit. a RODO (zgoda wyrażona w
            banerze).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Zarządzanie cookies">
        <p>
          Przy pierwszej wizycie wyświetlamy baner, w którym możesz zaakceptować wszystkie
          cookies lub wybrać tylko niezbędne.
        </p>
        <p>
          Możesz też w każdej chwili zmienić ustawienia w przeglądarce (blokowanie lub usuwanie
          cookies). Instrukcje znajdziesz w pomocy swojej przeglądarki (Chrome, Firefox,
          Safari, Edge).
        </p>
        <p>
          Wyłączenie cookies zewnętrznych może spowodować, że strona wyświetli się z czcionkami
          systemowymi zamiast projektowych — nie wpływa to na działanie waitlisty.
        </p>
      </LegalSection>

      <LegalSection title="5. Kontakt">
        <p>
          Pytania dotyczące cookies kieruj na{" "}
          <a href={`mailto:${COMPANY.privacyEmail}`} className="text-primary-fixed hover:underline">
            {COMPANY.privacyEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
