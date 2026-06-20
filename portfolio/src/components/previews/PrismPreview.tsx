"use client";

type BtnProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
};

export function PrismButton({ children, variant = "primary", size = "md" }: BtnProps) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-colors";
  const sizes = { sm: "h-8 px-3 text-xs", md: "h-10 px-4 text-sm", lg: "h-12 px-6 text-base" };
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
    secondary: "border border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F8FAFC]",
    ghost: "text-[#475569] hover:bg-[#F1F5F9]",
    danger: "bg-[#DC2626] text-white hover:bg-[#B91C1C]",
  };
  return <button className={`${base} ${sizes[size]} ${variants[variant]}`}>{children}</button>;
}

export function PrismInput({ label, placeholder, error }: { label: string; placeholder: string; error?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-[#475569]">{label}</label>
      <input
        readOnly
        placeholder={placeholder}
        className={`h-10 w-full rounded-lg border bg-white px-3 text-sm outline-none ${
          error ? "border-[#DC2626]" : "border-[#E2E8F0] focus:border-[#2563EB]"
        }`}
      />
      {error && <p className="text-xs text-[#DC2626]">{error}</p>}
    </div>
  );
}

export function PrismBadge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "success" | "warning" | "error" | "info" }) {
  const tones = {
    neutral: "bg-[#F1F5F9] text-[#475569]",
    success: "bg-[#ECFDF5] text-[#059669]",
    warning: "bg-[#FFFBEB] text-[#D97706]",
    error: "bg-[#FEF2F2] text-[#DC2626]",
    info: "bg-[#F0F9FF] text-[#0284C7]",
  };
  return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}

export function PrismPreview() {
  const colors = [
    { name: "Brand", hex: "#2563EB" },
    { name: "Success", hex: "#059669" },
    { name: "Warning", hex: "#D97706" },
    { name: "Error", hex: "#DC2626" },
    { name: "Neutral", hex: "#64748B" },
  ];

  return (
    <div id="prism-preview" className="screen-shadow overflow-hidden rounded-2xl bg-white">
      <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#64748B]">Prism UI</p>
            <h3 className="text-lg font-semibold text-[#0F172A]">Design System — Foundations & Components</h3>
          </div>
          <PrismBadge tone="success">Ready</PrismBadge>
        </div>
      </div>
      <div className="grid gap-6 p-6 lg:grid-cols-2">
        <section className="space-y-4">
          <h4 className="text-sm font-semibold text-[#0F172A]">Color tokens (light)</h4>
          <div className="grid grid-cols-5 gap-2">
            {colors.map((c) => (
              <div key={c.name} className="space-y-1">
                <div className="h-12 rounded-lg" style={{ background: c.hex }} />
                <p className="text-[10px] font-medium text-[#475569]">{c.name}</p>
                <p className="font-mono text-[10px] text-[#94A3B8]">{c.hex}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#0F172A] p-4">
            <p className="mb-2 text-xs font-medium text-[#94A3B8]">Dark mode surface</p>
            <div className="flex gap-2">
              {["#0F172A", "#1E293B", "#334155", "#3B82F6"].map((hex) => (
                <div key={hex} className="h-8 flex-1 rounded-md" style={{ background: hex }} />
              ))}
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h4 className="text-sm font-semibold text-[#0F172A]">Typography scale</h4>
          <div className="space-y-2 rounded-xl border border-[#E2E8F0] p-4">
            <p className="text-3xl font-semibold tracking-tight text-[#0F172A]">Display MD</p>
            <p className="text-xl font-semibold text-[#0F172A]">Heading SM</p>
            <p className="text-base text-[#475569]">Body MD — The quick brown fox jumps over the lazy dog.</p>
            <p className="text-xs font-medium uppercase tracking-wide text-[#94A3B8]">Label SM</p>
          </div>
        </section>
        <section className="space-y-3">
          <h4 className="text-sm font-semibold text-[#0F172A]">Buttons</h4>
          <div className="flex flex-wrap gap-2">
            <PrismButton>Primary</PrismButton>
            <PrismButton variant="secondary">Secondary</PrismButton>
            <PrismButton variant="ghost">Ghost</PrismButton>
            <PrismButton variant="danger">Danger</PrismButton>
          </div>
        </section>
        <section className="space-y-3">
          <h4 className="text-sm font-semibold text-[#0F172A]">Form inputs</h4>
          <PrismInput label="Email" placeholder="you@company.com" />
          <PrismInput label="Password" placeholder="••••••••" error="Must be at least 8 characters" />
        </section>
        <section className="space-y-3 lg:col-span-2">
          <h4 className="text-sm font-semibold text-[#0F172A]">Data table toolbar pattern</h4>
          <div className="overflow-hidden rounded-xl border border-[#E2E8F0]">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
              <div className="flex gap-2">
                <PrismButton size="sm" variant="secondary">Filter</PrismButton>
                <PrismButton size="sm" variant="ghost">Saved views</PrismButton>
              </div>
              <PrismButton size="sm">Export</PrismButton>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-xs uppercase text-[#64748B]">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Owner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Acme Corp", "Active", "Sarah C."],
                  ["Nova Systems", "At risk", "Marcus W."],
                  ["Bright Labs", "Active", "Elena T."],
                ].map(([name, status, owner]) => (
                  <tr key={name} className="border-t border-[#E2E8F0]">
                    <td className="px-4 py-3 font-medium text-[#0F172A]">{name}</td>
                    <td className="px-4 py-3">
                      <PrismBadge tone={status === "At risk" ? "warning" : "success"}>{status}</PrismBadge>
                    </td>
                    <td className="px-4 py-3 text-[#475569]">{owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
