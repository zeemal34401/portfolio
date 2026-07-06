import { Reveal } from "@/components/motion/Reveal";
import { LiveDot } from "@/components/motion/Effects";
import { PrimaryLink, SectionLabel } from "@/components/ui/SiteUi";
import { site } from "@/lib/site";

export const metadata = {
  title: `Contact — ${site.name}`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="font-display mt-4 text-5xl tracking-tight text-foreground sm:text-6xl">
          Let&apos;s build your next product.
        </h1>
        <p className="prose-narrow mt-6 flex items-center gap-2 text-lg text-muted">
          <LiveDot />
          {site.availability}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <a
            href={`mailto:${site.email}?subject=Project%20Inquiry%20—%20UI%2FUX%20Design`}
            className="glass-card card-shine group block h-full rounded-[18px] p-10 transition-all hover:-translate-y-1"
          >
            <SectionLabel>Email — fastest response</SectionLabel>
            <p className="font-display mt-4 text-2xl tracking-tight text-foreground transition-colors group-hover:text-foreground-subtle sm:text-3xl">
              {site.email}
            </p>
            <p className="mt-4 text-sm text-muted">
              Send a brief about your product, timeline, and budget. I respond to all serious inquiries.
            </p>
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card card-shine group block h-full rounded-[18px] p-10 transition-all hover:-translate-y-1"
          >
            <SectionLabel>LinkedIn</SectionLabel>
            <p className="font-display mt-4 text-2xl tracking-tight text-foreground transition-colors group-hover:text-foreground-subtle sm:text-3xl">
              Zeemal Ejaz
            </p>
            <p className="mt-3 text-sm text-muted">Connect for roles, collaborations, and professional references.</p>
          </a>
        </Reveal>
      </div>

      <Reveal className="mt-12" delay={0.3}>
        <div className="glass-card-static rounded-[18px] p-8 sm:p-10">
          <SectionLabel>What to include</SectionLabel>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "What you're building (app, web, dashboard, landing page)",
              "Current stage (idea, MVP, redesign, scale)",
              "Timeline and engagement type",
              "Links to references or competitors you admire",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted">
                <span className="text-muted-soft">→</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PrimaryLink href={`mailto:${site.email}`}>Send project inquiry</PrimaryLink>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
