# Jobby — Landing Page

Marketingowa strona produktowa dla **Jobby**: lokalny feed małych zleceń w okolicy.  
Frontend (React) + API waitlisty (Express) + PostgreSQL + Resend, hostowane na **Railway**.

**Produkcja:** [getjobby.pl](https://www.getjobby.pl)

---

## Co jest na stronie

- Landing page z sekcjami marketingowymi (Hero, problem, features, trust)
- **Waitlista** z zgodą RODO i zapisem do bazy
- Automatyczny mail potwierdzający (Resend)
- Dokumenty prawne: polityka prywatności, regulamin, polityka cookies
- Baner cookies (Google Fonts ładowane po zgodzie)
- Endpoint admina do masowej wysyłki zaproszeń beta

---

## Stack

| Warstwa | Technologia |
|---------|-------------|
| Frontend | React 19, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion |
| Backend | Express 5, Node.js 20+ |
| Baza | PostgreSQL (Railway) |
| Maile | Resend |
| DNS | Cloudflare |
| Hosting | Railway |

---

## Struktura repozytorium

```
src/                 # React — komponenty, strony, treści
server/              # Express API, maile, middleware
db/migrations/       # SQL (tabela waitlist_signups)
public/assets/       # Logo, mockup, favicon
scripts/             # Wysyłka zaproszeń beta (PowerShell / bash)
railway.toml         # Konfiguracja deployu Railway
nixpacks.toml        # Build pipeline
```

---

## Uruchomienie lokalne

### Wymagania

- Node.js 20+
- PostgreSQL (np. connection string z Railway)

### Instalacja

```bash
npm install
cp .env.example .env
```

Uzupełnij `.env` — minimum `DATABASE_URL` i klucze Resend, jeśli testujesz maile.

### Dev (frontend + API)

```bash
npm run dev
```

- Strona: http://localhost:5173  
- API: http://localhost:3000 (Vite proxy `/api` → backend)

### Produkcja lokalnie

```bash
npm run build
npm start
```

---

## Zmienne środowiskowe

| Zmienna | Wymagane | Opis |
|---------|----------|------|
| `DATABASE_URL` | tak (waitlista) | Connection string PostgreSQL |
| `NODE_ENV` | prod | `production` na Railway |
| `RESEND_API_KEY` | tak (maile) | Klucz API Resend |
| `RESEND_FROM_EMAIL` | tak | np. `Jobby <waitlist@getjobby.pl>` |
| `ADMIN_SECRET` | beta blast | Losowy ciąg 32+ znaków |
| `SITE_URL` | opcjonalnie | URL strony (logo w mailach), domyślnie `https://www.getjobby.pl` |
| `PORT` | auto | Ustawia Railway |

Szablon: `.env.example`

---

## Deploy na Railway

1. Połącz repozytorium z Railway.
2. Dodaj **PostgreSQL** i podepnij `DATABASE_URL` (Reference) do serwisu www.
3. Ustaw zmienne z tabeli powyżej.
4. Deploy: `npm run build` → `npm start` (z `railway.toml`).
5. Healthcheck: `/api/health`

### DNS (Cloudflare)

- `@` i `www` → CNAME na Railway
- Rekordy Resend (SPF, DKIM) — **DNS only**, bez proxy
- Zalecany redirect: `getjobby.pl` → `www.getjobby.pl`

---

## API

| Metoda | Ścieżka | Opis |
|--------|---------|------|
| `GET` | `/api/health` | Status serwera i bazy |
| `POST` | `/api/waitlist` | Zapis na waitlistę (`email`, `consent`) |
| `POST` | `/api/waitlist/send-beta-invites` | Wysyłka beta (nagłówek `Authorization: Bearer ADMIN_SECRET`) |

### Beta invites (PowerShell)

```powershell
$env:API_URL="https://www.getjobby.pl"
$env:ADMIN_SECRET="twoj-sekret"
.\scripts\send-beta-invites.ps1 -DryRun   # podgląd
.\scripts\send-beta-invites.ps1            # wysyłka
```

---

## Treści i RODO

Dane podmiotu prawnego (NIP, adres, forma) edytuj w:

`src/data/company.ts`

Treści regulaminów korzystają z tego pliku. Przed publicznym startem warto zweryfikować dokumenty u prawnika.

---

## Bezpieczeństwo (wdrożone)

- Parametryzowane zapytania SQL (ochrona przed injection)
- Rate limit na zapis waitlisty (8 prób / 15 min / IP)
- Bezpieczne porównanie `ADMIN_SECRET` (`timingSafeEqual`)
- Escape HTML w treści maili (adres użytkownika)
- Nagłówki: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- Wyłączone `X-Powered-By`
- Limit body JSON 16 KB
- Brak sekretów w repozytorium (`.env` w `.gitignore`)

**Nie commituj:** `.env`, kluczy API, haseł do bazy.

---

## Skrypty npm

| Komenda | Działanie |
|---------|-----------|
| `npm run dev` | Frontend + API (watch) |
| `npm run dev:web` | Tylko Vite |
| `npm run dev:server` | Tylko API |
| `npm run build` | Build frontend + kompilacja serwera |
| `npm start` | Serwer produkcyjny |
| `npm run preview` | Podgląd buildu Vite |

---

## Licencja

Projekt prywatny — Jobby.
