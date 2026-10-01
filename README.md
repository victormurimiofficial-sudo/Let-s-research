# Let’s Research

Research services and a research workspace for turning questions into evidence.

## Stack
- Next.js 15 Pages Router, React 19 and TypeScript
- Static export for deployment
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
npm run typecheck
npm run build
``

The build uses Next.js static export. The output is written to `out/`. In Vercel, use the Next.js framework preset and the repository's default build settings unless deployment validation indicates otherwise.

## Public routes
- `/` Home and the ASK → DESIGN → COLLECT → ANALYZE → ACT story
- `/about/` About
- `/services/` Capabilities
- `/blog/` Searchable Research Library
- `/blog/[slug]/` Pre-rendered research articles
- `/start/` Research intake; prepares an email for the visitor to review and send
- `/contact/` Contact information
- `/login/` Workspace access information
- `/signup/` Workspace request information
- `/dashboard/` Workspace interface preview

## Production status
The public pages and visual shell are in place. Secure authentication, persistent client/project records, document storage, messaging, payments and an admin content editor still need to be connected before the workspace can be treated as a live multi-user platform. The dashboard currently contains illustrative preview data, not live client records.

Do not collect passwords until secure authentication and server-side session handling are implemented. Do not claim that research briefs have been received unless a persistent submission endpoint confirms receipt.

## Contact
Victormurimiofficial@gmail.com · +254 111 944 791
