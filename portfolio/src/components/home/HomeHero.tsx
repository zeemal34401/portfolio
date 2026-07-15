"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { LiveDot } from "@/components/motion/Effects";
import { ScrollIndicator } from "@/components/motion/MotionProviders";
import { GhostLink, PrimaryLink } from "@/components/ui/SiteUi";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut, stagger } from "@/lib/motion";
import { site } from "@/lib/site";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export function HomeHero() {
  const reduceMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const spotlightX = useSpring(useTransform(mouseX, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 30,
  });
  const spotlightY = useSpring(useTransform(mouseY, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 30,
  });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${spotlightX} ${spotlightY}, rgba(209,125,80,0.14), transparent 55%)`;

  const parallaxTitleX = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 60,
    damping: 22,
  });
  const parallaxTitleY = useSpring(useTransform(mouseY, [0, 1], [-6, 6]), {
    stiffness: 60,
    damping: 22,
  });
  const parallaxCardsX = useSpring(useTransform(mouseX, [0, 1], [6, -6]), {
    stiffness: 50,
    damping: 22,
  });
  const parallaxCardsY = useSpring(useTransform(mouseY, [0, 1], [4, -4]), {
    stiffness: 50,
    damping: 22,
  });

  function handleMove(e: MouseEvent<HTMLElement>) {
    if (reduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      onMouseMove={handleMove}
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          style={{ background: spotlight }}
        />
      )}

      <div className="relative z-[1] mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:px-10">
        <motion.div
          className="max-w-4xl"
          style={
            reduceMotion
              ? undefined
              : { x: parallaxTitleX, y: parallaxTitleY }
          }
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: reduceMotion ? {} : { staggerChildren: stagger, delayChildren: 0.05 },
            },
          }}
        >
          <motion.p
            variants={reduceMotion ? undefined : item}
            className="flex items-center gap-3 font-mono-label text-[11px] uppercase tracking-[0.24em] text-[#4a433c]"
          >
            <LiveDot />
            {site.name} · {site.title}
          </motion.p>

          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="font-display mt-6 text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] tracking-tight text-foreground"
          >
            <span className={reduceMotion ? "text-primary" : "text-shimmer"}>UI/UX</span> design
            <span className="mt-2 block text-foreground-subtle">that wins clients & ships products.</span>
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="prose-narrow mt-8 text-lg text-muted sm:text-xl"
          >
            {site.tagline}
          </motion.p>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="badge mt-4 inline-flex items-center gap-2 px-4 py-2 font-mono-label text-[11px] uppercase tracking-[0.12em]"
          >
            <LiveDot />
            {site.availability}
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <PrimaryLink href="/work">View all projects</PrimaryLink>
            <GhostLink href="/contact">Hire me</GhostLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          style={reduceMotion ? undefined : { x: parallaxCardsX, y: parallaxCardsY }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: reduceMotion
                ? {}
                : { staggerChildren: stagger, delayChildren: 0.45 },
            },
          }}
        >
          {site.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              variants={
                reduceMotion
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.55, ease: easeOut },
                      },
                    }
              }
              className="glass-card-static rounded-[18px] p-6"
            >
              <p className="font-display text-xl tracking-tight text-primary">{highlight.label}</p>
              <p className="mt-2 font-mono-label text-[10px] uppercase tracking-[0.18em] text-[#5c534a]">
                {highlight.detail}
              </p>
              <motion.div
                className="mt-4 h-px origin-left bg-primary/35"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6, ease: easeOut }}
              />
            </motion.div>
          ))}
        </motion.div>

        {!reduceMotion && (
          <div className="flex justify-center">
            <ScrollIndicator href="#featured" />
          </div>
        )}
      </div>
    </section>
  );
}
