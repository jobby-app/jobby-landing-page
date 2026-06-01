import { COMPANY } from "../../data/company";
import { LegalSection } from "../../components/legal/LegalSection";
import { LegalPage } from "./LegalPage";

export function PrivacyPolicy() {
  return (
    <LegalPage title="Polityka prywatności">
      <p className="text-on-surface-muted">
        Ostatnia aktualizacja: {COMPANY.lastUpdated}. Niniejsza polityka opisuje zasady
        przetwarzania danych osobowych w związku z korzystaniem ze strony {COMPANY.website}{" "}
        oraz zapisem na listę oczekujących (waitlistę) platformy {COMPANY.brand}.
      </p>

      <LegalSection title="1. Administrator danych">
        <p>
          Administratorem Twoich danych osobowych jest {COMPANY.legalName} z siedzibą przy{" "}
          {COMPANY.address}, NIP: {COMPANY.nip}
          {COMPANY.krs.startsWith("[") ? "" : `, KRS: ${COMPANY.krs}`}.
        </p>
        <p>
          W sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami pod
          adresem:{" "}
          <a href={`mailto:${COMPANY.privacyEmail}`} className="text-primary-fixed hover:underline">
            {COMPANY.privacyEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Jakie dane przetwarzamy">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Adres e-mail</strong> — podany przy zapisie na waitlistę.
          </li>
          <li>
            <strong>Data i czas zapisu</strong> oraz potwierdzenie udzielonej zgody.
          </li>
          <li>
            <strong>Adres IP</strong> (opcjonalnie) — w celach bezpieczeństwa i ochrony przed
            nadużyciami formularza.
          </li>
          <li>
            <strong>Preferencje cookies</strong> — zapisane lokalnie w przeglądarce, jeśli
            wyrazisz zgodę w banerze cookies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Cele i podstawy prawne przetwarzania">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Waitlista i komunikacja o starcie beta</strong> — art. 6 ust. 1 lit. a RODO
            (zgoda). Zapisując się, wyrażasz zgodę na otrzymywanie informacji o {COMPANY.brand},
            w tym zaproszenia do beta testów.
          </li>
          <li>
            <strong>Wysyłka potwierdzenia zapisu</strong> — art. 6 ust. 1 lit. b RODO (działania
            przed zawarciem umowy / na Twoje żądanie).
          </li>
          <li>
            <strong>Bezpieczeństwo formularza</strong> — art. 6 ust. 1 lit. f RODO (prawnie
            uzasadniony interes administratora).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Okres przechowywania danych">
        <p>
          Dane z waitlisty przechowujemy do momentu wycofania zgody, wysłania zaproszenia do
          beta (i ewentualnej migracji do konta aplikacji) lub maksymalnie 24 miesięcy od
          zapisu — w zależności od tego, co nastąpi wcześniej.
        </p>
        <p>
          Po wycofaniu zgody usuwamy Twój adres e-mail z listy oczekujących w rozsądnym
          terminie, nie dłużej niż 30 dni.
        </p>
      </LegalSection>

      <LegalSection title="5. Odbiorcy danych">
        <p>Twoje dane mogą być przekazywane następującym kategoriom odbiorców:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Railway Corp.</strong> — hosting aplikacji i bazy danych PostgreSQL.
          </li>
          <li>
            <strong>Resend Inc.</strong> — wysyłka wiadomości e-mail transakcyjnych i
            informacyjnych.
          </li>
          <li>
            <strong>Google LLC</strong> — ładowanie czcionek (Google Fonts), jeśli wyrazisz zgodę
            na cookies zewnętrzne.
          </li>
        </ul>
        <p>
          Z każdym podmiotem przetwarzającym dane zawieramy umowę powierzenia przetwarzania
          danych (DPA) lub korzystamy z warunków świadczenia usług zgodnych z RODO.
        </p>
      </LegalSection>

      <LegalSection title="6. Twoje prawa">
        <p>Przysługują Ci następujące prawa:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>dostęp do danych i otrzymanie ich kopii,</li>
          <li>sprostowanie (poprawianie) danych,</li>
          <li>usunięcie danych („prawo do bycia zapomnianym”),</li>
          <li>ograniczenie przetwarzania,</li>
          <li>przenoszenie danych,</li>
          <li>wycofanie zgody w dowolnym momencie — bez wpływu na zgodność z prawem przetwarzania sprzed wycofania,</li>
          <li>wniesienie sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
          <li>wniesienie skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
        </ul>
        <p>
          Aby skorzystać z praw, napisz na{" "}
          <a href={`mailto:${COMPANY.privacyEmail}`} className="text-primary-fixed hover:underline">
            {COMPANY.privacyEmail}
          </a>
          . W tytule wiadomości podaj „RODO — wycofanie zgody waitlista”, jeśli chcesz usunąć
          swój e-mail z listy.
        </p>
      </LegalSection>

      <LegalSection title="7. Dobrowolność podania danych">
        <p>
          Podanie adresu e-mail jest dobrowolne, lecz niezbędne do zapisu na waitlistę. Bez
          podania e-maila i zgody nie możemy Cię zapisać na listę oczekujących.
        </p>
      </LegalSection>

      <LegalSection title="8. Zautomatyzowane decyzje">
        <p>
          Nie podejmujemy wobec Ciebie decyzji w sposób wyłącznie zautomatyzowany, w tym
          profilowania, które wywoływałyby skutki prawne lub w podobny sposób istotnie na Ciebie
          wpływały.
        </p>
      </LegalSection>

      <LegalSection title="9. Zmiany polityki">
        <p>
          Możemy aktualizować niniejszą politykę. O istotnych zmianach poinformujemy na stronie
          lub drogą mailową. Aktualna wersja jest zawsze dostępna pod adresem{" "}
          {COMPANY.website}/privacy-policy.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
