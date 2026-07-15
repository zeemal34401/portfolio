"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Thin section divider with a slowly drifting terracotta gradient. */
export function SectionDivider({ className = "" }: { className?: string }) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div className={`relative mx-auto h-px w-full max-w-7xl overflow-hidden px-6 lg:px-10 ${className}`} aria-hidden>
      <div className="h-px w-full bg-[rgba(42,35,28,0.1)]" />
      <motion.div
        className="absolute inset-y-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-primary/55 to-transparent"
        animate={
          reduceMotion
            ? undefined
            : { x: ["-20%", "320%"] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "linear" }
        }
      />
    </div>
  );
}
