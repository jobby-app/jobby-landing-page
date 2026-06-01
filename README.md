# Jobby Landing Page

Landing page dla startupu **Jobby** — lokalny feed małych zleceń. Zbudowany w React + Vite + Tailwind CSS. Backend API (Express) + PostgreSQL na **Railway**.

## Uruchomienie lokalne

```bash
npm install
cp .env.example .env          # uzupełnij DATABASE_URL (Railway → Postgres → Connect)
npm run dev                   # frontend :5173 + API :3000 (proxy /api)
```

Tylko frontend: `npm run dev:web`  
Tylko API: `npm run dev:server`

## Build produkcyjny

```bash
npm run build
npm start                     # serwuje dist/ + API na PORT (domyślnie 3000)
```

## Railway — konfiguracja

### 1. Jeden serwis (strona + API)

Repozytorium deployuje się jako Node.js. Railway uruchamia `npm run build` → `npm start`.

1. Połącz repo z Railway.
2. Dodaj **PostgreSQL** w projekcie — Railway ustawi `DATABASE_URL` automatycznie (Variables → Reference z bazy).
3. W Variables serwisu www dodaj:

| Zmienna | Wartość |
|---------|---------|
| `DATABASE_URL` | Reference z Postgresa (jeśli nie połączone automatycznie) |
| `NODE_ENV` | `production` |
| `RESEND_API_KEY` | Klucz z Resend |
| `RESEND_FROM_EMAIL` | `Jobby <waitlist@getjobby.pl>` |
| `ADMIN_SECRET` | Losowy ciąg min. 32 znaki |

4. Deploy — migracja tabeli `waitlist_signups` uruchamia się przy starcie serwera.

Frontend woła `/api/waitlist` na tym samym hoście — nie trzeba osobnego `VITE_WAITLIST_API_URL` na produkcji.

### 2. Resend (maile z własnej domeny)

1. Konto na [resend.com](https://resend.com).
2. **Domains → Add Domain** → `getjobby.pl`.
3. Dodaj rekordy DNS (SPF, DKIM) u rejestratora domeny.
4. Po weryfikacji: API key → Railway Variables.

### 3. Zaproszenie do beta

PowerShell:

```powershell
$env:API_URL="https://getjobby.pl"
$env:ADMIN_SECRET="twoj-sekret"
.\scripts\send-beta-invites.ps1 -DryRun   # podgląd
.\scripts\send-beta-invites.ps1            # wysyłka
```

## Dane prawne (RODO)

Przed publikacją uzupełnij `src/data/company.ts` — pełna nazwa podmiotu, adres, NIP.

## Struktura

- `src/` — React frontend
- `server/` — Express API (waitlist, beta blast, static w prod)
- `db/migrations/` — SQL PostgreSQL
- `scripts/` — wysyłka zaproszeń beta
- `railway.toml` — konfiguracja deployu

## Technologie

- React 19 + TypeScript + Vite 6 + Tailwind CSS 4
- Express 5 + node-postgres (`pg`)
- Railway (hosting + PostgreSQL)
- Resend (e-maile transakcyjne)
