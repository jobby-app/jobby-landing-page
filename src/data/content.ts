export const NAV_LINKS = [
  { href: "#how-it-works", label: "Jak to działa" },
  { href: "#features", label: "Możliwości" },
  { href: "#trust", label: "Bezpieczeństwo" },
] as const;

export const FLOATING_JOBS = [
  {
    icon: "pets",
    title: "Wyprowadzenie psa",
    price: "45 zł",
    accent: "lime" as const,
    position: "left" as const,
    delay: 0,
  },
  {
    icon: "local_shipping",
    title: "Pomoc przy przeprowadzce",
    price: "80 zł",
    accent: "purple" as const,
    position: "right" as const,
    delay: 0.5,
  },
] as const;

export const PROBLEM_CARDS = [
  {
    icon: "forum",
    title: "Chaos na grupach FB",
    description:
      "Ogłoszenia giną w gąszczu spamu. Znalezienie kogoś zajmuje godziny, a stawki są niejasne.",
    wide: true,
  },
  {
    icon: "gpp_bad",
    title: "Brak zaufania",
    description:
      "Zatrudniasz anonimową osobę bez żadnych referencji czy historii wykonanych prac.",
    wide: false,
  },
] as const;

export const FEATURES = [
  {
    icon: "bolt",
    title: "Szybkie zlecenia",
    description:
      "Oferty przemykają jak na TikToku. Przesuwasz, wybierasz, aplikujesz jednym kliknięciem.",
    offset: false,
  },
  {
    icon: "chat_bubble",
    title: "Wbudowany czat",
    description:
      "Ustalaj szczegóły błyskawicznie w aplikacji. Bez podawania numeru telefonu i przechodzenia na inne komunikatory.",
    offset: true,
  },
  {
    icon: "star",
    title: "Wiarygodne oceny",
    description:
      "Każdy profil buduje swoją reputację. Widzisz, z kim pracujesz i jak oceniali go inni w okolicy.",
    offset: false,
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: "Przeglądasz",
    description:
      "Otwierasz aplikację i widzisz mapę lub feed ofert z Twojej najbliższej okolicy.",
    align: "right" as const,
  },
  {
    number: 2,
    title: "Zgłaszasz się",
    description:
      "Widzisz stawkę i zakres. Jeśli pasuje — klikasz przycisk i już. Zleceniodawca dostaje powiadomienie.",
    align: "left" as const,
  },
  {
    number: 3,
    title: "Działasz",
    description:
      "Ustalacie szczegóły na czacie, wykonujesz zadanie, dostajesz kasę i pozytywną opinię do profilu.",
    align: "right" as const,
  },
] as const;

export const AUDIENCE_CARDS = [
  {
    icon: "payments",
    accent: "lime" as const,
    title: "Chcesz dorobić?",
    description:
      "Masz wolne popołudnie? Zarabiaj na własnych warunkach. Skoszenie trawnika, spacer z psem, pomoc w przeprowadzce — wybieraj to, co lubisz.",
    perks: [
      "Elastyczne godziny",
      "Szybka gotówka",
      "Zlecenia w Twojej okolicy",
    ],
  },
  {
    icon: "support_agent",
    accent: "purple" as const,
    title: "Potrzebujesz pomocy?",
    description:
      "Nie masz czasu lub narzędzi? Dodaj zlecenie w kilka sekund i pozwól komuś z sąsiedztwa to załatwić. Szybko, tanio i lokalnie.",
    perks: [
      "Sprawdzeni wykonawcy",
      "Brak żmudnych poszukiwań",
      "Wycena z góry",
    ],
  },
] as const;

export const TRUST_BADGES = [
  { icon: "shield", label: "Weryfikowane profile" },
  { icon: "thumb_up", label: "System ocen 1-5" },
  { icon: "history", label: "Historia zleceń" },
] as const;

export const FOOTER_LINKS = [
  { href: "/privacy-policy", label: "Polityka prywatności" },
  { href: "/terms-of-service", label: "Regulamin" },
  { href: "/cookie-policy", label: "Polityka cookies" },
  { href: "mailto:support@getjobby.pl", label: "Kontakt" },
] as const;

export const APP_SCREENSHOT = "/assets/app-mockup.jpg";
