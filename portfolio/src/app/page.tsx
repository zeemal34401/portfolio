import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { HomeHero } from "@/components/home/HomeHero";
import { PageLoader } from "@/components/motion/PageLoader";
import { SectionDivider } from "@/components/motion/SectionDivider";
import { GhostLink, MarqueeStrip, PrimaryLink, ProjectCard, SectionLabel } from "@/components/ui/SiteUi";
import { getHomeProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  const homeProjects = getHomeProjects(3);

  return (
    <PageLoader>
      <HomeHero />

      <SectionDivider className="my-2" />
      <MarqueeStrip items={site.expertise} />
      <SectionDivider className="my-2" />

      <section id="featured" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
        />
        <Reveal>
          <div>
            <SectionLabel>Featured work</SectionLabel>
            <h2 className="font-display mt-3 text-4xl tracking-tight text-foreground sm:text-5xl">
              Real products. Real depth.
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              A selection of flagship case studies — SaaS, mobile, IoT, streaming, and marketplace design.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeProjects.map((project, i) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} index={i} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex justify-center">
          <PrimaryLink href="/work">See more</PrimaryLink>
        </Reveal>
      </section>

      <SectionDivider />

      <section className="relative border-t border-border bg-surface py-24 backdrop-blur-xl">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-10 h-52 w-52 rounded-full bg-[#C49B6E]/20 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionLabel>Why hire me</SectionLabel>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight text-foreground sm:text-4xl">
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
                <div className="glass-card card-shine h-full rounded-[18px] p-8">
                  <div className="card-accent-bar mb-4 h-1 w-10 rounded-full" />
                  <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <SectionDivider className="my-2" />

      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-8 left-1/3 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
        />
        <Reveal>
          <div className="glass-card card-shine rounded-[18px] p-10 sm:p-14 lg:flex lg:items-center lg:justify-between">
            <div>
              <SectionLabel>Let&apos;s work together</SectionLabel>
              <p className="font-display mt-4 text-3xl tracking-tight text-foreground sm:text-4xl">
                Building a product or need a design partner?
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
    </PageLoader>
  );
}
