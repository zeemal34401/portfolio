import Link from "next/link";
import { getSortedProjects } from "@/lib/projects";

export default function Home() {
  const projects = getSortedProjects();

  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-muted">Senior Product Designer</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            I design products that teams ship and users trust.
          </h1>
          <p className="prose-narrow mt-6 text-lg text-muted">
            Five case studies across SaaS, mobile, design systems, AI, and fintech — each with research, exploration,
            production UI, edge states, and measurable outcomes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View selected work
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-card"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Selected work</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight">Five projects. Senior depth.</p>
          </div>
          <Link href="/work" className="hidden text-sm text-muted hover:text-foreground sm:block">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:screen-shadow"
            >
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: project.accent }}>
                {project.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight group-hover:underline">{project.name}</h3>
              <p className="mt-2 text-sm text-muted">{project.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.metrics.slice(0, 2).map((m) => (
                  <span
                    key={m.label}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: project.accentMuted, color: project.accent }}
                  >
                    {m.value} {m.label.toLowerCase()}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">What each project proves</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {projects.map((p) => (
              <div key={p.slug} className="rounded-xl border border-border p-4">
                <p className="font-medium">{p.name}</p>
                <p className="mt-1 text-xs text-muted">{p.proves}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
