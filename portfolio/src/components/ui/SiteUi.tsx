"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/motion/Effects";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut, transitionHover } from "@/lib/motion";
import type { ProjectListItem } from "@/lib/projects";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-label text-[10px] uppercase tracking-[0.22em] text-[#4a433c]">{children}</p>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  const reduceMotion = usePrefersReducedMotion();

  const link = (
    <Link
      href={href}
      className="btn-primary group inline-flex items-center gap-3 rounded-[14px] px-6 py-3.5 text-sm font-medium text-white"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );

  if (reduceMotion) {
    return <div className="inline-flex">{link}</div>;
  }

  return <Magnetic className="inline-flex">{link}</Magnetic>;
}

export function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="btn-ghost inline-flex items-center gap-3 rounded-[14px] px-6 py-3.5 text-sm text-foreground transition-transform duration-200 hover:-translate-y-0.5"
    >
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
          className="h-auto w-[min(100%,380px)] max-h-[min(68vh,560px)] object-contain transition-transform duration-500 group-hover:scale-[1.05] sm:w-[min(100%,400px)] lg:w-full lg:max-w-[420px]"
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <ImageReveal
      className={`relative flex items-center justify-center overflow-hidden border-b border-border/60 bg-[var(--image-backdrop)] ${aspectClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[rgba(26,23,20,0.45)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="rounded-[14px] border border-white/30 bg-white/15 px-4 py-2 font-mono-label text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          View Case Study
        </span>
      </div>
    </ImageReveal>
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
    <Link href={`/work/${project.slug}`} prefetch={false} className="block h-full">
      <GlowCard className="flex h-full flex-col overflow-hidden">
        <ProjectCardImage
          src={project.coverImage}
          alt={`${project.name} preview`}
          priority={index === 0}
        />
        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-primary">{project.category}</p>
          <h3 className="font-display mt-2 text-2xl tracking-tight text-[#1a1714] transition-colors group-hover:text-primary">
            {project.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5c534a]">{project.tagline}</p>
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
          <p className="mt-6 flex items-center gap-2 text-sm text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
            View case study
            <span aria-hidden>→</span>
          </p>
        </div>
      </GlowCard>
    </Link>
  );
}

export function MarqueeStrip({ items }: { items: readonly string[] }) {
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-5 backdrop-blur-xl">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-muted">
            {item} <span className="text-muted-soft">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CapabilityCard({ name, proves }: { name: string; proves: string }) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="glass-card card-shine group h-full rounded-[18px] p-6"
      whileHover={reduceMotion ? undefined : { y: -4, transition: transitionHover }}
    >
      <motion.div
        className="card-accent-bar mb-4 h-1 w-8 rounded-full origin-left"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      />
      <p className="font-display text-xl text-[#1a1714]">{name}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#5c534a]">{proves}</p>
    </motion.div>
  );
}
