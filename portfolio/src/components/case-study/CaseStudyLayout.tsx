import Link from "next/link";
import type { Project } from "@/lib/projects";

export function CaseStudyLayout({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  return (
    <article>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link href="/work" className="text-sm text-muted hover:text-foreground">
            ← All work
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider" style={{ color: project.accent }}>
                {project.category}
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
              <p className="prose-narrow mt-4 text-lg text-muted">{project.tagline}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted">Role</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-muted">Timeline</p>
                <p className="font-medium">{project.timeline}</p>
              </div>
              <div>
                <p className="text-muted">Figma file</p>
                <p className="font-medium">{project.figmaFile}</p>
              </div>
              <div>
                <p className="text-muted">Proves</p>
                <p className="font-medium">{project.proves}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-2xl font-semibold tracking-tight" style={{ color: project.accent }}>
                {m.value}
              </p>
              <p className="mt-1 text-sm font-medium">{m.label}</p>
              {m.detail && <p className="mt-1 text-xs text-muted">{m.detail}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Problem</h2>
          <p className="prose-narrow mt-4 text-xl leading-relaxed">{project.problem}</p>
          <p className="prose-narrow mt-4 text-muted">{project.summary}</p>
        </div>
      </section>

      {children}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Personas</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.personas.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-muted">{p.role}</p>
              <p className="mt-3 text-sm leading-relaxed">{p.goal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Process</h2>
          <div className="mt-8 space-y-10">
            {project.process.map((section, i) => (
              <div key={section.title} className="grid gap-4 lg:grid-cols-12">
                <p className="text-sm font-medium text-muted lg:col-span-2">0{i + 1}</p>
                <div className="lg:col-span-10">
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <p className="prose-narrow mt-2 text-muted">{section.body}</p>
                  {section.bullets && (
                    <ul className="mt-3 space-y-1 text-sm text-muted">
                      {section.bullets.map((b) => (
                        <li key={b}>· {b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Outcomes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {project.outcomes.map((o) => (
            <div key={o.title} className="rounded-2xl border border-border p-6">
              <h3 className="font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">What I&apos;d do next</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {project.nextSteps.map((step) => (
              <li key={step} className="text-sm">
                → {step}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
