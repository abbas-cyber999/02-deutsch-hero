## Deutsch Hero - Next.js Edition

This app wraps the existing Deutsch Hero experience in a Next.js (App Router) project. All legacy HTML/CSS/JS/assets live in `public/`, and Prisma is pre-wired for a Postgres backend.

### Run locally

```bash
npm install
npm run dev          # start only Next.js
npm run dev:stack    # start Postgres via Docker, push schema, then Next.js
```

Then open http://localhost:3000. The root route renders the legacy DOM structure, and `public/main.js` continues to drive all interactions.

### Prisma & Postgres

1. Copy `.env.example` to `.env` and set `DATABASE_URL`.
2. (Optional but recommended) Start the bundled Postgres with Docker: `npm run db:up` (requires Docker Desktop). This spins up Postgres on `localhost:5432` with creds from `.env.example`.
3. Create tables: `npx prisma migrate dev` (or introspect with `npx prisma db pull`).
3. Regenerate the client after schema changes: `npx prisma generate`.

A health probe is available at `/api/health` (runs a lightweight Prisma query).

### UI / Styling

- Tailwind + shadcn/ui power the refreshed landing shell; legacy lesson rendering still comes from `public/main.js`.
- Base styles live in `src/app/globals.css`; reusable primitives in `src/components/ui`.
- We use the Prisma Postgres adapter (`@prisma/adapter-pg`) to talk to the DB.

### Notes

- Static data, sounds, icons, manifest, and service worker are served from `public/` for compatibility.
- The manifest now starts at `/`, and the service worker registration remains in `public/main.js`.
