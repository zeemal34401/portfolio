import { PrismPreview } from "./PrismPreview";
import { MetricHivePreview, MetricHiveLegacyPreview, MetricHiveStatesPreview } from "./MetricHivePreview";
import { RelayPreview, RelayNotePreview, RelayOfflinePreview } from "./RelayPreview";
import { CortexPreview, CortexTrustPreview } from "./CortexPreview";
import {
  VaultlinePreview,
  VaultlineTransferPreview,
  VaultlineOnboardingPreview,
  VaultlineFraudPreview,
} from "./VaultlinePreview";

export function ProjectPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "prism-ui":
      return <PrismPreview />;
    case "metrichive":
      return (
        <div className="space-y-8">
          <MetricHivePreview />
          <div className="grid gap-6 lg:grid-cols-2">
            <MetricHiveLegacyPreview />
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">After — Role-based views</p>
              <p className="mt-2 text-sm text-muted">
                Executive overview with 4 KPIs, alert inbox, and export — actionable in under 2 minutes.
              </p>
            </div>
          </div>
          <MetricHiveStatesPreview />
        </div>
      );
    case "relay":
      return (
        <div className="grid gap-8 lg:grid-cols-3">
          <RelayPreview />
          <RelayNotePreview />
          <RelayOfflinePreview />
        </div>
      );
    case "cortex":
      return (
        <div className="space-y-8">
          <CortexPreview />
          <CortexTrustPreview />
        </div>
      );
    case "vaultline":
      return (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <VaultlinePreview />
          <VaultlineOnboardingPreview />
          <VaultlineTransferPreview />
          <VaultlineFraudPreview />
        </div>
      );
    default:
      return null;
  }
}
