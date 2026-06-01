import { COMPANY } from "../../data/company";
import { LegalSection } from "../../components/legal/LegalSection";
import { LegalPage } from "./LegalPage";

export function TermsOfService() {
  return (
    <LegalPage title="Regulamin">
      <p className="text-on-surface-muted">
        Ostatnia aktualizacja: {COMPANY.lastUpdated}. Regulamin określa zasady korzystania ze
        strony internetowej {COMPANY.website} oraz zapisu na listę oczekujących platformy{" "}
        {COMPANY.brand}.
      </p>

      <LegalSection title="1. Postanowienia ogólne">
        <p>
          Właścicielem i administratorem strony jest {COMPANY.legalName}, {COMPANY.address},
          NIP: {COMPANY.nip} (dalej: „Administrator”).
        </p>
        <p>
          Korzystając ze strony, akceptujesz postanowienia niniejszego Regulaminu. Jeśli się z
          nimi nie zgadzasz, prosimy o zaprzestanie korzystania ze strony.
        </p>
      </LegalSection>

      <LegalSection title="2. Definicje">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Strona</strong> — serwis internetowy dostępny pod adresem {COMPANY.website}.
          </li>
          <li>
            <strong>Waitlista</strong> — lista oczekujących na wczesny dostęp do aplikacji{" "}
            {COMPANY.brand}.
          </li>
          <li>
            <strong>Użytkownik</strong> — osoba korzystająca ze Strony lub zapisująca się na
            Waitlistę.
          </li>
          <li>
            <strong>Beta testy</strong> — okres testowy aplikacji mobilnej {COMPANY.brand} przed
            pełnym uruchomieniem.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Waitlista">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Zapis na Waitlistę wymaga podania prawidłowego adresu e-mail oraz wyrażenia zgody
            na przetwarzanie danych (zgodnie z{" "}
            <a href="/privacy-policy" className="text-primary-fixed hover:underline">
              Polityką prywatności
            </a>
            ).
          </li>
          <li>
            Zapis na Waitlistę jest bezpłatny i nie stanowi zawarcia umowy o świadczenie usług
            aplikacji {COMPANY.brand}.
          </li>
          <li>
            Administrator może odmówić zapisu lub usunąć adres e-mail w przypadku naruszenia
            Regulaminu, podania fałszywych danych lub podejrzenia nadużycia.
          </li>
          <li>
            Miejsca w beta testach są ograniczone. Zapis na Waitlistę nie gwarantuje
            automatycznego zaproszenia — kolejność i kryteria zaproszeń należą do
            Administratora.
          </li>
          <li>
            Po zapisie otrzymasz wiadomość e-mail z potwierdzeniem. Możesz w każdej chwili
            wycofać zgodę, kontaktując się pod adresem {COMPANY.privacyEmail}.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Zasady korzystania ze Strony">
        <p>Użytkownik zobowiązuje się do:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>korzystania ze Strony zgodnie z prawem i niniejszym Regulaminem,</li>
          <li>niepodejmowania działań mogących zakłócić działanie Strony,</li>
          <li>niepodawania fałszywych lub cudzych adresów e-mail.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Własność intelektualna">
        <p>
          Wszystkie treści na Stronie (logo, teksty, grafiki, layout) są własnością
          Administratora lub jego licencjodawców i podlegają ochronie prawa autorskiego.
          Kopiowanie, modyfikowanie lub rozpowszechnianie bez zgody jest zabronione.
        </p>
      </LegalSection>

      <LegalSection title="6. Odpowiedzialność">
        <p>
          Strona ma charakter informacyjny. Administrator dokłada starań, aby treści były
          aktualne, lecz nie gwarantuje pełnej dostępności Strony ani braku błędów technicznych.
        </p>
        <p>
          Administrator nie ponosi odpowiedzialności za szkody wynikające z korzystania ze Strony
          w sposób sprzeczny z Regulaminem lub przepisami prawa, z wyjątkiem przypadków, gdy
          odpowiedzialność wynika bezpośrednio z obowiązujących przepisów.
        </p>
      </LegalSection>

      <LegalSection title="7. Reklamacje i kontakt">
        <p>
          Pytania i reklamacje dotyczące Strony lub Waitlisty kieruj na{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-primary-fixed hover:underline">
            {COMPANY.email}
          </a>
          . Odpowiadamy w terminie do 14 dni roboczych.
        </p>
      </LegalSection>

      <LegalSection title="8. Postanowienia końcowe">
        <p>
          W sprawach nieuregulowanych stosuje się prawo polskie, w szczególności ustawę o
          świadczeniu usług drogą elektroniczną oraz RODO.
        </p>
        <p>
          Administrator zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie z
          chwilą publikacji na Stronie.
        </p>
        <p>
          Regulamin aplikacji mobilnej {COMPANY.brand} (po uruchomieniu) zostanie opublikowany
          osobno i uzupełni niniejszy dokument.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
