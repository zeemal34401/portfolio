"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyInView } from "@/components/motion/LazyInView";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SiteUi";
import type { GalleryImage, ProjectVideo } from "@/lib/projects";

const GROUP_LABELS: Record<string, string> = {
  customer: "Customer App",
  rider: "Rider App",
  store: "Store App",
  web: "Web",
  app: "Mobile App",
  dashboard: "Web Dashboard",
};

const GROUP_ORDER = ["customer", "rider", "store", "web", "app", "dashboard"];

function groupLabel(key: string) {
  const lower = key.toLowerCase();
  return GROUP_LABELS[lower] ?? key;
}

function sortGroups(groups: string[]) {
  return [...groups].sort((a, b) => {
    const ai = GROUP_ORDER.indexOf(a.toLowerCase());
    const bi = GROUP_ORDER.indexOf(b.toLowerCase());
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

function ImageGrid({
  images,
  onSelect,
}: {
  images: GalleryImage[];
  onSelect: (img: GalleryImage) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, imageIndex) => (
        <button
          key={img.src}
          type="button"
          onClick={() => onSelect(img)}
          className="glass-card card-shine group overflow-hidden rounded-[18px] text-left transition-transform hover:-translate-y-1"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <LazyInView className="absolute inset-0">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading={imageIndex < 3 ? undefined : "lazy"}
                decoding="async"
              />
            </LazyInView>
          </div>
          <p className="border-t border-border px-4 py-3 text-sm text-muted transition-colors group-hover:text-foreground">
            {img.title}
          </p>
        </button>
      ))}
    </div>
  );
}

export function ProjectGallery({
  images,
  groupedCards = false,
}: {
  images: GalleryImage[];
  /** When true and multiple groups exist, show selectable app cards first */
  groupedCards?: boolean;
}) {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const grouped = images.reduce<Record<string, GalleryImage[]>>((acc, img) => {
    const key = img.group ?? "Screens";
    if (!acc[key]) acc[key] = [];
    acc[key].push(img);
    return acc;
  }, {});

  const groups = sortGroups(Object.keys(grouped));
  const useCards = groupedCards && groups.length > 1;

  return (
    <>
      {useCards && !selectedGroup && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => {
            const cover = grouped[group][0];
            const count = grouped[group].length;
            const label = groupLabel(group);

            return (
              <Reveal key={group} className="h-full">
                <button
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  className="glass-card card-shine group flex h-full w-full flex-col overflow-hidden rounded-[18px] text-left transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-surface">
                    {cover && (
                      <Image
                        src={cover.src}
                        alt={label}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 font-display text-xl leading-tight text-white">
                      {label}
                    </p>
                  </div>
                  <div className="mt-auto flex min-h-[52px] items-center justify-between border-t border-border px-4 py-3">
                    <p className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-primary">
                      {count} screens
                    </p>
                    <span className="text-sm text-muted transition-colors group-hover:text-primary">
                      View →
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      )}

      {useCards && selectedGroup && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setSelectedGroup(null)}
              className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-soft transition-colors hover:text-foreground"
            >
              ← All apps
            </button>
            <h3 className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-primary">
              {groupLabel(selectedGroup)}
            </h3>
          </div>
          <ImageGrid images={grouped[selectedGroup]} onSelect={setActive} />
        </div>
      )}

      {!useCards && (
        <div className="space-y-14">
          {groups.map((group) => (
            <Reveal key={group}>
              {groups.length > 1 && (
                <h3 className="mb-6 font-mono-label text-[11px] uppercase tracking-[0.18em] text-muted-soft">
                  {groupLabel(group)}
                </h3>
              )}
              <ImageGrid images={grouped[group]} onSelect={setActive} />
            </Reveal>
          ))}
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="screen-shadow max-h-[90vh] max-w-5xl overflow-auto rounded-[18px] border border-border bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-h-[200px] w-full">
                <Image
                  src={active.src}
                  alt={active.title}
                  width={1600}
                  height={1200}
                  className="h-auto max-h-[80vh] w-full object-contain"
                  decoding="async"
                />
              </div>
              <div className="flex items-center justify-between border-t border-border px-6 py-4">
                <p className="font-medium">{active.title}</p>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-[14px] border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-[rgba(209,125,80,0.35)] hover:text-foreground"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ProjectVideos({ videos }: { videos: ProjectVideo[] }) {
  if (!videos.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <Reveal>
        <SectionLabel>Prototype walkthrough</SectionLabel>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Recorded flows demonstrating navigation, interactions, and end-to-end user journeys.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {videos.map((video) => (
          <Reveal key={video.src}>
            <div className="glass-card-static overflow-hidden rounded-2xl">
              <video
                src={video.src}
                controls
                playsInline
                className="w-full bg-black"
                preload="metadata"
              />
              <p className="border-t border-border px-4 py-3 text-sm font-medium">{video.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
