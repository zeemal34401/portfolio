export function MetricHivePreview() {
  const kpis = [
    { label: "Net ARR", value: "$4.2M", change: "+12.4%", up: true },
    { label: "At-risk accounts", value: "14", change: "+3", up: false },
    { label: "Expansion pipeline", value: "$890K", change: "+8.1%", up: true },
    { label: "NRR", value: "108%", change: "+2pp", up: true },
  ];

  const alerts = [
    { account: "Nova Systems", severity: "High", issue: "Usage down 40% WoW", owner: "Marcus W." },
    { account: "Peak Analytics", severity: "Medium", issue: "Champion left company", owner: "Sarah C." },
    { account: "CloudNine", severity: "High", issue: "Renewal in 21 days", owner: "Marcus W." },
  ];

  return (
    <div id="metrichive-preview" className="screen-shadow overflow-hidden rounded-2xl bg-[#0B1220] text-white">
      <div className="flex min-h-[520px]">
        <aside className="hidden w-56 shrink-0 border-r border-white/10 bg-[#0F172A] p-4 md:block">
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0D9488] text-sm font-bold">M</div>
            <span className="font-semibold">MetricHive</span>
          </div>
          <nav className="space-y-1 text-sm text-slate-400">
            {["Overview", "Accounts", "Alerts", "Reports", "Settings"].map((item, i) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2 ${i === 0 ? "bg-[#0D9488]/20 text-[#5EEAD4]" : "hover:bg-white/5"}`}
              >
                {item}
              </div>
            ))}
          </nav>
          <div className="mt-8 rounded-lg border border-white/10 p-3">
            <p className="text-xs text-slate-500">Viewing as</p>
            <p className="text-sm font-medium">Executive</p>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">Good morning, Elena</p>
              <h3 className="text-2xl font-semibold tracking-tight">Portfolio health</h3>
            </div>
            <button className="rounded-lg bg-[#0D9488] px-4 py-2 text-sm font-medium text-white">Export report</button>
          </div>
          <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">{kpi.label}</p>
                <p className="mt-1 text-2xl font-semibold">{kpi.value}</p>
                <p className={`mt-1 text-xs ${kpi.up ? "text-emerald-400" : "text-rose-400"}`}>{kpi.change}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 lg:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-medium">ARR trend</h4>
                <span className="text-xs text-slate-500">Last 6 months</span>
              </div>
              <div className="flex h-32 items-end gap-2">
                {[40, 52, 48, 61, 58, 72].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-[#0D9488]/60" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 lg:col-span-2">
              <h4 className="mb-3 font-medium">Alert inbox</h4>
              <div className="space-y-2">
                {alerts.map((a) => (
                  <div key={a.account} className="rounded-lg border border-white/10 bg-[#0F172A] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{a.account}</p>
                      <span className={`text-[10px] font-medium ${a.severity === "High" ? "text-rose-400" : "text-amber-400"}`}>
                        {a.severity}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{a.issue}</p>
                    <p className="mt-2 text-[10px] text-slate-500">Owner: {a.owner}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export function MetricHiveLegacyPreview() {
  return (
    <div className="screen-shadow overflow-hidden rounded-2xl border-2 border-dashed border-rose-300 bg-slate-100 p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-rose-600">Before — Legacy dashboard</p>
      <div className="grid grid-cols-6 gap-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-8 rounded bg-slate-300/80 text-center text-[8px] leading-8 text-slate-600">
            KPI
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">40+ undifferentiated metrics · no action hierarchy · cognitive overload</p>
    </div>
  );
}

export function MetricHiveStatesPreview() {
  const states = [
    { title: "Empty", desc: "No accounts yet — import or connect CRM", tone: "bg-slate-50" },
    { title: "Loading", desc: "Syncing account data…", tone: "bg-blue-50" },
    { title: "Error", desc: "Sync failed — retry or contact support", tone: "bg-rose-50" },
    { title: "Restricted", desc: "View-only — request edit access", tone: "bg-amber-50" },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {states.map((s) => (
        <div key={s.title} className={`screen-shadow rounded-xl p-4 ${s.tone}`}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{s.title}</p>
          <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
