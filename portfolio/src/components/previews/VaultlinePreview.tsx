export function VaultlinePreview() {
  const categories = [
    { name: "Housing", spent: 1200, budget: 1500 },
    { name: "Food", spent: 420, budget: 500 },
    { name: "Transport", spent: 180, budget: 200 },
    { name: "Business", spent: 890, budget: 1000 },
  ];

  return (
    <div id="vaultline-preview" className="screen-shadow mx-auto max-w-[390px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
      <div className="bg-[#059669] px-5 pb-8 pt-4 text-white">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-semibold">Vaultline</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs">ME</div>
        </div>
        <p className="text-sm text-emerald-100">Available balance</p>
        <p className="text-3xl font-semibold tracking-tight">$8,247.50</p>
        <p className="mt-1 text-xs text-emerald-100">+$1,240 income · −$2,890 spent this month</p>
      </div>
      <div className="space-y-4 px-5 pb-6 pt-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="rounded-2xl bg-[#059669] py-3 text-sm font-medium text-white">Transfer</button>
          <button className="rounded-2xl border border-slate-200 py-3 text-sm font-medium text-slate-700">Add funds</button>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-semibold text-slate-900">Budgets</h4>
            <span className="text-xs text-[#059669]">On track</span>
          </div>
          <div className="space-y-3">
            {categories.map((c) => {
              const pct = Math.round((c.spent / c.budget) * 100);
              return (
                <div key={c.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-700">{c.name}</span>
                    <span className="text-slate-500">
                      ${c.spent} / ${c.budget}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${pct > 90 ? "bg-amber-500" : "bg-[#059669]"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function VaultlineTransferPreview() {
  return (
    <div className="mx-auto max-w-[390px]">
      <div className="screen-shadow overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-5 py-4">
          <p className="text-xs text-slate-500">Step 2 of 3</p>
          <h3 className="text-lg font-semibold">Review transfer</h3>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-2xl bg-slate-50 p-4 text-center">
            <p className="text-3xl font-semibold text-slate-900">$500.00</p>
            <p className="text-sm text-slate-500">To David Okonkwo · Checking ••4821</p>
          </div>
          <div className="space-y-2 rounded-xl border border-slate-200 p-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Transfer amount</span>
              <span className="font-medium">$500.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Fee</span>
              <span className="font-medium text-[#059669]">$0.00</span>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-2">
              <span className="font-medium text-slate-900">Total</span>
              <span className="font-semibold">$500.00</span>
            </div>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-800">
            No hidden fees. Amount shown is what David will receive.
          </div>
          <button className="w-full rounded-2xl bg-[#059669] py-3.5 text-sm font-medium text-white">
            Confirm with Face ID
          </button>
        </div>
      </div>
    </div>
  );
}

export function VaultlineOnboardingPreview() {
  return (
    <div className="mx-auto max-w-[390px]">
      <div className="screen-shadow overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="px-5 pt-6">
          <div className="mb-6 flex gap-1">
            {[1, 2, 3].map((step) => (
              <div key={step} className={`h-1 flex-1 rounded-full ${step <= 2 ? "bg-[#059669]" : "bg-slate-200"}`} />
            ))}
          </div>
          <h3 className="text-xl font-semibold">Verify your identity</h3>
          <p className="mt-1 text-sm text-slate-500">Required by law to keep your account secure.</p>
        </div>
        <div className="space-y-4 p-5">
          <div>
            <label className="text-xs font-medium text-slate-500">Legal name</label>
            <input readOnly value="Morgan Ellis" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500">Date of birth</label>
            <input readOnly value="03/15/1990" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" />
          </div>
          <div className="rounded-xl border-2 border-dashed border-slate-200 p-6 text-center">
            <p className="text-2xl">📄</p>
            <p className="mt-2 text-sm font-medium">Upload ID document</p>
            <p className="text-xs text-slate-500">Passport or driver&apos;s license</p>
          </div>
          <button className="w-full rounded-2xl bg-[#059669] py-3.5 text-sm font-medium text-white">Continue</button>
          <button className="w-full text-sm text-slate-500">Save and finish later</button>
        </div>
      </div>
    </div>
  );
}

export function VaultlineFraudPreview() {
  return (
    <div className="mx-auto max-w-[390px]">
      <div className="screen-shadow overflow-hidden rounded-[2rem] border border-rose-200 bg-white">
        <div className="bg-rose-50 px-5 py-6 text-center">
          <p className="text-3xl">⚠️</p>
          <h3 className="mt-2 text-lg font-semibold text-rose-900">Unusual activity detected</h3>
          <p className="mt-1 text-sm text-rose-700">We blocked a transfer to an unrecognized recipient.</p>
        </div>
        <div className="space-y-3 p-5">
          <button className="w-full rounded-2xl bg-rose-600 py-3 text-sm font-medium text-white">Review activity</button>
          <button className="w-full rounded-2xl border border-slate-200 py-3 text-sm text-slate-700">Contact support</button>
        </div>
      </div>
    </div>
  );
}
