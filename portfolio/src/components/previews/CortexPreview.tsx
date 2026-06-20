export function CortexPreview() {
  const sources = [
    { title: "Competitor Q2 roadmap.pdf", page: "p. 12", snippet: "Enterprise tier launching AI features in Q3…" },
    { title: "Support tickets — theme analysis", page: "142 tickets", snippet: "Top request: bulk export API…" },
    { title: "Internal spec v2.4", page: "§4.2", snippet: "Integration limits capped at 10K calls/day…" },
  ];

  return (
    <div id="cortex-preview" className="screen-shadow overflow-hidden rounded-2xl bg-white">
      <div className="flex min-h-[480px]">
        <aside className="hidden w-48 shrink-0 border-r border-slate-200 bg-slate-50 p-4 md:block">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0891B2] text-xs font-bold text-white">C</div>
            <span className="font-semibold text-slate-900">Cortex</span>
          </div>
          <div className="space-y-1 text-sm">
            {["Workspace", "Sources", "Exports", "Settings"].map((item, i) => (
              <div key={item} className={`rounded-lg px-3 py-2 ${i === 0 ? "bg-white font-medium shadow-sm" : "text-slate-500"}`}>
                {item}
              </div>
            ))}
          </div>
        </aside>
        <main className="flex flex-1 flex-col">
          <div className="border-b border-slate-200 px-6 py-4">
            <p className="text-xs text-slate-500">Research session · Competitive brief</p>
            <h3 className="text-lg font-semibold text-slate-900">What are competitors shipping in AI this quarter?</h3>
          </div>
          <div className="flex flex-1 flex-col lg:flex-row">
            <div className="flex-1 space-y-4 p-6">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-600">You</p>
                <p className="mt-1 text-sm text-slate-900">Summarize AI feature launches from our top 3 competitors this quarter.</p>
              </div>
              <div className="rounded-2xl border border-[#0891B2]/20 bg-[#CFFAFE]/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-[#0891B2] px-2 py-0.5 text-[10px] font-medium text-white">Cortex</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">High confidence</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-800">
                  Three competitors launched AI-assisted workflows in Q2: NovaSystems added copilot search [1], PeakAnalytics
                  shipped auto-summarization for reports [2], and CloudNine opened a beta API for custom agents [3].
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="rounded-lg bg-[#0891B2] px-3 py-1.5 text-xs font-medium text-white">Compare sources</button>
                  <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600">Regenerate</button>
                </div>
              </div>
              <div className="flex gap-2">
                {["Draft summary doc", "Export to Notion", "Create Jira epic"].map((action) => (
                  <button key={action} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50">
                    {action}
                  </button>
                ))}
              </div>
            </div>
            <aside className="w-full border-t border-slate-200 bg-slate-50 p-4 lg:w-72 lg:border-l lg:border-t-0">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Sources (3)</p>
              <div className="space-y-2">
                {sources.map((s, i) => (
                  <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-3">
                    <div className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0891B2] text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-medium text-slate-900">{s.title}</p>
                        <p className="text-[10px] text-slate-500">{s.page}</p>
                        <p className="mt-1 text-xs text-slate-600">{s.snippet}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

export function CortexTrustPreview() {
  const states = [
    { label: "Low confidence", desc: "Answer may be incomplete — 2 of 5 sources agree", color: "border-amber-200 bg-amber-50" },
    { label: "Blocked response", desc: "Cannot process request — contains sensitive PII", color: "border-rose-200 bg-rose-50" },
    { label: "Awaiting approval", desc: "Review summary before export to Notion", color: "border-blue-200 bg-blue-50" },
  ];
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {states.map((s) => (
        <div key={s.label} className={`screen-shadow rounded-xl border p-4 ${s.color}`}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">{s.label}</p>
          <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
