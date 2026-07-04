# Connect Figma MCP — then build all 5 portfolio projects

The Figma MCP server is **not connected** in Cursor yet. Once connected, ask the agent:

> "Build all 5 portfolio projects in Figma using MCP"

---

## Step 1: Install & open Figma desktop

1. Download **Figma desktop app** from [figma.com/downloads](https://www.figma.com/downloads/)
2. Sign in as **zeemal34401**
3. Keep Figma **open** while using Cursor

---

## Step 2: Enable Figma plugin in Cursor

1. Open **Cursor Settings** → **MCP** (or **Features → MCP Servers**)
2. Find **Figma** in the list of available MCP servers
3. **Enable** the Figma server
4. If prompted, install the **Figma for Cursor** plugin from the Cursor extension/marketplace
5. Restart Cursor if needed

---

## Step 3: Connect the plugin in Figma

1. In Figma desktop, open any file (or create a blank one)
2. Go to **Plugins** → search for **Cursor** or **Figma MCP**
3. Run the plugin and click **Connect to Cursor**
4. Confirm the connection shows as **active** in Cursor MCP settings

---

## Step 4: Verify connection

In Cursor chat, the agent should be able to call tools like:
- `create_new_file`
- `use_figma`

If you see `MCP server does not exist: figma`, the server is still not enabled.

---

## What will be created (automatically)

| # | Figma file name | Project |
|---|-----------------|---------|
| 1 | `03 Prism UI — Case Study` | Design system (tokens, 18+ components) |
| 2 | `01 MetricHive — Case Study` | SaaS dashboard |
| 3 | `02 Relay — Case Study` | Mobile app |
| 4 | `04 Cortex — Case Study` | AI copilot |
| 5 | `05 Vaultline — Case Study` | Fintech app |

Each file gets **7 pages**:
1. Cover & Summary  
2. Process — Research, IA, Exploration  
3. User Flows & Journey  
4. Final UI Screens  
5. Edge States  
6. Prototype Links  
7. Dev Handoff Specs  

---

## Specs already prepared (in this repo)

- `design/prism-ui/tokens.json` — color/type/spacing tokens  
- `design/prism-ui/components.md` — component specs  
- `design/*/screens.json` — frame inventories per project  
- `portfolio/src/components/previews/` — UI reference to recreate in Figma  

---

## After Figma files are created

Update `portfolio/src/lib/projects.ts` with real Figma prototype URLs:

```typescript
prototypeUrl: "https://www.figma.com/proto/..."
```

Then embed them on each case study page.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "MCP server does not exist: figma" | Enable Figma in Cursor MCP settings |
| Plugin won't connect | Restart Figma desktop + Cursor |
| Permission errors | Log into correct Figma account (zeemal34401) |
| Files not appearing | Check Figma **Drafts** or team folder in browser |

---

**Designer:** Zeemal Ejaz · zeemalejaz582@gmail.com
