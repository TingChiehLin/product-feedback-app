# Product Feedback App

An intuitive feedback board where users can submit ideas, vote, comment, and track progress on a roadmap.

![Preview](./preview.jpg)

---

## Table of contents

- [Tech stack](#tech-stack)
- [Project layout](#project-layout)
- [Prerequisites](#prerequisites)
- [Environment variables](#environment-variables)
- [Local development](#local-development)
  - [Frontend (Next.js client)](#frontend-nextjs-client)
  - [Backend (Flask API)](#backend-flask-api)
- [Build & lint](#build--lint)
- [Deployment](#deployment)
  - [Frontend → Vercel](#frontend--vercel)
  - [Backend hosting options](#backend-hosting-options)
- [Troubleshooting](#troubleshooting)

---

## Tech stack

**Frontend (`client/`)**
- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [TanStack Query 5](https://tanstack.com/query/latest)
- [axios](https://axios-http.com/)
- [ESLint 9](https://eslint.org/) (flat config)

**Backend (`server/`)**
- [Flask 2](https://flask.palletsprojects.com/) + [Flask-RESTful](https://flask-restful.readthedocs.io/) + [Flask-CORS](https://flask-cors.readthedocs.io/)
- [SQLAlchemy 2](https://www.sqlalchemy.org/) + [SQLAlchemy-serializer](https://pypi.org/project/SQLAlchemy-serializer/)
- [Flask-Migrate](https://flask-migrate.readthedocs.io/) (Alembic)
- SQLite (dev default). For production, use Postgres/MySQL — see [Backend hosting options](#backend-hosting-options).

---

## Project layout

```
.
├── client/        # Next.js frontend (deploys to Vercel)
│   ├── app/       # App Router pages
│   ├── components/
│   ├── layouts/
│   ├── lib/       # shared utilities (incl. API_BASE_URL)
│   ├── query/     # TanStack Query hooks
│   ├── store/     # React context
│   ├── .env.example
│   └── vercel.json
├── server/        # Flask REST API
│   ├── app.py
│   ├── config.py
│   ├── models.py
│   ├── seed.py
│   └── migrations/
├── Pipfile        # Python deps (pipenv)
└── README.md
```

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 20.x LTS or newer (Next.js 16 requires Node ≥20) |
| npm | 10+ (ships with Node 20) |
| Python | 3.10+ |
| pipenv | latest |

---

## Environment variables

Copy [client/.env.example](client/.env.example) to `client/.env.local` and adjust:

```bash
cp client/.env.example client/.env.local
```

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | yes | Base URL of the Flask backend, no trailing slash. | `http://127.0.0.1:5555` (local) / `https://api.example.com` (prod) |

The variable is read once in [client/lib/api.ts](client/lib/api.ts). If unset, the client defaults to `http://127.0.0.1:5555`.

---

## Local development

### Frontend (Next.js client)

```bash
cd client
npm install
cp .env.example .env.local   # only first time
npm run dev                  # http://localhost:3005
```

### Backend (Flask API)

```bash
cd server
pipenv install
pipenv shell
flask db upgrade             # apply migrations
python seed.py               # seed sample data (optional)
python app.py                # http://127.0.0.1:5555
```

The Flask app listens on port `5555` by default. Make sure this matches `NEXT_PUBLIC_API_URL` in the client.

---

## Build & lint

From `client/`:

```bash
npm run build       # production build
npm run start       # serve the built app on :3005
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
```

---

## Deployment

### Frontend → Vercel

1. **Import the repo** at https://vercel.com/new.
2. In **Project Settings → General**, set **Root Directory** to `client`.
3. Framework preset auto-detects as **Next.js** (no override needed).
4. In **Settings → Environment Variables**, add:

   | Name | Value | Environments |
   |------|-------|--------------|
   | `NEXT_PUBLIC_API_URL` | URL of your deployed Flask backend | Production, Preview, Development |

5. Deploy.

The build command resolves to `npm run build`, output goes to `client/.next`, and `client/vercel.json` keeps the framework pinned in case dashboard detection changes.

> **Important**: Because `NEXT_PUBLIC_API_URL` is inlined at build time, you must trigger a new deploy after changing it.

### Backend hosting options

The Flask app **cannot run on Vercel as-is**: it uses SQLite, but Vercel's serverless filesystem is read-only and ephemeral. Pick one of:

| Option | Notes |
|--------|-------|
| **[Render](https://render.com/) / [Railway](https://railway.app/) / [Fly.io](https://fly.io/)** | Recommended. Deploy `server/` as a long-running web service. Switch `SQLALCHEMY_DATABASE_URI` (in [server/config.py](server/config.py)) to a managed Postgres URL exposed via env var. |
| **Self-hosted (VPS / Docker)** | Run with `gunicorn -w 4 -b 0.0.0.0:5555 app:app`. Provide a persistent DB. |
| **Rewrite as Next.js API routes + Vercel Postgres** | Fully Vercel-native but a larger refactor — not part of this repo today. |

Whichever you pick, ensure CORS allows your Vercel domain (`Flask-CORS` is already wired in [server/config.py](server/config.py)).

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Client builds but pages show an infinite loading spinner. | `NEXT_PUBLIC_API_URL` is unreachable. Check the backend is up and CORS is allowing your origin. |
| `Module not found: '*.svg'` from `tsc`. | Make sure [client/global.d.ts](client/global.d.ts) is included in `tsconfig.json`. |
| Hydration warning about `<button>` inside `<a>`. | Already fixed; if it returns, audit any new `<Link>` wrappers. |
| Vercel build fails with `npm error code EUNSUPPORTEDPROTOCOL`. | Delete any stale `yarn.lock`; this repo uses `package-lock.json`. |
| `next lint` says "Invalid project directory". | Next 16 removed `next lint`; this repo runs ESLint directly via `npm run lint` (flat config at `client/eslint.config.mjs`). |
| Turbopack "multiple lockfiles" warning. | `turbopack.root` is pinned in `next.config.js`. Make sure there is no stray `package-lock.json` at the repository root. |
| Backend on Render returns 500 from `/feedbacks`. | Run `flask db upgrade` on the host and verify `SQLALCHEMY_DATABASE_URI` points to your managed DB, not the default SQLite. |
| Image from `randomuser.me` blocked. | Confirmed allowed in [client/next.config.js](client/next.config.js). Add more hosts there as needed. |

---

## Contact

- Website — [Jay Lin](https://tingchiehlin.com/)
- LinkedIn — [Jay Lin](https://www.linkedin.com/in/cooloojayoo/)
