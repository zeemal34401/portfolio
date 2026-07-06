"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { type MouseEvent, type ReactNode } from "react";
import { useRef } from "react";

function GlowCardInteractive({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const background = useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, rgba(91, 127, 255, 0.04), transparent 45%)`;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
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
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -8, transition: { duration: 0.35 } }}
      className={`group glass-card card-shine relative rounded-[18px] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-[2]">{children}</div>
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
  if (!interactive) {
    return (
      <div
        className={`group glass-card card-shine relative rounded-[18px] transition-transform duration-300 hover:-translate-y-2 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <GlowCardInteractive className={className}>{children}</GlowCardInteractive>
  );
}

export function AnimatedCounter({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      className="glass-card-static rounded-2xl p-6"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
    >
      <motion.p
        className="font-display text-4xl tracking-tight text-foreground"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {value}
      </motion.p>
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
