import Link from "next/link";
import { GlowCard } from "@/components/motion/Effects";
import { LazyInView } from "@/components/motion/LazyInView";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ProjectCardImage, SectionLabel } from "@/components/ui/SiteUi";
import { getProjectsByGroup } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata = {
  title: `Work — ${site.name}`,
  description:
    "Portfolio of UI/UX projects: SaaS dashboards, mobile apps, food delivery, IoT, e-commerce, landing pages, and more.",
};

const groupLabels: Record<string, string> = {
  Product: "Product design",
  Marketing: "Marketing & landing pages",
  Brand: "Brand & identity",
  Process: "UX process",
};

export default function WorkPage() {
  const grouped = getProjectsByGroup();
  const groupOrder = ["Product", "Marketing", "Brand", "Process"];
  let projectIndex = 0;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <SectionLabel>Portfolio</SectionLabel>
        <h1 className="font-display mt-4 text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          All work
        </h1>
        <p className="prose-narrow mt-6 text-lg text-muted">
          Complete UI/UX work across SaaS, mobile, web, IoT, e-commerce, and marketing — each with case study context,
          screen galleries, and prototype videos where available.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {groupOrder.map((g) => (
            <span
              key={g}
              className="badge px-4 py-2 font-mono-label text-[10px] uppercase tracking-wider"
            >
              {groupLabels[g]}
            </span>
          ))}
        </div>
      </Reveal>

      {groupOrder.map((group) => {
        const projects = grouped[group];
        if (!projects?.length) return null;

        return (
          <section key={group} className="mt-20">
            <Reveal>
              <SectionLabel>{groupLabels[group]}</SectionLabel>
              <h2 className="font-display mt-2 text-3xl tracking-tight">{group}</h2>
            </Reveal>
            <Stagger className="mt-10 space-y-6">
              {projects.map((project) => {
                const currentIndex = projectIndex++;
                const isPriority = currentIndex === 0;

                return (
                <StaggerItem key={project.slug}>
                  <Link href={`/work/${project.slug}`} prefetch={false} className="block">
                    <GlowCard className="overflow-hidden" interactive={false}>
                      <div className="grid lg:grid-cols-[minmax(340px,46%)_1fr]">
                        <div className="relative">
                          {isPriority ? (
                            <ProjectCardImage
                              src={project.coverImage}
                              alt={`${project.name} cover`}
                              sizes="(max-width: 1024px) 100vw, 46vw"
                              variant="work-row"
                              priority
                            />
                          ) : (
                            <LazyInView className="min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]">
                              <ProjectCardImage
                                src={project.coverImage}
                                alt={`${project.name} cover`}
                                sizes="(max-width: 1024px) 100vw, 46vw"
                                variant="work-row"
                              />
                            </LazyInView>
                          )}
                          {project.featured && (
                            <span className="absolute left-5 top-5 rounded-full border border-success/25 bg-success/10 px-3 py-1 font-mono-label text-[10px] uppercase tracking-wider text-success backdrop-blur-sm">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col justify-center p-8 lg:p-12">
                          <span className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-muted-soft">
                            {project.category}
                          </span>
                          <h3 className="font-display mt-3 text-3xl tracking-tight text-foreground transition-colors group-hover:text-foreground-subtle lg:text-4xl">
                            {project.name}
                          </h3>
                          <p className="mt-3 max-w-lg text-muted">{project.tagline}</p>
                          <p className="mt-4 text-sm text-muted">{project.proves}</p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {project.metrics.slice(0, 3).map((m) => (
                              <span
                                key={m.label}
                                className="badge px-3 py-1 font-mono-label text-[10px] uppercase tracking-wider"
                              >
                                {m.label}
                              </span>
                            ))}
                          </div>
                          <p className="mt-8 flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-foreground">
                            View case study
                            <span className="transition-transform group-hover:translate-x-2">→</span>
                          </p>
                        </div>
                      </div>
                    </GlowCard>
                  </Link>
                </StaggerItem>
                );
              })}
            </Stagger>
          </section>
        );
      })}
    </div>
  );
}
