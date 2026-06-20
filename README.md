# Senior Figma Portfolio

Five senior-level product design case studies plus a portfolio website.

## Contents

| Folder | Description |
|--------|-------------|
| [`portfolio/`](portfolio/) | Next.js portfolio site with live UI previews |
| [`design/`](design/) | Figma specs, tokens, screen inventories |
| [`docs/`](docs/) | Export checklist |

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Projects

1. **Prism UI** — Enterprise design system (18+ components, light/dark tokens)
2. **MetricHive** — SaaS revenue ops dashboard redesign
3. **Relay** — Field sales mobile app (offline-first flows)
4. **Cortex** — AI research copilot with citation-first trust UX
5. **Vaultline** — Fintech onboarding, budgeting, secure transfers

## Figma files

Figma MCP was unavailable during build. Use [`design/figma-setup/README.md`](design/figma-setup/README.md) to recreate the five case-study files. Live previews on the website match the intended Figma frames.

## Customize

- Replace **Your Name**, email, and LinkedIn in `portfolio/src/components/layout/` and About/Contact pages
- Update Figma prototype URLs in `portfolio/src/lib/projects.ts` once files are created

## Deploy

```bash
cd portfolio && npm run build
```

Deploy the `portfolio/` folder to Vercel or any Next.js host.
