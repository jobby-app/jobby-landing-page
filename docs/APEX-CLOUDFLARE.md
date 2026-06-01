# Apex `getjobby.pl` — konfiguracja krok po kroku (Cloudflare + Railway)

## Dlaczego `/api/health` pokazuje navbar zamiast JSON?

| Adres | Co się dzieje |
|-------|----------------|
| `https://www.getjobby.pl/api/health` | JSON `{"ok":true,"db":true}` — **OK** |
| `https://getjobby.pl/api/health` | Często stary hosting / 404 / React — **DNS apex nie trafia na Railway** |

W przeglądarce wpisujesz adres **bez www** → trafiasz na złą maszynę → dostajesz `index.html` (React) zamiast API.

**Na promocję używaj:** `https://www.getjobby.pl`

Po tej instrukcji apex też będzie działał (przekierowanie na www).

---

## CZĘŚĆ 1 — Railway (5 min)

1. Wejdź na [railway.app](https://railway.app) → projekt **strona-production** (lub jak nazywa się serwis www).
2. Kliknij serwis ze stroną (ten z portem **8080**, nie Postgres).
3. **Settings → Networking → Public Networking**.
4. W sekcji **Custom Domains** muszą być:
   - `www.getjobby.pl` — status **Active**, „Cloudflare proxy detected”
   - `getjobby.pl` — jeśli jest **„Waiting for DNS update”**, kliknij **Show DNS records**
5. Skopiuj z Railway dla **getjobby.pl**:
   - **Type:** zwykle `CNAME`
   - **Name:** `@` lub puste (apex)
   - **Value:** np. `strona-production-xxxx.up.railway.app`  
   *(u Ciebie może być inny niż `jihvuy38` — bierz DOKŁADNIE z Railway)*

Zostaw tę kartkę otwartą — użyjesz Value w Cloudflare.

---

## CZĘŚĆ 2 — Cloudflare DNS (10 min)

1. [dash.cloudflare.com](https://dash.cloudflare.com) → domena **getjobby.pl**.
2. Zakładka **DNS** → **Records**.

### Krok 2A — Rekord apex (`@`)

1. Znajdź rekord **Type A** na nazwę `@` wskazujący na home.pl / stary IP → **Delete** (jeśli jest).
2. **Add record:**
   - **Type:** `CNAME`
   - **Name:** `@`
   - **Target:** wklej **Value z Railway** (np. `strona-production-xxxx.up.railway.app`)
   - **Proxy status:** **Proxied** (pomarańczowa chmurka) — tak jak przy www
   - **TTL:** Auto
3. **Save**

> Cloudflare obsługuje CNAME na apex (CNAME flattening). To normalne.

### Krok 2B — Rekord www (sprawdź, nie psuj jeśli działa)

Powinno być **jedno** z poniższych (oba działają):

**Opcja 1 (u Ciebie prawdopodobnie):**
- `www` → CNAME → `getjobby.pl` → Proxied

**Opcja 2 (prostsza):**
- `www` → CNAME → `strona-production-xxxx.up.railway.app` → Proxied

Jeśli `www.getjobby.pl` już działa — **nie zmieniaj** www.

### Krok 2C — Rekordy Resend (NIE RUSZAJ)

Te zostaw **DNS only** (szara chmurka):
- `send` MX / TXT
- `resend._domainkey` TXT
- inne rekordy mailowe

### Krok 2D — Usuń konflikty (jeśli są)

Usuń stare rekordy, które kierują `@` gdzie indziej:
- stary **A** na `@` z home.pl
- duplikat **CNAME** na `@`

---

## CZĘŚĆ 3 — Redirect apex → www w Cloudflare (polecane, 3 min)

Nawet jak apex zadziała, użytkownicy i tak powinni lądować na **www**.

1. Cloudflare → **Rules** → **Redirect Rules** (lub **Bulk Redirects**).
2. **Create rule:**
   - **Rule name:** `Apex to WWW`
   - **When:** Field `Hostname` | Operator `equals` | Value `getjobby.pl`
   - **Then:** Type `Dynamic` lub `Static`  
     URL: `https://www.getjobby.pl/${uri.path}`  
     *(albo Static: `https://www.getjobby.pl` + preserve path)*
   - **Status code:** `301`
   - **Preserve query string:** ON
3. **Deploy**

Efekt:
- `https://getjobby.pl` → `https://www.getjobby.pl`
- `https://getjobby.pl/api/health` → `https://www.getjobby.pl/api/health` → JSON

---

## CZĘŚĆ 4 — home.pl (tylko nameservery)

DNS robisz w **Cloudflare**, nie w home.pl (poza nameserverami).

W home.pl sprawdź, że domena ma nameservery Cloudflare, np.:
- `xxx.ns.cloudflare.com`
- `yyy.ns.cloudflare.com`

Jeśli nadal wskazują na home.pl — zmień NS na Cloudflare (propagacja do 24 h).

---

## CZĘŚĆ 5 — Weryfikacja (5 min)

### W Railway
- `getjobby.pl` zmienia się z żółtego na **Active** (może zająć 5–60 min).

### W przeglądarce (tryb incognito)

1. `https://www.getjobby.pl/api/health`  
   → surowy tekst: `{"ok":true,"db":true}`

2. `https://getjobby.pl`  
   → przekierowanie na `www` (jeśli masz Redirect Rule)

3. `https://getjobby.pl/api/health`  
   → po redirect: ten sam JSON co wyżej

### Ważne
- **Nie** wchodź na `/api/health` z menu strony — to nie jest strona dla ludzi.
- Jeśli widzisz navbar: jesteś na **złym hoście** albo React ładuje się z cache — użyj **www** i incognito.

---

## Checklist

- [ ] Railway: obie domeny dodane, `Show DNS records` skopiowane
- [ ] Cloudflare: CNAME `@` → Railway target, Proxied
- [ ] Usunięty stary A na `@`
- [ ] Redirect Rule: `getjobby.pl` → `www.getjobby.pl`
- [ ] Railway: `getjobby.pl` = Active
- [ ] Test JSON na `www.../api/health`
- [ ] Test waitlisty na `www.getjobby.pl`

---

## Nadal nie działa?

1. **Cloudflare → DNS** → kliknij rekord `@` → czy Target = dokładnie Railway?
2. **Railway** → czy custom domain jest na serwisie z **Node** (`npm start`), nie starym static?
3. **Dwa serwisy** (`8080` vs `8081`) — domeny muszą być na tym z waitlistą (8080).
4. Poczekaj 30–60 min na propagację DNS.
