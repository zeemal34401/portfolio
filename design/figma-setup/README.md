# Figma Portfolio Setup Guide

Figma MCP was unavailable during build. All design work is implemented as production-grade specs + live UI previews in the portfolio site. Use this guide to recreate files in Figma.

## Create 5 files

| File | Product |
|------|---------|
| `03 Prism UI — Case Study` | Design system |
| `01 MetricHive — Case Study` | SaaS dashboard |
| `02 Relay — Case Study` | Mobile app |
| `04 Cortex — Case Study` | AI copilot |
| `05 Vaultline — Case Study` | Fintech |

## Page structure (each file)

1. **Cover & Summary** — Project title, role, timeline, problem statement, outcome metrics
2. **Process** — Personas, journey map, IA, 2–3 exploration directions, decision rationale
3. **User Flows** — Flow diagrams with numbered steps
4. **Final UI** — Production screens at correct breakpoints
5. **Edge States** — Empty, loading, error, partial data, permissions
6. **Prototype** — Linked hero flows
7. **Dev Handoff** — Specs, spacing, component mapping

## Import tokens

Copy values from [`design/prism-ui/tokens.json`](../prism-ui/tokens.json) into Figma variables (light + dark modes).

## Screen inventories

- [`design/prism-ui/screens.json`](../prism-ui/screens.json)
- [`design/metrichive/screens.json`](../metrichive/screens.json)
- [`design/relay/screens.json`](../relay/screens.json)
- [`design/cortex/screens.json`](../cortex/screens.json)
- [`design/vaultline/screens.json`](../vaultline/screens.json)

## Live previews

Run the portfolio site — each case study page renders high-fidelity screen components you can screenshot or reference while building Figma frames.

```bash
cd portfolio && npm run dev
```

## Export checklist

See [`docs/export-checklist.md`](../docs/export-checklist.md).
