import Image from "next/image";
import Link from "next/link";
import { getSortedProjects } from "@/lib/projects";

export const metadata = {
  title: "Work — Your Name",
  description: "Case studies in SaaS, mobile, design systems, AI, and fintech.",
};

export default function WorkPage() {
  const projects = getSortedProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
      <p className="prose-narrow mt-4 text-lg text-muted">
        End-to-end case studies with problem framing, process, production UI, edge states, and outcomes.
      </p>
      <div className="mt-16 space-y-6">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:screen-shadow"
          >
            <Image
              src={`/images/${project.slug}-cover.svg`}
              alt={`${project.name} cover`}
              width={800}
              height={500}
              className="h-48 w-full object-cover object-left"
            />
            <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-6">
              <span className="text-sm font-medium text-muted">0{index + 1}</span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: project.accent }}>
                  {project.category}
                </p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight group-hover:underline">{project.name}</h2>
                <p className="mt-2 max-w-xl text-sm text-muted">{project.tagline}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {project.tools.slice(0, 3).map((tool) => (
                <span key={tool} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {tool}
                </span>
              ))}
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
