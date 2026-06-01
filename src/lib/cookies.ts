const CONSENT_KEY = "jobby-cookie-consent";

export type CookieConsent = "all" | "essential";

export function getCookieConsent(): CookieConsent | null {
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "all" || value === "essential") return value;
  return null;
}

export function loadGoogleFonts() {
  loadMaterialSymbols();
  loadBrandFonts();
}

export function loadMaterialSymbols() {
  if (document.getElementById("jobby-material-symbols")) return;

  const link = document.createElement("link");
  link.id = "jobby-material-symbols";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap";
  document.head.appendChild(link);
}

function loadBrandFonts() {
  if (document.getElementById("jobby-google-fonts")) return;

  const preconnect1 = document.createElement("link");
  preconnect1.rel = "preconnect";
  preconnect1.href = "https://fonts.googleapis.com";
  document.head.appendChild(preconnect1);

  const preconnect2 = document.createElement("link");
  preconnect2.rel = "preconnect";
  preconnect2.href = "https://fonts.gstatic.com";
  preconnect2.crossOrigin = "anonymous";
  document.head.appendChild(preconnect2);

  const fonts = document.createElement("link");
  fonts.id = "jobby-google-fonts";
  fonts.rel = "stylesheet";
  fonts.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,800&display=swap";
  document.head.appendChild(fonts);
}

export function initFontsFromConsent() {
  loadMaterialSymbols();
  if (getCookieConsent() === "all") loadBrandFonts();
}
