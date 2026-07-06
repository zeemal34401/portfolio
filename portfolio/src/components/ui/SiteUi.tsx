"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/motion/Effects";
import type { ProjectListItem } from "@/lib/projects";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-muted-soft">{children}</p>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="btn-primary group inline-flex items-center gap-3 rounded-[14px] px-6 py-3.5 text-sm font-medium text-white">
      {children}
      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        →
      </motion.span>
    </Link>
  );
}

export function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="btn-ghost inline-flex items-center gap-3 rounded-[14px] px-6 py-3.5 text-sm text-foreground">
      {children}
    </Link>
  );
}

export function ProjectCardImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 33vw",
  aspectClass = "aspect-[4/3]",
  variant = "card",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes?: string;
  aspectClass?: string;
  variant?: "card" | "work-row";
  priority?: boolean;
}) {
  if (variant === "work-row") {
    return (
      <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-b border-border/60 bg-[var(--image-backdrop)] px-2 py-4 sm:min-h-[360px] lg:min-h-[420px] lg:border-b-0 lg:border-r lg:px-3 lg:py-5">
        <Image
          src={src}
          alt={alt}
          width={840}
          height={1400}
          className="h-auto w-[min(100%,380px)] max-h-[min(68vh,560px)] object-contain transition-transform duration-500 group-hover:scale-[1.02] sm:w-[min(100%,400px)] lg:w-full lg:max-w-[420px]"
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border-b border-border/60 bg-[var(--image-backdrop)] ${aspectClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
      />
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: ProjectListItem;
  index?: number;
}) {
  return (
    <Link href={`/work/${project.slug}`} prefetch={false} className="block">
      <GlowCard className="overflow-hidden">
        <ProjectCardImage
          src={project.coverImage}
          alt={`${project.name} preview`}
          priority={index === 0}
        />
        <div className="p-6">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted-soft">{project.category}</p>
          <h3 className="font-display mt-2 text-2xl tracking-tight text-foreground">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.metrics.slice(0, 2).map((m) => (
              <span
                key={m.label}
                className="badge px-3 py-1 font-mono-label text-[10px] uppercase tracking-wider"
              >
                {m.label}
              </span>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted opacity-0 transition-all duration-300 group-hover:text-foreground group-hover:opacity-100">
            View case study
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
              →
            </motion.span>
          </p>
        </div>
      </GlowCard>
    </Link>
  );
}

export function MarqueeStrip({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-5 backdrop-blur-xl">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-muted">
            {item} <span className="text-muted-soft">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CapabilityCard({ name, proves }: { name: string; proves: string }) {
  return (
    <motion.div
      className="glass-card card-shine group h-full rounded-[18px] p-6"
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <div className="card-accent-bar mb-4 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-16" />
      <p className="font-display text-xl text-foreground">{name}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{proves}</p>
    </motion.div>
  );
}
