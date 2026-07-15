"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import { type MouseEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut, transitionHover } from "@/lib/motion";

function GlowCardInteractive({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const background = useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, rgba(209, 125, 80, 0.08), transparent 45%)`;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current || reduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set((e.clientY - centerY) / 28);
    rotateY.set((centerX - e.clientX) / 28);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.03,
              boxShadow: "0 22px 48px rgba(42, 35, 28, 0.16)",
              transition: transitionHover,
            }
      }
      className={`group glass-card card-shine relative flex h-full flex-col rounded-[18px] ${className}`}
    >
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div className="relative z-[2] flex h-full flex-col">{children}</div>
    </motion.div>
  );
}

export function GlowCard({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  const reduceMotion = usePrefersReducedMotion();

  if (!interactive) {
    return (
      <motion.div
        className={`group glass-card card-shine relative rounded-[18px] ${className}`}
        whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02, transition: transitionHover }}
      >
        {children}
      </motion.div>
    );
  }

  return <GlowCardInteractive className={className}>{children}</GlowCardInteractive>;
}

function CountUpText({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = usePrefersReducedMotion();
  const match = value.match(/^([\d,.]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : NaN;
  const suffix = match?.[2] ?? "";
  const [display, setDisplay] = useState(reduceMotion || Number.isNaN(target) ? value : "0");

  useEffect(() => {
    if (reduceMotion || Number.isNaN(target)) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const start = performance.now();
    const durationMs = 900;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, suffix, target, value]);

  return (
    <span ref={ref} className="font-display text-4xl tracking-tight text-foreground">
      {display}
    </span>
  );
}

export function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="glass-card-static rounded-2xl p-6"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easeOut }}
      whileHover={reduceMotion ? undefined : { y: -4, transition: transitionHover }}
    >
      <CountUpText value={value} />
      <p className="mt-2 font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted">{label}</p>
    </motion.div>
  );
}

export function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-30" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
    </span>
  );
}
