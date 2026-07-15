"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";
import { site } from "@/lib/site";

/** Short elegant intro before homepage content. Runs once per session. */
export function PageLoader({ children }: { children: React.ReactNode }) {
  const reduceMotion = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setReady(true);
      return;
    }

    const seen = sessionStorage.getItem("zeemal-loader");
    if (seen) {
      setReady(true);
      return;
    }

    setShowLoader(true);
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("zeemal-loader", "1");
      setShowLoader(false);
      setReady(true);
    }, 1100);

    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#f1e4d1]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <div className="text-center">
              <motion.p
                className="font-display text-4xl tracking-tight text-foreground sm:text-5xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                {site.shortName}
              </motion.p>
              <motion.div
                className="mx-auto mt-6 h-px w-24 origin-left bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={reduceMotion || !showLoader ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        {children}
      </motion.div>
    </>
  );
}
