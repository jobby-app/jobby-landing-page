# Jobby Landing Page

Landing page dla startupu **Jobby** — lokalny feed małych zleceń. Zbudowany w React + Vite + Tailwind CSS według design systemu „Kinetic Editorial Dark” z folderu `.ai-context`.

## Uruchomienie

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:5173`.

## Build produkcyjny

```bash
npm run build
npm run preview
```

## Struktura

- `src/components/` — sekcje strony (Hero, Features, Waitlist itd.)
- `src/data/content.ts` — treści i dane (łatwa edycja bez grzebania w JSX)
- `public/assets/` — logo i assety lokalne
- `.ai-context/` — design system, mockup HTML i screen.png

## Technologie

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion (animacje scroll, floating cards, formularz waitlisty)
