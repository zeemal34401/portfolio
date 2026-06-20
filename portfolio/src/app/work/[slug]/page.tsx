import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { ProjectPreview } from "@/components/previews/ProjectPreview";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Your Name`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <CaseStudyLayout project={project}>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Design preview</h2>
        <p className="mt-2 text-sm text-muted">
          High-fidelity UI built to Figma spec. Use as reference when recreating frames in{" "}
          <strong>{project.figmaFile}</strong>.
        </p>
        <div className="mt-8">{<ProjectPreview slug={slug} />}</div>
      </section>
    </CaseStudyLayout>
  );
}
