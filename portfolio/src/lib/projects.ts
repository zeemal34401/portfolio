export type ProjectMetric = { label: string; value: string; detail?: string };

export type ProjectSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  order: number;
  name: string;
  tagline: string;
  category: string;
  role: string;
  timeline: string;
  tools: string[];
  problem: string;
  summary: string;
  metrics: ProjectMetric[];
  personas: { name: string; role: string; goal: string }[];
  process: ProjectSection[];
  outcomes: ProjectSection[];
  nextSteps: string[];
  figmaFile: string;
  prototypeUrl: string;
  accent: string;
  accentMuted: string;
  proves: string;
};

export const projects: Project[] = [
  {
    slug: "prism-ui",
    order: 3,
    name: "Prism UI",
    tagline: "Enterprise design system for scalable product teams",
    category: "Design System",
    role: "Lead Product Designer",
    timeline: "6 weeks",
    tools: ["Figma", "Variables", "Auto Layout", "Dev Mode"],
    problem:
      "A growing B2B suite shipped inconsistent UI across three products, slowing development and eroding user trust.",
    summary:
      "Built a token-first design system with 18+ production components, light/dark theming, documentation, and dev handoff patterns used across web and mobile surfaces.",
    metrics: [
      { label: "Component reuse", value: "74%", detail: "of new screens built from system components" },
      { label: "Design–dev cycle", value: "−38%", detail: "reduction in UI clarification tickets" },
      { label: "Coverage", value: "18+", detail: "core components with variant matrices" },
    ],
    personas: [
      { name: "Design lead", role: "Design Systems Owner", goal: "Ship consistent UI without bottlenecking product teams" },
      { name: "Frontend engineer", role: "Platform Engineer", goal: "Map tokens and variants to code with zero ambiguity" },
    ],
    process: [
      {
        title: "Audit & token architecture",
        body: "Audited three products for visual drift, then defined semantic color, type, spacing, and elevation tokens with explicit light/dark modes.",
        bullets: ["Semantic naming: color/{mode}/{category}/{name}", "WCAG AA contrast validation on all text pairs", "Grid system for 4/8/12 column layouts"],
      },
      {
        title: "Component build order",
        body: "Prioritized primitives first (buttons, inputs), then compound patterns (table toolbar, page header) to unblock the highest-traffic product flows.",
      },
      {
        title: "Documentation & governance",
        body: "Added do/don't frames, anatomy specs, and component status labels (Ready / In review) so teams could self-serve safely.",
      },
    ],
    outcomes: [
      {
        title: "Production-adjacent Figma library",
        body: "Every component uses auto layout, variants, and variable bindings — not flattened mockups.",
      },
      {
        title: "Dev handoff layer",
        body: "Dedicated frames document spacing, states, responsive behavior, and how engineers should consume tokens in code.",
      },
    ],
    nextSteps: [
      "Expand data visualization primitives (charts, sparklines)",
      "Add motion tokens for micro-interactions",
      "Pilot Code Connect mappings for top 8 components",
    ],
    figmaFile: "03 Prism UI — Case Study",
    prototypeUrl: "#prism-preview",
    accent: "#2563EB",
    accentMuted: "#EFF6FF",
    proves: "Professional, team-ready Figma skills",
  },
  {
    slug: "metrichive",
    order: 1,
    name: "MetricHive",
    tagline: "Revenue operations dashboard redesign",
    category: "SaaS / B2B",
    role: "Senior Product Designer",
    timeline: "8 weeks",
    tools: ["Figma", "FigJam", "Prototyping", "User Interviews"],
    problem:
      "Mid-market SaaS teams couldn't act on churn and expansion signals because the legacy dashboard buried insights under 40+ undifferentiated metrics.",
    summary:
      "Redesigned MetricHive around role-based views, saved filters, and an alert-first workflow — reducing time-to-insight from 8 minutes to under 2.",
    metrics: [
      { label: "Time to insight", value: "8m → 2m", detail: "executive morning review" },
      { label: "Alert triage", value: "47% faster", detail: "median resolution time" },
      { label: "Task completion", value: "92%", detail: "saved-view workflows" },
    ],
    personas: [
      { name: "Sarah Chen", role: "VP Revenue Operations", goal: "Spot portfolio risk in under 5 minutes each morning" },
      { name: "Marcus Webb", role: "Customer Success Manager", goal: "Prioritize at-risk accounts before QBR" },
      { name: "Elena Torres", role: "Executive Sponsor", goal: "Understand ARR health without operational noise" },
    ],
    process: [
      {
        title: "Legacy audit",
        body: "Documented cognitive overload in the existing dashboard: duplicate KPIs, no action hierarchy, and filters that reset on navigation.",
      },
      {
        title: "IA & role-based views",
        body: "Restructured navigation around jobs-to-be-done — Exec overview, RevOps pipeline health, and Admin alert management — instead of feature modules.",
      },
      {
        title: "Exploration & validation",
        body: "Tested three layout directions. Chose a card + table hybrid that supports both scan (exec) and drill-down (CSM) without separate products.",
      },
    ],
    outcomes: [
      {
        title: "Alert-first workflow",
        body: "Inbox pattern for at-risk accounts with severity, owner, and suggested next action — replacing passive chart walls.",
      },
      {
        title: "Full state coverage",
        body: "Empty, loading, partial sync, error, and view-only permission states designed alongside happy paths.",
      },
    ],
    nextSteps: [
      "Validate saved views with 5 RevOps teams in usability sessions",
      "Add cohort comparison mode for expansion analysis",
      "Ship mobile exec digest for weekly ARR snapshots",
    ],
    figmaFile: "01 MetricHive — Case Study",
    prototypeUrl: "#metrichive-preview",
    accent: "#0D9488",
    accentMuted: "#CCFBF1",
    proves: "Complex UI, product thinking",
  },
  {
    slug: "relay",
    order: 2,
    name: "Relay",
    tagline: "Field sales companion — capture context in the moment",
    category: "Mobile App",
    role: "Senior Product Designer",
    timeline: "7 weeks",
    tools: ["Figma", "Prototyping", "iOS HIG", "Field Research"],
    problem:
      "Enterprise reps lost deals because CRM notes happened hours after visits — context, nuance, and follow-up urgency were gone.",
    summary:
      "Designed an offline-first mobile flow for visit check-in, voice notes, and same-day task creation — raising in-field note capture from 34% to 81%.",
    metrics: [
      { label: "Note capture", value: "34% → 81%", detail: "during or immediately after visits" },
      { label: "Follow-up SLA", value: "2.4×", detail: "increase in same-day follow-ups" },
      { label: "Offline sync", value: "99.2%", detail: "successful sync after reconnect" },
    ],
    personas: [
      { name: "Jordan Blake", role: "Enterprise Account Executive", goal: "Capture visit context before leaving the parking lot" },
      { name: "Priya Nair", role: "Sales Manager", goal: "See rep activity and follow-up quality in real time" },
    ],
    process: [
      {
        title: "Contextual inquiry",
        body: "Shadowed 6 field reps. Key insight: thumbs-only interaction in cars and lobbies — voice-first capture beat typed notes 4:1.",
      },
      {
        title: "Flow design",
        body: "Mapped morning plan → visit check-in → note + action items → task queue → end-of-day recap as a single coherent daily loop.",
      },
      {
        title: "Platform patterns",
        body: "Primary design on iOS with annotated Android adaptations for navigation and gesture differences.",
      },
    ],
    outcomes: [
      {
        title: "Offline-first UX",
        body: "Persistent offline banner, queued sync states, and conflict resolution copy that sets expectations without blocking work.",
      },
      {
        title: "Prototype-ready flows",
        body: "Interactive prototype covers the hero visit workflow with realistic transitions between capture and task creation.",
      },
    ],
    nextSteps: [
      "Add manager coaching view with note quality signals",
      "Explore CarPlay-safe voice capture mode",
      "Run A/B on action-item extraction prompts",
    ],
    figmaFile: "02 Relay — Case Study",
    prototypeUrl: "#relay-preview",
    accent: "#7C3AED",
    accentMuted: "#EDE9FE",
    proves: "UX flow + interaction design",
  },
  {
    slug: "cortex",
    order: 4,
    name: "Cortex",
    tagline: "AI research copilot with citations you can trust",
    category: "AI Product",
    role: "Senior Product Designer",
    timeline: "6 weeks",
    tools: ["Figma", "FigJam", "AI UX Patterns", "Prototyping"],
    problem:
      "PMs spent hours synthesizing competitor docs and support tickets — generic chat UIs produced confident-sounding answers with no verifiable sources.",
    summary:
      "Designed a citation-first AI workspace where every answer links to sources, supports comparison, and exports to Notion/Jira only after human approval.",
    metrics: [
      { label: "Research time", value: "4h → 45m", detail: "per competitive brief" },
      { label: "Source verification", value: "89%", detail: "users verify citations before sharing" },
      { label: "Export adoption", value: "67%", detail: "sessions end in doc export" },
    ],
    personas: [
      { name: "Alex Kim", role: "Senior Product Manager", goal: "Synthesize competitor intel with cited sources before roadmap review" },
      { name: "Sam Rivera", role: "UX Research Lead", goal: "Turn ticket themes into evidence-backed insights" },
    ],
    process: [
      {
        title: "Trust UX principles",
        body: "Defined non-negotiables: always show sources, surface confidence, require approval before external export, and never hide uncertainty.",
      },
      {
        title: "Multi-step agent workflow",
        body: "Designed ask → retrieve → cite → compare → draft → approve → export as explicit UI stages, not a black-box chat bubble.",
      },
      {
        title: "Failure modes",
        body: "Low-confidence, blocked, and unsafe responses get distinct UI treatment — not generic error toasts.",
      },
    ],
    outcomes: [
      {
        title: "Source panel",
        body: "Side-by-side citations with snippet highlighting and one-click jump to original context.",
      },
      {
        title: "Human-in-the-loop export",
        body: "Summary editor with regenerate controls and an explicit approval step before pushing to Notion or Jira.",
      },
    ],
    nextSteps: [
      "Add team workspace with shared source libraries",
      "Instrument citation click-through for trust analytics",
      "Explore inline diff view for regenerated summaries",
    ],
    figmaFile: "04 Cortex — Case Study",
    prototypeUrl: "#cortex-preview",
    accent: "#0891B2",
    accentMuted: "#CFFAFE",
    proves: "Modern, in-demand AI skill set",
  },
  {
    slug: "vaultline",
    order: 5,
    name: "Vaultline",
    tagline: "Personal finance with trust built into every transfer",
    category: "Fintech",
    role: "Senior Product Designer",
    timeline: "8 weeks",
    tools: ["Figma", "Prototyping", "Compliance Review", "Accessibility"],
    problem:
      "Users abandoned the app during onboarding and transfers — unclear fees, anxiety-inducing flows, and fragile identity verification killed conversion.",
    summary:
      "Redesigned onboarding, budgeting, and transfers with step-up auth, transparent fee breakdowns, and accessible financial data — raising onboarding completion from 41% to 78%.",
    metrics: [
      { label: "Onboarding", value: "41% → 78%", detail: "completion rate" },
      { label: "Transfer drop-off", value: "−33%", detail: "abandonment at review step" },
      { label: "Support tickets", value: "−52%", detail: "fee-related inquiries" },
    ],
    personas: [
      { name: "Morgan Ellis", role: "Freelance Designer", goal: "See cash flow and stay within budget without spreadsheet anxiety" },
      { name: "David Okonkwo", role: "Small Business Owner", goal: "Transfer funds securely with zero surprise fees" },
    ],
    process: [
      {
        title: "Trust pattern library",
        body: "Created reusable patterns for fee transparency, step-up authentication, fraud warnings, and session timeout — applied consistently across flows.",
      },
      {
        title: "KYC-lite onboarding",
        body: "Reduced perceived friction with progressive disclosure: welcome → identity → link account → budget setup, with save-and-resume.",
      },
      {
        title: "Accessibility for financial data",
        body: "Large-type currency formatting, high-contrast charts, and screen-reader-friendly transaction tables.",
      },
    ],
    outcomes: [
      {
        title: "Transfer flow",
        body: "Amount → review (fees explicit) → biometric confirm → receipt with support path — each step reduces anxiety, not adds it.",
      },
      {
        title: "Compliance-minded copy",
        body: "Microcopy reviewed for clarity without legal jargon; fraud and verification failures include actionable recovery paths.",
      },
    ],
    nextSteps: [
      "Add joint account and shared budget flows",
      "Localize fee copy for EU PSD2 requirements",
      "Run moderated tests on fraud warning comprehension",
    ],
    figmaFile: "05 Vaultline — Case Study",
    prototypeUrl: "#vaultline-preview",
    accent: "#059669",
    accentMuted: "#D1FAE5",
    proves: "Business impact + trust UX",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
