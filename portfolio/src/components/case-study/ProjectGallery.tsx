"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyInView } from "@/components/motion/LazyInView";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SiteUi";
import type { GalleryImage, ProjectVideo } from "@/lib/projects";

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const grouped = images.reduce<Record<string, GalleryImage[]>>((acc, img) => {
    const key = img.group ?? "Screens";
    if (!acc[key]) acc[key] = [];
    acc[key].push(img);
    return acc;
  }, {});

  const groups = Object.keys(grouped).sort();

  return (
    <>
      <div className="space-y-14">
        {groups.map((group) => (
          <Reveal key={group}>
            {groups.length > 1 && (
              <h3 className="mb-6 font-mono-label text-[11px] uppercase tracking-[0.18em] text-accent-bright">
                {group}
              </h3>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[group].map((img, imageIndex) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActive(img)}
                  className="glass-card card-shine group overflow-hidden rounded-2xl text-left transition-transform hover:-translate-y-1"
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
                  <p className="border-t border-border px-4 py-3 text-sm text-muted transition-colors group-hover:text-primary">
                    {img.title}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

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
              className="screen-shadow max-h-[90vh] max-w-5xl overflow-auto rounded-2xl border border-border bg-card"
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
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted hover:text-foreground"
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
