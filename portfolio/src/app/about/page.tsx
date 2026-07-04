import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PrimaryLink, SectionLabel } from "@/components/ui/SiteUi";
import { site } from "@/lib/site";

export const metadata = {
  title: `About — ${site.name}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <SectionLabel>About</SectionLabel>
        <h1 className="font-display mt-4 max-w-4xl text-5xl tracking-tight sm:text-6xl">
          Remote UI/UX designer for <span className="text-gradient-accent">products that ship.</span>
        </h1>
      </Reveal>

      <Reveal className="mt-12" delay={0.1}>
        <div className="glass-card-static rounded-3xl p-8 sm:p-10">
          <div className="prose-narrow space-y-6 text-lg leading-relaxed text-muted">
            <p className="text-foreground">
              I&apos;m {site.name} — a UI/UX product designer based remotely and available worldwide. I partner
              with founders, agencies, and product teams who need clear interfaces, fast iteration, and professional
              delivery.
            </p>
            <p>
              My portfolio spans food delivery platforms (Cravely ecosystem), IoT smart home apps, grocery and fashion
              e-commerce, SaaS dashboards, media streaming, landing pages, and brand work — with full screen libraries
              and interactive prototype recordings throughout.
            </p>
            <p>
              Whether you need a full product designed from scratch, a dashboard redesign, mobile app flows, or
              high-converting landing pages — I bring structure, visual craft, and communication that keeps projects
              moving.
            </p>
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
        {[
          {
            title: "How I work",
            body: "Discovery → wireframes → UI design → prototype → handoff. I stay aligned with product and dev throughout.",
          },
          {
            title: "Who I work with",
            body: "Startups, SaaS teams, delivery marketplaces, agencies, and founders building v1 or scaling existing products.",
          },
          {
            title: "Engagement types",
            body: "Fixed-scope projects, monthly design retainers, and full-time remote roles. Available 24/7 for async collaboration across time zones.",
          },
        ].map((item) => (
          <StaggerItem key={item.title}>
            <div className="glass-card card-shine h-full rounded-3xl p-8">
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent" />
              <p className="font-display text-2xl tracking-tight">{item.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-16">
        <div className="glass-card-static rounded-3xl p-8 text-center sm:p-12">
          <SectionLabel>Ready to start?</SectionLabel>
          <p className="font-display mx-auto mt-4 max-w-xl text-3xl tracking-tight">
            Tell me about your product — I&apos;ll reply within 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryLink href="/contact">Contact Zeemal</PrimaryLink>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
