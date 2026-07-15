"use client";

import { useReducedMotion } from "framer-motion";

/** Returns true when the user prefers reduced motion (or Framer reports it). */
export function usePrefersReducedMotion() {
  return Boolean(useReducedMotion());
}
