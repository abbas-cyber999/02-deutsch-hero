## Deutsch Hero - Next.js Edition

This app wraps the existing Deutsch Hero experience in a Next.js (App Router) project. All legacy HTML/CSS/JS/assets live in `public/`, and Prisma is pre-wired for a Postgres backend.

### Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The root route renders the legacy DOM structure, and `public/main.js` continues to drive all interactions.

### Prisma & Postgres

1. Copy `.env.example` to `.env` and set `DATABASE_URL`.
2. Create tables: `npx prisma migrate dev` (or introspect with `npx prisma db pull`).
3. Regenerate the client after schema changes: `npx prisma generate`.

A health probe is available at `/api/health` (runs a lightweight Prisma query).

### Notes

- Static data, sounds, icons, manifest, and service worker are served from `public/` for compatibility.
- The manifest now starts at `/`, and the service worker registration remains in `public/main.js`.
