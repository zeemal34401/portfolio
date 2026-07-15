"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Soft drifting shapes + slow ambient gradient wash.
 * GPU-friendly transforms only; disabled for reduced motion.
 */
export function AmbientBackground() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 55% at 15% 10%, rgba(209,125,80,0.14), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 15%, rgba(196,155,110,0.2), transparent 50%), radial-gradient(ellipse 60% 45% at 50% 90%, rgba(232,217,197,0.55), transparent 55%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                backgroundPosition: ["0% 0%", "100% 40%", "0% 0%"],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 28, repeat: Infinity, ease: "linear" }
        }
      />

      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#C49B6E]/35 blur-[2px]" />
      <div className="absolute -right-32 -top-24 h-[380px] w-[380px] rounded-full bg-[#C49B6E]/30 blur-[2px]" />

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute left-[8%] top-[35%] h-56 w-56 rounded-full bg-primary/10 blur-3xl"
            animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[12%] top-[55%] h-72 w-72 rounded-full bg-[#C49B6E]/18 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 22, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[8%] left-[40%] h-48 w-48 rounded-full bg-primary/8 blur-3xl"
            animate={{ x: [0, 16, 0], y: [0, -12, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}
