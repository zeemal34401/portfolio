export function RelayPreview() {
  const visits = [
    { time: "9:00 AM", company: "Acme Corp", contact: "Jane Miller", status: "Up next" },
    { time: "11:30 AM", company: "Nova Systems", contact: "Tom Reed", status: "Scheduled" },
    { time: "2:00 PM", company: "Bright Labs", contact: "Lisa Park", status: "Scheduled" },
  ];

  return (
    <div id="relay-preview" className="mx-auto max-w-[390px]">
      <div className="screen-shadow overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="flex items-center justify-between bg-[#7C3AED] px-6 pb-4 pt-3 text-white">
          <span className="text-xs">9:41</span>
          <div className="h-6 w-20 rounded-full bg-black/20" />
          <span className="text-xs">100%</span>
        </div>
        <div className="px-5 pb-6 pt-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Thursday, Jun 20</p>
              <h3 className="text-xl font-semibold text-slate-900">Today&apos;s visits</h3>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE9FE] text-sm font-semibold text-[#7C3AED]">
              JB
            </div>
          </div>
          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2">
            <p className="text-xs font-medium text-emerald-800">Online · Synced 2 min ago</p>
          </div>
          <div className="space-y-3">
            {visits.map((v, i) => (
              <div
                key={v.company}
                className={`rounded-2xl border p-4 ${i === 0 ? "border-[#7C3AED] bg-[#EDE9FE]/50" : "border-slate-200"}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-slate-500">{v.time}</p>
                    <p className="font-semibold text-slate-900">{v.company}</p>
                    <p className="text-sm text-slate-500">{v.contact}</p>
                  </div>
                  {i === 0 && (
                    <span className="rounded-full bg-[#7C3AED] px-2 py-0.5 text-[10px] font-medium text-white">
                      {v.status}
                    </span>
                  )}
                </div>
                {i === 0 && (
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 rounded-xl bg-[#7C3AED] py-2.5 text-sm font-medium text-white">
                      Check in
                    </button>
                    <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-600">
                      Navigate
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-around border-t border-slate-200 px-4 py-3 text-[10px] text-slate-400">
          {["Home", "Tasks", "Notes", "Profile"].map((tab, i) => (
            <span key={tab} className={i === 0 ? "font-semibold text-[#7C3AED]" : ""}>
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RelayNotePreview() {
  return (
    <div className="mx-auto max-w-[390px]">
      <div className="screen-shadow overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-5 py-4">
          <p className="text-xs text-slate-500">Visit · Acme Corp</p>
          <h3 className="text-lg font-semibold">Capture notes</h3>
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-center rounded-2xl bg-[#EDE9FE] py-10">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#7C3AED] text-2xl text-white">
                🎤
              </div>
              <p className="text-sm font-medium text-[#7C3AED]">Tap to record</p>
              <p className="text-xs text-slate-500">Auto-transcribed · 0:00</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-slate-500">Suggested action items</p>
            {["Send pricing deck by EOD", "Schedule demo with IT lead", "Follow up on Q3 budget"].map((item) => (
              <label key={item} className="mb-2 flex items-center gap-2 rounded-lg border border-slate-200 p-3 text-sm">
                <input type="checkbox" defaultChecked readOnly className="rounded" />
                {item}
              </label>
            ))}
          </div>
          <button className="w-full rounded-xl bg-[#7C3AED] py-3 text-sm font-medium text-white">Save & create tasks</button>
        </div>
      </div>
    </div>
  );
}

export function RelayOfflinePreview() {
  return (
    <div className="mx-auto max-w-[390px]">
      <div className="screen-shadow overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="bg-amber-500 px-4 py-2 text-center text-xs font-medium text-white">
          Offline · Notes will sync when connected
        </div>
        <div className="p-5 text-center">
          <p className="text-4xl">📡</p>
          <p className="mt-2 font-semibold">You&apos;re offline</p>
          <p className="mt-1 text-sm text-slate-500">2 notes queued for sync</p>
          <button className="mt-4 rounded-xl border border-slate-200 px-4 py-2 text-sm">Retry sync</button>
        </div>
      </div>
    </div>
  );
}
