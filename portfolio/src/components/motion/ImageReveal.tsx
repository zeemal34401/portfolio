"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";

/** Clip-path image reveal when entering the viewport. */
export function ImageReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(12% 12% 12% 12% round 18px)", opacity: 0.5 }}
      animate={
        inView
          ? { clipPath: "inset(0% 0% 0% 0% round 18px)", opacity: 1 }
          : { clipPath: "inset(12% 12% 12% 12% round 18px)", opacity: 0.5 }
      }
      transition={{ duration: 0.85, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
