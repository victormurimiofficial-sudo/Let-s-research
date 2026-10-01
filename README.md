# Let’s Research

Research services and a research workspace for turning questions into evidence.

## Stack
- Next.js 15 Pages Router, React 19 and TypeScript
- Vercel-ready full-stack deployment (server routes enabled)
- White and purple visual system
- PWA manifest and service-worker shell
- Searchable research library with pre-rendered article pages

## Local development
```bash
npm install
npm run dev
``

## Production checks
```bash
npm run build
npm run typecheck
``

Deploy as a standard Next.js application on Vercel. Do not set the output directory to `out/`; server routes are part of the intended architecture.

## Public routes
- `/` Home and the ASK → DESIGN → COLLECT → ANALYZE → ACT story
- `/about/` About
- `/services/` Capabilities
- `/blog/` Searchable Research Library
- `/blog/[slug]/` Pre-rendered research articles
- `/start/` Research intake; currently prepares an email for the visitor to review and send
- `/contact/` Contact information
- `/login/` Workspace access information
- `/signup/` Workspace request information
- `/dashboard/` Workspace interface preview
- `/api/health` Runtime health endpoint

## Production status
The public pages and visual shell are in place. Secure authentication, persistent client/project records, document storage, messaging, payments and an admin content editor still need to be connected before the workspace can be treated as a live multi-user platform. The dashboard currently contains illustrative preview data, not live client records.

Do not collect passwords until secure authentication and server-side session handling are implemented. Do not claim that research briefs have been received unless a persistent submission endpoint confirms receipt.

## Contact
Victormurimiofficial@gmail.com · +254 111 944 791
