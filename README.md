# Tread Spark — Coming Soon

A modern minimalist landing page for Tread Spark with interest capture, customer logos, and daily Excel reports emailed via Resend.

## Features

- Coming soon hero with Tread Spark branding
- Trusted-by section: Go Mobile Tires, Walmart, Lowe's
- Interest form (name, email, company, phone, message)
- Daily cron job exports new submissions to Excel and emails the configured recipient

## Tech Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Drizzle ORM + Neon (Vercel Postgres)
- Resend (email with `.xlsx` attachment)
- Vercel Cron

## Local Development

1. Copy environment variables:

```bash
cp .env.example .env.local
```

2. Fill in `.env.local` with your Neon `DATABASE_URL`, Resend API key, and other values.

3. Push the database schema:

```bash
npm run db:push
```

4. Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Neon / Vercel Postgres connection string |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Verified sender (e.g. `reports@your-domain.com`) |
| `INTEREST_RECIPIENT_EMAIL` | Daily report recipient |
| `CRON_SECRET` | Random secret for cron auth |
| `NEXT_PUBLIC_SITE_URL` | Optional. Public URL for metadata/OG tags. Defaults to `VERCEL_URL` on Vercel, or `http://localhost:3000` locally |

## Vercel Deployment

1. Push to GitHub and import the project in [Vercel](https://vercel.com/new).
2. Add **Vercel Postgres** (Neon) from the Vercel dashboard — this injects `DATABASE_URL`.
3. Set environment variables in **Project Settings → Environment Variables** (see table above).
4. Push the database schema against production:

```bash
DATABASE_URL="your-production-url" npm run db:push
```

5. Deploy. Vercel assigns a `*.vercel.app` preview URL automatically.

### Custom domain (optional)

When you have a domain ready:

1. In Vercel → **Settings → Domains**, add your domain (e.g. `www.your-domain.com`).
2. Update DNS at your registrar using the records Vercel provides.
3. Set `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com` in Vercel env vars.
4. Redeploy so metadata and Open Graph tags use the new URL.

### Resend email setup

1. Verify your sending domain in [Resend](https://resend.com).
2. Add SPF and DKIM DNS records Resend provides.
3. Set `RESEND_FROM_EMAIL` to an address on that verified domain.

### Daily cron

The cron runs at **8:00 AM Eastern** (`0 13 * * *` UTC during EST; adjust in `vercel.json` if needed).

- Path: `/api/cron/daily-export`
- Skips email when there are no new submissions
- Marks exported rows to avoid duplicates

Test manually (replace with your deployment URL):

```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" \
  https://your-project.vercel.app/api/cron/daily-export
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run db:push` | Push schema to database |
| `npm run db:generate` | Generate migrations |
