import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { LiveDot } from "@/components/motion/Effects";
import { GhostLink, MarqueeStrip, PrimaryLink, ProjectCard, SectionLabel } from "@/components/ui/SiteUi";
import { getHomeProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  const homeProjects = getHomeProjects(3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:px-10">
          <div className="max-w-4xl">
            <p className="animate-fade-up flex items-center gap-3 font-mono-label text-[11px] uppercase tracking-[0.24em] text-muted">
              <LiveDot />
              {site.name} · {site.title}
            </p>
            <h1 className="animate-fade-up delay-1 font-display mt-6 text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] tracking-tight">
              <span className="text-gradient">UI/UX design</span>
              <span className="mt-2 block text-muted">that wins clients & ships products.</span>
            </h1>
            <p className="animate-fade-up delay-2 prose-narrow mt-8 text-lg leading-relaxed text-muted sm:text-xl">
              {site.tagline}
            </p>
            <p className="animate-fade-up delay-2 mt-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono-label text-[11px] uppercase tracking-[0.12em] text-accent-bright">
              <LiveDot />
              {site.availability}
            </p>
            <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-4">
              <PrimaryLink href="/work">View all projects</PrimaryLink>
              <GhostLink href="/contact">Hire me</GhostLink>
            </div>
          </div>

          <div className="animate-fade-up delay-4 mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.highlights.map((item) => (
              <div key={item.label} className="glass-card-static rounded-2xl p-6">
                <p className="font-display text-xl tracking-tight text-gradient-accent">{item.label}</p>
                <p className="mt-2 font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip items={site.expertise} />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <div>
            <SectionLabel>Featured work</SectionLabel>
            <h2 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">
              Real products. <span className="text-gradient-accent">Real depth.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              A selection of flagship case studies — SaaS, mobile, IoT, streaming, and marketplace design.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeProjects.map((project, i) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} index={i} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex justify-center">
          <PrimaryLink href="/work">See more</PrimaryLink>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionLabel>Why hire me</SectionLabel>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl">
              One designer. Full product surfaces. Remote-ready.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "End-to-end delivery",
                body: "From wireframes and IA to high-fidelity UI, prototypes, and dev-ready handoff — no gaps in your pipeline.",
              },
              {
                title: "Industry breadth",
                body: "Food delivery ecosystems, IoT, grocery, fashion e-commerce, SaaS, media apps, and marketing pages.",
              },
              {
                title: "Client-first clarity",
                body: "Every screen is structured for users and stakeholders — clear hierarchy, documented flows, professional presentation.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card card-shine h-full rounded-2xl p-8">
                  <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <div className="glass-card card-shine rounded-3xl p-10 sm:p-14 lg:flex lg:items-center lg:justify-between">
            <div>
              <SectionLabel>Let&apos;s work together</SectionLabel>
              <p className="font-display mt-4 text-3xl tracking-tight sm:text-4xl">
                Building a product or need a <span className="text-gradient-accent">design partner?</span>
              </p>
              <p className="mt-4 max-w-lg text-muted">
                I work with founders, agencies, and product teams worldwide — fixed-scope projects or ongoing design support.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <PrimaryLink href="/contact">Get in touch</PrimaryLink>
              <GhostLink href="/work">Browse work</GhostLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
