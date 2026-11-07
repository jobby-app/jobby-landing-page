# Jobby – landing page

Landing page and waitlist for [Jobby](https://www.getjobby.pl), a mobile app for quick local jobs that I co-founded.
Live at **[getjobby.pl](https://www.getjobby.pl)**.

## What it does

- Marketing page (hero, problem, features, trust section) with legal pages: privacy policy, terms, cookies
- Waitlist sign-up with GDPR consent, stored in PostgreSQL
- Confirmation email sent through Resend
- Cookie banner – Google Fonts load only after consent
- Admin endpoint for sending beta invites to the waitlist

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion · Express 5 (Node 20) · PostgreSQL · Resend · Railway, Cloudflare

## Security

- Parameterized SQL queries
- Rate limiting on the waitlist endpoint (8 requests / 15 min per IP)
- Constant-time comparison of the admin secret
- HTML escaping in emails, basic security headers, 16 KB JSON body limit

## Running locally

```bash
npm install
cp .env.example .env   # set DATABASE_URL, Resend keys optional
npm run dev            # frontend :5173, API :3000
```

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Server and database status |
| `POST` | `/api/waitlist` | Join the waitlist (`email`, `consent`) |
| `POST` | `/api/waitlist/send-beta-invites` | Send beta invites (`Authorization: Bearer ADMIN_SECRET`) |
