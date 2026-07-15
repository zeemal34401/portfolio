"use client";

import { motion } from "framer-motion";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { PageTransition } from "@/components/motion/PageTransition";

export function MotionProviders({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}

export function MotionMain({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <PageTransition>{children}</PageTransition>
    </main>
  );
}

export function ScrollIndicator({ href = "#featured" }: { href?: string }) {
  return (
    <motion.a
      href={href}
      aria-label="Scroll to featured work"
      className="mt-14 inline-flex flex-col items-center gap-2 text-muted-soft"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <span className="font-mono-label text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-[rgba(42,35,28,0.2)] p-1.5">
        <motion.span
          className="block h-1.5 w-1.5 rounded-full bg-primary"
          animate={{ y: [0, 14, 0], opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.a>
  );
}
