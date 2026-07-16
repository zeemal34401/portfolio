import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ProjectGallery, ProjectVideos } from "@/components/case-study/ProjectGallery";
import { MetricCards } from "@/components/case-study/MetricCards";
import { SectionLabel } from "@/components/ui/SiteUi";
import type { Project } from "@/lib/projects";

export function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <article>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 0%, rgba(209, 125, 80, 0.1), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Link
            href="/work"
            className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-soft transition-colors hover:text-foreground"
          >
            ← All work
          </Link>
          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>{project.category}</SectionLabel>
              <h1 className="font-display mt-4 text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="prose-narrow mt-6 text-lg text-muted sm:text-xl">{project.tagline}</p>
            </div>
            <div className="glass-card-static grid grid-cols-2 gap-4 rounded-[18px] p-6 lg:col-span-5">
              {[
                { label: "Role", value: project.role },
                { label: "Timeline", value: project.timeline },
                { label: "Deliverables", value: project.deliverables.join(" · ") },
                { label: "Expertise", value: project.proves },
              ].map((item) => (
                <div key={item.label} className={item.label === "Deliverables" ? "col-span-2" : ""}>
                  <p className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-muted-soft">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <MetricCards metrics={project.metrics} />
      </section>

      <section className="border-y border-border bg-surface backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <Reveal>
            <SectionLabel>Challenge</SectionLabel>
            <p className="prose-narrow mt-4 font-display text-2xl leading-snug text-foreground sm:text-3xl">{project.problem}</p>
            <p className="prose-narrow mt-6 text-muted">{project.summary}</p>
          </Reveal>
          <Reveal className="mt-10">
            <SectionLabel>Key highlights</SectionLabel>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="glass-card-static flex items-start gap-3 rounded-2xl px-4 py-3 text-sm text-muted"
                >
                  <span className="text-muted-soft">◆</span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {project.videos && project.videos.length > 0 && <ProjectVideos videos={project.videos} />}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal>
          <SectionLabel>Design gallery</SectionLabel>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            {project.slug === "karto"
              ? "Choose an app surface to explore its screens — click any frame to view full size."
              : project.slug === "handy-hub" || project.slug === "trim-club"
                ? "Choose a flow group to explore its screens — click any frame to view full size."
                : "Screens and assets from this project — click any frame to view full size."}
          </p>
        </Reveal>
        <div className="mt-10">
          <ProjectGallery
            images={project.gallery}
            groupedCards={
              project.slug === "karto" ||
              project.slug === "handy-hub" ||
              project.slug === "trim-club"
            }
          />
        </div>
      </section>

      <section className="border-t border-border bg-surface backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
          </Reveal>
          <div className="mt-10 space-y-12">
            {project.process.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.05}>
                <div className="grid gap-4 border-t border-border pt-10 lg:grid-cols-12">
                  <p className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-muted-soft lg:col-span-2">
                    Step 0{i + 1}
                  </p>
                  <div className="lg:col-span-10">
                    <h3 className="font-display text-2xl tracking-tight text-foreground">{section.title}</h3>
                    <p className="prose-narrow mt-3 text-muted">{section.body}</p>
                    {section.bullets && (
                      <ul className="mt-4 space-y-2 text-sm text-muted">
                        {section.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="text-muted-soft">—</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal>
          <SectionLabel>Outcomes</SectionLabel>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 md:grid-cols-2">
          {project.outcomes.map((o) => (
            <StaggerItem key={o.title}>
              <div className="glass-card card-shine rounded-[18px] p-8">
                <h3 className="font-display text-xl text-foreground">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{o.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-border bg-surface backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Reveal>
            <div className="glass-card-static rounded-[18px] p-8 sm:flex sm:items-center sm:justify-between sm:p-10">
              <div>
                <SectionLabel>Hire me for similar work</SectionLabel>
                <p className="font-display mt-3 text-2xl tracking-tight text-foreground sm:text-3xl">
                  Need a designer for {project.category.toLowerCase()}?
                </p>
                <p className="mt-2 text-sm text-muted">Available remotely · zeemalejaz582@gmail.com</p>
              </div>
              <Link
                href="/contact"
                className="btn-primary mt-6 inline-flex rounded-[14px] px-6 py-3.5 text-sm font-medium text-white sm:mt-0"
              >
                Start a project →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
